---
layout: "post"
title: "CCTools 3.4.2 Released"
date: 2012-02-21T17:55:00+00:00
author: "Douglas Thain"
description: "The Cooperative Computing Lab is pleased to announce the release of version 3.4.2 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, Work…"
toc: false
related_posts: true
tags: []
---
<br/>

The Cooperative Computing Lab is pleased to announce the release of version 3.4.2 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, WorkQueue, SAND, All-Pairs, and other software.

<br/>

<p>The software may be downloaded here:<br/><br/><a href="http://www.cse.nd.edu/~ccl/software/download">http://www.cse.nd.edu/~ccl/software/download</a><br/></p>

<p>This is a minor release which fixes several bugs and adds minor features:<br/></p>

<dir><br/><li> WorkQueue now does string interpolation on task input files. Currently, only the $OS and $ARCH variables are replaced. [Dinesh<br/>Rajan]<br/></li><li> WorkQueue new work_queue_name API to get project name. [Peter Bui]<br/></li><li> Parrot now supports the faccessat system call. [Douglas Thain]<br/></li><li> Support added for catalog server, project name and shared workers to the SAND master executables. [Andrew Thrasher]<br/></li><li> New daemon option for chirp_server and catalog_server. [Patrick Donnelly]<br/></li><li> New FUSE mount option support for chirp_fuse. [Patrick Donnelly]<br/></li><li> New support for CVMFS filesystem in Parrot. [Dan Bradley, Douglas Thain]<br/></li><li> Added two new versions of Elastic replica exchange under apps/. The replica_exchange_protomol_nobarrier is an optimized (faster) version of the original implementation (now renamed replica_exchange_protomol_barrier along with some  modifications). The documentation (.m4) have been updated accordingly. [Dinesh Rajan]<br/></li><li> Buffer overflow corrected in some regular expressions. [Peter Bui and Li Yu]<br/></li><li> WorkQueue now gracefully handles more than 1024 workers by moving from select to poll. [Peter Bui and Li Yu]<br/></li><li> Example Bioinformatics Makeflow applications for BLAST. [Rory Carmichael]<br/></li><li> SAND Support for Celera 6.x and 7.x. [Andrew Thrasher]<br/></li><li> Corrected an issue where Makeflow would crash with very long commands. [Patrick Donnelly]<br/></li></dir>

<br/>

<br/>

<br/>

Thanks goes to the contributors of other minor/bug fix corrections: Dinesh Rajan, Patrick Donnelly, Peter Bui, Li Yu, Douglas Thain, Andrew Thrasher, Csaba Kos, Dan Bradley.

<br/>
