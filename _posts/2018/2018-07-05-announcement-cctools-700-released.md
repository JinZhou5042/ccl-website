---
layout: "post"
title: "Announcement: CCTools 7.0.0 released"
date: 2018-07-05T16:43:00+00:00
author: "Benjamin Tovar"
description: "The Cooperative Computing Lab is pleased to announce the release of version 7.0.0 of the Cooperative Computing Tools including Parrot, Chirp, JX, Makeflow, W…"
toc: false
related_posts: true
tags: []
---
The Cooperative Computing Lab is pleased to announce the release of version 7.0.0 of the Cooperative Computing Tools including Parrot, Chirp, JX, Makeflow, WorkQueue, Umbrella, Prune, SAND, All-Pairs, Weaver, and other software.

The software may be downloaded here:
  <br/>
  <a href="http://ccl.cse.nd.edu/software/download">
   http://ccl.cse.nd.edu/software/download
  </a>
  This is a major release which adds several features and bug fixes. Among them:
  <ul>
   <li>
    [General] Catalog updates compressed, and via TCP. (Douglas Thain, Nick Hazekamp, Ben Tovar)
   </li>
   <li>
    [JX] Bug fixes to JX, a superset of JSON to dynamically describe 
workflows, see doc/jx-tutorial.html. (Tim Shaffer, Douglas Thain)
   </li>
   <li>
    [Makeflow] Formally define and implement hooks to workflow rules. Hooks may be used to wrap rules with containers (e.g. singularity), a monitoring tool, etc.  (Nick Hazekamp, Tim Shaffer)
   </li>
   <li>
    [Makeflow] Rule execution as Amazon Lambda functions and S3 objects. (Kyle Sweeney, Douglas Thain)
   </li>
   <li>
    [Makeflow] Efficient shared file system access. (Nick Hazekamp)
   </li>
   <li>
    [Makeflow] Several bug fixes for rules executing in Mesos. (Chao Zheng)
   </li>
   <li>
    [ResourceMonitor] Several bug fixes. (Ben Tovar)
   </li>
   <li>
    [WorkQueue] Add user-defined features to workers and tasks. (Nate Kremer-Herman)
   </li>
   <li>
    [WorkQueue] Fixes for python3 support. (Ben Tovar)
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
