---
layout: "post"
title: "IPDPS Paper: Dynamic Task Shaping ... in High Energy Physics"
date: 2022-02-07T19:45:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2022/ipdps-paper-dynamic-task-shaping-in-high-energy-physics/AVvXsEiBMIVIdUAouEiGXuzl0AUt6o2qnfXXJkpAuOrxEA0LiFWwDbescY3m-906dfede3e.png"
description: "In an upcoming paper to be presented at IPDPS 2022, we discuss our experience with designing and executing high throughput data intensive applications for hi…"
toc: false
related_posts: true
tags: []
---
<p>
   In an upcoming paper to be presented at IPDPS 2022, we discuss our experience with designing and executing high throughput data intensive applications for high energy physics.  The application itself is pretty cool:
   <b>
    TopEFT
   </b>
   is a physics application that uses the
   <b>
    Coffea
   </b>
   framework for parallelization, the
   <b>
    Work Queue
   </b>
   framework for distributed execution, and XRootD for remote data access:
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2022/ipdps-paper-dynamic-task-shaping-in-high-energy-physics/AVvXsEiBMIVIdUAouEiGXuzl0AUt6o2qnfXXJkpAuOrxEA0LiFWwDbescY3m-906dfede3e.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  Configuring such applications to run on large clusters is a substantial end-user problem.  It's not enough to write a
  <b>
   <i>
    correct
   </i>
  </b>
  application: one must also select a wide variety of performance parameters, like the data chunk size, the task length, the amount of memory per task, and so on.  When these are chosen well, everything runs smoothly.  But even one parameter out of tune can result in the application taking orders of magnitude longer than necessary, wasting thousands of resources resources, or simply not running at all.  Here is the end-to-end runtime for a few configurations with slight variations:
  <div>
   This paper describes the techniques that we have developed to make TopEFT a self-configuration application: dynamic task sizing, resource monitoring, modeling of resource consumption, and more.   A particular challenge is that the tasks are not identical, but they do exhibit some rough linearity:
  </div>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2022/ipdps-paper-dynamic-task-shaping-in-high-energy-physics/AVvXsEjyE713bTUi8scVD8udDmt4ff4Y3sqWEDNI-j4SVPjzpzsENMwp6eOn-af244daf9f.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <p>
   With these techniques, we are able to relieve the user of the burden of setting a variety of controls, and allow the system to find its own stable configuration.  Check it out:
  </p>
  <ul style="text-align: left;">
   <li>
    Ben Tovar, Ben Lyons, Kelci Mohrman, Barry Sly-Delgado, Kevin Lannon, and Douglas Thain,
    <a href="http://ccl.cse.nd.edu/research/papers/topEFT-IPDPS-2022.pdf">
     Dynamic Task Shaping for High Throughput Data Analysis Applications in High Energy Physics
    </a>
    , IEEE International Parallel and Distributed Processing Symposium, June, 2022.
   </li>
  </ul>
