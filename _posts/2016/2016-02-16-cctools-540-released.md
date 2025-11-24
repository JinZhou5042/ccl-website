---
layout: "post"
title: "CCTools 5.4.0 released"
date: 2016-02-16T20:24:00+00:00
author: "Benjamin Tovar"
description: "The Cooperative Computing Lab is pleased to announce the release of version 5.4.0 of the Cooperative Computing Tools including Parrot, Chirp, Makeflow, WorkQ…"
toc: false
related_posts: true
tags: []
---
The Cooperative Computing Lab is pleased to announce the release of version 5.4.0 of the Cooperative Computing Tools including Parrot, Chirp, Makeflow, WorkQueue, Umbrella, SAND, All-Pairs, Weaver, and other software.

<br/>

<br/>

The software may be downloaded here:

<br/>

<br/>

<a href="http://www.cse.nd.edu/~ccl/software/download">http://www.cse.nd.edu/~ccl/software/download</a>

<br/>

<br/>

This minor release adds several features and bug fixes. Among them:

<br/>

<br/>

<ul>
<li>[Catalog]  Catalog server communication is now done using JSON encoded queries and replies. (Douglas Thain)</li>
<li>[Makeflow] --skip-file-check added to mitigate overhead on network file systems. (Nick Hazekamp)</li>
<li>[Makeflow] Added amazon batch job interface. (Charles Shinaver)</li>
<li>[Resource Monitor] Network bandwidth, bytes received, and sent are now recorded. (Ben Tovar)</li>
<li>[Work Queue] Tasks may be grouped into categories, for resource control and fast abort. (Ben Tovar)</li>
<li>[Work Queue] work_queue_pool was renamed to work_queue_factory. (Douglas Thain)</li>
<li>[Work Queue] --condor-requirements to specify arbitrary HTCondor requirements in worker_queue_factory. (Chao Zheng)</li>
<li>[Work Queue] --factory-timeout to terminate worker_queue_factory when no master is active. (Neil Butcher)</li>
<li>[Work Queue] Compile-time option to specify default local settings in    sge_submit_workers. (Ben Tovar)</li>
<li>[Umbrella]   Several bugfixes. (Haiyan Meng, Alexander Vyushkov)</li>
<li>[Umbrella]   Added OSF, and S3 communication. (Haiyan Meng)</li>
<li>[Umbrella]   Added EC2 execution engine. (Haiyan Meng)</li>
<li>[Parrot] Several bug-fixes for memory mappings. (Patrick Donnelly)</li>
<li>[Parrot] All compiled services are shown under / (Tim Shaffer)</li>
<li>[Parrot] POSIX directory semantics. (Tim Shaffer)</li>
<li>[Parrot] Added new syscalls from Linux kernel 4.3. (Patrick Donnelly)</li>
</ul>

<br/>

Thanks goes to the contributors for many features, bug fixes, and tests:

<br/>

<br/>

<ul>
<li>Jakob Blomer</li>
<li>Neil Butcher</li>
<li>Patrick Donnelly</li>
<li>Nathaniel Kremer-Herman</li>
<li>Nicholas Hazekamp</li>
<li>Peter Ivie</li>
<li>Kevin Lannon</li>
<li>Haiyan Meng</li>
<li>Tim Shaffer</li>
<li>Douglas Thain</li>
<li>Ben Tovar</li>
<li>Alexander VyushkovRodney Walker</li>
<li>Mathias Wolf</li>
<li>Anna Woodard</li>
<li>Chao Zheng</li>
</ul>

<br/>

Please send any feedback to the CCTools discussion mailing list:

<br/>

<br/>

<a href="http://ccl.cse.nd.edu/software/help/">http://ccl.cse.nd.edu/software/help/</a>

<br/>

<br/>

Enjoy!

<br/>

<br/>
