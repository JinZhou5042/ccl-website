---
layout: "post"
title: "CCTools 7.6.0 Released"
date: 2023-07-07T18:14:00+00:00
author: "Douglas Thain"
description: "We are pleased to announce the release of version 7.6.0 of the Cooperative Computing Tools from the University of Notre Dame, including TaskVine, Work Queue,…"
toc: false
related_posts: true
tags: []
---
<p>
   <span>
    We are pleased to announce the release of version 7.6.0
   </span>
   <br/>
   <span>
    of the Cooperative Computing Tools from the University of Notre Dame,
   </span>
   <br/>
   <span>
    including TaskVine, Work Queue, Makeflow, Parrot, Chirp, and other software.
   </span>
   <span>
    - Docs: https://cctools.readthedocs.io
   </span>
   <br/>
   <span>
    - Download: http://ccl.cse.nd.edu/software/download
   </span>
   <br/>
   <span>
    - Forum: http://ccl.cse.nd.edu/community/forum
   </span>
   <span>
    This release introduces a number of performance, usability, and
   </span>
   <br/>
   <span>
    documentation improvements to the TaskVine workflow executor.
   </span>
   <span>
    TaskVine -
   </span>
   <br/>
   <span>
    - Integration with Parsl workflow system. (Thanh Phung)
   </span>
   <br/>
   <span>
    - Integration with Dask workflow system (Ben Tovar)
   </span>
   <br/>
   <span>
    - Optimized scheduling performance with large numbers of workers. (Colin Thomas)
   </span>
   <br/>
   <span>
    - Enhanced dispatch performance for small tasks. (Colin Thomas)
   </span>
   <br/>
   <span>
    - vine_submit_workers combined tool for submtting workers.  (Thanh Phung)
   </span>
   <br/>
   <span>
    - Improved generation of file cache names (Barry Sly-Delgado)
   </span>
   <br/>
   <span>
    - fetch_file interface to obtain cached files in the cluster.  (Douglas Thain)
   </span>
   <br/>
   <span>
    - Worker-to-worker authentication for peer transfers.
   </span>
   <br/>
   <span>
    - Updated documentation.  (All)
   </span>
   <span>
    Work Queue:
   </span>
   <br/>
   <span>
    - Enhanced dispatch performance for small tasks. (Colin Thomas)
   </span>
   <span>
    Makeflow:
   </span>
   <br/>
   <span>
    - Now supports TaskVine as an execution mode.  (Douglas Thain)
   </span>
   <span>
    General:
   </span>
   <br/>
   <span>
    - TCP catalog updates are performed in a background process to reduce latency.
   </span>
   <span>
    Thanks goes to the contributors for many features, bug fixes, and tests:
   </span>
   <span>
    Thanh Son Phung
   </span>
   <br/>
   <span>
    Barry Sly-Delgado
   </span>
   <br/>
   <span>
    Colin Thomas
   </span>
   <br/>
   <span>
    Ben Tovar
   </span>
   <br/>
   <span>
    Douglas Thain
   </span>
   <span>
    Enjoy!
   </span>
  </p>
  <div>
   <span>
    <br/>
   </span>
  </div>
