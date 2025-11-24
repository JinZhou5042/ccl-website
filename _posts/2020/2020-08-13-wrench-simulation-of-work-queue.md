---
layout: "post"
title: "WRENCH Simulation of Work Queue"
date: 2020-08-13T19:20:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2020/wrench-simulation-of-work-queue/1-s2.0-S0167739X19317431-gr6_lrg-27b740d3ef.jpg"
description: "Our colleagues Henri Casanova (U Hawaii) and Rafael Ferreira da Silva (USC), along with their students, have recently published a paper highlighting their wo…"
toc: false
related_posts: true
tags: []
---

<div>
   Our colleagues Henri Casanova (U Hawaii) and Rafael Ferreira da Silva (USC), along with their students, have recently published a paper highlighting their work in the
   <a href="http://wrench-project.org">
    WRENCH
   </a>
   project.  The have constructed a series of simulators have model the behavior of distributed systems, for the purposes of both performance prediction and education.
  </div>
  <div>
  </div>
  <div>
   In their paper "
   <a href="https://www.sciencedirect.com/science/article/pii/S0167739X19317431">
    Developing accurate and scalable simulators of production workflow management systems with WRENCH
   </a>
   " the describe simulators that correspond the the
   <a href="http://pegasus.isi.edu">
    Pegasus
   </a>
   workflow management system and our own
   <a href="http://ccl.cse.nd.edu/software/workqueue">
    Work Queue
   </a>
   distributed execution framework.
  </div>
  <div>
  </div>
  <div>
   Of course, any simulation is an imperfect approximation of a real system, but what's interesting about the WRENCH simulations is that they allow us to verify the basic assumptions and behavior of a software implementation.  In this example, the real system and the simulation show the same overall behavior, except that the real system has a stair-step behavior:
  </div>
  <div>
  </div>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2020/wrench-simulation-of-work-queue/1-s2.0-S0167739X19317431-gr6_lrg-27b740d3ef.jpg" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <div>
  </div>
  <div>
   So, does that mean the simulation is "wrong"?  Not really!  In this case, the software is showing an undesirable behavior that is due either to incorrect logging or possibly a convoy effect.  In short, the simulation helps us to find a bug relative to the "ideal" design.  Nice!
  </div>
  <div>
  </div>
  <a href="https://www.sciencedirect.com/science/article/pii/S0167739X19317431">
   https://www.sciencedirect.com/science/article/pii/S0167739X19317431
  </a>
  <br/>
  <div>
   <div>
   </div>
  </div>
