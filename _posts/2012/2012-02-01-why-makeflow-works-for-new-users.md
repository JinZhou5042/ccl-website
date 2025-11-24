---
layout: "post"
title: "Why Makeflow Works for New Users"
date: 2012-02-01T21:27:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2012/why-makeflow-works-for-new-users/makeflow-88051f2210.png"
description: "In past articles , I have introduced Makeflow , which is a large scale workflow engine that we have created at Notre Dame. Of course, Makeflow is certainly n…"
toc: false
related_posts: true
tags: [work queue, makeflow]
---

<div>
   In past
   <a href="http://dthain.blogspot.com/2009/07/make-as-abstraction-for-distributed.html">
    articles
   </a>
   , I have introduced
   <a href="http://www.nd.edu/%7Eccl/software/makeflow">
    Makeflow
   </a>
   , which is a large scale workflow engine that we have created at Notre Dame.

Of course, Makeflow is certainly not the first or only workflow engine out there. But, Makeflow does have several unique properties that make it an interesting platform for bringing new people into the world of distributed computing. And, it is the right level of abstraction that allows us to address some fundamental computer science problems that result.

Briefly, Makeflow is a tool that lets the user express a large number of tasks by writing them down as a conventional makefile. You can see an example on our web page. A Makeflow can be just a few rules long, or it can consist of hundreds to thousands of tasks, like this EST pipeline workflow:

  </div>
  <div>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2012/why-makeflow-works-for-new-users/makeflow-88051f2210.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   Once the workflow is written down, you can then run Makeflow in several different ways.  You can run it entirely on your workstation, using multiple cores.  You can ask Makeflow to send the jobs to your local
   <a href="http://www.cs.wisc.edu/condor">
    Condor
   </a>
   pool, PBS or SGE cluster, or other batch system.  Or, you can start the (included)
   <a href="http://www.nd.edu/%7Eccl/software/workqueue">
    Work Queue
   </a>
   system on a few machines that you happen to have handy, and Makeflow will run the jobs there.

Over the last few years, we have had very good experience getting new users to adopt Makeflow, ranging from highly sophisticated computational scientists all the way to college sophomores learning the first principles of distributed computing. There are a couple of reasons why this is so:

  </div>
  <ul>
   <li>
    <span style="font-weight: bold;">
     A simple and familiar language.
    </span>
    Makefiles are already a well known and widely used way of expressing dependency and concurrency, so it is easy to explain.  Unlike more elaborate languages, it is brief and easy to read and write by hand.  A text-based language can be versioned and tracked by any existing source control method.
   </li>
   <li>
    <span style="font-weight: bold;">
     A neutral interface and a portable implementation.
    </span>
    Nothing in a Makeflow references any particular batch system or distributed computing technology, so existing workflows can be easily moved between computing systems.  If you I use Condor and you use SGE, there is nothing to prevent my workflow from running on your system.
   </li>
   <li>
    <span style="font-weight: bold;">
     The data needs are explicit.
    </span>
    A subtle but significant difference between Make and Makeflow is that Makeflow treats your statement of file dependencies very seriously.  That is, you must state exactly which files (or directories) that your computation depends upon.  This is slightly inconvenient at first, but vastly improves the ability of Makeflow to create the right execution environment, verify a correct execution, and manage storage and network resources appropriately.
   </li>
   <li>
    <span style="font-weight: bold;">
     An easy on-ramp to large resources.
    </span>
    We have gone to great lengths to make it absolutely trivial to run Makeflow on a single machine with no distributed infrastructure.  Using the same framework, you can move to harnessing a few machines in your lab (with Work Queue) and then progressively scale up to enormous scale using clusters, clouds, and grids.  We have users running on 5 cores, 5000 cores, and everything in between.
   </li>
  </ul>
  <div>
   Of course, our objective is not simply to build software.  Makeflow is a starting point for engaging our research collaborators, which allows us to explore some hard computer science problems related to workflows.  In the next article, I will discuss some of those challenges.
  </div>
