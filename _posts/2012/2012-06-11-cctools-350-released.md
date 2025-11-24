---
layout: "post"
title: "CCTools 3.5.0 Released"
date: 2012-06-11T17:19:00+00:00
author: "Douglas Thain"
description: "The Cooperative Computing Lab is pleased to announce the release of version 3.5.0 of the Cooperative Computing Tools,  including Parrot, Chirp, Makeflow, Wor…"
toc: false
related_posts: true
tags: []
---
<br/>
  The Cooperative Computing Lab is pleased to announce the release of version 3.5.0 of the Cooperative Computing Tools,  including Parrot, Chirp, Makeflow, WorkQueue, SAND, All-Pairs, and other software.
  <br/>
  <p>
   The software may be downloaded at
   <a href="http://www.nd.edu/~ccl/software/download">
    http://www.nd.edu/~ccl/software/download
   </a>
   .
  </p>
  <p>
   This is a minor release which adds numerous features and fixes several bugs:
  </p>
  <ul>
   <br/>
   <li>
    Batch Job Hadoop module for submitting Hadoop jobs supports Hadoop 0.21.0. [Michael Albrecht, Patrick Donnelly]
    <br/>
   </li>
   <li>
    Improvements to WorkQueue for worker accounting and management. WorkQueue now does master capacity estimation and automatic worker removal. [Li Yu]
    <br/>
   </li>
   <li>
    WorkQueue now supports cancelling of a submitted task. [Dinesh Rajan]
    <br/>
   </li>
   <li>
    WorkQueue workers can now report task execution time. [Li Yu]
    <br/>
   </li>
   <li>
    Improved Batch Job local execution to fork and exec instead of fork and system.
    <br/>
   </li>
   <li>
    Swig detection improved. [Peter Bui]
    <br/>
   </li>
   <li>
    Improved and made consistent time formats for catalog server. [Li Yu]
    <br/>
   </li>
   <li>
    Various corrections to Parrot's directory handling. [Douglas Thain]
    <br/>
   </li>
   <li>
    Corrected numerous memory leaks and software bugs using
    <br/>
    Valgrind/ccpcheck. [Peter Bui]
    <br/>
   </li>
   <li>
    WorkQueue workers now check for low disk space. [Dinesh Rajan]
    <br/>
   </li>
   <li>
    Parrot now supports writable memory mapped files. [Douglas Thain]
    <br/>
   </li>
   <li>
    WorkQueue MOAB support improved. [Peter Bui, Michael Albrecht]
    <br/>
   </li>
   <li>
    WorkQueue now has prototype support for work_queue_pool resource management of multiple masters. work_queue_pool is now capable of automatically requesting resources from the underlying batch system as needed by the masters subject to a constraint file. [Li Yu]
    <br/>
   </li>
   <li>
    WorkQueue now supports FIFO and LIFO task dispatch to workers. [Dinesh Rajan]
    <br/>
   </li>
   <li>
    WorkQueue now has work_queue_version to differentiate versions of the library. [Peter Bui]
    <br/>
   </li>
   <li>
    Chirp client status output is now properly sent to stderr. [Patrick Donnelly]
    <br/>
   </li>
   <li>
    WorkQueue taskid assignment moved to submit from create. Submit now returns this unique id. [Dinesh Rajan]
    <br/>
   </li>
   <li>
    Makeflow/WorkQueue/Chirp now support selecting an arbitrary port in a range using environment variables TCP_LOW_PORT and TCP_HIGH_PORT. [Patrick Donnelly]
    <br/>
   </li>
   <li>
    Improved debug output for non-blocking tcp connections. [Li Yu]
    <br/>
   </li>
   <li>
    WorkQueue task status is now appropriately set to complete when tasks are moved to complete list. [Dinesh Rajan]
    <br/>
   </li>
   <li>
    Parrot now supports iRODS version 3.1. [Douglas Thain]
    <br/>
   </li>
   <li>
    Parrot now allows an identity-boxed process to write to a world-writable file.  (such as /dev/null) [Douglas Thain]
    <br/>
   </li>
   <li>
    WorkQueue workers now have a tunable exponential backoff for reconnecting to masters. [Dinesh Rajan]
    <br/>
   </li>
   <li>
    Updated WorkQueue documentation and examples. [Dinesh Rajan]
    <br/>
   </li>
   <li>
    Various improvements to WorkQueue Python binding. [Peter Bui, Dinesh Rajan]
    <br/>
   </li>
   <li>
    Numerous API/code improvements made to WorkQueue. [Li Yu, Dinesh Rajan, Douglas Thain]
    <br/>
   </li>
   <li>
    Various compatibility improvements for building CCTools. [Douglas Thain, Patrick Donnelly]
    <br/>
   </li>
  </ul>
  Thanks goes to the contributors of other minor/bug fix corrections:
  <br/>
  Michael Albrecht, Roger Barthelson, Dan Bradley, Peter Bui, Rory
  <br/>
  Carmichael, Patrick Donnelly, Michael Hanke, Dinesh Rajan, Nathan
  <br/>
  Regola, Douglas Thain, and Li Yu.
  <br/>
  <p>
   Enjoy!
  </p>
