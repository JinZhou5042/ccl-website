---
layout: "post"
title: "Global Filesystems Paper in IEEE CiSE"
date: 2015-11-09T19:27:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2015/global-filesystems-paper-in-ieee-cise/926.0-62bbb6c88f.png"
description: "Our latest paper, in collaboration with Jakob Blomer and the CVMFS team at CERN, describes the evolution of global-scale filesystems to serve the needs of th…"
toc: false
related_posts: true
tags: []
---

Our latest paper, in collaboration with Jakob Blomer and the CVMFS team at CERN, describes the evolution of global-scale filesystems to serve the needs of the world-wide LHC experiment collaborations:

  <ul>
   <li>
    Jakob Blomer, Predrag Buncic, Rene Meusel, Gerardo Ganis, Igor Sfiligoi and Douglas Thain,
    <a href="http://dx.doi.org/10.1109/MCSE.2015.111">
     The Evolution of Global Scale Filesystems for Scientific Software Distribution
    </a>
    ,
IEEE/AIP Computing in Science and Engineering, 17(6), pages 61-71, December, 2015. DOI: 10.1109/MCSE.2015.111
   </li>
  </ul>
  <br/>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2015/global-filesystems-paper-in-ieee-cise/926.0-62bbb6c88f.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <i>
   Delivering complex software across a worldwide distributed system is a major challenge in high-throughput scientific computing. The problem arises at different scales for many scientific communities that use grids, clouds, and distributed clusters to satisfy their computing needs. For high-energy physics (HEP) collaborations dealing with large amounts of data that rely on hundreds of thousands of cores spread around the world for data processing, the challenge is particularly acute. To serve the needs of the HEP community, several iterations were made to create a scalable, user-level filesystem that delivers software worldwide on a daily basis. The implementation was designed in 2006 to serve the needs of one experiment running on thousands of machines. Since that time, this idea evolved into a new production global-scale filesystem serving the needs of multiple science communities on hundreds of thousands of machines around the world.
  </i>
