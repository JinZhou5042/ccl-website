---
layout: "post"
title: "Announcement: CCTools 7.0.4 released"
date: 2018-08-29T16:33:00+00:00
author: "Benjamin Tovar"
description: "The Cooperative Computing Lab is pleased to announce the release of version 7.0.4 of the Cooperative Computing Tools including Parrot, Chirp, JX, Makeflow, W…"
toc: false
related_posts: true
tags: []
---
The Cooperative Computing Lab is pleased to announce the release of version 7.0.4 of the Cooperative Computing Tools including Parrot, Chirp, JX, Makeflow, WorkQueue, Umbrella, Prune, SAND, All-Pairs, Weaver, and other software.

The software may be downloaded here:
  <br/>
  <a href="http://ccl.cse.nd.edu/software/download">
   http://ccl.cse.nd.edu/software/download
  </a>
  This is a minor release with some bug fixes. Among them:
  <ul>
   <li>
    [General] --without-static-libgcc flag to configure script for compilation on Stampede2. (Ben Tovar)
   </li>
   <li>
    [WorkQueue] Consider workers across different factories. (Bo Marchman)
   </li>
   <li>
    [WorkQueue] Input files from tasks that exhausted resources where not being removed from the worker. (Ben Tovar)
   </li>
   <li>
    [Makeflow] Communicate cores, memory, and disk resources to SLURM, SGE, and Torque (Nick Hazekamp)
   </li>
   <li>
    [ResourceMonitor] Fix bug when computing maximum cores. (Ben Tovar)
   </li>
   <li>
    [JX] Improved parsing errors and documentation. (Tim Shaffer, Douglas Thain, Ben Tovar)
   </li>
  </ul>
  <br/>
  Thanks goes to the contributors for many features, bug fixes, and tests:
  <ul>
   <li>
    Nathaniel Kremer-Herman
   </li>
   <li>
    Nicholas Hazekamp
   </li>
   <li>
    Bo Marchman
   </li>
   <li>
    Tim Shaffer
   </li>
   <li>
    Douglas Thain
   </li>
   <li>
    Ben Tovar
   </li>
   <li>
    Kyle Sweeney
   </li>
   <li>
    Chao Zheng
   </li>
  </ul>
  <br/>
  Please send any feedback to the CCTools discussion mailing list:
  <a href="http://ccl.cse.nd.edu/community/forum">
   http://ccl.cse.nd.edu/community/forum
  </a>
  Enjoy!
  <br/>
