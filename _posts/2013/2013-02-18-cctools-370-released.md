---
layout: "post"
title: "CCTools 3.7.0 Released!"
date: 2013-02-18T16:29:00+00:00
author: "Douglas Thain"
description: "The Cooperative Computing Lab is pleased to announce the release of version 3.7.0 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, Work…"
toc: false
related_posts: true
tags: []
---

<br/>
  <p>
   The Cooperative Computing Lab is pleased to announce the release of version 3.7.0 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, WorkQueue, SAND, All-Pairs, and other software.
  </p>
  <p>
   The software may be downloaded
   <a href="http://www.cse.nd.edu/~ccl/software/download">
    here
   </a>
   .
  </p>
  <p>
   This is a minor release which adds numerous features and fixes several bugs:
  </p>
  <ul>
   <br/>
   <li>
    [WorkQueue] It is now possible to specify chunks (pieces) of an input file to be used as input for worker tasks. [Dinesh Rajan]
   </li>
   <br/>
   <li>
    [Chirp] File extended attributes are now supported. [Patrick Donnelly]
   </li>
   <br/>
   <li>
    [Makeflow] New -i switch now outputs pre-execution analysis of Makeflow DAG. [Li Yu]
   </li>
   <br/>
   <li>
    [WorkQueue/Makeflow] Support for submitting tasks to the PBS batch submission platform added. [Dinesh Rajan]
   </li>
   <br/>
   <li>
    [Makeflow] makeflow_log_parser now ignores comments in Makeflow logs. [Andrew Thrasher]
   </li>
   <br/>
   <li>
    [Catalog] New catalog_update which reports information to a catalog server. [Peter Bui, Dinesh Rajan]
   </li>
   <br/>
   <li>
    [WorkQueue] Various minor tweaks made to the API. [Li Yu, Dinesh Rajan]
   </li>
   <br/>
   <li>
    [Catalog/WorkQueue] Support added for querying workers and tasks at run-time. [Douglas Thain]
   </li>
   <br/>
   <li>
    [WorkQueue] Many environment variables removed in favor of option manipulation API. [Li Yu]
   </li>
   <br/>
   <li>
    [Makeflow] Deprecated -t option (capacity tolerance) removed.
   </li>
   <br/>
   <li>
    [WorkQueue] -W (worker status) now has working_dir and current_time fields.
   </li>
   <br/>
   <li>
    [WorkQueue] -T (task status) now reports working_dir, current_time, address_port, submit_to_queue_time, send_input_start_time, execute_cmd_start_time. [Li Yu]
   </li>
   <br/>
   <li>
    [WorkQueue] -Q (queue status) now reports working_dir.
   </li>
   <br/>
   <li>
    [Makeflow] Input file (dependency) renaming supported with new "-&gt;" operator. [Michael Albrecht, Ben Tovar]
   </li>
   <br/>
   <li>
    [WorkQueue] work_queue_pool now supports a new -L option to specify a log file. [Li Yu]
   </li>
   <br/>
   <li>
    [WorkQueue] Tasks are now killed using SIGKILL.
   </li>
   <br/>
   <li>
    [WorkQueue] Protocol based keep-alives added to workers. [Dinesh Rajan]
   </li>
   <br/>
  </ul>
  <p>
   Thanks goes to the contributors for many minor features and bug fixes:
  </p>
  <ul>
   <br/>
   <li>
    Michael Albrecht
   </li>
   <br/>
   <li>
    Peter Bui
   </li>
   <br/>
   <li>
    Patrick Donnelly
   </li>
   <br/>
   <li>
    Brian Du Sell
   </li>
   <br/>
   <li>
    Kyle Mulholland
   </li>
   <br/>
   <li>
    Dinesh Rajan
   </li>
   <br/>
   <li>
    Douglas Thain
   </li>
   <br/>
   <li>
    Andrew Thrasher
   </li>
   <br/>
   <li>
    Ben Tovar
   </li>
   <br/>
   <li>
    Li Yu
   </li>
   <br/>
  </ul>
  <p>
   Please send any feedback to the
   <a href="http://nd.edu/~ccl/software/help.shtml">
    CCTools discussion mailing list
   </a>
   .
  </p>
  <br/>
