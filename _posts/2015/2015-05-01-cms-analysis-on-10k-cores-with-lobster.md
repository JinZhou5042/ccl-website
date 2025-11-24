---
layout: "post"
title: "CMS Analysis on 10K Cores with Lobster"
date: 2015-05-01T16:41:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2015/cms-analysis-on-10k-cores-with-lobster/Slide1-8126844c86.png"
description: "The CMS physics group at Notre Dame has created Lobster , a data analysis system that runs on O(10K) cores to process data produced by the CMS experiment at …"
toc: false
related_posts: true
tags: [hep, highlights, physics, lobster, cms, parrot, cvmfs, workqueue]
categories: [highlights]
---
<div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2015/cms-analysis-on-10k-cores-with-lobster/Slide1-8126844c86.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  The CMS physics group at Notre Dame has created
  <a href="http://github.com/matz-e/lobster">
   Lobster
  </a>
  , a data analysis system that runs on O(10K) cores to process data produced by the
  <a href="https://en.wikipedia.org/wiki/Compact_Muon_Solenoid">
   CMS
  </a>
  experiment at the
  <a href="https://en.wikipedia.org/wiki/Large_Hadron_Collider">
   LHC.
  </a>
  Lobster uses
  <a href="http://ccl.cse.nd.edu/software/workqueue">
   Work Queue
  </a>
  to dispatch tasks to thousands of machines,
  <a href="http://ccl.cse.nd.edu/software/parrot">
   Parrot
  </a>
  with
  <a href="http://cernvm.cern.ch/portal/filesystem">
   CVMFS
  </a>
  to deliver the complex software stack from CERN,
  <a href="http://xrootd.org/">
   XRootD
  </a>
  to deliver the LHC data, and
  <a href="http://ccl.cse.nd.edu/software/chirp">
   Chirp
  </a>
  and
  <a href="http://hadoop.apache.org/">
   Hadoop
  </a>
  to manage the output data.
By using these technologies, Lobster is able to harness arbitrary machines and bring along the CMS computing environment wherever it goes.   At peak, Lobster at ND delivers capacity equal to that of a dedicated CMS Tier-2 facility!
  <a href="http://cclnd.blogspot.com/2015/08/cms-analysis-on-20k-cores-using-lobster.html">
   (read more here)
  </a>
