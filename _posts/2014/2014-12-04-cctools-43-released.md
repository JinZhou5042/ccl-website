---
layout: "post"
title: "CCTools 4.3 released"
date: 2014-12-04T19:37:00+00:00
author: "Benjamin Tovar"
description: "The Cooperative Computing Lab is pleased to announce the release of
version 4.3.0 of the Cooperative Computing Tools, including Parrot,
Chirp, Makeflow, Work…"
toc: false
related_posts: true
tags: []
---

The Cooperative Computing Lab is pleased to announce the release of
version 4.3.0 of the Cooperative Computing Tools, including Parrot,
Chirp, Makeflow, WorkQueue, Weaver, DeltaDB, SAND, All-Pairs, and
other software.

This release has some important changes:

  <ul>
   <li>
    Peter Bui's Weaver is included. Weaver is a high level interface to
  Makeflow which allows to describe workflows using python. For more
  information see cctools/doc/man/weaver.1 and cctools/weaver/examples
  in the distribution.
   </li>
   <li>
    This is also the first release to include DeltaDB, written by Peter
  Ivie and Douglas Thain. DeltaDB implements a model for time-varying
  schema-free data and underlies the query engine for the CCTools
  catalog server.
   </li>
   <li>
    Backwards compatibility of master and workers pre-4.3 is broken.
  Workers from 4.3 cannot connect to masters pre-4.3, and masters from
  4.3 will not accept connection from workers pre-4.3. The API did not
  change, thus unless you want to take advantage of new features, you
  should not need to modify your code.
   </li>
   <li>
    The interface to work_queue_pool has been simplified, and all
  options have to be specified at the command line. Please see
  cctools/doc/man/work_queue_pool.1 for more information.
   </li>
   <li>
    Undefined environment variables used in Makeflow are no longer
  allowed by the parser.
   </li>
   <li>
    Binaries for 32bit architectures are not being distributed as part
  of this release. Please let us know if you need them.
   </li>
  </ul>
  <h2>
   Other highlights
  </h2>
  <ul>
   <li>
    [WorkQueue] Perl object oriented bindings have been added. See
  perldoc Work_Queue::Queue [B. Tovar]
   </li>
   <li>
    [WorkQueue] A priority per task can now be specified. [D. Thain,
  B. Tovar]
   </li>
   <li>
    [WorkQueue] --single-shot option added to workers to exit quickly
  after the master disconnects [D. Thain].
   </li>
   <li>
    [WorkQueue] Hierarchy statistics when using foremen are now
  available. [B. Tovar, M. Wolf]
   </li>
   <li>
    [WorkQueue] work_queue_pool code cleanup. [D. Thain, B. Tovar]
   </li>
   <li>
    [Makeflow] New lexer and parser with cleaner semantics and error
  reporting. [B. Tovar]
   </li>
   <li>
    [Parrot] Bug fix that allows parrot's temp-dir to be on GPFS. [P. Donnelly]
   </li>
   <li>
    [Parrot] Several fixes to better support executables with threads. [P. Donnelly]
   </li>
   <li>
    [Parrot] Update to use the newer ptrace API. [P. Donnelly]
   </li>
   <li>
    [Parrot] Several updates to parrot_package_run. See
  cctools/doc/man/parrot_package_run. [H. Meng]
   </li>
   <li>
    [Parrot] iRODS 4.x support. [D. Thain]
   </li>
  </ul>
  <p>
   You can download the software here:
   <a href="http://ccl.cse.nd.edu/software/download">
    cctools download
   </a>
  </p>
  <p>
   Thanks goes to the contributors and testers for this release:

Peter Bui,
Patrick Donnelly,
Nick Hazekamp,
Peter Ivie,
Kangkang Li,
Haiyan Meng,
Peter Sempolinski,
Douglas Thain,
Ben Tovar,
Lee-Ping Wang,
Matthias Wolf,
Anna Woodard, and
Charles Zheng

  </p>
  <p>
   Enjoy!
  </p>
