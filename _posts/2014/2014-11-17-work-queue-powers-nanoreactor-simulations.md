---
layout: "post"
title: "Work Queue Powers Nanoreactor Simulations"
date: 2014-11-17T20:18:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2014/work-queue-powers-nanoreactor-simulations/nchem.2099-f1-220e366ba2.jpg"
description: "Lee-Ping Wang at Stanford University, recently published a paper in Nature Chemistry describing his work in fundamental molecular dynamics. The paper demonst…"
toc: false
related_posts: true
tags: [work queue, highlights, molecular dynamics]
categories: [highlights]
---

<div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2014/work-queue-powers-nanoreactor-simulations/nchem.2099-f1-220e366ba2.jpg" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  Lee-Ping Wang at Stanford University, recently published
  <a href="http://www.nature.com/nchem/journal/v6/n12/full/nchem.2099.html">
   a paper in Nature Chemistry
  </a>
  describing his work in fundamental molecular dynamics.

The paper demonstrates the "nanoreactor" technique in which simple molecules are simulated over a long time scale to observe their reaction paths into more complex molecules.  For example, the picture below shows 39 Acetylene molecules merging into a variety of hydrocarbons over the course of 500ps simulated time.  This technique can be used to computationally predict reaction networks in historical or inaccessible environments, such as the early Earth or the upper atmosphere.

To compute the final reaction network for this figure, the team used the
<a href="http://ccl.cse.nd.edu/software/workqueue">
Work Queue
</a>
framework to harness over 300K node-hours of CPU time on the Blue Waters supercomputer at NCSA.
