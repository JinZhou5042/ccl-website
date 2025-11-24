---
layout: "post"
title: "Scalable Molecular Dynamics with Work Queue at UT-Austin"
date: 2021-12-10T15:28:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2021/scalable-molecular-dynamics-with-work-queue-at-ut-austin/AVvXsEiWD_ncw5sFinI9ARUmuCtMF9D1xUMh6Np7kgYz7Zd5bkgVW2wspvC5-7322a2a7c3.png"
description: "The Biomolecular Engineering Lab at UT-Austin routinely requires large scale molecular dynamics for predicting ligand-protein binding affinity.  The lab make…"
toc: false
related_posts: true
tags: [highlights]
---
<p>The <a href="https://biomol.bme.utexas.edu/">Biomolecular Engineering Lab</a> at UT-Austin routinely requires large scale molecular dynamics for predicting ligand-protein binding affinity.  The lab makes use of the <a href="https://ccl.cse.nd.edu/software/">Cooperative Computing Tools</a> to build and run a variety of distributed applications on their 124 node, 75 GPU cluster.  Custom <a href="https://ccl.cse.nd.edu/software/workqueue">Work Queue</a> applications are run on the cluster for months at a time to generate large amounts of ab-initio data to parameterize the <a href="https://github.com/bdw2292/AMOEBAAnnihilator">AMOEBA</a> model for small molecules, and perform single-point computations via <a href="https://github.com/TinkerTools/poltype2">Poltype 2</a>.  In addition, the lab makes use of the <a href="https://github.com/leeping/forcebalance">ForceBalance</a> application built on Work Queue for liquid property fitting for Van der Waals parameter refinement.</p>

<p><a href="https://blogger.googleusercontent.com/img/a/AVvXsEiWD_ncw5sFinI9ARUmuCtMF9D1xUMh6Np7kgYz7Zd5bkgVW2wspvC5PA8WunmdnhITv7qfU_jWyQDgLCYKFV0yLpwH-iH-Ot-obXTGHVDlPoYsW6unSeaERLmrO09CMzcJRtkGc-Z72I149ZtqCOts6UDv3x8r2FfL89Gb0xVJjHIfB9ausrS4li2g=s787" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em; text-align: center;"><span style="text-align: left;">Credit: Brandon Walker, UT-Austin</span></a></p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2021/scalable-molecular-dynamics-with-work-queue-at-ut-austin/AVvXsEiWD_ncw5sFinI9ARUmuCtMF9D1xUMh6Np7kgYz7Zd5bkgVW2wspvC5-7322a2a7c3.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
