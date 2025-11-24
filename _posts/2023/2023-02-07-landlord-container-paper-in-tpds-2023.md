---
layout: "post"
title: "Landlord Container Paper in TPDS 2023"
date: 2023-02-07T15:37:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2023/landlord-container-paper-in-tpds-2023/Screen-Shot-2023-02-07-at-9.54.07-AM-41ad7f7671.png"
description: "Our latest work on container management was recently accepted to IEEE TPDS: LANDLORD: Coordinating Dynamic Software Environments to Reduce Container Sprawl h…"
toc: false
related_posts: true
tags: []
---
<p>Our latest work on container management was recently accepted to IEEE TPDS:<span style="background-color: white; font-family: times; font-size: 16px;"> </span></p>

<p><b style="font-family: times; font-size: 16px;"><a href="http://dx.doi.org/10.1109/TPDS.2023.3241598" target="_blank">LANDLORD: Coordinating Dynamic Software Environments to Reduce Container Sprawl</a></b></p>

<p>his paper is the result of a continuing collaboration between the CCL at Notre Dame and the Parsl group at University of Chicago, led by Dr. Kyle Chard.  Recent PhD grad Tim Shaffer led this work as part of a DOE Computational Science Graduate Fellowship, and current PhD student Thanh Phung joined the project and helped us to view the problem from a clustering perspective.</p>

<p><div><br/></div></p>

<p>The problem is this: a variety of online services (like Binder, FuncX, and others) generate container images from software environment specifications, like a list of Conda packages.  These images are used to execute code on clusters: sometimes long-running code like simulations, but also sometimes short bits of code, maybe even a single Python function call.  If every user of the system asks for a slightly different software environment, then the system will quickly run out of space from those large container environments.  ("container sprawl")  So, we need some entity to manage the space and decide what containers to generate from packages, and which ones to delete:</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/landlord-container-paper-in-tpds-2023/Screen-Shot-2023-02-07-at-9.54.07-AM-41ad7f7671.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<p>We observe that multiple requests might be satisfied by the same container.  For example, these three jobs all express some constraints on packages A and B.  (And one of those jobs doesn't care about the version at all.  If we figure out the overlap between those requests, we can just use a single image to satisfy all three:</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/landlord-container-paper-in-tpds-2023/Screen-Shot-2023-02-07-at-9.54.28-AM-6f49a54ade.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/landlord-container-paper-in-tpds-2023/Screen-Shot-2023-02-07-at-9.54.14-AM-34c82339cf.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<p>Ok, so now how do we pick alpha?  We evaluated this by running the Landlord algorithm through traces of software requests from high energy physics workloads and a public trace of binder requests.</p>

<p>There are two extremes to avoid: if alpha is very small, then we end up with a small number of very large containers.   This is good for managing the shared cache, but bad because we have to keep moving very large containers out to the compute nodes.  (And they may not fit!). On the other hand, if alpha is very large, then we end up with a large number of small containers.  This results in a lot of duplication of packages, so the shared cache fills up faster, but the images are small and easy to move around.</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/landlord-container-paper-in-tpds-2023/Screen-Shot-2023-02-07-at-9.55.03-AM-3e8db30528.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

As in most computer systems, there isn't one single number that is the answer: rather, it is a tradeoff between desiderata. Here, we have a broad sweet spot around alpha=0.8.  But the good news is that the system has a broad "operational zone" in which the tradeoff is productive.

<br/>

<p>Sound interesting?  Check out the full paper:</p>

<p><ul><li><span style="background-color: white; font-family: times; font-size: 16px;">Tim Shaffer, Thanh Son Phung, Kyle Chard, and Douglas Thain, </span><a href="http://ccl.cse.nd.edu/research/papers/landlord-tpds-2023-preprint.pdf" style="color: navy; font-family: times; font-size: 16px;"><b>LANDLORD: Coordinating Dynamic Software Environments to Reduce Container Sprawl</b></a><span style="background-color: white; font-family: times; font-size: 16px;">, </span><i style="font-family: times; font-size: 16px;">IEEE Transactions on Parallel and Distributed Systems</i><span style="background-color: white; font-family: times; font-size: 16px;">, to appear in </span><span style="background-color: white; font-family: times; font-size: 16px;">2023. DOI: </span><a href="http://dx.doi.org/10.1109/TPDS.2023.3241598" style="color: navy; font-family: times; font-size: 16px;">10.1109/TPDS.2023.3241598</a></li></ul></p>
