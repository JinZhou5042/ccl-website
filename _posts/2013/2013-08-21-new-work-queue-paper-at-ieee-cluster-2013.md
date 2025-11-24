---
layout: "post"
title: "New Work Queue Paper at IEEE Cluster 2013"
date: 2013-08-21T12:55:00+00:00
author: "Douglas Thain"
description: "Michael Albrecht and Dinesh Rajan will present their latest work titled Making Work Queue Cluster Friendly for Data Intensive Scientific Applications . In th…"
toc: false
related_posts: true
tags: []
---
Michael Albrecht and Dinesh Rajan will present their latest work titled

<a href="http://www.nd.edu/~ccl/research/papers/wqh-cluster13.pdf">Making Work Queue Cluster Friendly for Data Intensive Scientific Applications</a>

.

<br/>

<br/>

In the original design of Work Queue, each worker was a sequential process that executed one task at a time.  This paper describes the extension of Work Queue into two respects:

<br/>

<br/>

<ul>
<li>Workers can now run multiple tasks simultaneously, each sharing a local cache directory.</li>
<li>Workers can be combined into hierarchies, each headed by a foreman, which provides a common disk cache for each sub tree.</li>
</ul>

<br/>

The effect of these two changes is to dramatically reduce the network footprint at the master process, and at each execution site.  The resulting system is more 'friendly' to local clusters, and is capable of scaling to even greater sizes.

<br/>
