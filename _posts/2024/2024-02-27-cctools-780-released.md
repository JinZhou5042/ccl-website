---
layout: "post"
title: "CCTools 7.8.0 released"
date: 2024-02-27T13:54:00+00:00
author: "Benjamin Tovar"
description: "We are pleased to announce the release of version 7.8.0 of the 
Cooperative Computing Tools from the University of Notre Dame, including
 TaskVine, Work Queu…"
toc: false
related_posts: true
tags: []
---

<p>
   We are pleased to announce the release of version 7.8.0 of the 
Cooperative Computing Tools from the University of Notre Dame, including
 TaskVine, Work Queue, Makeflow, Parrot, Chirp, and other software.

Docs:
<a href="https://cctools.readthedocs.io/" rel="nofollow" target="_blank">
https://cctools.readthedocs.io/
</a>
<br/>
Download:
<a href="http://ccl.cse.nd.edu/software/download" rel="nofollow" target="_blank">
http://ccl.cse.nd.edu/software/download
</a>
<br/>
Forum:
<a href="http://ccl.cse.nd.edu/community/forum" rel="nofollow" target="_blank">
http://ccl.cse.nd.edu/community/forum
</a>
This is a feature release that primarily improves the scalability and performance of TaskVine:

Main Features:

TaskVine dask serverless execution (i.e., function calls instead of tasks) to reduce overheads, by @BarrySlyDelgado
<br/>
TaskVine improvements to library and remove function calls dispatch, by @tphung3
<br/>
TaskVine temporary file replication, by @colinthomas-z80
<br/>
TaskVine automatic deletion of ancillary files (unlink_when_done) during workflow execution, by @btovar
<br/>
TaskVine use of memory buffers to serialize functions, by @btovar
<br/>
TaskVine cleanup of factory, worker information and stats, by @dthain
<br/>
Fix TaskVine memory leak in python bindings, by @JinZhou5042
<br/>
Improved Parsl integration with TaskVine and documentation, by @colinthomas-z80
<a href="https://github.com/cooperative-computing-lab/cctools/compare/release/7.7.3...release/7.8.0" rel="nofollow" target="_blank">
Full Changelog
</a>

  </p>
