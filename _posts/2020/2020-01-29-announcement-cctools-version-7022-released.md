---
layout: "post"
title: "Announcement: CCTools version 7.0.22 released"
date: 2020-01-29T17:20:00+00:00
author: "Benjamin Tovar"
description: "The Cooperative Computing Lab is pleased to announce the release of version 7.0.22 of the Cooperative Computing Tools including Parrot, Chirp, JX, Makeflow, …"
toc: false
related_posts: true
tags: []
---

The Cooperative Computing Lab is pleased to announce the release of version 7.0.22 of the Cooperative Computing Tools including Parrot, Chirp, JX, Makeflow, WorkQueue, and other software.

The software may be downloaded here:
<br/>
<a href="http://ccl.cse.nd.edu/software/download">
http://ccl.cse.nd.edu/software/download
</a>
This is a minor release with some new features and bug fixes. Among them:

  <ul>
   <li>
    [WorkQueue] Worker warning when files cannot be executed in the scratch directory. (Ben Tovar)
   </li>
   <li>
    [WorkQueue] Status connections are no longer counted as available workers. (Ben Tovar)
   </li>
   <li>
    [Makeflow] Fix issue with using quotes ("...",'...') when specifying files. (Ben Tovar)
   </li>
   <li>
    [Makeflow] Fix makeflow_monitor race condition on partially written log lines. (Ben Tovar)
   </li>
  </ul>
  Thanks goes to the contributors for many features, bug fixes, and tests:

Camila Carballo
<br/>
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
Francis Schickel
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
<br/>
