---
layout: "post"
title: "REU Project: Biocompute"
date: 2009-07-28T16:01:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2009/reu-project-biocompute/biocompute2-55180f53da.gif"
description: "This summer, we hosted four REU students who contributed to two web portals for distributed computing: Biocompute and BXGrid. I'll write about one this week …"
toc: false
related_posts: true
tags: [condor, bxgrid, makeflow, biocompute]
---
This summer, we hosted four REU students who contributed to two web portals for distributed computing: Biocompute and BXGrid. I'll write about one this week and the other next week.

<br/>

<p>REU students Ryan Jansen and Joey Rich worked with recent grad Rory Carmichael on <a href="http://biocompute.cse.nd.edu/">Biocompute</a>, our web portal and computing system for bioinformatics research. Biocompute was originally created by Patrick Braga-Henebry for his B.S. honors thesis, and we are now putting it into production in collaboration with the <a href="http://biocore.cse.nd.edu/">Bioinformatics Core Facility</a> at Notre Dame.<br/><br/>Biocompute allows researchers at Notre Dame to run standard bioinformatics tools like BLAST, and then share and manage the results. The new twist is that we transparently parallelize the tasks and run them on our campus <a href="http://www.cs.wisc.edu/condor">Condor </a>pool. This allows people to run tasks that were previously impossible: we routinely run workloads that would take months on a single machine, but get completed in hours on Biocompute.</p>

<br/>

<p>The user simply fills out a form specifying the query, genomic databases, and so forth:<br/></p>

<img alt="" border="0" id="BLOGGER_PHOTO_ID_5363543676812301858" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOdG50obMF1dV3bkqgzbvu6AWMDiv_7tliLYhkGAntZBR7hePWl0JYzX0Tk2bdqorTlBpvxLi85dBjV6Pc6TWXozNq3GznBGKrfIyVzivXNCreLfqbiQZ3qpT0GZvt8VLdrbgQlMAvrdo/s400/biocompute1.gif" style="TEXT-ALIGN: center; MARGIN: 0px auto 10px; WIDTH: 400px; DISPLAY: block; HEIGHT: 335px; CURSOR: hand;"/>

<br/>

Biocompute transforms the request into a large

<a href="http://dthain.blogspot.com/2009/07/make-as-abstraction-for-distributed.html">Makeflow </a>

job that looks like this:

<br/>

<br/>

<img alt="" border="0" id="BLOGGER_PHOTO_ID_5363544069639041794" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhL-oCHlaGdC08yUAhOtjx4qC_GSrQqpkTIt5YyB2ZUfuEgwWtU9UYW5pNGU-VPX7y9zByv2TmVmjrhBW6D88n4QiL2SOogOVd-e8gV-DScJ2AnS2QDmFRh1oD70rufN9w2-66nJfCUBf8/s400/makeflow-medium.gif" style="TEXT-ALIGN: center; MARGIN: 0px auto 10px; WIDTH: 400px; DISPLAY: block; HEIGHT: 185px; CURSOR: hand;"/>

<br/>

Users and administrators can view the progress of each job:

<br/>

<br/>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2009/reu-project-biocompute/biocompute2-55180f53da.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2009/reu-project-biocompute/biocompute3-047702f564.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
