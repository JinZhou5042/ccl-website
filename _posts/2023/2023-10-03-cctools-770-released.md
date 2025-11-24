---
layout: "post"
title: "CCTools 7.7.0 Released"
date: 2023-10-03T17:15:00+00:00
author: "Douglas Thain"
description: "We are pleased to announce the release of version 7.7. of the Cooperative Computing Tools from the University of Notre Dame, including TaskVine, Work Queue, …"
toc: false
related_posts: true
tags: []
---
<p>
   <span>
    We are pleased to announce the release of version 7.7.
   </span>
   <span>
    of the Cooperative Computing Tools from the University of Notre Dame,
   </span>
   <span>
    including TaskVine, Work Queue, Makeflow, Parrot, Chirp, and other software.
   </span>
  </p>
  <ul style="text-align: left;">
   <li>
    Docs:
    <a href="https://cctools.readthedocs.io/">
     https://cctools.readthedocs.io/
    </a>
   </li>
   <li>
    Download:
    <a href="http://ccl.cse.nd.edu/software/download">
     http://ccl.cse.nd.edu/software/download
    </a>
   </li>
   <li>
    Forum:
    <a href="http://ccl.cse.nd.edu/community/forum">
     http://ccl.cse.nd.edu/community/forum
    </a>
   </li>
  </ul>
  <p>
   This is a feature release that primarily improves the scalability and performance of TaskVine:
  </p>
  <p>
   Main Features:
  </p>
  <ul>
   <li>
    TaskVine workers now perform transfers asynchronously while communicating with manager, by
    <a class="user-mention notranslate" href="https://github.com/BarrySlyDelgado">
     @BarrySlyDelgado
    </a>
   </li>
   <li style="margin-top: 0.25em;">
    TaskVine Serverless function execution simplified and accelerated by
    <a class="user-mention notranslate" href="https://github.com/tphung3">
     @tphung3
    </a>
   </li>
   <li style="margin-top: 0.25em;">
    Improved integration of Parsl and TaskVine by
    <a class="user-mention notranslate" href="https://github.com/tphung3">
     @tphung3
    </a>
   </li>
   <li style="margin-top: 0.25em;">
    Improved scheduler performance in Work Queue and TaskVine by
    <a class="user-mention notranslate" href="https://github.com/colinthomas-z80">
     @colinthomas-z80
    </a>
   </li>
   <li style="margin-top: 0.25em;">
    Multiple improvements to reliability at scale with physics applications by
    <a class="user-mention notranslate" href="https://github.com/btovar">
     @btovar
    </a>
   </li>
   <li style="margin-top: 0.25em;">
    Change to API for cancelling tasks: all tasks are now returned by
    <code>
     vine_wait
    </code>
    by
    <a class="user-mention notranslate" href="https://github.com/dthain">
     @dthain
    </a>
   </li>
   <li style="margin-top: 0.25em;">
    Change to serverless resource management: functions consume library resources by
    <a class="user-mention notranslate" href="https://github.com/dthain">
     @dthain
    </a>
   </li>
   <li style="margin-top: 0.25em;">
    Improved visualization by
    <a class="user-mention notranslate" href="https://github.com/JinZhou5042">
     @JinZhou5042
    </a>
   </li>
   <li style="margin-top: 0.25em;">
    New environment.yml for development dependencies by
    <a class="user-mention notranslate" href="https://github.com/thieber22">
     @thieber22
    </a>
   </li>
  </ul>
  <p>
   <span>
    Full Changelog
   </span>
   :
   <a class="commit-link" href="https://github.com/cooperative-computing-lab/cctools/compare/nightly...release/7.7.0">
    <tt>
     nightly...release/7.7.0
    </tt>
   </a>
  </p>
