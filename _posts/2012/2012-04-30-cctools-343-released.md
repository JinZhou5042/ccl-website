---
layout: "post"
title: "CCTools 3.4.3 Released"
date: 2012-04-30T13:12:00+00:00
author: "Douglas Thain"
description: "The Cooperative Computing Lab is pleased to announce the release of version 3.4.3 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, Work…"
toc: false
related_posts: true
tags: []
---
<br/>

The Cooperative Computing Lab is pleased to announce the release of version 3.4.3 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, WorkQueue, SAND, All-Pairs, and other software.

<br/>

<p>This is a bug fix release of version 3.4.2. No new features were added.<br/></p>

<p>The software may be downloaded here:<br/><a href="http://www.cse.nd.edu/~ccl/software/download">http://www.cse.nd.edu/~ccl/software/download</a><br/></p>

<p>Changes:<br/></p>

<dir><br/><li>Fixed WQ Master contacting catalog server too frequently. [Li Yu]<br/></li><li>Fixed bug in split_fasta that would omit the first id in each fasta split. [Rory Carmichael]<br/></li><li>Fixed local execution timeouts for batch job. [Li Yu]<br/></li><li>Fixed an issue with getdents on large directories in Parrot. [Douglas Thain]<br/></li><li>Fixed an issue where a worker could use up all the disk space on a machine when accepting an incoming file. WQ workers now ensures that a configurable amount of space is available before accepting the file.<br/>[Dinesh Rajan]<br/></li><li>Improved debug output for removed workers in WQ. [Li Yu]<br/></li><li>Fixed an issue in Parrot with opening the current or parent directory without the O_DIRECTORY flag. [Douglas Thain, Dan Bradley]<br/></li><li>Fixed a memory leak for Condor Batch Job. [Peter Bui]<br/></li><li>Fixed a memory leak in WQ. [Peter Bui]<br/></li><li>Added support for writing memory mapped files. [Douglas Thain]<br/></li><li>Various fixes to configure and Make. [Douglas Thain, Peter Bui, Michael Hanke]<br/></li><li>WQ Python binding correct to have catalog False by default to match C API. [Peter Bui]<br/></li><li>Added escapes from the trimming stages of Celera when SAND is selected as the overlapper. These now match the places where Celera escapes for the UMD overlapper. [Andrew Thrasher]<br/></li></dir>

<br/>

<p>Thanks goes to the contributors for this release: Dinesh Rajan, Patrick Donnelly, Peter Bui, Li Yu, Douglas Thain,<br/>Andrew Thrasher, Dan Bradley, and Michael Hanke.<br/></p>

<p>Enjoy!<br/></p>
