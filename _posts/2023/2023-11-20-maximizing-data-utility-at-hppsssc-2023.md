---
layout: "post"
title: "Maximizing Data Utility at HPPSS/SC 2023"
date: 2023-11-20T19:43:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2023/maximizing-data-utility-at-hppsssc-2023/Screenshot-2023-11-14-at-1.35.58-PM-1a7354fc19.png"
description: "Thanh Son Phung presented Maximizing Data Utility for HPC Python Workflow Execution at the High Performance Python for Science at Scale workshop at Supercomp…"
toc: false
related_posts: true
tags: []
---
<p>
   Thanh Son Phung presented
   <a href="http://ccl.cse.nd.edu/research/papers/utility-hppss-2023.pdf">
    Maximizing Data Utility for HPC Python Workflow Execution
   </a>
   at the
   <a href="https://hppss.github.io/SC23/">
    High Performance Python for Science at Scale
   </a>
   workshop at Supercomputing 2023.
  </p>
  <p>
   This paper describes how the
   <a href="https://parsl-project.org">
    Parsl
   </a>
   workflow system integrates with the
   <a href="https://ccl.cse.nd.edu/software/taskvine">
    TaskVine
   </a>
   workflow executor in order to run complex Python environments at scale.  Parsl provides a function-oriented programming model, generates a large number of tasks to be executed in a graph, and then passes the tasks down to TaskVine for execution on a cluster:
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/maximizing-data-utility-at-hppsssc-2023/Screenshot-2023-11-14-at-1.35.58-PM-1a7354fc19.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <p>
   A significant challenging in scaling up Python applications is managing the large body of dependencies in the form of Python modules, system libraries, and so forth, that must be loaded every time a process starts.  At very large scales, the cost of pulling all of these resources from a shared parallel filesystem can become a significant bottleneck.  (Typically, parallel filesystems are optimized for the delivery of a few large files, rather than a large number of small files.)
  </p>
  <p>
   TaskVine addresses the problem by exploiting the storage capability of each execution node, which is typically equipped with a local SSD for temporary storage.  The TaskVine workers pull data into local storage, and then share files with each other (at the direction of the manager), resulting in less pressure on the shared filesystem, and overall speedups that improve with scale.
  </p>
  <p>
   This technique was evaluated on a machine learning application requiring a (quite common) 4.4GB of software scaling up from 32 nodes x 16 cores to 256 nodes x 16 cores on a campus HPC cluster.  At small scales, TaskVine provides a modest improvement, but as scale increases, the separation becomes more distinct:
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/maximizing-data-utility-at-hppsssc-2023/Screenshot-2023-11-14-at-1.36.04-PM-108c7f7a04.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <div>
   The distribution of task execution times shows that the TaskVine variants (bottom row) shows that tasks run more consistently with fast individual execution times, once data is distributed across the cluster.
  </div>
  <div>
  </div>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/maximizing-data-utility-at-hppsssc-2023/Screenshot-2023-11-14-at-1.36.13-PM-3507d2de7f.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <p>
   For the full details, see our paper here:
  </p>
  <table style="color: black; font-family: times; font-size: 16px;">
   <tbody>
    <tr>
     <td valign="middle">
      <ul>
       <li>
        Thanh Son Phung, Ben Clifford, Kyle Chard, Douglas Thain,
        <a href="http://ccl.cse.nd.edu/research/papers/utility-hppss-2023.pdf" style="color: navy;">
         <b>
          Maximizing Data Utility for HPC Python Workflow Execution
         </b>
        </a>
        ,
        <i>
         SC23 Workshop: High Performance Python for Science at Scale (HPPSS)
        </i>
        , November, 2023. DOI:
        <a href="http://dx.doi.org/10.1145/3624062.3624136" style="color: navy;">
         10.1145/3624062.3624136
        </a>
       </li>
      </ul>
     </td>
    </tr>
   </tbody>
  </table>
