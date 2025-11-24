---
layout: "post"
title: "CCTools 4.0 Released"
date: 2013-07-29T12:11:00+00:00
author: "Douglas Thain"
description: "The Cooperative Computing Lab is pleased to announce the release of version 4.0 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, WorkQu…"
toc: false
related_posts: true
tags: []
---
The Cooperative Computing Lab is pleased to announce the release of version 4.0 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, WorkQueue, SAND, All-Pairs, and other software.

This is the first release of the 4.0 series, with some major changes:
  <br/>
  <ul>
   <li>
    To support new features on WorkQueue, backwards compatibility of master and workers pre-4.0 is broken.  Specifically, workers from 4.0 cannot connect to masters pre-4.0, and masters from 4.0 will not accept connection from workers pre-4.0. The API did not change, thus unless you want to take advantage of new features, you should not need to modify your code.
   </li>
   <br/>
   <li>
    All code related to WorkQueue has been consolidated to its own library. When linking work queue applications in C, you will need to use: -lwork_queue -ldttools rather than just -ldttools. If you are using the perl or python bindings, no change is necessary.
   </li>
   <br/>
   <li>
    The auto-mode option -a for communicating with the catalog server is being deprecated. It is now implied when a master, or project name (-M, -N) is specified.
   </li>
   <br/>
   <li>
    Most tools now support long options at the command line (e.g., --help).
   </li>
  </ul>
  <strong>
   Highlights:
  </strong>
  <br/>
  <ul>
   <br/>
   <li>
    [WorkQueue] Support for workers hierarchies, with a master-foremen-workers paradigm.  [Michael Albrecht]
   </li>
   <li>
    [WorkQueue] Multi-slot workers. A worker now is able to handle more than one task at a time. [Michael Albrecht]
   </li>
   <li>
    [WorkQueue] Resource reports. A worker reports its resources (disk, memory, and cpu) to the master, and each task in the master can specify a minimum of such resources. [Michael Albrecht, DeVonte Applewhite]
   </li>
   <li>
    [WorkQueue] Authentication between master and workers when using the catalog server [Douglas Thain].
   </li>
   <li>
    [WorkQueue] Python bindings now include most C API. [Dinesh Rajan]
   </li>
   <li>
    [WorkQueue] Several bug fixes and code reorganization. [Dinesh Rajan, Michael Albrecht]
   </li>
   <li>
    [WorkQueue] Policies can be specified to work_queue_pool to submit workers on demand. [Li Yu]
   </li>
   [Makeflow] Support for task categories. A rule can be labeled with a category, and required computational resources (disk, memory, and cpu) can be specified per category. Makeflow then automatically communicates these requirements to work queue or condor. [Ben Tovar]
   <br/>
   <li>
    [Parrot/Chirp] Support for a search system call added. Search allows for finding files in a number of directories with a shell pattern. See parrot_search for more information. [Patrick Donnelly, Brenden Kokoszka]
   </li>
   <li>
    [Parrot] Several bug fixes for cvmfs support. [Douglas Thain, Ben Tovar, Patrick Donnelly]
   </li>
   <li>
    [Monitor] A resource monitor/watchdog for computational resources (e.g. disk, memory, cpu, and io) that can be used standalone, or automatically by Makeflow and Work Queue. [Ben Tovar]
   </li>
   <li>
    [Monitor] A visualizer that builds a webpage to show the resources histograms from the reports of the resource monitor. [Casey Robinson]
   </li>
  </ul>
  Please refer to the doc/ directory in the distribution for the usage of this new features. You can download the software here:
  <br/>
  <a href="http://www.nd.edu/~ccl/software/download.shtml">
   Download
  </a>
  Thanks goes to the contributors for this release: Michael Albrecht, DeVonte Applewhite, Peter Bui, Patrick Donnelly, Brenden Kokoszka, Kyle Mulholland, Francesco Prelz, Dinesh Rajan, Casey Robinson, Peter Sempolinski, Douglas Thain, Ben Tovar, and Li Yu.
