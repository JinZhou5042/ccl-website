---
layout: "post"
title: "CCTools 4.2.0 released"
date: 2014-07-31T12:33:00+00:00
author: "Benjamin Tovar"
description: "We are pleased to announce the release of version 4.2.0 of the Cooperative
Computing Tools including Parrot, Chirp, Makeflow, WorkQueue, SAND, All-Pairs,
and…"
toc: false
related_posts: true
tags: [release]
---
We are pleased to announce the release of version 4.2.0 of the Cooperative
Computing Tools including Parrot, Chirp, Makeflow, WorkQueue, SAND, All-Pairs,
and other software.

<br/>

The software may be downloaded here:

<a href="http://ccl.cse.nd.edu/software/download"> Download CCTools 4.2.0 </a>

<br/>

This release is mostly a bug fix release, but introduces changes to the Work
Queue protocol. Thus, workers from 4.2 do not work with masters pre 4.2.

<br/>

Among the bug fixes and added capabilities are:

Among the bug fixes and added capabilities are:

<br/>

<ul>
<li> [General]   Support for systemd log journal. (Patrick Donelly) </li>
<li> [WorkQueue] Several bug fixes (Douglas Thain. Dinesh Rajan, Ben Tovar) </li>
<li> [WorkQueue] Improvements to resource accounting. (Ben Tovar) </li>
<li> [WorkQueue] work_queue_graph_log, a script to plot
             Work Queue's log. (Ben Tovar) </li>
<li> [WorkQueue] Autosize option for workers to fill Condor slots. (Douglas Thain) </li>
<li> [WorkQueue] Added several example applications in apps/ (Dinesh Rajan)  </li>
<li> [Chirp]     Several bug fixes. (Patrick Donelly) </li>
<li> [Parrot]    Package creation of accessed files for execution
             repeatability.  (Haiyan Meng) </li>
<li> [Parrot]    Correct mmap handling. (Patrick Donelly) </li>
<li> [Parrot]    Fix linking to iRODS. (Patrick Donelly) </li>
<li> [Parrot]    Option to disable CVMFS alien cache. (Ben Tovar) </li>
<li> [Parrot]    Bug fixes targeting CVMFS. (Ben Tovar) </li>
</ul>

Thanks goes to the contributors for many features and bug fixes:

<ul>
<li> Jakob Blomer </li>
<li> Dan Bradley </li>
<li> Peter Bui </li>
<li> Patrick Donnelly </li>
<li> Nicholas Hazekamp </li>
<li> Peter Ivie </li>
<li> Haiyan Meng </li>
<li> Dinesh Rajan </li>
<li> Casey Robinson </li>
<li> Peter Sempolinski </li>
<li> Douglas Thain </li>
<li> Ben Tovar </li>
<li> Matthias Wolf </li>
</ul>

Please send any feedback to the

<a href="http://nd.edu/~ccl/software/help.shtml"> CCTools discussion mailing list </a>

.

<br/>

<br/>

<br/>
