---
layout: "post"
title: "Distant Futures at SC 2023"
date: 2023-11-20T19:56:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2023/distant-futures-at-sc-2023/SC-2023-Poster_-Minimizing-Data-movement-Using-Distant-Futur-b7a8b0d22b.png"
description: 'Grad student Barry Sly-Delgado presented his recent work on " Minimizing Data Movement Using Distant Futures " at the research poster session at Supercomputi…'
toc: false
related_posts: true
tags: []
---

<p>
   Grad student Barry Sly-Delgado presented his recent work on "
   <a href="http://ccl.cse.nd.edu/research/papers/futures-sc-2023.pdf">
    Minimizing Data Movement Using
   </a>
   <a href="http://ccl.cse.nd.edu/research/papers/futures-sc-2023.pdf">
    Distant Futures
   </a>
   " at the research poster session at
   <a href="https://sc23.supercomputing.org">
    Supercomputing 2023
   </a>
   :
  </p>
  <div class="separator" style="clear: both; text-align: center;">
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2023/distant-futures-at-sc-2023/SC-2023-Poster_-Minimizing-Data-movement-Using-Distant-Futur-b7a8b0d22b.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2023/distant-futures-at-sc-2023/IMG_0009-ac1ed121b3.jpg" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
  </div>
  <br/>
  <p>
   <b>
    Futures
   </b>
   are a widely used concept for organizing concurrent computations.  A Future is a variable that represents the result of a function call whose computation may still be pending.  When evaluated, the future blocks (if needed) until the result becomes available.  This allows for the easy construction of highly parallel programs.
  </p>
  <p>
   Barry developed a future based execution model for the TaskVine workflow execution system.  This allows one to submit and chain function calls written in plain Python.  TaskVine then schedules the tasks throughout the cluster, providing a variety of data management services.
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/distant-futures-at-sc-2023/Screenshot-2023-11-20-at-2.44.44-PM-4bef20ea54.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <p>
   However, at very large scales, a natural bottleneck is the return of computed values back to the original manager.  To overcome this, we introduce the notion of
   <b>
    Distant Futures
   </b>
   in which a value is not only pending in time, but potentially left
   <b>
    in the cluster on a remote node.
   </b>
   Tasks requiring this value can then be scheduled to the same node, or to transfer the value within the cluster, rather than bringing it back home.
  </p>
  <p>
   Combining distant futures with asynchronous transfer provides significant benefits for applications that are bottlenecked in data transfer, as our results show:
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/distant-futures-at-sc-2023/Screenshot-2023-11-20-at-2.44.51-PM-13eeb1060f.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <div class="separator" style="clear: both; text-align: left;">
   For more details, check out the poster and short paper here:
  </div>
  <div class="separator" style="clear: both; text-align: left;">
   <ul style="text-align: left;">
    <li>
     <span style="background-color: white; font-family: times; font-size: 16px;">
      Barry Sly-Delgado and Douglas Thain,
     </span>
     <b style="color: navy; font-family: times; font-size: 16px;">
      <a href="http://ccl.cse.nd.edu/research/papers/futures-sc-2023.pdf" style="color: navy;">
       Poster: Minimizing Data Movement Using Distant Futures
      </a>
      <span style="background-color: white;">
      </span>
     </b>
     <i style="font-family: times; font-size: 16px;">
      ACM/IEEE Supercomputing
     </i>
     <span style="background-color: white; font-family: times; font-size: 16px;">
      , November, 2023.
     </span>
    </li>
   </ul>
  </div>
