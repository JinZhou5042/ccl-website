---
layout: "post"
title: "CCTools 3.6.0 Released!"
date: 2012-09-19T08:41:00+00:00
author: "Douglas Thain"
description: "The Cooperative Computing Lab is pleased to announce the release ofversion 3.6.0 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, WorkQ…"
toc: false
related_posts: true
tags: []
---
<br/>
  <p>
   The Cooperative Computing Lab is pleased to announce the release ofversion 3.6.0 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, WorkQueue, SAND, All-Pairs, and other software.
  </p>
  <p>
   The software may be downloaded here:
   <a href="http://www.cse.nd.edu/~ccl/software/download">
    http://www.cse.nd.edu/~ccl/software/download
   </a>
  </p>
  <p>
   This is a minor release which adds numerous features and fixes several bugs:
  </p>
  <ul>
   <br/>
   <li>
    [WQ] Added API for logging functionality. [Christopher Bauschka]
   </li>
   <br/>
   <li>
    [WQ] Python bindings have more complete access to the API available from C. Documentation has also been improved. [Dinesh Rajan]
   </li>
   <br/>
   <li>
    [WQ] No longer manually redirects stdin/stdout/stderr by editing the user provided shell string, it now sets file descriptors directly. User redirections are no longer overridden. [Patrick Donnelly]
   </li>
   <br/>
   <li>
    [WQ, Makeflow] The torque batch submission system is now supported. [Michael Albrecht, Douglas Thain]
   </li>
   <br/>
   <li>
    [Parrot] Now supports extended attributes. [Patrick Donnelly]
   </li>
   <br/>
   <li>
    [Makeflow] Now supports garbage collection of intermediate files. [Peter Bui]
   </li>
   <br/>
   <li>
    [Makeflow] Now supports lexical scoping of Makeflow variables. [Peter Bui]
   </li>
   <br/>
   <li>
    [Makeflow] New MAKEFLOW keyword for recursive Makeflows. [Peter Bui]
   </li>
   <br/>
   <li>
    [WQ] Bindings for WQ now support SWIG versions &gt;= 1.3.29. [Peter Bui]
   </li>
   <br/>
   <li>
    [Parrot] iRODS now supports putfile/getfile operations for much faster file copies. [Douglas Thain]
   </li>
   <br/>
   <li>
    [Parrot] Now includes watchdog support that runs alongside Parrot. [Douglas Thain, Brian Bockelman]
   </li>
   <br/>
   <li>
    [*] CCTools now have been version information from the -v option. Version information is included in debug output with the `-d debug' flag. [Patrick Donnelly]
   </li>
   <br/>
   <li>
    [WQ] work_queue_status output has been cosmetically improved. [Douglas Thain]
   </li>
   <br/>
   <li>
    [WQ] New $WORK_QUEUE_SANDBOX environment variable. [Dinesh Rajan]
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
    Christopher Bauschka
   </li>
   <br/>
   <li>
    Brian Bockelman
   </li>
   <br/>
   <li>
    Dan Bradley
   </li>
   <br/>
   <li>
    Peter Bui
   </li>
   <br/>
   <li>
    Iheanyi Ekechukwu
   </li>
   <br/>
   <li>
    Patrick Donnelly
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
  </ul>
  <p>
   Please send any feedback to the
   <a href="http://nd.edu/~ccl/software/help.shtml">
    CCTools discussion mailing list
   </a>
   . Enjoy!
  </p>
  <br/>
