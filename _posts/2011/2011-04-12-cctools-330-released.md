---
layout: "post"
title: "CCTools 3.3.0 Released"
date: 2011-04-12T10:34:00+00:00
author: "Douglas Thain"
description: "We are pleased to announce the release of version 3.3.0 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, Work Queue, SAND, All-Pairs, a…"
toc: false
related_posts: true
tags: []
---

<br/>
  We are pleased to announce the release of version 3.3.0 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, Work Queue, SAND, All-Pairs, and other software. The software may be downloaded here:
  <br/>
  <p>
   <a href="http://www.cse.nd.edu/~ccl/software/download.shtml">
    <br/>
    http://www.cse.nd.edu/~ccl/software/download.shtml
   </a>
  </p>
  <p>
   This release includes the following:
  </p>
  <dir>
   <br/>
   <li>
    Overall source packaging has been cleaned up to be more compatible with packaging standards for Linux distributions.  This release has been updated to build on Windows with Cygwin.  To avoid conflicts with several existing program names in Linux, the following programs have been renamed: parrot is now
    <b>
     parrot_run
    </b>
    , worker is now
    <b>
     work_queue_worker
    </b>
    <br/>
   </li>
   <li>
    Parrot: Added support for the xrootd protocol. Improved support for the HDFS protocol, which can now be detected at run-time. Fixed bugs relating to multi-threaded programs and large numbers of processes.
    <br/>
   </li>
   <li>
    Chirp: Improved support for HDFS as a backend storage device, which can now be detected at runtime.  Chirp is now available as a protocol driver for the ROOT I/O system used in the high energy physics community.
    <br/>
   </li>
   <li>
    Makeflow: Fixed a bug related to change detection on directories.
    <br/>
   </li>
   <li>
    SAND: Fixed integer-size bug that would result in inconsistent results on platforms other than 64-bit Linux.
    <br/>
   </li>
   <li>
    Work Queue: The work_queue_worker now identifies itself to a master by sharing a simple project name.  The projcet name can also be used locate masters via the catalog, allowing masters to migrate across your cluster, cloud, or grid.  work_queue_status lists the vital statistics of all work queue programs that report themselves to the catalog server.  work_queue_pool can maintain a constant pool of workers in your cluster, cloud or grid.  The python module is now available for writing Work Queue programs in python.
    <br/>
   </li>
  </dir>
  Thanks to the following people who contributed to this release: Michael Albrecht, Brian Bockelman, Peter Bui, Patrick Donnelly, Dinesh Rajan, Derek Weitzel, Li Yu
