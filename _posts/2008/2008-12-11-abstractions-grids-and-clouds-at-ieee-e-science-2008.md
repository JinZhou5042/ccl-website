---
layout: "post"
title: "Abstractions, Grids, and Clouds at IEEE e-Science 2008"
date: 2008-12-11T18:49:00+00:00
author: "Douglas Thain"
description: "I just attended the IEEE conference on e-Science in Indianapolis, and gave this talk on harnessing distributed systems with high level abstractions . Another…"
toc: false
related_posts: true
tags: [amazon, grid computing, eucalyptus, condor, cloud computing, cyclecomputing, abstractions]
---
I just attended the IEEE conference on e-Science in Indianapolis, and gave this talk on
  <a href="http://www.cse.nd.edu/~dthain/talks/abstractions-dpa08.ppt">
   harnessing distributed systems with high level abstractions
  </a>
  .

Another highlight of the conference was Rich Wolski's talk on
  <a href="http://eucalyptus.cs.ucsb.edu/">
   Eucalyptus
  </a>
  , an open source toolkit for cloud computing.   Like
  <a href="http://workspace.globus.org">
   Nimbus
  </a>
  , it  is API compatible with Amazon's EC2. That is, if your code works with Amazon, you can install Nimbus or Eucalyptus on your on cluster and run your own cloud.

Rich also spoke on the distinction between clouds and grids, which to many are the same idea.  However, he pointed out a very important distinction:

- Clouds provide a
  <strong>
   resource allocation service
  </strong>
  . You ask for a certain number of machines, you get them for a certain amount of time, and you can choose to use them however you like. This gives you guaranteed service, which is great if you are running a web server, but can lead to underutilization if your goal is to run a large number of simulations.

- Grids provide a
  <strong>
   task execution service
  </strong>
  . You submit work to be executed, and the system decides where and when to execute the tasks, perhaps preempting or migrating them along the way. You have no guarantees of service, but the system will get very high utilization, making it good for high throughput computing.

As such, you can combine the two ideas together. For example,
  <a href="http://www.cyclecomputing.com/">
   Cycle Computing
  </a>
  provides a value added web service that employs both Amazon and Condor. You request a certain number of CPUs to execute a certain number of tasks. Cycle allocates the CPUs using Amazon, installs Condor on the nodes, and then runs the jobs.  The result is a grid running on a cloud.
