---
layout: "post"
title: "Analysis of ATLAS High Energy Physics Data with Chirp"
date: 2011-08-01T18:11:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2011/analysis-of-atlas-high-energy-physics-data-with-chirp/atlas-43c14c8bde.png"
description: "The Chirp filesystem has been in production use by the ATLAS experiment at the Large Hadron Collider facility in Geneva.  The Chirp file server provides stag…"
toc: false
related_posts: true
tags: [chirp, hep, atlas]
---

<div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2011/analysis-of-atlas-high-energy-physics-data-with-chirp/atlas-43c14c8bde.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  The
  <a href="http://www.nd.edu/%7Eccl/software/chirp">
   Chirp
  </a>
  filesystem has been in production use by the
  <a href="http://en.wikipedia.org/wiki/ATLAS_experiment">
   ATLAS experiment
  </a>
  at the
  <a href="http://en.wikipedia.org/wiki/Large_Hadron_Collider">
   Large Hadron Collider
  </a>
  facility in Geneva.  The Chirp file server provides staging access to 
analysis data accessed by pilot jobs dispatched through the Panda 
workload management system.  The system has been running for about 2 
years on a 2 TB filesystem with a constant workload of about 10K file 
stores per day.  The key capability provided by Chirp is the ability to 
provide fine-grained authorization to data based on the
  <br/>
  <a href="http://www.globus.org/security/overview.html">
   Globus Security infrastructure
  </a>
  .
  <i>
   - Rodney Walker and Paul Nillson, Ludwig-Maximilians University Muenchen and the ATLAS Collaboration
  </i>
