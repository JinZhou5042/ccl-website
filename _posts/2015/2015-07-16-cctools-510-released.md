---
layout: "post"
title: "CCTools 5.1.0 released"
date: 2015-07-16T16:42:00+00:00
author: "Benjamin Tovar"
image: "/assets/blog/2015/cctools-510-released/version-08932ecfe9.png"
description: "The Cooperative Computing Lab is pleased to announce the release of version 5.1.0 of the Cooperative Computing Tools including Parrot, Chirp, Makeflow, WorkQ…"
toc: false
related_posts: true
tags: []
---

<div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2015/cctools-510-released/version-08932ecfe9.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  The Cooperative Computing Lab is pleased to announce the release of version 5.1.0 of the Cooperative Computing Tools including Parrot, Chirp, Makeflow, WorkQueue, SAND, All-Pairs, Weaver, and other software.

The software may be downloaded here:
<br/>
<a href="http://www.cse.nd.edu/~ccl/software/download">
download
</a>
This minor release adds a couple of small features, and fixes the following
<br/>
issues of version 5.0.0:

  <ul>
   <li>
    [Prune]     Fix installation issue. (Haiyan Meng)
   </li>
   <li>
    [Umbrella]  Fix installation issue. (Haiyan Meng)
   </li>
   <li>
    [WorkQueue] Worker's --wall-time to specify maximum period of time a worker may be active. (Andrey Tovchigrechko, Ben Tovar)
   </li>
   <li>
    [WorkQueue] work_queue_status's --M to show the status of masters by name. (Names may be regular expressions). (Ben Tovar)
   </li>
   <li>
    [WorkQueue] Fix missing priority python binding.
   </li>
   <li>
    [WorkQueue] Fix incorrect reset of workers when connecting to different masters. (Ben Tovar)
   </li>
   <li>
    [WorkQueue] Fix segmentation fault when cloning tasks. (Ben Tovar)
   </li>
   <li>
    [WQ_Maker]  Cleanup, and small fixes. (Nick Hazekamp)
   </li>
  </ul>
  <br/>
  Thanks goes to our contributors:

Nicholas Hazekamp
<br/>
Haiyan Meng
<br/>
Ben Tovar
<br/>
Andrey Tovchigrechko

Please send any feedback to the CCTools discussion mailing list:
<a href="http://ccl.cse.nd.edu/software/help/">
mailing list
</a>
Enjoy!

~
