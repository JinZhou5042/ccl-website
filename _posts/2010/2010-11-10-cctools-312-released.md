---
layout: "post"
title: "CCTools 3.1.2 Released"
date: 2010-11-10T14:00:00+00:00
author: "Douglas Thain"
description: "We are pleased to announce the release of version 3.1.2 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, Work Queue, SAND, All-Pairs, a…"
toc: false
related_posts: true
tags: []
---
<br/>

We are pleased to announce the release of version 3.1.2 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, Work Queue, SAND, All-Pairs, and other software. The software may be downloaded here:

<br/>

<p><a href="http://www.cse.nd.edu/~ccl/software/download.shtml"><br/>http://www.cse.nd.edu/~ccl/software/download.shtml</a><br/></p>

<p>This release fixes a number of minor bugs:<br/></p>

<dir><br/><li> Work Queue: Sending of files larger than 2GB is now supported.  Tasks that fail to produce the expected output files are now returned to the caller rather than retried.<br/></li><li> Parrot: An application attempting a non-blocking network connection will now properly block instead of busy-waiting.<br/></li><li> Chirp Server: Fixed bug relating to construction of directory names in calls such as chirp_localpath.<br/></li><li> All-Pairs: Fixed bug that would result in crash at startup.<br/></li></dir>

<br/>

<br/>

Thanks to Michael Albrecht, Peter Bui, Patrick Donnelly, Dinesh Rajan, and Li Yu, for their contributions to this release.

<br/>

<br/>
