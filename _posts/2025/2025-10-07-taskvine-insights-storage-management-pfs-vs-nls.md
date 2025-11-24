---
layout: "post"
title: "TaskVine Insights: Storage Management – PFS vs. NLS"
date: 2025-10-07T18:06:00+00:00
author: "Jin Zhou"
image: "/assets/blog/2025/taskvine-insights-storage-management-pfs-vs-nls/hpc-architecture-d69d126308.png"
description: "There are two primary storage layers when running workflows in HPC environments: Parallel File System (PFS): A shared file system accessible to all users in …"
toc: false
related_posts: true
tags: []
---
<p>
   There are two primary storage layers when running workflows in HPC environments:
  </p>
  <ul>
   <li>
    <p>
     <strong>
      Parallel File System (PFS):
     </strong>
     A shared file system accessible to all users in the same cluster, such as VAST, Lustre, BeeGFS, and CephFS.
    </p>
   </li>
   <li>
    <p>
     <strong>
      Node-Local Storage (NLS):
     </strong>
     Each worker’s local disk, accessed directly without relying on the network, usually the temporary directory of the local file system.
    </p>
   </li>
  </ul>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/taskvine-insights-storage-management-pfs-vs-nls/hpc-architecture-d69d126308.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  <div>
  </div>
  <p>
   PFS and NLS each have their own advantages and disadvantages.
  </p>
  <p>
   PFS is convenient because it can be easily accessed by users. It usually has large capacity, often hundreds of terabytes, making it an ideal choice for storing big datasets. It is also stable and reliable, ensuring that data is not lost. However, the main drawback of PFS is that its I/O bandwidth is shared among many users, so it can become saturated when many jobs perform I/O at the same time, turning data access into a major bottleneck for parallel computation.
  </p>
  <p>
   In contrast, NLS provides isolated storage on distributed workers. Each worker has its own local disk and can read and write data directly. This allows the total I/O bandwidth to aggregate across all workers, and data transfer between nodes happens through peer-to-peer communication. This design effectively reduces the I/O contention that occurs on the PFS and helps workflows scale to larger sizes. On the flip side, it also has limitations. Its capacity is small, typically a few hundred gigabytes per node, and it is less reliable, because node failures are unpredictable, and when a node is preempted or goes offline, all data stored on that node is lost, which poses a risk to users.
  </p>
  <p>
   The figure below shows the performance difference between PFS and NLS. We test concurrent reads and writes from 1 to 128 threads and measure their average bandwidth. The PFS test runs directly on the parallel file system, while the NLS test runs on 8 workers, each with 16 cores. It is clear that running parallel I/O on NLS provides much higher average bandwidth. Each thread maintains about 1 GB/s of throughput, whereas the average bandwidth on PFS drops sharply as concurrency increases.
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/taskvine-insights-storage-management-pfs-vs-nls/pfsvsnls-30f9b56b9c.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <div>
  </div>
  <p>
   The key takeaway from this comparison is that running large-scale or data-intensive workflows on HPC systems requires relying on NLS for its high aggregate I/O bandwidth, ensuring that the entire workflow is not slowed down by a deluge of reads and writes.
  </p>
  <p>
   Our team has been studying and improving how to better leverage NLS to accelerate large-scale workflow computations in HPC systems through
   <strong>
    TaskVine
   </strong>
   , a workflow management system we have been developing over the past few years. TaskVine’s key advantage is its ability to use each worker’s NLS to reduce I/O contention on the PFS, enabling faster data access and quicker workflow completion. It also employs a range of data management techniques and strategies to ensure that NLS is used effectively and efficiently, keeping data safe and handling unpredictable node failures with care.
  </p>
  <p>
   This blog series shares how we manage data carefully, address the challenges of using NLS when local disk space is limited and nodes are prone to failures, and achieve massive scalability.
  </p>
  <p>
   Stay tuned for upcoming technical insights, code examples, and updates!
  </p>
