---
layout: "post"
title: "Intro to TaskVine at GCASR 2023"
date: 2023-04-28T15:04:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2023/intro-to-taskvine-at-gcasr-2023/taskvine-gcasr-1-fc692f027b.png"
description: "Prof. Thain gave the afternoon keynote ( Data Intensive Computing with TaskVine ) at the GCASR Workshop in Chicago on April 24th.  TaskVine is our latest wor…"
toc: false
related_posts: true
tags: []
---
<p>
   Prof. Thain gave the afternoon keynote (
   <a href="https://docs.google.com/presentation/d/1mPfXsc9fzWoJMgGGHoYlg4ypsmXFoaF8GpGo_csbx_w/edit">
    Data Intensive Computing with TaskVine
   </a>
   ) at the
   <a href="https://gcasr.org">
    GCASR Workshop
   </a>
   in Chicago on April 24th.  TaskVine is our latest workflow execution system, just released in March 2023.
  </p>
  <p>
   The key idea of TaskVine is to exploit the local storage already embedded into clusters for use by complex workflows:
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/intro-to-taskvine-at-gcasr-2023/taskvine-gcasr-1-fc692f027b.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  <p>
   To accomplish this, each node runs a general purpose worker process that manages cached data under unique names, and runs each task within a private namespace:
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/intro-to-taskvine-at-gcasr-2023/taskvine-gcasr-2-0a8866b23a.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <div class="separator" style="clear: both; text-align: left;">
   You can write workflows directly to the TaskVine API, declaring files and tasks and connecting them together.  Or, TaskVine can be used as an executor under existing workflow systems:
  </div>
  <br/>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/intro-to-taskvine-at-gcasr-2023/taskvine-gcasr-3-5a95b51a77.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <div>
  </div>
  Learn more and try it out here:
  <a href="http://ccl.cse.nd.edu/software/taskvine">
   http://ccl.cse.nd.edu/software/taskvine
  </a>
  <div>
   <br/>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2023/intro-to-taskvine-at-gcasr-2023/taskvine-gcasr-4-71309025de.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
  </div>
