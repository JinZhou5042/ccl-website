---
layout: "post"
title: "CCTools 5.0.0 released"
date: 2015-07-07T17:21:00+00:00
author: "Benjamin Tovar"
image: "/assets/blog/2015/cctools-500-released/version-289d951216.png"
description: "The Cooperative Computing Lab is pleased to announce the release of
version 5.0.0 of the Cooperative Computing Tools including Parrot,
Chirp, Makeflow, WorkQ…"
toc: false
related_posts: true
tags: []
---

<div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2015/cctools-500-released/version-289d951216.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  The Cooperative Computing Lab is pleased to announce the release of
version 5.0.0 of the Cooperative Computing Tools including Parrot,
Chirp, Makeflow, WorkQueue, SAND, All-Pairs, Weaver, and other software.
  <br/>
  The software may be downloaded here:
  <a href="http://ccl.cse.nd.edu/software/downloadfiles.php">
   CCTools download
  </a>
  <br/>
  This is a major release that incorporates the preview of three new tools:
  <br/>
  <ul>
   <li>
    <a href="http://ccl.cse.nd.edu/software/manuals/confuga.html">
     [Confuga]
    </a>
    An active storage cluster file system built on top of Chirp. It is
            used as a collaborative distributed file system and as a platform
            for execution of scientific workflows with full data locality for
            all job dependencies. (Patrick Donnelly)
   </li>
   <li>
    <a href="http://ccl.cse.nd.edu/software/manuals/umbrella.html">
     [Umbrella]
    </a>
    A tool for specifying and materializing comprehensive execution
            environments. Once a task is specified, Umbrella determines  the
            minimum  mechanism  necessary  to  run it such as, direct
            execution, a system container, a local virtual machine, or
            submission to a cloud or grid environment. (Haiyan Meng).
   </li>
   <li>
    <a href="https://www.blogger.com/null">
     [Prune]
    </a>
    A system for executing and precisely preserving scientific
            workflows. Collaborators can verify research results and easily
            extend them at a granularity determined by the user. (Peter Ivie)
   </li>
  </ul>
  This release adds several features and several bug fixes. Among them:
  <br/>
  <ul>
   <li>
    [AllPairs]  Support for symmetric matrices. (Haiyan Meng)
   </li>
   <li>
    [Chirp]      Perl and python bindings. (Ben Tovar)
   </li>
   <li>
    [Chirp]      Improvements to the job interface. (Patrick Donnelly)
   </li>
   <li>
    [Makeflow]  Improved Graphviz's dot output. (Nate Kremer-Herman)
   </li>
   <li>
    [Makeflow]  Support for command wrappers. (Douglas Thain)
   </li>
   <li>
    [Parrot]    Several bug fixes for CVMFS-based applications.
               (Jakob Blomer, Patrick Donnelly)
   </li>
   <li>
    [Parrot]    Valgrind support. (Patrick Donnelly)
   </li>
   <li>
    [Resource Monitor] Library for polling resources. (Ben Tovar)
   </li>
   <li>
    [WorkQueue] Signal handling bug fixes. (Andrey Tovchigrechko)
   </li>
   <li>
    [WorkQueue] Log visualizer. (Ryan Boccabella)
   </li>
   <li>
    [WorkQueue] work_queue_worker support for Docker. (Charles Zheng)
   </li>
   <li>
    [WorkQueue] Improvements to perl bindings. (Ben Tovar)
   </li>
   <li>
    [WorkQueue] Support to blacklist workers. (Nick Hazekamp)
   </li>
  </ul>
  Incompatibility warnings: Workers from 5.0 do not work with masters pre 5.0.
  <br/>
  Thanks goes to the contributors for many features and bug fixes:

Matthew Astley, Jakob Blomer, Ryan Boccabella, Peter Bui, Patrick Donnelly, Nathaniel Kremer-Herman, Victor Hawley, Nicholas Hazekamp, Peter Ivie, Kangkang Li, Haiyan Meng, Douglas Thain, Ben Tovar, Andrey Tovchigrechko, and Charles Zheng.
<br/>
Please send any feedback to the CCTools discussion mailing list:
<a href="http://ccl.cse.nd.edu/software/help">
mailing list
</a>
<br/>
Enjoy!
