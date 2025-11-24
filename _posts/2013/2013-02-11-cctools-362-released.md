---
layout: "post"
title: "CCTools 3.6.2 Released!"
date: 2013-02-11T13:55:00+00:00
author: "Douglas Thain"
description: "The Cooperative Computing Lab is pleased to announce the release of version 3.6.2 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, Work…"
toc: false
related_posts: true
tags: []
---
<br/>

<p>The Cooperative Computing Lab is pleased to announce the release of version 3.6.2 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, WorkQueue, SAND, All-Pairs, and other  software.</p>

<br/>

<br/>

<p>This is a bug fix release of version 3.6.1. No new features were added.</p>

<br/>

<br/>

<p>The software may be downloaded here:<br/><a href="http://www.cse.nd.edu/~ccl/software/download">http://www.cse.nd.edu/~ccl/software/download</a></p>

<br/>

<br/>

<p>Changes:</p>

<br/>

<br/>

<ul><br/><li>[WorkQueue] Corrected memory errors leading to a SEGFAULT. [Li Yu]</li><br/><li>[Makeflow] Properly interpret escape codes in Makeflow files: \n, \t, etc. [Brian Du Sell]</li><br/><li>[Parrot] Watchdog now properly honors minimum wait time. [Li Yu]</li><br/><li>[Parrot] Reports the logical executable name for /proc/self/exe instead of the physical name. [Douglas Thain]</li><br/><li>[WorkQueue] Race conditions in signal handling for workers were corrected. Tasks now have a unique process group to properly kill all task children on abort. [Dinesh Rajan, Li Yu]</li><br/><li>[WorkQueue] Corrected incorrect handling of -C option where worker would not use the same catalog server as work_queue_pool. [Li Yu]</li><br/></ul>

<br/>

<br/>

<p>Thanks goes to the contributors for this release: Patrick Donnelly, Brian Du Sell, Dinesh Rajan, Douglas Thain, and Li Yu.</p>

<br/>

<br/>

<p>Enjoy!</p>

<br/>
