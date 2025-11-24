---
layout: "post"
title: "Partly Cloudy with a Chance of Condor"
date: 2009-10-02T03:00:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2009/partly-cloudy-with-a-chance-of-condor/cloud-grid1-895355add2.gif"
description: "We have been thinking about cloud computing quite a bit over the last month. As I noted earlier , cloud computing is hardly a new idea, but it does add a few…"
toc: false
related_posts: true
tags: [condor, hadoop, cloud computing, parrot, grid computing]
---
<div>
  </div>
  <div>
   We have been thinking about cloud computing quite a bit over the last month. As I noted
   <a href="http://dthain.blogspot.com/2008/12/abstractions-grids-and-clouds-at-ieee-e.html">
    earlier
   </a>
   , cloud computing is hardly a new idea, but it does add a few new twists on some old concepts in distributed systems. So, we are spending some time to understand how we can take our existing big applications and make them work with cloud systems and software. It should come as no surprise that there are a number of ways to use
   <a href="http://www.cs.wisc.edu/condor">
    Condor
   </a>
   to harness clouds for big applications.
  </div>
  <div>
  </div>
  <div>
   Two weeks ago, I gave a talk titled
   <a href="http://www.cse.nd.edu/~dthain/talks/thain-geoclouds09.ppt">
    Science in the Clouds
   </a>
   at an NSF workshop on
   <a href="http://www.dataandsearch.org/dsi/events/geoclouds.html">
    Cloud Computing and the Geosciences
   </a>
   . One of the points that I made was that although clouds make it easy to allocate new machines that have exactly the environment you want, they don't solve the problem of work management. That is, if you have one million tasks to do, how do you reliably distribute them between your workstation, your campus computer center, and your cloud workforce? For this, you need some kind of job execution system, which is largely what grid computing has focused on:
  </div>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2009/partly-cloudy-with-a-chance-of-condor/cloud-grid1-895355add2.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  <div>
   As it stands, Condor is pretty good at managing work across multiple different kinds of systems. In fact, today you can go to a commercial service like
   <a href="http://www.cyclecomputing.com/">
    Cycle Computing
   </a>
   , who can build an on-demand Condor pool by allocating machines from Amazon:
  </div>
  <br/>
  <div>
  </div>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2009/partly-cloudy-with-a-chance-of-condor/cloud-grid2-3239859141.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  Just today, we hosted Dhruba Borthakur at Notre Dame.  Dhruba is the project lead for the open source
  <a href="http://hadoop.apache.org/">
   Apache Hadoop
  </a>
  system. We are cooking up some neat ways for Condor and Hadoop to play together. As a first step, one of my students Peter Bui has cooked up a module for
  <a href="http://www.cse.nd.edu/~ccl/software/parrot">
   Parrot
  </a>
  that talks to HDFS, the Hadoop file system. This allows any Unix program -- not just Java -- talk to HDFS, without requiring the kernel configuration and other headaches of using FUSE. Then, you can submit your jobs into a Condor pool and allow them to access data in HDFS as if it were a local file system. The next step is to co-locate the Condor jobs with the Hadoop data that they want to access.
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2009/partly-cloudy-with-a-chance-of-condor/condor-parrot-hadoop-d2ba8e0ce1.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  Finally, if you are interested in cloud computing, you should attend CCA09 -
  <a href="http://www.cca09.org/">
   Cloud Computing and Applications
  </a>
  - to be held in Chicago on October 20th. This will be a focused, one day meeting with speakers from industry, academia who are both building and using cloud computers.
