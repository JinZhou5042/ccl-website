---
layout: "post"
title: "REU Project: Biocompute"
date: 2009-07-28T16:01:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2009/reu-project-biocompute/biocompute1-d25c96624c.gif"
description: "This summer, we hosted four REU students who contributed to two web portals for distributed computing: Biocompute and BXGrid. I'll write about one this week …"
toc: false
related_posts: true
tags: [condor, bxgrid, makeflow, biocompute]
---

This summer, we hosted four REU students who contributed to two web portals for distributed computing: Biocompute and BXGrid. I'll write about one this week and the other next week.
<br/>

  <div>
  </div>
  <div>
   REU students Ryan Jansen and Joey Rich worked with recent grad Rory Carmichael on
   <a href="http://biocompute.cse.nd.edu/">
    Biocompute
   </a>
   , our web portal and computing system for bioinformatics research. Biocompute was originally created by Patrick Braga-Henebry for his B.S. honors thesis, and we are now putting it into production in collaboration with the
   <a href="http://biocore.cse.nd.edu/">
    Bioinformatics Core Facility
   </a>
   at Notre Dame.

Biocompute allows researchers at Notre Dame to run standard bioinformatics tools like BLAST, and then share and manage the results. The new twist is that we transparently parallelize the tasks and run them on our campus
<a href="http://www.cs.wisc.edu/condor">
Condor
</a>
pool. This allows people to run tasks that were previously impossible: we routinely run workloads that would take months on a single machine, but get completed in hours on Biocompute.

  </div>
  <br/>
  <div>
   The user simply fills out a form specifying the query, genomic databases, and so forth:
  </div>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2009/reu-project-biocompute/biocompute1-d25c96624c.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  Biocompute transforms the request into a large
  <a href="http://dthain.blogspot.com/2009/07/make-as-abstraction-for-distributed.html">
   Makeflow
  </a>
  job that looks like this:
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2009/reu-project-biocompute/makeflow-medium-3d483ac05b.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  Users and administrators can view the progress of each job:
  <div>
   <div>
   </div>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2009/reu-project-biocompute/biocompute2-55180f53da.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   <br/>
   When the task is complete, you can browse the results, download them, or feed them into another tool on the web site:
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2009/reu-project-biocompute/biocompute3-047702f564.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   This work was sponsored in part by the Bioinformatics Core Facility and the National Science Foundation under grant NSF-06-43229.
  </div>
