---
layout: "post"
title: "Global Access to High Energy Physics Software with Parrot and CVMFS"
date: 2012-10-01T18:08:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2012/global-access-to-high-energy-physics-software-with-parrot-and-cvmfs/cms-717ba43dc6.jpg"
description: "Scientists searching for the Higgs boson have profited from Parrot's new support for the CernVM Filesystem (CVMFS) , a network filesystem tailored to providi…"
toc: false
related_posts: true
tags: [hep, osg, highlights, cms, cvmfs, parrot]
---
<div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2012/global-access-to-high-energy-physics-software-with-parrot-and-cvmfs/cms-717ba43dc6.jpg" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  Scientists searching for the Higgs boson have profited from Parrot's new support for the
  <a href="http://cernvm.cern.ch/portal/startcvmfs">
   CernVM Filesystem (CVMFS)
  </a>
  , a network filesystem tailored to providing world-wide access to software installations. By using
  <a href="http://www.nd.edu/%7Eccl/software/parrot">
   Parrot
  </a>
  , CVMFS, and additional components integrated by the
  <a href="http://osg-docdb.opensciencegrid.org/cgi-bin/ShowDocument?docid=1025">
   Any Data, Anytime, Anywhere
  </a>
  project, physicists working in the
  <a href="http://en.wikipedia.org/wiki/Compact_Muon_Solenoid">
   Compact Muon Solenoid
  </a>
  experiment have been able to create a uniform computing environment across the
  <a href="http://www.opensciencegrid.org/">
   Open Science Grid
  </a>
  .
  Instead of maintaining large software installations at each 
participating institution, Parrot is used to provide access to a single 
highly-available CVMFS installation of the software from which files are
 downloaded as needed and aggressively cached for efficiency.  A pilot 
project at the University of Wisconsin has demonstrated the feasibility 
of this approach by exporting excess compute jobs to run in the Open 
Science Grid, opportunistically harnessing 370,000 CPU-hours across 15 
sites with seamless access to 400 gigabytes of software in the Wisconsin
 CVMFS repository.
  <br/>
  <i>
  </i>
  <br/>
  <i>
   - Dan Bradley, University of Wisconsin and the Open Science Grid
  </i>
  <br/>
