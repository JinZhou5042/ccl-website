---
layout: "post"
title: "Announcement: CCTools 6.2.0 released"
date: 2017-10-09T15:39:00+00:00
author: "Benjamin Tovar"
description: "The Cooperative Computing Lab is pleased to announce the release of version 6.2.0 of the Cooperative Computing Tools including Parrot, Chirp, Makeflow, WorkQ…"
toc: false
related_posts: true
tags: []
---
The Cooperative Computing Lab is pleased to announce the release of version 6.2.0 of the Cooperative Computing Tools including Parrot, Chirp, Makeflow, WorkQueue, Umbrella, Prune, SAND, All-Pairs, Weaver, and other software.

The software may be downloaded here:
  <br/>
  <a href="http://ccl.cse.nd.edu/software/download">
   http://ccl.cse.nd.edu/software/download
  </a>
  This is a major which adds several features and bug fixes. Among them:
  <ul>
   <li>
    [JX] A superset of JSON to dynamically describe workflows, see doc/jx.html. (Tim Shaffer)
   </li>
   <li>
    [Makeflow] Support for Amazon EC2. (Kyle Sweeney, Douglas Thain)
   </li>
   <li>
    [Makeflow]  Singularity support bug fixes. (Kyle Sweeney)
   </li>
   <li>
    [Parrot] Fix CVMFS initialization. (Tim Shaffer)
   </li>
   <li>
    [Prune] Several bug fixes. (Peter Ivie)
   </li>
   <li>
    [ResourceMonitor] Measurement snapshots by observing log files, --snapshot-events. (Ben Tovar)
   </li>
   <li>
    [WorkQueue] Compressed updates to the catalog server. (Nick Hazekamp, Douglas Thain)
   </li>
   <li>
    [WorkQueue] work_queue_factory uses computed maximum worker capacity of the master. (Nate Kremer-Herman)
   </li>
   <li>
    [WorkQueue] Several bug fixes. (Nick Hazekamp, Ben Tovar)
   </li>
   <li>
    [WQ_Maker] Several bug fixes. (Nick Hazekamp)
   </li>
  </ul>
  <br/>
  Thanks goes to the contributors for many features, bug fixes, and tests:
  <ul>
   <li>
    Jakob Blomer
   </li>
   <li>
    Nathaniel Kremer-Herman
   </li>
   <li>
    Nicholas Hazekamp
   </li>
   <li>
    Peter Ivie
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
