---
layout: "post"
title: "iSURE Project: Visualizing and Right Sizing Work Queue Applications"
date: 2022-08-01T17:43:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2022/isure-project-visualizing-and-right-sizing-work-queue-applications/tasks-lifetime-fd97723d59.png"
description: "Samuel Huang , an exchange student in the iSURE program, recently completed a summer project with the Cooperative Computing Lab at the University of Notre Da…"
toc: false
related_posts: true
tags: []
---

<p>
   <b>
    Samuel Huang
   </b>
   , an exchange student in the iSURE program, recently completed a summer project with the Cooperative Computing Lab at the University of Notre Dame.  He developed tools for visualizing the performance and behavior of distributed Work Queue applications.  These applications can run on thousands of nodes and may have surprisingly complex behavior over time.  Visualization is key to understanding what's going on.
  </p>
  <p>
   For example, this display shows an application consisting of about 30,000 tasks.  Each line segment shows one task from beginning to end, sorted by submission time.  (The color indicates the type of each task: preprocessing, processing, or accumulation.). As this display clearly shows, this application goes through several distinct phases, in which tasks of different types take increasing amounts of time.  In fact, the last few thousands tasks take much longer, showing a classic "long tail" behavior common to distributed applications.
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2022/isure-project-visualizing-and-right-sizing-work-queue-applications/tasks-lifetime-fd97723d59.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <div>
  </div>
  This display is of the same application, but showing the utilization of the worker processes in the system.  Here you can see delays in provisioning.  The first 60-some workers arrive quite quickly, and the manager is able to dispatch (preprocessing) tasks to them quickly.  The next 200-some workers arrive another minute in, and task some time to be fully utilized, due to the requirements of moving software dependencies for each task.  Finally, at the end of execution, some additional workers become available, but go unutilized due to the change in task resource consumption.
  <div>
   <br/>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2022/isure-project-visualizing-and-right-sizing-work-queue-applications/worker-lifetime-46a5bc2aae.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   <br/>
   <p>
    Both these display are now integrated into CCTools in the
    <span style="font-family: courier;">
     work_queue_graph_workers
    </span>
    <span style="font-family: inherit;">
     tool, which generates a dynamic webpage for digging into the detailed data.
    </span>
   </p>
  </div>
