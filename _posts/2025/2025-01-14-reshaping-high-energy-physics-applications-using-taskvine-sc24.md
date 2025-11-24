---
layout: "post"
title: "Reshaping High Energy Physics Applications Using TaskVine  @ SC24"
date: 2025-01-14T15:47:00+00:00
author: "Barry Sly-Delgado"
image: "/assets/blog/2025/reshaping-high-energy-physics-applications-using-taskvine-sc24/AGV_vUfBotGGPZtiJm1_9ZZOexiiQotBHzeq6YDr3dSAa0itaYiVpev9oGdD-5676230a1f.png"
description: "Barry Sly-Delgado presented our paper titled: \" Reshaping High Energy Physics Applications for Near-Interactive Execution Using TaskVine \" at the 2024 Superc…"
toc: false
related_posts: true
tags: []
---
<p>
   <a href="https://barryslydelgado.github.io/">
    Barry Sly-Delgado
   </a>
   presented our paper titled: "
   <a href="https://dl.acm.org/doi/abs/10.1109/SC41406.2024.00068">
    Reshaping High Energy Physics Applications for Near-Interactive Execution Using TaskVine
   </a>
   " at the 2024 Supercomputing Conference in Atlanta, Georgia. This paper investigates the necessary steps to convert long-running high-throughput high energy physics applications to high concurrency. This included incorporating new functionality within TaskVine.  The paper presents the speedup gained as changes were incorporated to the workflow execution stack for application DV3. We eventually achieve a speedup of 13X.
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/reshaping-high-energy-physics-applications-using-taskvine-sc24/AGV_vUfBotGGPZtiJm1_9ZZOexiiQotBHzeq6YDr3dSAa0itaYiVpev9oGdD-5676230a1f.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <p>
   <i>
    Configurations for each workflow execution stack as improvements were made.
   </i>
  </p>
  <p>
   Starting with stack 1. The first change incorporated was to the storage system where initial data sets are stored. This change showed little improvement, taking 3545s runtime to 3378s. This change is minimal as much of the data handling during application execution is related to intermediate results. Initially, with stack 1 and 2, intermediate data movement  is handled via a centralized manager.
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/reshaping-high-energy-physics-applications-using-taskvine-sc24/AGV_vUcxvZR1cDDBPsTOdgPpYRBHLdpFFDgKLg20PSwCb1kOW7l3IS8bi_sH-0ea29b4cfc.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <p>
   <i>
    data movement during application execution between Work Queue and TaskVine. With TaskVine, the most data exchanged between any two nodes tops off around 4GB (the manger is node 0). With Work Queue the most data transferred is 40GB
   </i>
  </p>
  <p>
   Incorporated in stack 3 is a change of scheduler, TaskVine. Here, TaskVine allows for intermediate results to be stored on node-local storage and transferred between peer compute nodes. This relieves strain on the centralized manager and allows it to schedule tasks more effectively. This change drops the runtime to 730s.
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/reshaping-high-energy-physics-applications-using-taskvine-sc24/AGV_vUdfuvHm_-dbfes9z3aboIiJgZpBMYfb-MEdy4MRNJLvI4N8oU91YW92-69561a769b.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <p>
   <i>
    CDF of task runtimes within the application per execution paradigm. With Function Calls, individual tasks execute faster.
   </i>
  </p>
  <p>
   Our final improvement changes the previous task execution paradigm within TaskVine. Initially "PythonTasks" serialized functions along with arguments and distributed them to compute nodes to execute individual tasks. Under this paradigm, the python interpreter would be invoked for each individual task. Our new task execution paradigm, "Function Calls" stands up a persistent Python process, "Library Task", that contains function definitions that can be invoked via individual function calls. Thus, invocations of the Python interpreter are reduced from per-task to per-compute-node. This change reduces runtime to 272s for a 13X speedup from our initial configuration.
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/reshaping-high-energy-physics-applications-using-taskvine-sc24/AGV_vUc_2dGFfhNMgaI3Zh4KUc330fPALXvI74o0pDWlqXTcMo8MWc945PZO-861906a911.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <p>
   <i>
    Application execution comparison between stack configurations.
   </i>
  </p>
