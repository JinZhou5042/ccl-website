---
layout: "post"
title: "Balancing Push and Pull in Confuga, an Active Storage Cluster File System for Scientific Workflows"
date: 2016-05-09T14:20:00+00:00
description: "Patrick Donnelly has published a journal article in Concurrency and Computation: Practice and Experience on the Confuga active cluster file system. The journ…"
toc: false
related_posts: true
tags: [archived-blog]
---
<a href="http://www.nd.edu/~pdonnel3/" target="_blank">Patrick Donnelly</a>

has published a journal article in

<i><a href="http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)1532-0634" target="_blank">Concurrency and Computation: Practice and Experience</a> </i>

on the

<a href="http://ccl.cse.nd.edu/software/confuga" target="_blank">Confuga</a>

active cluster file system. The journal article presents the use of controlled transfers to distribute data within the cluster without destabilizing the resources of storage nodes:

<br/>

<span style="font-family: inherit;"><br/></span>

<br/>

<p><span style="font-family: inherit;"><a href="http://onlinelibrary.wiley.com/doi/10.1002/cpe.3834/full" target="_blank">Patrick Donnelly and Douglas Thain, Balancing Push and Pull in Confuga, an Active Storage Cluster File System for Scientific Workflows, Concurrency and Computation: Practice and Experience, May 2016.</a></span></p>

<br/>

Confuga is a new active storage cluster file system designed for executing regular POSIX workflows. Users may store extremely large datasets on Confuga in a regular file system layout, with whole files replicated across the cluster. You may then operate on your dataset using regular POSIX applications, with defined inputs and outputs.

<br/>

<br/>

<br/>

Jobs execute with full data locality with all whole-file dependencies available in its own private sandbox. For this reason, Confuga will first copy a job's missing data to the target storage node prior to dispatching the job. This journal article examines two transfer mechanisms used in Confuga to manage this data movement:

<b>push</b>

and

<b>pull</b>

.

<br/>

<br/>

A push transfer is used to direct a storage node to copy a file to another storage node. Pushes are centrally managed by the head node which allows it to schedule transfers in a way that avoids destabilizing the cluster or individual storage nodes. To avoid some potential inefficiencies with centrally managed transfers, Confuga also uses pull transfers which resemble file access in a typical distributed file system. A job will pull its missing data dependencies from other storage nodes prior to execution.

<br/>

<br/>

This journal article examines the trade-offs of the two approaches and settles on a balanced approach where pulls are used for transfers of smaller files and pushes are used for larger files. This results in significant performance improvements for scientific workflows with large data dependencies. For example, two bioinformatics workflows we studied, a Burrows-Wheeler Aligner (BWA) workflow and an Iterative Alignments of Long Reads (IALR) workflow, achieved 48% and 77% reductions in execution time compared to using either an only push or only pull strategy.

<br/>

<br/>

For further details, please check out our journal article

<a href="http://onlinelibrary.wiley.com/doi/10.1002/cpe.3834/full" target="_blank">here</a>

. Confuga is available as part of the

<a href="https://github.com/cooperative-computing-lab/cctools" target="_blank">Cooperative Computing Toolset</a>

distributed under the GNU General Public License. For usage instructions, see the Confuga

<a href="http://ccl.cse.nd.edu/software/manuals/confuga.html" target="_blank">manual</a>

and

<a href="http://ccl.cse.nd.edu/software/manuals/man/confuga.html" target="_blank">man page</a>

.

<br/>

<br/>

See also our

<a href="http://cclnd.blogspot.com/2015/03/confuga-scalable-data-intensive.html" target="_blank">last blog post on Confuga</a>

which introduced Confuga.
