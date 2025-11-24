---
layout: "post"
title: "Announcement:  CCTools 6.0.0. released"
date: 2016-09-15T17:55:00+00:00
author: "Benjamin Tovar"
description: "The Cooperative Computing Lab is pleased to announce the release of version 6.0.0 of the Cooperative Computing Tools including Parrot, Chirp, Makeflow, WorkQ…"
toc: false
related_posts: true
tags: []
---
The Cooperative Computing Lab is pleased to announce the release of version 6.0.0 of the Cooperative Computing Tools including Parrot, Chirp, Makeflow, WorkQueue, Umbrella, Prune, SAND, All-Pairs, Weaver, and other software.

<br/>

<br/>

The software may be downloaded here:

<br/>

<a href="http://ccl.cse.nd.edu/software/download">http://ccl.cse.nd.edu/software/download</a>

<br/>

<br/>

This is a major which adds several features and bug fixes. Among them:

<br/>

<br/>

<ul>
<li>[Catalog]   Automatic fallback to a backup catalog server. (Tim Shaffer)</li>
<li>[Makeflow]  Accept DAGs in JSON format. (Tim Shaffer)</li>
<li>[Makeflow]  Multiple documentation omission bugs. (Nick Hazekamp and Haiyan Meng)</li>
<li>[Makeflow]  Send information to catalog server. (Kyle Sweeney)</li>
<li>[Makeflow]  Syntax directives (e.g. .SIZE for to indicate file size). (Nick Hazekamp)</li>
<li>[Parrot] Fix cvmfs logging redirection. (Jakob Blomer)</li>
<li>[Parrot] Multiple bug-fixes. (Tim Shaffer, Patrick Donnelly, Douglas Thain)</li>
<li>[Parrot] Timewarp mode for reproducible runs. (Douglas Thain)</li>
<li>[Parrot] Use new libcvmfs interfaces if available. (Jakob Blomer)</li>
<li>[Prune]     Use SQLite as backend. (Peter Ivie)</li>
<li>[Resource Monitor] Record the time where a resource peak occurs. (Ben Tovar)</li>
<li>[Resource Monitor] Report the peak number of cores used. (Ben Tovar)</li>
<li>[Work Queue] Add a transactions log. (Ben Tovar)</li>
<li>[Work Queue] Automatic resource labeling and monitoring. (Ben Tovar)</li>
<li>[Work Queue] Better capacity worker autoregulation. (Ben Tovar)</li>
<li>[Work Queue] Creation of disk allocation per tasks. (Nate Herman-Kremer)</li>
<li>[Work Queue] Extensive updates to wq_maker. (Nick Hazekamp)</li>
<li>[Work Queue] Improvements in computing master's task capacity. (Nate Herman-Kremer).</li>
<li>[Work Queue] Raspberry Pi compilation fixes. (Peter Bui)</li>
<li>[Work Queue] Throttle work_queue_factory with --workers-per-cycle. (Ben Tovar)</li>
<li>[Work Queue] Unlabeled tasks are assumed to consume 1 core, 512 MB RAM and 512 MB disk. (Ben Tovar)</li>
<li>[Work Queue] Worker disconnects when node does not longer have the resources promised. (Ben Tovar)</li>
<li>[Work Queue] work queue statistics clean up (see work_queue.h for deprecated names). (Ben Tovar)</li>
<li>[Work Queue] work_queue_status respects terminal column settings. (Mathias Wolf)</li>
</ul>

<br/>

We will have tutorials on the new features in our upcoming workshop, October 19 and 20. Refer to

<a href="http://ccl.cse.nd.edu/workshop/2016">http://ccl.cse.nd.edu/workshop/2016</a>

for more information. We hope you can join us!

<br/>

<br/>

Thanks goes to the contributors for many features, bug fixes, and tests:

<br/>

<br/>

<ul>
<li>Jakob Blomer</li>
<li>Peter Bui </li>
<li>Patrick Donnelly</li>
<li>Nathaniel Kremer-Herman</li>
<li>Kenyi Hurtado-Anampa</li>
<li>Peter Ivie</li>
<li>Kevin Lannon</li>
<li>Haiyan Meng</li>
<li>Tim Shaffer</li>
<li>Douglas Thain</li>
<li>Ben Tovar</li>
<li>Kyle Sweeney</li>
<li>Mathias Wolf</li>
<li>Anna Woodard</li>
<li>Chao Zheng</li>
</ul>

<br/>

Please send any feedback to the CCTools discussion mailing list:

<br/>

<br/>

<a href="http://ccl.cse.nd.edu/community/forum">http://ccl.cse.nd.edu/community/forum</a>

<br/>

<br/>

Enjoy!
