---
layout: "post"
title: "Visualizing 10,000 Cores in Condor"
date: 2014-02-14T16:20:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2014/visualizing-10000-cores-in-condor/condormatrix-d4c89b0062.gif"
description: "Our Condor pool at the University of Notre Dame has been slowly growing, in no small part due to our collaboration with the Center for Research Computing, wh…"
toc: false
related_posts: true
tags: [visualizing, condor]
---
Our Condor pool at the University of Notre Dame has been slowly growing, in no small part due to our collaboration with the Center for Research Computing, where it is now scavenging unused cycles from HPC clusters at the CRC.  When the dedicated batch system leaves a node unused, Condor is started on that node and keeps going until the dedicated system wants the node back.  Depending on the time of year, that leaves anywhere between 4K and 10K nodes available in the Condor pool.

We have tried a number of approaches at visualizing this complex system over the years.  Our latest tool, the
  <a href="http://condor.cse.nd.edu/condor_matrix.cgi" target="_blank">
   Condor Matrix Display
  </a>
  started as a summer project by Nick Jaeger, a student from the University of Wisconsin at Eau Claire.  The display shows a colored bar for each slot in the pool, where the width is proportional to the number of cores. 

With a quick glance, you can see how many users are busy and whether they are running "thin" (1 core) or "fat" (many core) jobs.  Sorting by the machine name gives you sense of how each sub-cluster in the pool is used:
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2014/visualizing-10000-cores-in-condor/condormatrix-d4c89b0062.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  While sorting by users gives you a sense of what users are dominating the pool:
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2014/visualizing-10000-cores-in-condor/condormatrixusers-1e1fbcd861.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  The display is always a nice way of viewing the relatively new feature of "dynamic slot" in Condor.  A large multi-core machine is now represented as a single slot with multiple resources.  For example, this bit of the display shows a cluster of 8-core machines where some of the machines are unclaimed (green), some are running 4-core jobs (blue), and some are running 1-core jobs (green):
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2014/visualizing-10000-cores-in-condor/condorselection-f55e4d90f5.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  <span id="goog_991946909">
  </span>
  <br/>
