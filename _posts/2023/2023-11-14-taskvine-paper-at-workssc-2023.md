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

<p>
   Barry Sly-Delgado presented our
   <a href="http://ccl.cse.nd.edu/research/papers/taskvine-works-2023.pdf">
    overview paper on TaskVine
   </a>
   at the
   <a href="https://works-workshop.org">
    Workshop on Workflows in Support of Large Scale Science
   </a>
   at
   <a href="https://sc23.supercomputing.org">
    Supercomputing 2023
   </a>
   in Denver, Colorado.
  </p>
  <p>
   <a href="https://ccl.cse.nd.edu/software/taskvine">
    TaskVine
   </a>
   is a system for executing data intensive workflows on large clusters.  These workflows ma consist of thousands to millions of individual tasks that are connected together in a graph structure like this:
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/taskvine-paper-at-workssc-2023/Screenshot-2023-11-14-at-11.29.32-AM-d79dd81b88.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <div>
   When executing this sort of workflow in a cluster, the movement of data between tasks is often the primary bottleneck, especially if each item must flow back and forth between a shared filesystem.
  </div>
  <div>
  </div>
  <div>
   The key idea of TaskVine is to exploit the local storage available on each node of a cluster to relieve much of the load placed on a shared filesystem.  A running TaskVine system consists of a manager process that coordinates data transfers between workers, like this:
  </div>
  <div>
  </div>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/taskvine-paper-at-workssc-2023/Screenshot-2023-11-14-at-11.29.38-AM-39f5c31834.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <div>
  </div>
  <div>
   A workflow in TaskVine is expressed in in Python by declaring the data assets needed by the workflow as file objects, and then connecting them to the namespace of each task to execute:
  </div>
  <div>
  </div>
  <div>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2023/taskvine-paper-at-workssc-2023/Screenshot-2023-11-14-at-11.29.51-AM-4b506c4dc1.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   <div class="separator" style="clear: both; text-align: center;">
    When the tasks execute on each worker, the various data objects are cached on local storage, and then linked into the execution sandbox of each running task.  This provides the opportunity for data to be shared between tasks without moving data to/from the shared filesystem:
   </div>
   <br/>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2023/taskvine-paper-at-workssc-2023/Screenshot-2023-11-14-at-11.29.55-AM-acac9ed969.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   <div>
   </div>
   <div>
    This paper gives three examples of applications constructed using TaskVine.  TopEFT is a physics data analysis application built using Coffea+TaskVine, Colmena-XTB is a molecular modeling application built using Parsl+TaskVine, and BGD is a model training application built using TaskVine alone.  Each of these codes is able to scale to 400-1000 nodes running on 1000-27000 cores total.
   </div>
   <br/>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2023/taskvine-paper-at-workssc-2023/Screenshot-2023-11-14-at-11.30.23-AM-224428e7e6.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   <p>
    For all the details, please check out our paper here:
   </p>
   <ul style="text-align: left;">
    <li>
     <span style="background-color: white; font-family: times; font-size: 16px;">
      Barry Sly-Delgado, Thanh Son Phung, Colin Thomas, David Simonetti, Andrew Hennessee, Ben Tovar, Douglas Thain,
     </span>
     <a href="http://ccl.cse.nd.edu/research/papers/taskvine-works-2023.pdf" style="color: navy; font-family: times; font-size: 16px;">
      <b>
       TaskVine: Managing In-Cluster Storage for High-Throughput Data Intensive Workflows
      </b>
     </a>
     <span style="background-color: white; font-family: times; font-size: 16px;">
      ,
     </span>
     <i style="font-family: times; font-size: 16px;">
      18th Workshop on Workflows in Support of Large-Scale Science
     </i>
     <span style="background-color: white; font-family: times; font-size: 16px;">
      , November, 2023. DOI:
     </span>
     <a href="http://dx.doi.org/10.1145/3624062.3624277" style="color: navy; font-family: times; font-size: 16px;">
      10.1145/3624062.3624277
     </a>
    </li>
   </ul>
   <div>
   </div>
  </div>
