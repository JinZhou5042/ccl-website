---
layout: "post"
title: "Shepherd Paper at WORKS/SC 2024"
date: 2025-01-07T23:50:00+00:00
author: "Saiful Islam"
image: "/assets/blog/2025/shepherd-paper-at-works/drone-wf1-33799783bd.png"
description: "Grad student Saiful Islam presented our paper on Shepherd at the 19th Workshop on Workflows in Support of Large-Scale Science at Supercomputing 2024 in Atlan…"
toc: false
related_posts: true
tags: []
---

Grad student Saiful Islam presented our paper on Shepherd at the 19th Workshop on Workflows in Support of Large-Scale Science at Supercomputing 2024 in Atlanta, Georgia.

<p>Shepherd is a local workflow manager that enables a fleet of actions and services to functionally behave as a single task. This allows us to seamlessly deploy these local workflows into HPC clusters at large scale. For example, consider a workflow for large-scale distributed drone simulation. This workflow includes steps such as preprocessing, creating a configuration, running simulations, and post-processing. We aim to deploy the "run simulation" step in HPC clusters at large scale. However, each "run simulation" step includes a local workflow that needs to perform specific actions and start services like Gazebo, PX4, and Pose Sender. These services and actions depend on each other’s internal states. For example, when Gazebo reaches the "ready" state, the nth PX4 service is started. Without Shepherd, the workflow becomes as shown in the following figure:<!-- notionvc: acfc6454-a9c8-40eb-924b-784c01a50bb2 --></p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/shepherd-paper-at-works/drone-wf1-33799783bd.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

<p>With Shepherd, the entire "run simulation" step becomes a single task of running Shepherd with a specified configuration. Shepherd starts the required actions and services, manages dependencies, and ensures the graceful shutdown of services when they are no longer needed. This enables complex workflows of actions and services to be seamlessly integrated with a larger distributed workflow manager, as shown in the following figure:</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/shepherd-paper-at-works/drone-wf-3-b96582da99.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<p><p>The paper discusses the architecture and design principles of Shepherd, showcasing its application to large-scale drone simulations and integration testing.</p>
<p>Shepherd uses a YAML-based workflow description to define tasks, dependencies, and execution conditions. It monitors logs and file generation to infer internal states and manage lifecycles effectively. Additionally, it generates three visualizations post-execution for debugging and documentation. For instance, the figure below illustrates a timeline of a 100-drone simulation distributed across 25 nodes, with each Shepherd instance managing 4 drones. A zoomed-in view highlights how components execute at varying times across nodes, which becomes challenging without awareness of service readiness. Shepherd simplifies this with YAML-based configurations and internal state tracking.</p>
<!-- notionvc: 4cbe6f12-f907-48cb-8da5-3b53d41e1824 --></p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/shepherd-paper-at-works/Screenshot-2025-01-07-at-6.27.48-PM-89fc363666.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<p><p>For all the details, please check out our paper here:</p><p></p><ul style="text-align: left;"><li>Md Saiful Islam, Douglas Thain, <a href="https://ccl.cse.nd.edu/research/papers/shepherd-works-2024.pdf"><b>Shepherd: Seamless Integration of Service Workflows into Task-Based Workflows through Log Monitoring</b></a>, 19th Workshop on Workflows in Support of Large-Scale Science at ACM Supercomputing, pages 1-8, November, 2024.</li></ul><p></p></p>

<br/>
