---
layout: "post"
title: "REU Project: BXGrid"
date: 2009-08-03T13:00:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2009/reu-project-bxgrid/bxgrid1-8f2b87b9fa.gif"
description: "This post continues last week's subject of summer REU projects. Rachel Witty and Kameron Srimoungchanh worked on BXGrid , our web portal and computing system…"
toc: false
related_posts: true
tags: [bxgrid, condor, makeflow, allpairs]
---

This post continues last week's subject of summer REU projects.

Rachel Witty and Kameron Srimoungchanh worked on
<a href="http://dthain.blogspot.com/2008/12/bxgrid-biometrics-research-grid.html">
BXGrid
</a>
, our web portal and computing system for biometrics research. This project is a collaboration between the
<a href="http://www.cse.nd.edu/%7Eccl">
Cooperative Computing Lab
</a>
and the
<a href="http://www.cse.nd.edu/%7Ecvrl">
Computer Vision Research Lab
</a>
at Notre Dame. Hoang Bui is the lead graduate student on the project. Rachel and Kameron added a bunch of new capabilities to the system; I'll show three examples today.

  <div>
   <div>
    <br/>
    The first is the ability to handle 3-D face scans taken by a specialized camera equipped with a laser rangefinder. The still picture here doesn't quite do it justice, because each white "mask" on the left is a rotating animation of the face. By integrating this data into BXGrid, the 3-D data can be validated against previous ordinary images of the face.
   </div>
   <div>
   </div>
  </div>
  <div>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2009/reu-project-bxgrid/bxgrid1-8f2b87b9fa.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   <br/>
   <div>
    I previously discussed
    <a href="http://dthain.blogspot.com/2008/10/abstractions-for-distributed-computing.html">
     All-Pairs
    </a>
    problems, which are common in biometrics. While we already had the ability to run very large All-Pairs, problems, we never had the capability to view the results easily. Now, with the click of a button, you can set up a small All-Pairs problem and view the results on the portal:
   </div>
   <br/>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2009/reu-project-bxgrid/bxgrid2-61c0f7dce8.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   <br/>
   <div>
    Currently, new data ingested into the system is validated manually by people who must visually check that a eye, face, or whatever matches existing data in the system. Although this can be divided up among a large team of people, it is still time consuming and error prone.
   </div>
   <div>
   </div>
   <div>
    Kameron and Rachel built a system that does a first pass at this task automatically. Using
    <a href="http://dthain.blogspot.com/2009/07/make-as-abstraction-for-distributed.html">
     Makeflow
    </a>
    , they set up a system to export all newly ingested images along with five good images that should match. This results in thousands of jobs sent to our Condor pool, which transform and compare the images. When all the results come back, you get a nice web page that summarizes the images and the results:
   </div>
   <br/>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2009/reu-project-bxgrid/bxgrid3-9ce006349c.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   <br/>
   <div>
    This research was supported in part by the National Science Foundation via grant NSF-CCF-0621434.
   </div>
   <div>
   </div>
  </div>
