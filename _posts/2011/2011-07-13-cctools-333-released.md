---
layout: "post"
title: "CCTools 3.3.3 Released"
date: 2011-07-13T12:32:00+00:00
author: "Douglas Thain"
description: "We are pleased to announce the release of version 3.3.3 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, Work Queue, SAND, All-Pairs, a…"
toc: false
related_posts: true
tags: []
---
<br/>
  We are pleased to announce the release of version 3.3.3 of
  <br/>
  the Cooperative Computing Tools, including Parrot, Chirp,
  <br/>
  Makeflow, Work Queue, SAND, All-Pairs, and other software.
  <br/>
  The software may be downloaded here:
  <br/>
  <p>
   <a href="http://www.cse.nd.edu/~ccl/software/download">
    http://www.cse.nd.edu/~ccl/software/download
   </a>
  </p>
  <p>
   This release includes the following:
  </p>
  <dir>
   <br/>
   <li>
    Many enhancements to the Chirp-HDFS driver and the Chirp-FUSE module to hide several limitations of HDFS and make the system more easily deployed out of the box.
    <br/>
   </li>
   <li>
    Added three new batch system drivers for Makeflow: Hadoop,Moab, and Work Queue with a shared filesystem.
    <br/>
   </li>
   <li>
    Improved support for XrootD.  The XrootD libraries are now entirely statically linked to Parrot and included in our binary distributions on Linux.
    <br/>
   </li>
   <li>
    Added a timeout and retry to Unix filesystem authentication in the Chirp server, to accomodate propagation delays when used with NFS filesystems.
    <br/>
   </li>
   <li>
    Improved configuration scripts to accomodate a greater variety of Linux distributions.
    <br/>
   </li>
   <li>
    Updated Parrot to handle a variety of new system calls in RHEL 6.
    <br/>
   </li>
   <li>
    Many minor bug fixes and improvements.
    <br/>
   </li>
  </dir>
  Many thanks to the following people who contributed to this release: Patrick Donnelly, Michael Albrecht, Peter Bui, and Dinesh Rajan.
