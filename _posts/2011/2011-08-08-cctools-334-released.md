---
layout: "post"
title: "CCTools 3.3.4 Released"
date: 2011-08-08T21:52:00+00:00
author: "Douglas Thain"
description: "We are pleased to announce the release of version 3.3.4 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, Work Queue, SAND, All-Pairs, a…"
toc: false
related_posts: true
tags: []
---
<br/>
  We are pleased to announce the release of version 3.3.4 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, Work Queue, SAND, All-Pairs, and other software.
  <br/>
  <p>
   The software may be downloaded here:
   <br/>
   <a href="http://www.cse.nd.edu/~ccl/software/download">
    http://www.cse.nd.edu/~ccl/software/download
   </a>
  </p>
  <p>
   This release addresses several bugs.  Users of 3.3.3 are advised to upgrade.
  </p>
  <dir>
   <br/>
   <li>
    Makeflow: Fixed a race condition that would occasionally result in a crash after running a local process.
    <br/>
   </li>
   <li>
    Chirp: Modified Unix authentication to better tolerate the use of NFS filesystems.
    <br/>
   </li>
   <li>
    Chirp: Fixed the behavior of the access() system call, and modified the FUSE client to accomodate older servers.
    <br/>
   </li>
   <li>
    All-Pairs: Improved initial runtime estimation.
    <br/>
   </li>
   <li>
    Several minor fixes to accomodate oddities in RHEL 6.
    <br/>
   </li>
  </dir>
  Thanks to the following people who contributed to this release: Patrick Donnelly, Peter Bui, Li Yu, and Pengqui Cheng.
