---
layout: "post"
title: "Predicting Resources of Tasks in Dynamic Workflows with Bucketing Algorithms at IPDPS 2024"
date: 2024-03-04T15:24:00+00:00
author: "Thanh Son Phung"
image: "/assets/blog/2024/predicting-resources-of-tasks/workflow_architecture-e74d1462d6.jpg"
description: "Thanh Son Phung will present Adaptive Task-Oriented Resource Allocation for Large Dynamic Workflows on Opportunistic Resources at the International Parallel …"
toc: false
related_posts: true
tags: []
---

<p>Thanh Son Phung will present <a href="http://ccl.cse.nd.edu/research/papers/adaptive-ipdps-2024.pdf" target="_blank">Adaptive Task-Oriented Resource Allocation for Large Dynamic Workflows on Opportunistic Resources</a> at the <a href="https://www.ipdps.org/ipdps2024/2024-call-for-papers.html" target="_blank">International Parallel and Distributed Processing Symposium</a> 2024.</p>

<p>Non-technical users running dynamic workflows usually have no knowledge of resource (e.g., cores, memory, disk, GPUs) consumption of tasks within a given workflow. However, this omission of information can bring substantial performance degradation as it is important for workflow execution engines to know the exact amount of resources each task takes and make scheduling decisions accordingly.</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/predicting-resources-of-tasks/workflow_architecture-e74d1462d6.jpg" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

In the figure above, an application submits many invocations of two functions: f and g. The invocations are transformed into tasks through many layers and scheduled on worker nodes. Note that the resource specification of each task may be unknown.

<p>Since a manual resource specification for each task is unreliable, an automated solution is required. Such solution needs to be (1) general-purpose (can work with any workflow), (2) prior-free (no prior information is used as workflows may change over each run), (3) online (collect information and run as the workflow runs), and (4) robust (performant on many distributions and unexpected changes). The below figure shows two workflows: ColmenaXTB (top row) and TopEFT (bottom row). Resource types range from core, memory, disk, and execution time from left to right.<br/></p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/predicting-resources-of-tasks/img-9b5621f704.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<p>To predict resources of each task, we first collect resource records of completed tasks, group them into buckets of tasks based on their similarity in resource consumption, and probabilistically choose a bucket to allocate the next task, as shown in the example below.</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/predicting-resources-of-tasks/break_and_choose-1c665dafa2.jpg" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<p>We introduce two bucketing algorithms, namely Greedy Bucketing and Exhaustive Bucketing, which share the same principle of resource prediction and only differ in the way buckets of tasks are computed.</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/predicting-resources-of-tasks/img-5ac407d67b.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<p>We compare the two algorithms with five alternative algorithms on 7 workflows with 3 resource types. Results show that Greedy Bucketing and Exhaustive Bucketing consistently outperform other algorithms by yielding the highest resource efficiency in the majority of cases.</p>

<p>Further details can be found in the paper:</p>

<ul style="text-align: left;"><li>Thanh Son Phung, Douglas Thain, <a href="http://ccl.cse.nd.edu/research/papers/adaptive-ipdps-2024.pdf"><b>Adaptive Task-Oriented Resource Allocation for Large Dynamic Workflows on Opportunistic Resources</b></a>,<i> IEEE International Parallel and Distributed Processing Symposium (IPDPS)</i>, pages 12, May, 2024. <br/> </li></ul>
