---
layout: "post"
title: "CCTools Version 7.3.0 released"
date: 2021-07-29T16:09:00+00:00
author: "Benjamin Tovar"
description: "The Cooperative Computing Lab is pleased to announce the release of version 7.3.0 of the Cooperative Computing Tools including Parrot, Chirp, JX, Makeflow, W…"
toc: false
related_posts: true
tags: []
---
<p>
   The Cooperative Computing Lab is pleased to announce the release of version 7.3.0 of the Cooperative Computing Tools including Parrot, Chirp, JX, Makeflow, WorkQueue, and other software.

The software may be installed from here:
   <a href="http://ccl.cse.nd.edu/software/download">
    http://ccl.cse.nd.edu/software/download
   </a>
   This is a minor release with some new features and bug fixes. Among them:

- [WorkQueue] PythonTask to directly execute python functions as WorkQueue tasks. (Barry Sly-Delgado)
   <br/>
   - [WorkQueue] Fix max mode allocation to work as a high-water mark when dispatching tasks. (Ben Tovar)
   <br/>
   - [WorkQueue] Reworked documentation in https://cctools.readthedocs.io. (Douglas Thain)
   <br/>
   - [WorkQueue] API to show summary of workers connected. (David Simonetti)
   <br/>
   - [WorkQueue] Adds --wall-time limit to workers. (Thanh Son Phung)
   <br/>
   - [Resource Monitor] Time is now reported in seconds, rather than microseconds. (Ben Tovar)
   <br/>
   - [JX] jx_repl tool for JX language exploration. (Jack Rundle)

Thanks goes to the contributors for many features, bug fixes, and tests:

- David Rundle
   <br/>
   - Barry Sly-Delgado
   <br/>
   - Thanh Son Phung
   <br/>
   - Tim Shaffer
   <br/>
   - David Simonetti
   <br/>
   - Douglas Thain
   <br/>
   - Ben Tovar

Please send any feedback to the CCTools discussion mailing list:
   <a href="http://ccl.cse.nd.edu/community/forum">
    http://ccl.cse.nd.edu/community/forum
   </a>
   Enjoy!
  </p>
