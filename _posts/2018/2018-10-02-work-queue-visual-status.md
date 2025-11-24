---
layout: "post"
title: "Work Queue Visual Status"
date: 2018-10-02T16:42:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2018/work-queue-visual-status/Screen-Shot-2018-10-02-at-12.34.27-PM-9ff37a5f44.png"
description: "Check out the new Work Queue Status page by Nate Kremer-Herman.  This reveals a whole lot of information that was already reported to the global catalog in r…"
toc: false
related_posts: true
tags: []
---
Check out the new
  <a href="http://ccl.cse.nd.edu/software/workqueue/status/" target="_blank">
   Work Queue Status
  </a>
  page by Nate Kremer-Herman.  This reveals a whole lot of information that was already reported to the global catalog in raw JSON, but was previously hard to interpret.  For any WQ application reporting itself to the global catalog (use the -N option)  you get a nice display of workers and tasks running and the total resources consumed across the application:
  <br/>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2018/work-queue-visual-status/Screen-Shot-2018-10-02-at-12.34.27-PM-9ff37a5f44.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2018/work-queue-visual-status/Screen-Shot-2018-10-02-at-12.34.32-PM-17315312b3.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  What's more, a pie chart shows a breakdown of the master is spending its time: sending data to workers, receiving data from workers, and polling (waiting) for workers to report are the main categories.  This tells you at a glance what the bottleneck of the system is.

This WQ master is spending most of its time sending data out to workers, so it's close to the limit of its scalability:
  <br/>
  <div style="text-align: center;">
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2018/work-queue-visual-status/Screen-Shot-2018-10-01-at-9.20.12-AM-48e2caeb22.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
  </div>
  However, this one is spending most of its time polling for results, and only a small fraction sending.  It can likely handle many more workers:
  <br/>
  <div style="text-align: center;">
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2018/work-queue-visual-status/Screen-Shot-2018-10-01-at-9.20.20-AM-cd46527f9d.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
  </div>
  <div>
  </div>
  This one is spending *all* of its time either receiving data from workers (completed tasks) or sending data to workers for new tasks.  It is completely occupied:
  <br/>
  <div style="text-align: center;">
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2018/work-queue-visual-status/Screen-Shot-2018-10-02-at-12.36.20-PM-29355b3adb.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
  </div>
  <div style="text-align: center;">
  </div>
  <br/>
