---
layout: "post"
title: "Confuga: Scalable Data Intensive Computing for POSIX Workflows"
date: 2015-03-27T20:46:00+00:00
description: "Patrick Donnely will present his work on the Confuga distributed filesystem at CCGrid 2015 in China: Patrick Donnelly, Nicholas Hazekamp, Douglas Thain, Conf…"
toc: false
related_posts: true
tags: [chirp, active storage, confuga, archived-blog]
---

<html><body><br/>
Patrick Donnely will present his work on the Confuga distributed filesystem at  <a href="http://cloud.siat.ac.cn/ccgrid2015/program.html" target="_blank">CCGrid 2015</a> in China:<br/><br/>
<blockquote class="tr_bq">
Patrick Donnelly, Nicholas Hazekamp, Douglas Thain,<a href="http://ccl.cse.nd.edu/research/papers/confuga-ccgrid2015.pdf"><b>Confuga: Scalable Data Intensive Computing for POSIX Workflows</b></a>,<i> IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing</i>, May, 2015.  </blockquote>
<b></b><b>Confuga</b> is a new active storage cluster file system designed for executing regular POSIX workflows. Users may store extremely large datasets on Confuga in a regular file system layout, with whole files replicated across the cluster. You may then operate on your dataset using regular POSIX applications, with <a href="http://ccl.cse.nd.edu/software/manuals/chirp.html#jobs" target="_blank">defined inputs and outputs</a>.<br/>
<br/>
<br/>

<br/>
Confuga handles the details of placing jobs near data and minimizing network load so that the cluster's disk and network resources are used efficiently. Each job executes with all of its input file dependencies local to its execution, within a sandbox.<br/>
<br/>
For those familiar with CCTools, Confuga operates as a cluster of <a href="http://ccl.cse.nd.edu/software/chirp/" target="_blank">Chirp</a> servers with a single Chirp server operating as the head node. You may use the Chirp library, Chirp CLI toolset, FUSE, or even <a href="http://ccl.cse.nd.edu/software/parrot/" target="_blank">Parrot</a> to upload and manipulate the data on Confuga.<br/>
<br/>
For running a workflow on Confuga, we encourage you to use <a href="http://ccl.cse.nd.edu/software/makeflow/" target="_blank">Makeflow</a>. Makeflow will submit the jobs to Confuga using the <a href="http://ccl.cse.nd.edu/software/manuals/chirp.html#jobs" target="_blank">Chirp job protocol</a> and take care of ordering the jobs based on their dependencies.<br/>
<br/>
<br/></body></html>
