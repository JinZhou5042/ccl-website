---
layout: "post"
title: "WORKS Paper: Adaptive Resource Allocation for Heterogeneous Tasks in Dynamic Workflows"
date: 2021-11-04T15:10:00+00:00
author: "Thanh Son Phung"
image: "/assets/blog/2021/works-paper-adaptive-resource-allocation-for-heterogeneous-tasks-in-dynamic-work/AVvXsEjKdboGUvriPTKWfqyhT6WV_K3dRxuHhrkC3EtLPio0Zy-UDRmn2Pf2-7e7994ba50.png"
description: "CCL graduate student Thanh Son Phung will be presenting his recent work on managing dynamic tasks at the WORKS workshop at Supercomputing 2021: Dynamic workf…"
toc: false
related_posts: true
tags: []
---
<p>CCL graduate student Thanh Son Phung will be presenting his recent work on managing dynamic tasks at the WORKS workshop at Supercomputing 2021:</p>

<p>Dynamic workflows are emerging as the preferable class of workflow management systems due to their offerings of flexibility, convenience, and performance to users. They allow users to generate tasks automatically and programmatically at run time, abstract away the gory implementation details, and retain the intrinsic benefit of parallelism from underlying distributed systems. The below figure shows the full picture of the transitions from logical task generations to actual task deployments and executions in the Colmena-XTB workflow.</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2021/works-paper-adaptive-resource-allocation-for-heterogeneous-tasks-in-dynamic-work/AVvXsEjKdboGUvriPTKWfqyhT6WV_K3dRxuHhrkC3EtLPio0Zy-UDRmn2Pf2-7e7994ba50.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<p>However, from a systems developer's standpoint, the dynamic nature of task generation poses a significant problem in term of resource management. That is, what quantity of resources should we allocate for a newly generated task? Figure below shows the memory consumption of tasks over time in the Colmena-XTB workflow.</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2021/works-paper-adaptive-resource-allocation-for-heterogeneous-tasks-in-dynamic-work/AVvXsEi4HwuP5AZUUbHl_nSdd3SlClcapBcB0dn1ybxHrNop_p5g4C6JqaLB-6f5b71f006.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<p>As demonstrated, tasks vary significantly in their memory consumption (from 2GBs to 30GBs). A large allocation will decrease the probability of task failure due to under-allocation, but increase the potential waste of resource as tasks may only consume a small portion of it. On the other hand, a small allocation has the opposite effects.</p>

<p>We observe that task allocation can be automated and improved considerably by grouping tasks with similar consumption. A task scheduler can use this information of completed tasks to allocate ready tasks. Figure below visually shows our strategy in task allocation, where each task is first allocated with the value of the blue line, and upon failure due to under-allocation, is allocated with the value of the upper line.<br/></p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2021/works-paper-adaptive-resource-allocation-for-heterogeneous-tasks-in-dynamic-work/AVvXsEjpE3Pm0IqoS6D9QGl3apzrWrriwpib4rtt7S8ohaePseK-LgSIpDCs-724b3f0f1e.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

We evaluated our strategies on seven datasets of resource consumption and noticed the substantial improvement of resource allocation efficiency. In details, the average task consumption efficiency under our allocation strategies can range anywhere from 16.1% to 93.9% with the mean of 62.1%.

<br/>

<span style="background-color: white; font-family: times; font-size: 16px;"><br/>Read the full paper here:</span>

<p><span style="background-color: white; font-family: times; font-size: 16px;"><br/></span><div><span style="background-color: white;">Thanh Son Phung, Logan Ward, Kyle Chard, and Douglas Thain, </span><a href="http://ccl.cse.nd.edu/research/papers/tasks-works-2021.pdf" style="color: navy; font-family: times; font-size: 16px;"><b>Not All Tasks Are Created Equal: Adaptive Resource Allocation for Heterogeneous Tasks in Dynamic Workflows</b></a><span style="background-color: white; font-family: times; font-size: 16px;">, </span><i style="font-family: times; font-size: 16px;">WORKS Workshop on Workflows at Supercomputing</i><span style="background-color: white; font-family: times; font-size: 16px;">, November, 2021.</span><p></p></div></p>
