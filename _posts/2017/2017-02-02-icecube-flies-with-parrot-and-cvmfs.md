---
layout: "post"
title: "IceCube Flies with Parrot and CVMFS"
date: 2017-02-02T21:25:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2017/icecube-flies-with-parrot-and-cvmfs/55a799640d.png"
description: "IceCube is a neutrino detector built at the South Pole by instrumenting about a cubic kilometer of ice with 5160 light sensors. The IceCube data is analyzed …"
toc: false
related_posts: true
tags: [highlights, icecube, parrot, cvmfs]
categories: [highlights]
carousel: true
---

<span>
  </span>
  <br/>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2017/icecube-flies-with-parrot-and-cvmfs/55a799640d.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <span style="background-color: white; color: #222222; font-family: inherit;">
   <a href="http://icecube.wisc.edu/">
    IceCube
   </a>
   is a neutrino detector built at the South Pole by instrumenting about a cubic kilometer of ice with 5160 light sensors. The IceCube data is analyzed by a collaboration of about 300 scientists from 12 countries. Data analysis relies on the precise knowledge of detector characteristics, which are evaluated by vast amounts of Monte Carlo simulation.  On any given day, 1000-5000 jobs are continuously running.
  </span>
  <br/>
  <span style="font-family: inherit;">
   <br/>
  </span>
  <span style="font-family: inherit;">
   <span style="background-color: white; color: #222222;">
    Recently, the experiment began using
    <a href="http://ccl.cse.nd.edu/software/parrot">
     Parrot
    </a>
    to get their code running on GPU clusters at
   </span>
   <span style="background-color: white; color: #222222;">
    <a href="http://xsede.org/">
     XSEDE
    </a>
    sites (Comet, Bridges, and xStream) and the
    <a href="http://opensciencegrid.org/">
     Open Science Grid
    </a>
    .  IceCube relies on software distribution via
   </span>
   <a href="https://cernvm.cern.ch/portal/filesystem" style="background-color: white;">
    CVMFS
   </a>
   , but not all execution sites provide the necessary FUSE modules.  By using Parrot, jobs can attach to remote software repositories without requiring special privileges or kernel modules.
  </span>
  <br/>
  <span style="font-family: inherit;">
   <br/>
  </span>
  <i>
   <span style="font-family: inherit;">
    - Courtesy of Gonzalo Merino, University of Wisconsin
   </span>
   - Madison
  </i>
