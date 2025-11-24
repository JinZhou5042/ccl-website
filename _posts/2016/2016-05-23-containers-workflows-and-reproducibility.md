---
layout: "post"
title: "Containers, Workflows, and Reproducibility"
date: 2016-05-23T18:44:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2016/containers-workflows-and-reproducibility/Slide1-ffbd642a77.png"
description: "The DASPOS project hosted a workshop on Container Strategies for Data and Software Preservation that Promote Open Science at Notre Dame on May 19-20, 2016.  …"
toc: false
related_posts: true
tags: []
---
<a href="https://www.blogger.com/blogger.g?blogID=5169926515402298799" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;">
  </a>
  <a href="https://www.blogger.com/blogger.g?blogID=5169926515402298799" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;">
  </a>
  The
  <a href="http://www.daspos.org/">
   DASPOS
  </a>
  project hosted a workshop on
  <a href="https://daspos.crc.nd.edu/index.php/workshops/container-strategies-for-data-software-preservation-that-promote-open-science">
   Container Strategies for Data and Software Preservation that Promote Open Science
  </a>
  at Notre Dame on May 19-20, 2016.  We had a very interesting collection of researchers and practitioners, all working on problems related to reproducibility, but presenting different approaches and technologies.
  <a href="https://www.blogger.com/blogger.g?blogID=5169926515402298799" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;">
  </a>
  Prof. Thain presented recent work by CCL grad students Haiyan Meng and Peter Ivie on
  <a href="http://www3.nd.edu/~dthain/talks/containers-daspos-2016.pdf">
   Combining Containers and Workflow Systems for Reproducible Execution
  </a>
  .

The Umbrella tool created by Haiyan Meng allows for a simple, compact, archival representation of a computation, taking into account hardware, operating system, software, and data dependencies.  This allows one to accurately perform computational experiments and give each one a DOI that can be shared, downloaded, and executed.
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2016/containers-workflows-and-reproducibility/Slide1-ffbd642a77.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  The PRUNE tool created by Peter Ivie allows one to construct dynamic workflows of connected tasks, each one precisely specified by execution environment.  Provenance and data are tracked precisely, so that the specification of a workflow (and its results) can be exported, imported, and shared with other people.  Think of it like
  <b>
   git
  </b>
  for workflows.
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2016/containers-workflows-and-reproducibility/Slide2-49211c77e9.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
