---
layout: "post"
title: "TaskVine System Architecture"
date: 2023-02-22T22:05:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2023/taskvine-system-architecture/Screen-Shot-2023-02-22-at-4.36.23-PM-dc6b161be8.png"
description: "TaskVine is our newest framework for building large scale data intensive dynamic workflows.  This is the second in a series of posts giving a brief introduct…"
toc: false
related_posts: true
tags: []
---
<p><span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">TaskVine is our newest framework for building large scale data intensive dynamic workflows.  This is the second in a series of posts giving a brief introduction to the system.</span></p>

<span id="docs-internal-guid-d97a8f16-7fff-a1eb-8874-b889ec82074d"><span style="font-family: Arial; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">A TaskVine application consists of a </span><span style="font-family: Arial; font-size: 11pt; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">manager</span><span style="font-family: Arial; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"> and multiple </span><span style="font-family: Arial; font-size: 11pt; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">workers</span><span style="font-family: Arial; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"> running in a cluster.  The manager is a Python program (or C if you prefer) that defines the </span><span style="font-family: Arial; font-size: 11pt; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">files</span><span style="font-family: Arial; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"> and </span><span style="font-family: Arial; font-size: 11pt; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">tasks</span><span style="font-family: Arial; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"> making up a workflow, and gives them to the TaskVine library to run.  Both the files and the tasks are distributed to the workers and put together in order to produce the results.  As a general rule, data is left in place on the workers wherever possible, so that it can be consumed by later tasks, rather than bringing it back to the manager.</span></span>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/taskvine-system-architecture/Screen-Shot-2023-02-22-at-4.36.23-PM-dc6b161be8.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/taskvine-system-architecture/Screen-Shot-2023-02-22-at-4.34.19-PM-bc9d5a193b.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/taskvine-system-architecture/m1-b5843413c6.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/taskvine-system-architecture/m2-e7da2b7220.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
