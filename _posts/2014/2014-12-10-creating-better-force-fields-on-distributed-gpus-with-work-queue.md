---
layout: "post"
title: "Creating Better Force Fields on Distributed GPUs with Work Queue"
date: 2014-12-10T15:15:00+00:00
author: "Douglas Thain"
description: "ForceBalance is an 
open source software tool for creating accurate force fields for 
molecular mechanics simulation using flexible combinations of reference…"
toc: false
related_posts: true
tags: [work queue, forcebalance, highlights, molecular dynamics, archived-blog]
---
<a href="https://simtk.org/home/forcebalance">ForceBalance</a>

is an 
open source software tool for creating accurate force fields for 
molecular mechanics simulation using flexible combinations of reference 
data from experimental measurements and theoretical calculations. These 
force fields are used to simulate the dynamics and physical properties 
of molecules in chemistry and biochemistry.

<br/>

<br/>

The

<a href="http://www.nd.edu/%7Eccl/software/workqueue"> Work Queue</a>

framework gives ForceBalance the ability to distribute computationally 
intensive components of a force field optimization calculation in a 
highly flexible way. For example, each optimization cycle launched by 
ForceBalance may require running 50 molecular dynamics simulations, each
 of which may take 10-20 hours on a high end NVIDIA GPU. While GPU 
computing resources are available, it is rare to find 50 available GPU 
nodes on any single supercomputer or HPC cluster. With Work Queue, it is
 possible to distribute the simulations across several HPC clusters, 
including the Certainty HPC cluster at Stanford, the Keeneland GPU 
cluster managed by Georgia Tech and Oak Ridge National Laboratories, and
 the Stampede supercomputer managed by the University of Texas. This 
makes it possible to run many simulations in parallel and complete the 
high level optimization in weeks instead of years.

<br/>

<br/>

<i> </i>

<i>- Lee-Ping Wang, Stanford University</i>

Blogger automated replacement: "https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?url=http%3A%2F%2Fccl.cse.nd.edu%2Fcommunity%2Fhighlights%2Fforcebalance.png&amp;container=blogger&amp;gadget=a&amp;rewriteMime=image%2F*" with "https://blogger.googleusercontent.com/img/proxy/AVvXsEj8pmZSBPjlKR2lcPrHkvJsQeveMVL9FXzqRGPh5qXw8OXl7_4n8YzGWErC-6MkzBNRk4MlyS37NLxJH3RE8Emg88MCOzZOEJBLupx-MyYsmUZ4SoMWf5ACRKyTh264cgxOET-lMERUNJ2b50Tdt0NMAHw_beSnM9gKc44="
