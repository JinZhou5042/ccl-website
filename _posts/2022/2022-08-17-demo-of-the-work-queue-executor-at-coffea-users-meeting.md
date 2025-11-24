---
layout: "post"
title: "Demo of the Work Queue executor at Coffea User's meeting"
date: 2022-08-17T15:04:00+00:00
author: "Benjamin Tovar"
image: "/assets/blog/2022/demo-of-the-work-queue-executor-at-coffea-users-meeting/img-de7e6e04e8.png"
description: "Last August 15, 2022 we gave a demonstration on how to use Coffea using the Work Queue executor. Coffea is a framework for pulling together all the typical n…"
toc: false
related_posts: true
tags: []
---
<p>
   Last August 15, 2022 we gave a demonstration on how to use
   <a href="https://coffeateam.github.io/coffea/">
    Coffea
   </a>
   using the Work Queue executor. Coffea is a framework for pulling together all the typical needs
of a high-energy collider physics (HEP) experiment analysis using the scientific
python ecosystem. Using Coffea on top of Work Queue, we can automatically manage the resources (such as cores, memory, and disk) to maximize the number of concurrent tasks that the application can run. Further, since Work Queue tasks can be created dynamically once the application is running, we can shape the size of tasks (in this case, the number of collision of particle events) so that they better fit the resources available.
  </p>
  <p>
   For this demo, we also showcased a new status display for Work Queue when used inside a jupyter notebook:
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2022/demo-of-the-work-queue-executor-at-coffea-users-meeting/img-de7e6e04e8.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
