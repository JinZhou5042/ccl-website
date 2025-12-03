---
layout: "post"
title: "TaskVine Insights - Storage Management: Disk Load Shifting"
date: 2025-11-04T21:22:00+00:00
author: "Jin Zhou"
image: "/assets/blog/2025/taskvine-insights-storage-management-disk-load-shifting/AVvXsEiveV8MdJVfK1j4h6za-iqicqcpf55Y9irmSrXlHVXW0SApk-UMWqWB-539ade9f97.png"
description: "The University of Notre Dame operates an HTCondor cluster with roughly 20,000 cores for scientific computing. The system consists of heterogeneous machines a…"
toc: false
related_posts: true
featured: true
tags: [taskvine, storage-management]
---

<p>
   The University of Notre Dame operates an
   <a href="https://docs.crc.nd.edu/resources/condor.html">
    HTCondor cluster
   </a>
   with roughly 20,000 cores for scientific computing. The system consists of heterogeneous machines accessible to all users and is managed by the
   <a href="https://crc.nd.edu/">
    Center for Research Computing
   </a>
   (CRC). As newer, more advanced nodes are added, the cluster continues to expand its computational capacity, enabling increasingly sophisticated research. TaskVine primarily runs on this HTCondor environment, connecting hundreds of workers and executing thousands of tasks while optimizing data locality, disk usage, and scheduling efficiency to maximize throughput. The screenshot below shows the cluster’s activity at 12:10 p.m. on November 4, from
   <a href="http://condor.cse.nd.edu/condor_matrix.cgi?sort=user&amp;show=user&amp;size=10&amp;scale=cores">
    this website
   </a>
   .
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/taskvine-insights-storage-management-disk-load-shifting/AVvXsEiveV8MdJVfK1j4h6za-iqicqcpf55Y9irmSrXlHVXW0SApk-UMWqWB-539ade9f97.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  Leveraging node-local storage (NLS) to cache data locally and reduce I/O bottleneck on the centralized parallel filesystem (PFS) is a core feature of TaskVine. However, in a heterogeneous cluster where nodes differ in hardware and architecture, NLS can be both a strength and a liability. While it provides high I/O bandwidth for intermediate data, heterogeneity often leads to imbalance: some workers may run out of disk space while others remain half empty. This imbalance can cause worker crashes, unnecessary recomputation, and wasted cluster resources.
  <p>
   Disk load skew can arise from several factors. One major cause is cluster heterogeneity. As newer and more powerful compute nodes are added to an HPC cluster, they naturally execute tasks faster and produce more data, leading to uneven disk consumption.
  </p>
  <p>
   To evaluate how heterogeneity contributes to this imbalance, we executed 20,000 identical tasks involving both computation and disk I/O on 100 workers, each with 16 cores. The figure below shows the number of completed tasks per worker over time. Some workers consistently outperformed others: by the end of the workflow, the fastest worker completed around 350 tasks, while the slowest managed only about 100, which is nearly a fourfold difference. As these faster nodes process tasks more quickly, they accumulate intermediate data at a higher rate and thus face an increased risk of local disk exhaustion.
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/taskvine-insights-storage-management-disk-load-shifting/AVvXsEjC7mwX9xWuzGlkQHPqPl4ck0_cJi9irrGOw6SIW5eTzuqlQIDeYcXV-d05d364b17.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <p>
   On the other hand, the imbalance can also arise from the algorithm that determines task placement and data storage. To minimize the overhead of transferring data between nodes, a common approach is to schedule a task where its input data already resides. Once the task completes, its child tasks are often dispatched to the same node to exploit data locality. Over time, this strategy can lead to a subset of nodes accumulating a large amount of intermediate data.
  </p>
  <p>
   To examine this effect, we ran a DAG-structured high-energy physics (HEP) workflow,
   <span>
    DV5,
   </span>
   consisting of approximately 250,000 tasks on 100 workers, each with 16 cores, and monitored the storage consumption on each node over time. We performed two runs: one prioritized assigning tasks to workers that already had the input files, while the other favored workers with the most available disk space, shown in the following two figures, respectively.
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/taskvine-insights-storage-management-disk-load-shifting/AVvXsEhJbCr8jLzSw4t27OibmqjtoSutpLomJsVUekDUsttGijW92Pt7ecfd-20089ade72.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  The results were somewhat surprising: despite the theoretical expectation that the latter policy should yield a more balanced distribution, both runs showed similarly skewed disk usage patterns. One possible explanation is that task scheduling occurs very rapidly and at high concurrency, so when a task becomes eligible, only a few workers are available. As a result, tasks naturally tend to execute on workers that just completed their parent tasks, maintaining locality even without explicit intent.
  <div>
   <div>
   </div>
   <div>
    So, we must acknowledge that disk load imbalance naturally arises from cluster heterogeneity and therefore must be handled carefully. TaskVine addresses this issue using two complementary techniques:
    <strong>
     Redundant Replica Removal
    </strong>
    and
    <strong>
     Disk Load Shifting
    </strong>
    . The following sections detail each of these approaches.
   </div>
   <div>
   </div>
   <div>
    1.
    <strong>
     Redundant Replica Removal
    </strong>
   </div>
   <div>
    <div>
     Because TaskVine inputs can migrate between workers to satisfy locality, it is quite common for several nodes to end up caching the same temporary file; the effect is most pronounced on the faster machines, which finish more tasks per unit time and accumulate many more staged inputs than their slower peers. To keep this extra baggage from overwhelming NLS, the TaskVine manager intervenes every time a task completes. It walks the task’s input list, and for each temporary file that now has more replicas than the configured target it inspects the workers currently holding that file.
    </div>
    <div>
    </div>
    <div>
     Nothing is deleted until every replica reports the READY state, guaranteeing that an in-flight transfer is not disrupted, and the manager double-checks that none of the workers are still executing tasks that depend on the file. Only after these safety checks does it queue up the redundant replicas for removal, restoring balance without jeopardizing correctness. The number of redundant replicas is calculated as the difference between the current number of replicas and the user-specified target, ensuring that at least one replica always remains available for future use. Workers holding these excess replicas are ranked by their free cache space, prioritizing cleanup on those with more available storage to maintain balanced disk utilization.
    </div>
    <div>
    </div>
    <div>
     2.
     <strong>
      Disk Load Shifting
     </strong>
    </div>
    <div>
     <p>
      In TaskVine, this technique is triggered when a worker reports that a temporary file has been cached. When this happens, the manager’s cache-update handler inspects the newly staged replica and, if shifting is enabled, scans the worker pool to find a lighter host. Only workers that are active, with transfer capability, and do not already hold the file are considered. Candidates that would end up heavier than the source after receiving the file are skipped, leaving the lightest eligible worker to take the replica so that each transfer moves free space toward balance instead of swapping hot spots.
     </p>
     <p>
      The migration reuses TaskVine’s existing
      <span>
       peer-transfer pipeline
      </span>
      . The destination streams the file directly from the source, the replica catalog tracks its state from CREATING to READY, and both workers update their transfer counters for admission control. Once the new replica is confirmed, the original worker releases its redundant copy to the cleanup routine, reclaiming disk space that just served its purpose. The work involved is modest, requiring only a single hash-table scan and one network transfer per staged replica, but the payoff is immediate: fast workers stay ahead of their disk usage, slower nodes lend idle capacity, and heterogeneous clusters keep their node-local storage evenly balanced without reducing throughput.
     </p>
     <p>
      The following figure compares the NLS usage across all workers over time in the DV5 workflow, before and after enabling the two techniques.
     </p>
     <div class="row justify-content-sm-center">
      <div class="col-sm-12">
       {% include figure.liquid path="/assets/blog/2025/taskvine-insights-storage-management-disk-load-shifting/AVvXsEigaYjdaUGsEpRI-8IxoxaUP6-hNu05uMG5Nr4mAwtLQA5bTec3UovH-9b0927162c.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
      </div>
     </div>
     <p>
      After enabling
      <strong>
       Redundant Replica Removal
      </strong>
      and
      <strong>
       Disk Load Shifting
      </strong>
      , the NLS usage among workers became much more balanced. As shown in the bottom figure, storage consumption across nodes stayed within a narrow range under 10 GB, compared to over 20 GB and a significant skew before optimization. This indicates that the two techniques effectively prevented disk hotspots and improved overall resource utilization. In terms of overhead, the pre-optimization run completed in 206.85 seconds, while the optimized run took 311.92 seconds, indicating that the additional data transfers introduced a noticeable slowdown.
     </p>
     <p>
      Both techniques are implemented on the TaskVine manager side in C, but from the user’s perspective they are simple to enable. After creating a manager object through the Python interface, for example:
     </p>
     <p>
      <code>
       m = vine.Manager(port=[9123, 9130])
      </code>
      ,
     </p>
     <p>
      you can activate them individually with:
     </p>
     <p>
      <code>
       m.tune("clean-redundant-replicas", 1)
      </code>
      and
      <code>
       m.tune("shift-disk-load", 1)
      </code>
      .
     </p>
     <p>
      While these modes are effective, they are not always recommended, since the additional data transfers and computations may introduce overhead and reduce overall throughput. However, if your workflow runs on disk-constrained nodes or workers are being evicted due to insufficient storage and you cannot request more disk space, enabling these options can significantly improve stability and performance.
     </p>
    </div>
   </div>
  </div>
