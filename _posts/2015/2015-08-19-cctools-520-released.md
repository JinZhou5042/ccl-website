---
layout: "post"
title: "CCTools 5.2.0 released"
date: 2015-08-19T12:05:00+00:00
author: "Benjamin Tovar"
image: "/assets/blog/2015/cctools-520-released/version-1b6efbede6.png"
description: "The Cooperative Computing Lab is pleased to announce the release of version 5.2.0 of the Cooperative Computing Tools including Parrot, Chirp, Makeflow, WorkQ…"
toc: false
related_posts: true
tags: []
---
<div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2015/cctools-520-released/version-1b6efbede6.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  The Cooperative Computing Lab is pleased to announce the release of version 5.2.0 of the Cooperative Computing Tools including Parrot, Chirp, Makeflow, WorkQueue, SAND, All-Pairs, Weaver, and other software.

The software may be downloaded here:
  <a href="http://www.cse.nd.edu/~ccl/software/download">
   http://www.cse.nd.edu/~ccl/software/download
  </a>
  This minor release considers the following issues from version 5.1.0:
  <ul>
   <li>
    [Chirp]     Fix mkdir python binding. (Ben Tovar)
   </li>
   <li>
    [Chirp]     Adds 'ln' for file links. (Nate Kremer-Herman)
   </li>
   <li>
    [Chirp/Confuga] Kill a job even on failure. (Patrick Donnelly)
   </li>
   <li>
    [Debug]     Fix log rotation with multiple processes. (Patrick Donnelly)
   </li>
   <li>
    [Makeflow]  Better support for Torque and SLURM for XSEDE. (Nick Hazekamp)
   </li>
   <li>
    [Parrot]    Fix bug where cvmfs alien cache access was sequential. (Ben Tovar)
   </li>
   <li>
    [Parrot]    Allow compilation with iRODS 4.1. (Ben Tovar)
   </li>
   <li>
    [WorkQueue] Improvements to statistics when using foremen. (Ben Tovar)
   </li>
   <li>
    [WorkQueue] Fix bug related to exporting environment variables. (Ben Tovar)
   </li>
   <li>
    [WorkQueue] Task sandboxes where not being deleted at workers. (Ben Tovar)
   </li>
  </ul>
  <br/>
  Thanks goes to our contributors:

Patrick Donnelly
  <br/>
  Nathaniel Kremer-Herman
  <br/>
  Nicholas Hazekamp
  <br/>
  Ben Tovar

Please send any feedback to the CCTools discussion mailing list:
  <a href="http://ccl.cse.nd.edu/software/help/">
   http://ccl.cse.nd.edu/software/help/
  </a>
  Enjoy!
