---
layout: "post"
title: "Genome Assembly Paper in IEEE TPDS"
date: 2013-03-21T15:19:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2013/genome-assembly-paper-in-ieee-tpds/sand-eea2d15d99.gif"
description: "A recent article in IEEE Transactions on Parallel and Distributed Computing describes our work in collaboration with the Notre Dame Bioinformatics Laboratory…"
toc: false
related_posts: true
tags: []
---

<br/>
  A
  <a href="http://www.nd.edu/~ccl/research/papers/assembly-tpds-preprint.pdf">
   recent article
  </a>
  in IEEE Transactions on Parallel and Distributed Computing describes our work in collaboration with the
  <a href="http://www.nd.edu/~biocmp">
   Notre Dame Bioinformatics Laboratory
  </a>
  on
  <a href="http://www.nd.edu/~ccl/software/sand">
   SAND - The Scalable Assembler at Notre Dame
  </a>
  .
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2013/genome-assembly-paper-in-ieee-tpds/sand-eea2d15d99.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  <p>
   In this article, we describe how to refactor the standard Celera genome assembly pipeline into a scalable computation that runs on thousands of distributed cores using the
   <a href="http://www.nd.edu/~ccl/software/workqueue">
    Work Queue
   </a>
   .  By explicitly handling the data dependencies between tasks, we are able to significantly improve runtime over Celera on a standard cluster.  In addition this technique allows the user to break free of the shared filesystem and run on hundreds thousands of nodes drawn from clusters, clouds, and grids.
  </p>
