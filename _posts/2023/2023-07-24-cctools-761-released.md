---
layout: "post"
title: "CCTools 7.6.1 Released"
date: 2023-07-24T20:06:00+00:00
author: "Douglas Thain"
description: "We are pleased to announce the release of version 7.6.1 of the Cooperative Computing Tools from the University of Notre Dame, including TaskVine, Work Queue,…"
toc: false
related_posts: true
tags: []
---

<p>
   <span>
    We are pleased to announce the release of version 7.6.1
   </span>
   <br/>
   <span>
    of the Cooperative Computing Tools from the University of Notre Dame,
   </span>
   <br/>
   <span>
    including TaskVine, Work Queue, Makeflow, Parrot, Chirp, and other software.
   </span>
  </p>
  <div>
   Docs:
   <a href="https://cctools.readthedocs.io/" style="color: #2962ff; text-decoration: none;">
    https://cctools.readthedocs.io/
   </a>
   <div>
    Download:
    <a href="http://ccl.cse.nd.edu/software/download" style="color: #2962ff; text-decoration: none;">
     http://ccl.cse.nd.edu/software/download
    </a>
    <br/>
    Forum:
    <a href="http://ccl.cse.nd.edu/community/forum" style="color: #2962ff; text-decoration: none;">
     http://ccl.cse.nd.edu/community/forum
    </a>
    This release introduces several bug fixes and minor improvements to the TaskVine workflow executor and Work Queue scheduler.
    <br/>
    TaskVine:
   </div>
   <div>
    - Fix bug in task scheduling that would result in manager hanging. (Colin Thomas)
    <br/>
    - Fix bug in execution of Dask task graphs that would lead to a hang. (Ben Tovar)
    <br/>
    - Fix bug in deployment of serverless LibraryTask. (Thanh Phung)
    <br/>
    - Add option to specify Python package dependencies inline. (Barry Sly-Delgado)
    <br/>
    - Add visualization of task graph and documentation. (Douglas Thain)

Work Queue:

   </div>
   <div>
    - Fix bug in task scheduling that would result in manager hanging. (Colin Thomas)
   </div>
  </div>
