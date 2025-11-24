---
layout: "post"
title: "Autoscaling HTC at CLUSTER 2020"
date: 2020-09-22T16:48:00+00:00
author: "Douglas Thain"
description: "Recent CCL graduate Charles Zheng, Ph.D., presented his paper \"Autoscaling High Throughput Workloads on Container Orchestrators\" at the CLUSTER 2020 conferen…"
toc: false
related_posts: true
tags: []
---
<p>
   Recent CCL graduate Charles Zheng, Ph.D., presented his paper "Autoscaling High Throughput Workloads on Container Orchestrators" at the CLUSTER 2020 conference in September 2020.
  </p>
  <p>
   In this paper, we explore the problem of how many machines to acquire for a high-throughput workload of known size when running on a container orchestrator like Kubernetes.
  </p>
  <p>
   Most approaches to autoscaling are designed to scaling up web servers, or other services that respond to some unknown external request.  Generally, the autoscaler looks at some metric such as CPU utilization, and scales resources up or down in order to achieve some target like 90% CPU utilization.
  </p>
  <p>
   However, when running a high throughput workload of, say, one thousand simulation runs, the situation is different.  First off, high CPU utilization is the norm: the simulator is likely to peg the CPU at 100% utilization, and adding or removing nodes isn't going to affect simulation.  And second, the offered load is not a mystery: we are in control of the workload, so we have some idea of the total size of the workload, or at least the number of jobs currently in the queue.
  </p>
  <p>
   To address this, Charles built a High Throughput Autoscaler (HTA) that interfaces the Makeflow workflow system with the Kubernetes container orchestrator:
  </p>
  <p>
   To learn more, check out the paper and
   <a href="https://www.youtube.com/watch?v=95yMGaw7ReU">
    accompanying video
   </a>
   :
  </p>
  <p>
   Chao Zheng, Nathaniel Kremer-Herman, Tim Shaffer, and Douglas Thain,
   <a href="http://ccl.cse.nd.edu/research/papers/autoscaling-cluster-2020.pdf">
    Autoscaling High Throughput Workloads on Container Orchestrators
   </a>
   , IEEE Conference on Cluster Computing, pages 1-10, September, 2020.
  </p>
  <br/>
