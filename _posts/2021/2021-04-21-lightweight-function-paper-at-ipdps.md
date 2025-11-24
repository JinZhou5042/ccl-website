---
layout: "post"
title: "Lightweight Function Paper at IPDPS"
date: 2021-04-21T15:21:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2021/lightweight-function-paper-at-ipdps/Screen-Shot-2021-04-21-at-11.07.44-AM-1b7542752e.png"
description: "Tim Shaffer, a Ph.D student in the CCL, will be presenting a paper \" Lightweight Function Monitors for Fine-Grained Management in Large Scale Python Applicat…"
toc: false
related_posts: true
tags: []
---
Tim Shaffer, a Ph.D student in the CCL, will be presenting a paper "
  <a href="http://ccl.cse.nd.edu/research/papers/lfm-ipdps21.pdf">
   Lightweight Function Monitors for Fine-Grained Management in Large Scale Python Applications
  </a>
  " at the International Parallel and Distributed Processing Symposium (IPDPS) in May 2021.  This work is the result of a collaboration between our group and the
  <a href="http://parsl-project.org">
   Parsl workflow team
  </a>
  at the University of Chicago, led by Kyle Chard.
  <div>
   <div>
   </div>
   <div>
    Emerging large scale science applications may consist of a large number of dynamic tasks to be run across a large number of workers.  When written in a Python-oriented framework like Parsl or FuncX those tasks are not heavyweight Unix processes, but rather lightweight invocations of individual functions.  Running these functions at large scale presents two distinct challenges:
   </div>
   <div>
   </div>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2021/lightweight-function-paper-at-ipdps/Screen-Shot-2021-04-21-at-11.07.44-AM-1b7542752e.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   <div>
   </div>
   <div>
    1 - The precise software dependencies needed by the function must be made available at each worker node.  These dependencies must be chosen accurately: too few, and the function won't work; too many, and the cost of distribution is too high.  We show a method for determining, distributing, and caching the exact dependencies needed at runtime, without user intervention.
   </div>
   <div>
   </div>
   <div>
    2 - The right number of functions must be "packed" into large worker nodes that may have hundreds of cores and many GB of memory.  Too few, and the system is badly underutilized; too many, and performance will suffer or invocations will crash.  We show an automatic method for monitoring and predicting the resources consumed by categories of functions.  This results in resource allocation that is much more efficient than an unmanaged approach, and is very close to an "oracle" that predicts perfectly.
   </div>
   <div>
   </div>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2021/lightweight-function-paper-at-ipdps/Screen-Shot-2021-04-21-at-11.17.18-AM-ed08da8dc1.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   <div>
   </div>
   The techniques shown in this paper are integrated into the
   <a href="http://parsl-project.org">
    Parsl workflow system
   </a>
   from U-Chicago, and the
   <a href="http://ccl.cse.nd.edu/software/workqueue">
    Work Queue distributed execution framework
   </a>
   from Notre Dame, both of which are open source software supported by the NSF CSSI program.
  </div>
  <div>
   <br/>
   <div>
    Citation:
   </div>
  </div>
  <div>
   <ul style="text-align: left;">
    <li>
     Tim Shaffer, Zhuozhao Li, Ben Tovar, Yadu Babuji, TJ Dasso, Zoe Surma, Kyle Chard, Ian Foster, and Douglas Thain, Lightweight Function Monitors for Fine-Grained Management in Large Scale Python Applications, IEEE International Parallel &amp; Distributed Processing Symposium, May, 2021.
    </li>
   </ul>
  </div>
