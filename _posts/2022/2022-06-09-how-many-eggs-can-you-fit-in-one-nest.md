---
layout: "post"
title: "How Many Eggs Can You Fit In One Nest?"
date: 2022-06-09T15:41:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2022/how-many-eggs-can-you-fit-in-one-nest/How-Many-Eggs-6abe66a4b0.png"
description: "Prof. Thain gave a talk at HTCondor Week 2022, giving an overview of some of our recent work on resource management in high throughput scientific workflows. …"
toc: false
related_posts: true
tags: []
---
<p style="text-align: center;">
   Prof. Thain gave a talk at HTCondor Week 2022, giving an overview of some of our recent work on resource management in high throughput scientific workflows.  An HTCondor talk requires a "bird" metaphor, so I proposed the following question:
  </p>
  <p style="text-align: center;">
   <b>
    How many eggs can you fit in one nest?
   </b>
  </p>
  <br/>
  <b>
   <br/>
  </b>
  <p style="text-align: center;">
   A modern cluster is composed of large machines that may have hundreds of cores each, along with memory, disk, and perhaps other co-processors.  While it is possible to write a single application to use the entire node, it is more common to pack multiple applications into a single node, so as to maximize the overall throughput of the system.
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2022/how-many-eggs-can-you-fit-in-one-nest/How-Many-Eggs-6abe66a4b0.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <p style="text-align: center;">
   We design and build frameworks like Work Queue that allow end users to construct high throughput workflows consisting of large numbers of tasks:
  </p>
  <p style="text-align: center;">
   But, how does the end user (or the system) figure out what resources are needed by each task?  The end user might have some guess at the cores and memory needed by a single task, but these values can change dramatically when the parameters of the application are changed.  Here is an example of a computational chemistry application that shows highly variable resource consumption:
  </p>
  <p style="text-align: center;">
   CCL grad student Thanh Son Phung came up with a technique that dynamically divides the tasks into "small" and "large" allocation buckets, allowing us to automatically allocate memory and pack tasks without any input or assistance from the user:
  </p>
  <p style="text-align: center;">
   Here is a different approach that we use in a high energy physics data analysis application, in which a dataset can be split up into tasks of variable size.  Instead of taking the tasks as they are, we can resize them dynamically in order to achieve a specific resource consumption:
  </p>
  <p style="text-align: center;">
   Ben Tovar, a research software engineer in the CCL, devised a technique for modelling the expected resource consumption of each task, and then dynamically adjusting the task size in order to hit a resource target:
  </p>
  <p style="text-align: left;">
   To learn more, read some of our research research papers:
  </p>
  <ul>
   <li>
    <span style="background-color: white; font-family: times; font-size: 16px; text-align: start;">
     Ben Tovar, Ben Lyons, Kelci Mohrman, Barry Sly-Delgado, Kevin Lannon, and Douglas Thain,
    </span>
    <a href="http://ccl.cse.nd.edu/research/papers/topEFT-IPDPS-2022.pdf" style="color: navy; font-family: times; font-size: 16px; text-align: start;">
     <b>
      Dynamic Task Shaping for High Throughput Data Analysis Applications in High Energy Physics
     </b>
    </a>
    <span style="background-color: white; font-family: times; font-size: 16px; text-align: start;">
     ,
    </span>
    <i style="font-family: times; font-size: 16px; text-align: start;">
     IEEE International Parallel and Distributed Processing Symposium
    </i>
    <span style="background-color: white; font-family: times; font-size: 16px; text-align: start;">
     , June, 2022.
    </span>
   </li>
   <li>
    <span style="background-color: white; font-family: times; font-size: 16px; text-align: start;">
     Thanh Son Phung, Logan Ward, Kyle Chard, and Douglas Thain,
    </span>
    <a href="http://ccl.cse.nd.edu/research/papers/tasks-works-2021.pdf" style="color: navy; font-family: times; font-size: 16px; text-align: start;">
     <b>
      Not All Tasks Are Created Equal: Adaptive Resource Allocation for Heterogeneous Tasks in Dynamic Workflows
     </b>
    </a>
    <span style="background-color: white; font-family: times; font-size: 16px; text-align: start;">
     ,
    </span>
    <i style="font-family: times; font-size: 16px; text-align: start;">
     WORKS Workshop on Workflows at Supercomputing
    </i>
    <span style="background-color: white; font-family: times; font-size: 16px; text-align: start;">
     , November, 2021.
    </span>
   </li>
  </ul>
