---
layout: "post"
title: "CCTools 3.4.0 Released"
date: 2011-10-23T15:57:00+00:00
author: "Douglas Thain"
description: "We are pleased to announce the release of version 3.4.0 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, Work Queue, SAND, All-Pairs, a…"
toc: false
related_posts: true
tags: []
---
<br/>
  We are pleased to announce the release of version 3.4.0 of the Cooperative Computing Tools, including Parrot, Chirp, Makeflow, Work Queue, SAND, All-Pairs, and other software.
  <br/>
  <p>
   The software may be downloaded here:
   <a href="http://www.cse.nd.edu/~ccl/software/download">
    http://www.cse.nd.edu/~ccl/software/download
   </a>
  </p>
  <p>
   New features and improvements:
  </p>
  <dir>
   <br/>
   <li>
    New comprehensive documentation and man pages for all commands.
    <br/>
   </li>
   <li>
    New support for python and perl bindings to the Work Queue system.
    <br/>
   </li>
   <li>
    New support for running work queue applications directly on EC2.
    <br/>
   </li>
   <li>
    New example application of replica exchange using Work Queue.
    <br/>
   </li>
   <li>
    Parrot-XRootD support is now statically compiled in the binary release.
    <br/>
   </li>
   <li>
    Improved scalability of ticket-based authentication in the Chirp server.
    <br/>
   </li>
   <li>
    Improved support for HDFS as storage driver in the Chirp server.
    <br/>
   </li>
   <li>
    Improved Chirp server architecture uses multiple processes for robustness.
    <br/>
   </li>
   <li>
    Improved build system now handles portability across multiple operating systems (linux, solaris, macos, freebsd, cygwin) and architectures (x86, x86_64, ia64, ppc)
    <br/>
   </li>
  </dir>
  Bug fixes:
  <br/>
  <dir>
   <br/>
   <li>
    Fixed bug in Chirp chdir() that was seen as a
    <tt>
     No such directory
    </tt>
    error when using FUSE.
    <br/>
   </li>
   <li>
    Fixed bug in Chirp tickets triggered by variable output from openssl.
    <br/>
   </li>
   <li>
    Fixed bug in Parrot relating to poll(), which would result in long timeouts when using python or mpich.
    <br/>
   </li>
   <li>
    Fixed bug in Parrot relating to tc{get/set}pgrp(), which would result in no prompt displayed in interactive root.
    <br/>
   </li>
   <li>
    Fixed bug in the catalog server that would result in a crash when under heavy load.
    <br/>
   </li>
  </dir>
  Many members of the CCL team contributed to this release:
  <dir>
   <br/>
   <li>
    Michael Albrecht contributed the MPI Work Queue implementation, and generic support for batch systems with a qsub-like interface.
    <br/>
   </li>
   <li>
    Peter Bui contributed the SWIG Perl and Python Work Queue bindings, the Starch tool, found many bugs throughout the code, and generally wrangled the build system.
    <br/>
   </li>
   <li>
    Patrick Donnelly contributed the ticket authentication system and the Chirp-HDFS support.
    <br/>
   </li>
   <li>
    Dinesh Pandiar contributed replica_exchange_protomol, ec2_{submit/remove}_workers, and multiple improvements to Work Queue.
    <br/>
   </li>
   <li>
    Li Yu contributed to the Work Queue implementation.
    <br/>
   </li>
   <li>
    The entire CCL team worked to complete the documentation.
    <br/>
   </li>
  </dir>
  And we also thank:
  <dir>
   <br/>
   <li>
    Nabil Ghodbane for assisting with parrot_run and ROOT.
    <br/>
   </li>
   <li>
    Vanessa Hamar for assisting with parrot_run and mpich.
    <br/>
   </li>
   <li>
    Rodney Walker for assisting with the chirp_server.
    <br/>
   </li>
   <li>
    RJ Nowling and Badi Abdul-Wahid for assisting with the Work Queue system.
    <br/>
   </li>
   <li>
    Andrew Thrasher for assisting with the perl bindings to Work Queue.
    <br/>
   </li>
  </dir>
