---
layout: "post"
title: "CCTools 3.5.2 Released"
date: 2012-07-24T19:14:00+00:00
author: "Douglas Thain"
description: "The Cooperative Computing Lab is pleased to announce the release of version 3.5.2 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, Work…"
toc: false
related_posts: true
tags: []
---
<br/>
  <p>
   The Cooperative Computing Lab is pleased to announce the release of version 3.5.2 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, WorkQueue, SAND, All-Pairs, and other software.
  </p>
  <p>
   This is a bug fix release of version 3.5.1. A shell script executable has been added for Torque worker compatibility.
  </p>
  <p>
   The software may be downloaded
   <a href="http://www.cse.nd.edu/~ccl/software/download">
    here
   </a>
   .
  </p>
  <p>
   Changes:
  </p>
  <ul>
   <br/>
   <li>
    [WQ] Improved some debug messages. [Dinesh Rajan]
   </li>
   <br/>
   <li>
    [AP] Fixed minor bug for dealing with comparison commands that produce no output. [Douglas Thain]
   </li>
   <br/>
   <li>
    [WQ] Fixed a bug where the stdout buffer was not reset at the beginning of every task. [Douglas Thain]
   </li>
   <br/>
   <li>
    [WQ] Documented -C option for work_queue_status. [Patrick Donnelly]
   </li>
   <br/>
   <li>
    [WQ] Fixed a bug where pool configurations with an absolute path would result in a segfault. [Patrick Donnelly]
   </li>
   <br/>
   <li>
    [Parrot] Fixed a bug where Parrot mistakenly thought it correctly wrote to memory using /proc/pid/mem. [Patrick Donnelly]
   </li>
   <br/>
   <li>
    [*] Fixed a bug on OSX where non-blocking connects would result in an infinite loop. [Douglas Thain]
   </li>
   <br/>
   <li>
    [*] Support for SWIG 1.3.29 added. [Peter Bui]
   </li>
   <br/>
   <li>
    [*] Support has been added workers using Torque. [Michael Albrecht, Douglas Thain]
   </li>
   <br/>
   <li>
    [Makeflow] Fixed option parsing. [Patrick Donnelly]
   </li>
   <br/>
  </ul>
