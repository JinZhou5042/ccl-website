---
layout: "post"
title: "CMS Analysis on 10K Cores Using Lobster"
date: 2015-08-14T15:19:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2015/cms-analysis-on-10k-cores-using-lobster/300px-CMS_Under_Construction_Apr_05-6da497ae1e.jpg"
description: "We have been working closely with the CMS physics group at Notre Dame for the last year to build Lobster , a data analysis system that runs on O(10K) cores t…"
toc: false
related_posts: true
tags: [hep, physics, lobster, cms, condor, big data, parrot, cvmfs, workqueue]
---

<div style="text-align: justify;">
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2015/cms-analysis-on-10k-cores-using-lobster/300px-CMS_Under_Construction_Apr_05-6da497ae1e.jpg" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   We have been working closely with the CMS physics group at Notre Dame for the last year to build
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
   At peak, Lobster at ND delivers capacity equal to that of a dedicated CMS Tier-2 facility!
  </div>
  <div style="text-align: justify;">
  </div>
  <div style="text-align: justify;">
   Existing data analysis systems for CMS generally require that the user be running in a cluster that has been set up
   <i>
    just so
   </i>
   for the purpose: exactly the right operating system, certain software installed, various user identities present, and so on.  This is fine for the various clusters dedicated to the CMS experiment, but it leaves unused the enormous amount of computing power that can be found at university computing centers (like the
   <a href="http://crc.nd.edu/">
    ND CRC
   </a>
   ), national computing resources (like
   <a href="http://www.xsede.org/">
    XSEDE
   </a>
   or the
   <a href="http://www.opensciencegrid.org/">
    Open Science Grid
   </a>
   ), and public cloud systems.
  </div>
  <div style="text-align: justify;">
  </div>
  <div style="text-align: justify;">
   Lobster is designed to harness clusters that are not dedicated to CMS.  This requires solving two problems:
  </div>
  <ol style="text-align: justify;">
   <li>
    The required software and data are not available on every node.  Instead, Lobster must bring them in at runtime and create the necessary execution system on the fly.
   </li>
   <li>
    A given machine may only be available for a short interval of time before it is taken away and assigned to another user, so Lobster must be efficient at getting things set up, and handy at dealing with disconnections and failures.
   </li>
  </ol>
  <div style="text-align: justify;">
   To do this, we build upon a variety of technologies for distributed computing.  Lobster uses
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
  </div>
  <div style="text-align: justify;">
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2015/cms-analysis-on-10k-cores-using-lobster/Slide1-8126844c86.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
  </div>
  <div style="text-align: justify;">
   Lobster runs effectively on O(10K) cores so far, depending on the CPU/IO ratio of the jobs.  These two graphs show the behavior of a production run on top of
   <a href="http://research.cs.wisc.edu/htcondor">
    HTCondor
   </a>
   at Notre Dame hitting up to 10K cores over the course of a 48-hour run.  The top graph shows the number of tasks running simultaneously, while the bottom shows the number of tasks completed or failed in each 10-minute interval.  Note that about two thirds of the way through, there is a big hiccup, due to an external network outages.  Lobster accepts the failures and keeps on going.
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2015/cms-analysis-on-10k-cores-using-lobster/tasks-f7b57cdfa8.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
  </div>
  <div style="text-align: justify;">
   Lobster has been a team effort between Physics, Computer Science, and the Center for Research Computing: Anna Woodard and Matthias Wolf have taken the lead in developing the core software; Ben Tovar, Patrick Donnelly, and Peter Ivie have improved and debugged Work Queue, Parrot, and Chirp along the way; Charles Mueller, Nil Valls, Kenyi Anampa, and Paul Brenner have all worked to deploy the system at scale in production; Kevin Lannon, Michael Hildreth, and Douglas Thain provide the project leadership.
  </div>
  <div style="text-align: justify;">
  </div>
  <div style="text-align: justify;">
  </div>
  <table style="margin-left: 0px; margin-right: 0px; text-align: left;">
   <tbody>
    <tr>
     <td>
      <div class="row justify-content-sm-center">
       <div class="col-sm-12">
        {% include figure.liquid path="/assets/blog/2015/cms-analysis-on-10k-cores-using-lobster/918.1-edfd775114.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
       </div>
      </div>
     </td>
     <td>
      Anna Woodard, Matthias Wolf, Charles Nicholas Mueller, Ben Tovar, 
Patrick Donnelly, Kenyi Hurtado Anampa, Paul Brenner, Kevin Lannon, and 
Michael Hildreth,
      <a href="http://ccl.cse.nd.edu/research/papers/lobster-poster-chep-2015.pdf">
       <b>
        Exploiting Volatile Opportunistic Computing Resources with Lobster
       </b>
      </a>
      ,
      <i>
       Computing in High Energy Physics
      </i>
      , January, 2015.
     </td>
    </tr>
   </tbody>
  </table>
  <div style="text-align: justify;">
  </div>
  <table style="margin-left: 0px; margin-right: 0px; text-align: left;">
   <tbody>
    <tr align="justify">
     <td>
      <div class="row justify-content-sm-center">
       <div class="col-sm-12">
        {% include figure.liquid path="/assets/blog/2015/cms-analysis-on-10k-cores-using-lobster/915.0-93f8ba92ab.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
       </div>
      </div>
     </td>
     <td>
      <a href="http://ccl.cse.nd.edu/research/papers/lobster-cluster-2015.pdf">
      </a>
      Anna Woodard, Matthias Wolf, Charles Mueller, Nil Valls, Ben Tovar, 
Patrick Donnelly, Peter Ivie, Kenyi Hurtado Anampa, Paul Brenner, 
Douglas Thain, Kevin Lannon and Michael Hildreth,
      <a href="http://ccl.cse.nd.edu/research/papers/lobster-cluster-2015.pdf">
       <b>
        Scaling Data Intensive Physics Applications to 10k Cores on Non-Dedicated Clusters with Lobster
       </b>
      </a>
      ,
      <i>
       IEEE Conference on Cluster Computing
      </i>
      , September, 2015.
     </td>
    </tr>
   </tbody>
  </table>
  <br/>
