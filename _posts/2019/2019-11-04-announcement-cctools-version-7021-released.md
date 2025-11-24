---
layout: "post"
title: "Announcement: CCTools version 7.0.21 released"
date: 2019-11-04T17:57:00+00:00
author: "Benjamin Tovar"
description: "The Cooperative Computing Lab is pleased to announce the release of version 7.0.21 of the Cooperative Computing Tools including Parrot, Chirp, JX, Makeflow, …"
toc: false
related_posts: true
tags: []
---

The Cooperative Computing Lab is pleased to announce the release of version 7.0.21 of the Cooperative Computing Tools including Parrot, Chirp, JX, Makeflow, WorkQueue, and other software.

The software may be downloaded here:
<br/>
<a href="http://ccl.cse.nd.edu/software/download">
http://ccl.cse.nd.edu/software/download
</a>
This is a minor release which adds some bug fixes. Among them:

  <ul>
   <li>
    [Makeflow] Fix segfault when using --submit-safe-mode. (Ben Tovar)
   </li>
   <li>
    [WorkQueue] Fix memory leak error when accumulating capacity statistics. (Ben Tovar)
   </li>
   <li>
    [WorkQueue] Do not count the factory as an available worker. (Ben Tovar)
   </li>
  </ul>
  <br/>
  Thanks goes to the contributors for many features, bug fixes, and tests:

T.J. Dasso
<br/>
Nathaniel Kremer-Herman
<br/>
Nicholas Hazekamp
<br/>
Tanner Juedeman
<br/>
Ryker McIntyre
<br/>
Tim Shaffer
<br/>
Zoe Surma
<br/>
Douglas Thain
<br/>
Ben Tovar
<br/>
Yifan Yu

Please send any feedback to the CCTools discussion mailing list:
<a href="http://ccl.cse.nd.edu/community/forum">
http://ccl.cse.nd.edu/community/forum
</a>
Enjoy!
