---
layout: "post"
title: "CCTools 7.1.0 released"
date: 2020-03-17T16:05:00+00:00
author: "Benjamin Tovar"
description: "The Cooperative Computing Lab is pleased to announce the release of 
version 7.1.0 of the Cooperative Computing Tools including Parrot, 
Chirp, JX, Makeflow,…"
toc: false
related_posts: true
tags: []
---
The Cooperative Computing Lab is pleased to announce the release of 
version 7.1.0 of the Cooperative Computing Tools including Parrot, 
Chirp, JX, Makeflow, WorkQueue, and other software.

The software may be downloaded here:
  <br/>
  <a href="http://ccl.cse.nd.edu/software/download" rel="nofollow" target="_blank">
   http://ccl.cse.nd.edu/software/download
  </a>
  This is a minor release with some new features and bug fixes. Among them:
  <ul>
   <li>
    [General]   Documentation available in
    <a href="https://cctools.readthedocs.io/" rel="nofollow" target="_blank">
     https://cctools.readthedocs.io
    </a>
    (Ben Tovar, Douglas Thain)
   </li>
   <li>
    [General]   Installation via conda:
    <span style="font-family: courier new,monospace;">
     conda install -c conda-forge ndcctools
    </span>
    (Ben Tovar)
   </li>
   <li>
    [General]   Installation via spack:
    <span style="font-family: courier new,monospace;">
     spack install cctools
    </span>
    (Tanner Juedeman)
   </li>
   <li>
    [General]   Several fixes for the batch job interface -T. (Ben Tovar)
   </li>
   <li>
    [JX]        New
    <span style="font-family: courier new,monospace;">
     template("{VAR} ...")
    </span>
    function to construct strings. (Tim Shaffer)
   </li>
   <li>
    [JX]        Improved parsing. (Tim Shaffer, Douglas Thain)
   </li>
   <li>
    [Makeflow]  Support for sub-makeflows. (Douglas Thain)
   </li>
   <li>
    [Makeflow]  Wrappers and hooks facility clean-up. (Nicholas Hazekamp, Tim Shaffer)
   </li>
   <li>
    [WorkQueue] Fix status connections being count as workers. (Ben Tovar)
   </li>
   <li>
    [Resource Monitor] Measurements of single python functions. (Ben Tovar)
   </li>
  </ul>
  <br/>
  Thanks goes to the contributors for many features, bug fixes, and tests:

Cami Carballo
  <br/>
  T.J. Dasso
  <br/>
  Nathaniel Kremer-Herman
  <br/>
  Nicholas Hazekamp
  <br/>
  Tanner Juedeman
  <br/>
  Tim Shaffer
  <br/>
  Emily Strout
  <br/>
  Zoe Surma
  <br/>
  Douglas Thain
  <br/>
  Ben Tovar
  <br/>
  Yifan Yu

Please send any feedback to the CCTools discussion mailing list:
  <a href="http://ccl.cse.nd.edu/community/forum" rel="nofollow" target="_blank">
   http://ccl.cse.nd.edu/community/forum
  </a>
  Enjoy!
