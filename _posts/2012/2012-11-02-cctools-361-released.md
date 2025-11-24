---
layout: "post"
title: "CCTools 3.6.1 Released!"
date: 2012-11-02T15:54:00+00:00
author: "Douglas Thain"
description: "The Cooperative Computing Lab is pleased to announce the release of version 3.6.1 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, Work…"
toc: false
related_posts: true
tags: []
---

<br/>
  <p>
   The Cooperative Computing Lab is pleased to announce the release of version 3.6.1 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, WorkQueue, SAND, All-Pairs, and other software.
  </p>
  <p>
   This is a bug fix release of version 3.6.0. No new features were added.
  </p>
  <p>
   The software may be downloaded here:
   <a href="http://www.cse.nd.edu/~ccl/software/download">
    http://www.cse.nd.edu/~ccl/software/download
   </a>
  </p>
  <p>
   Changes:
  </p>
  <ul>
   <br/>
   <li>
    [Work Queue] Fixes bugs that resulted in a cancelled task becoming a zombie. [Dinesh Rajan]
   </li>
   <br/>
   <li>
    [Makeflow] Various corrections to Makeflow manual and html documentation. [Li Yu]
   </li>
   <br/>
   <li>
    [Makeflow] -I and -O options now correctly output file list to stdout. [Li Yu]
   </li>
   <br/>
   <li>
    [*] Added missing debug flag for ldflags in configure. [Douglas Thain]
   </li>
   <br/>
   <li>
    [Work Queue] Now correctly removes directories during cleanup. [Dinesh Rajan]
   </li>
   <br/>
   <li>
    [Chirp] -b is now documented in the man/-h page. [Patrick Donnelly]
   </li>
   <br/>
   <li>
    [Sand] Fixed a wrong error message. [Peter Bui, Li Yu]
   </li>
   <br/>
   <li>
    [Catalog Server] -T option now properly accepts an argument. [Patrick Donnelly]
   </li>
   <br/>
   <li>
    [*] Fixed a bug where the wrong version of perl was used in configure. [Dinesh Rajan]
   </li>
   <br/>
  </ul>
  <p>
   Thanks goes to the contributors for this release: Dinesh Rajan, Patrick Donnelly, Peter Bui, Li Yu, and Douglas Thain.
  </p>
  <p>
   Enjoy!
  </p>
  <br/>
