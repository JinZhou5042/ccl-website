---
layout: "post"
title: "CCTools 5.3.0 released"
date: 2015-11-23T17:24:00+00:00
author: "Benjamin Tovar"
description: "The Cooperative Computing Lab is pleased to announce the release of version 5.3.0 of the Cooperative Computing Tools including Parrot, Chirp, Makeflow, WorkQ…"
toc: false
related_posts: true
tags: []
---
The Cooperative Computing Lab is pleased to announce the release of version 5.3.0 of the Cooperative Computing Tools including Parrot, Chirp, Makeflow, WorkQueue, Umbrella, SAND, All-Pairs, Weaver, and other software.

The software may be downloaded here:
  <br/>
  <a href="http://www.cse.nd.edu/~ccl/software/download">
   http://www.cse.nd.edu/~ccl/software/download
  </a>
  This minor release adds several features and bug fixes. Among them:
  <ul>
   <li>
    [Makeflow]  Several enhancements in garbage collection. (Nick Hazekamp)
   </li>
   <li>
    [Makeflow]  Better task state handling when recovering execution log. (Nick Hazekamp)
   </li>
   <li>
    [Parrot]    Correct handling of multi-threaded programs. (Patrick Donnelly)
   </li>
   <li>
    [Parrot]    Adds parrot_mount, to set arbitrary mount points while parrot is executing. (Douglas Thain)
   </li>
   <li>
    [Parrot]    Add --fake-setuid option, for executables that request setuid. (Tim Shaffer)
   </li>
   <li>
    [Parrot]    Update cvmfs uri to new convention. (Jakob Blomer)
   </li>
   <li>
    [Parrot]    Add --whitelist to restrict filesystem access. (Tim Shaffer)
   </li>
   <li>
    [Parrot]    Make special file descriptors invisible to tracee. (Patrick Donnelly)
   </li>
   <li>
    [Resource Monitor] Compute approximations of shared resident memory. (Ben Tovar)
   </li>
   <li>
    [Resource Monitor] Remove resource_monitorv for static binaries. resource_monitor now handles all cases.  (Ben Tovar)
   </li>
   <li>
    [Resource Monitor] Working directories are not tracked by default anymore. Use --follow-chdir instead.  (Ben Tovar)
   </li>
   <li>
    [Umbrella]  Support for curateND. (Haiyan Meng)
   </li>
   <li>
    [Umbrella]  Support for installing software from package managers. (Haiyan Meng)
   </li>
   <li>
    [Work Queue] Adds option -C to read a JSON configuration file. (Ben Tovar)
   </li>
   <li>
    [Work Queue] Several bug fixes regarding task/workflow statistics. (Ben Tovar)
   </li>
   <li>
    [Work Queue] Master's shutdown option now correctly terminates  workers. (Ben Tovar)
   </li>
   <li>
    [Work Queue] Adds --sge-paremeter to ./configure script to personalize the sge_submit_workers script. (Ben Tovar)
   </li>
   <li>
    [Work Queue] Adds the executable disk_allocator, to restrict disk usage at the workers. (Nate Kremer-Herman)
   </li>
  </ul>
  Incompatibility warnings:
  <ul>
   <li>
    Workers from this release do not work correctly with masters from previous releases.
   </li>
  </ul>
  Thanks goes to the contributors for many features, bug fixes, and tests:
  <ul>
   <li>
    Jakob Blomer
   </li>
   <li>
    Neil Butcher
   </li>
   <li>
    Patrick Donnelly
   </li>
   <li>
    Nathaniel Kremer-Herman
   </li>
   <li>
    Nicholas Hazekamp
   </li>
   <li>
    Peter Ivie
   </li>
   <li>
    Kevin Lannon
   </li>
   <li>
    Haiyan Meng
   </li>
   <li>
    Tim Shaffer
   </li>
   <li>
    Douglas Thain
   </li>
   <li>
    Ben Tovar
   </li>
   <li>
    Mathias Wolf
   </li>
   <li>
    Anna Woodard
   </li>
  </ul>
  <br/>
  Please send any feedback to the CCTools discussion mailing list:
  <a href="http://ccl.cse.nd.edu/software/help/">
   http://ccl.cse.nd.edu/software/help/
  </a>
  Enjoy!
  <br/>
