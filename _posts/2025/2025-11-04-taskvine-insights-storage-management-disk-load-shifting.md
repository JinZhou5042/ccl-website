---
layout: "post"
title: "TaskVine Insights - Storage Management: Disk Load Shifting"
date: 2025-11-04T21:22:00+00:00
author: "Jin Zhou"
image: "/assets/blog/2025/taskvine-insights-storage-management-disk-load-shifting/AVvXsEiveV8MdJVfK1j4h6za-iqicqcpf55Y9irmSrXlHVXW0SApk-UMWqWB-539ade9f97.png"
description: "The University of Notre Dame operates an HTCondor cluster with roughly 20,000 cores for scientific computing. The system consists of heterogeneous machines a…"
toc: false
related_posts: true
tags: []
---
<p>The University of Notre Dame operates an <a href="https://docs.crc.nd.edu/resources/condor.html">HTCondor cluster</a> with roughly 20,000 cores for scientific computing. The system consists of heterogeneous machines accessible to all users and is managed by the <a href="https://crc.nd.edu/">Center for Research Computing</a> (CRC). As newer, more advanced nodes are added, the cluster continues to expand its computational capacity, enabling increasingly sophisticated research. TaskVine primarily runs on this HTCondor environment, connecting hundreds of workers and executing thousands of tasks while optimizing data locality, disk usage, and scheduling efficiency to maximize throughput. The screenshot below shows the cluster’s activity at 12:10 p.m. on November 4, from <a href="http://condor.cse.nd.edu/condor_matrix.cgi?sort=user&amp;show=user&amp;size=10&amp;scale=cores">this website</a>.</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/taskvine-insights-storage-management-disk-load-shifting/AVvXsEiveV8MdJVfK1j4h6za-iqicqcpf55Y9irmSrXlHVXW0SApk-UMWqWB-539ade9f97.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

Leveraging node-local storage (NLS) to cache data locally and reduce I/O bottleneck on the centralized parallel filesystem (PFS) is a core feature of TaskVine. However, in a heterogeneous cluster where nodes differ in hardware and architecture, NLS can be both a strength and a liability. While it provides high I/O bandwidth for intermediate data, heterogeneity often leads to imbalance: some workers may run out of disk space while others remain half empty. This imbalance can cause worker crashes, unnecessary recomputation, and wasted cluster resources.

<p>Disk load skew can arise from several factors. One major cause is cluster heterogeneity. As newer and more powerful compute nodes are added to an HPC cluster, they naturally execute tasks faster and produce more data, leading to uneven disk consumption.</p>

<p>To evaluate how heterogeneity contributes to this imbalance, we executed 20,000 identical tasks involving both computation and disk I/O on 100 workers, each with 16 cores. The figure below shows the number of completed tasks per worker over time. Some workers consistently outperformed others: by the end of the workflow, the fastest worker completed around 350 tasks, while the slowest managed only about 100, which is nearly a fourfold difference. As these faster nodes process tasks more quickly, they accumulate intermediate data at a higher rate and thus face an increased risk of local disk exhaustion.</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/taskvine-insights-storage-management-disk-load-shifting/AVvXsEjC7mwX9xWuzGlkQHPqPl4ck0_cJi9irrGOw6SIW5eTzuqlQIDeYcXV-d05d364b17.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<p>On the other hand, the imbalance can also arise from the algorithm that determines task placement and data storage. To minimize the overhead of transferring data between nodes, a common approach is to schedule a task where its input data already resides. Once the task completes, its child tasks are often dispatched to the same node to exploit data locality. Over time, this strategy can lead to a subset of nodes accumulating a large amount of intermediate data.</p>

<p>To examine this effect, we ran a DAG-structured high-energy physics (HEP) workflow, <span>DV5,</span> consisting of approximately 250,000 tasks on 100 workers, each with 16 cores, and monitored the storage consumption on each node over time. We performed two runs: one prioritized assigning tasks to workers that already had the input files, while the other favored workers with the most available disk space, shown in the following two figures, respectively.</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/taskvine-insights-storage-management-disk-load-shifting/AVvXsEhJbCr8jLzSw4t27OibmqjtoSutpLomJsVUekDUsttGijW92Pt7ecfd-20089ade72.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

The results were somewhat surprising: despite the theoretical expectation that the latter policy should yield a more balanced distribution, both runs showed similarly skewed disk usage patterns. One possible explanation is that task scheduling occurs very rapidly and at high concurrency, so when a task becomes eligible, only a few workers are available. As a result, tasks naturally tend to execute on workers that just completed their parent tasks, maintaining locality even without explicit intent.

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/taskvine-insights-storage-management-disk-load-shifting/AVvXsEigaYjdaUGsEpRI-8IxoxaUP6-hNu05uMG5Nr4mAwtLQA5bTec3UovH-9b0927162c.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
