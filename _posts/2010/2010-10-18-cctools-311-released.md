---
layout: "post"
title: "CCTools 3.1.1 Released"
date: 2010-10-18T09:55:00+00:00
author: "Douglas Thain"
description: "We are pleased to announce the release of version 3.1.1 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, Work Queue, SAND, All-Pairs, a…"
toc: false
related_posts: true
tags: []
---
<br/>
  We are pleased to announce the release of version 3.1.1 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, Work Queue, SAND, All-Pairs, and other software. The software may be downloaded here: http://www.cse.nd.edu/~ccl/software/download.shtml
  <br/>
  <p>
   New features in this release include:
  </p>
  <dir>
   <br/>
   <li>
    Makeflow:  Fixed bugs relating to batch submission to Condor on MacOS, and to non-standard SGE installations.  Improved support for whole directory transfer, and translation of file names when necessary.
    <br/>
   </li>
   <li>
    Work Queue: Added support for workers to discover masters associated with a project via the catalog.  Improved system throughput when running at full capacity.  Added a detailed log file and new API entry points.
    <br/>
   </li>
   <li>
    All-Pairs: Added support for execution-time sampling, concurrency control, and integration with sequence alignment functions.  Documentation improved.
    <br/>
   </li>
   <li>
    Chirp: Improved support for HDFS, including reporting server capacity, more robust initialization, and authentication pass-through.
    <br/>
   </li>
   <li>
    An improved test suite for all components.
    <br/>
   </li>
   <li>
    Lots of minor improvements throughout.
    <br/>
   </li>
  </dir>
  Thanks to all who contributed to this release: Michael Albrecht, Peter Bui, Anthony Canino, Patrick Donnelly, Li Yu.
  <br/>
  <p>
   And, thanks to Donald Barre, Colin Dewey, and Rodney Walker for bug reports.
  </p>
