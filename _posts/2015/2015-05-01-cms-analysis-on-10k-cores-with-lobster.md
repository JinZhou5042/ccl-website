---
layout: "post"
title: "CMS Analysis on 10K Cores with Lobster"
date: 2015-05-01T16:41:00+00:00
author: "Douglas Thain"
description: "The CMS physics group at Notre Dame has created Lobster , a data analysis system that runs on O(10K) cores to process data produced by the CMS experiment at …"
toc: false
related_posts: true
tags: [hep, highlights, physics, lobster, cms, parrot, cvmfs, workqueue]
---
<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhx2TqAWo4-UU3t1wLRcMtDEpWG08YV1X6vQBWXIuizLltNCwUqqHH7-Yz_apHQTDRDscThZjSgDb9OSBnd9ykgBgNC8zfMC5gCPsLXy2cWtG871r1WgTFUXnMB0basZs0ud3OL_qHYUCAo/s1600/Slide1.png" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="240" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhx2TqAWo4-UU3t1wLRcMtDEpWG08YV1X6vQBWXIuizLltNCwUqqHH7-Yz_apHQTDRDscThZjSgDb9OSBnd9ykgBgNC8zfMC5gCPsLXy2cWtG871r1WgTFUXnMB0basZs0ud3OL_qHYUCAo/s320/Slide1.png" width="320"/></a>

The CMS physics group at Notre Dame has created

<a href="http://github.com/matz-e/lobster">Lobster</a>

, a data analysis system that runs on O(10K) cores to process data produced by the

<a href="https://en.wikipedia.org/wiki/Compact_Muon_Solenoid">CMS</a>

experiment at the

<a href="https://en.wikipedia.org/wiki/Large_Hadron_Collider">LHC.</a>

Lobster uses

<a href="http://ccl.cse.nd.edu/software/workqueue">Work Queue</a>

to dispatch tasks to thousands of machines,

<a href="http://ccl.cse.nd.edu/software/parrot">Parrot</a>

with

<a href="http://cernvm.cern.ch/portal/filesystem">CVMFS</a>

to deliver the complex software stack from CERN,

<a href="http://xrootd.org/">XRootD</a>

to deliver the LHC data, and

<a href="http://ccl.cse.nd.edu/software/chirp">Chirp</a>

and

<a href="http://hadoop.apache.org/">Hadoop</a>

to manage the output data.
By using these technologies, Lobster is able to harness arbitrary machines and bring along the CMS computing environment wherever it goes.   At peak, Lobster at ND delivers capacity equal to that of a dedicated CMS Tier-2 facility!

<a href="http://cclnd.blogspot.com/2015/08/cms-analysis-on-20k-cores-using-lobster.html">(read more here)</a>
