---
layout: "post"
title: "TaskVine Paper at WORKS/SC 2023"
date: 2023-11-14T18:30:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2023/taskvine-paper-at-workssc-2023/Screenshot-2023-11-14-at-11.29.32-AM-d79dd81b88.png"
description: "Barry Sly-Delgado presented our overview paper on TaskVine at the Workshop on Workflows in Support of Large Scale Science at Supercomputing 2023 in Denver, C…"
toc: false
related_posts: true
tags: []
---
<p>Barry Sly-Delgado presented our <a href="http://ccl.cse.nd.edu/research/papers/taskvine-works-2023.pdf">overview paper on TaskVine</a> at the <a href="https://works-workshop.org">Workshop on Workflows in Support of Large Scale Science</a> at <a href="https://sc23.supercomputing.org">Supercomputing 2023</a> in Denver, Colorado.</p>

<p><a href="https://ccl.cse.nd.edu/software/taskvine">TaskVine</a> is a system for executing data intensive workflows on large clusters.  These workflows ma consist of thousands to millions of individual tasks that are connected together in a graph structure like this:</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/taskvine-paper-at-workssc-2023/Screenshot-2023-11-14-at-11.29.32-AM-d79dd81b88.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<p>When executing this sort of workflow in a cluster, the movement of data between tasks is often the primary bottleneck, especially if each item must flow back and forth between a shared filesystem.</p>

<p>The key idea of TaskVine is to exploit the local storage available on each node of a cluster to relieve much of the load placed on a shared filesystem.  A running TaskVine system consists of a manager process that coordinates data transfers between workers, like this:</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/taskvine-paper-at-workssc-2023/Screenshot-2023-11-14-at-11.29.38-AM-39f5c31834.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<p>A workflow in TaskVine is expressed in in Python by declaring the data assets needed by the workflow as file objects, and then connecting them to the namespace of each task to execute:</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/taskvine-paper-at-workssc-2023/Screenshot-2023-11-14-at-11.29.51-AM-4b506c4dc1.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/taskvine-paper-at-workssc-2023/Screenshot-2023-11-14-at-11.29.55-AM-acac9ed969.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/taskvine-paper-at-workssc-2023/Screenshot-2023-11-14-at-11.30.23-AM-224428e7e6.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
