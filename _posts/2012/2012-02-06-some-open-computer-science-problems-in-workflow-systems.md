---
layout: "post"
title: "Some Open Computer Science Problems in Workflow Systems"
date: 2012-02-06T13:00:00+00:00
author: "Douglas Thain"
description: "In the previous article , I extolled the virtues of Makeflow , which has  been very effective at engaging new users and allowing them to express their workfl…"
toc: false
related_posts: true
tags: [work queue, makeflow]
---

In the previous
<a href="http://dthain.blogspot.com/2012/02/why-makeflow-works-for-new-users.html">
article
</a>
, I extolled the virtues of
<a href="http://www.cse.nd.edu/%7Eccl/software/makeflow">
Makeflow
</a>
, which has been very effective at engaging new users and allowing them to express their workflows in a way that facilitates parallel and distributed computing. We can very consistently get new users going from one laptop to 100 cores in a distributed system very easily.

However, as we develop experience in scaling up workflows to thousands of cores across wide area distributed systems, a number of interesting computer science challenges have emerged. These problems are not specific to Makeflow, but can be found in most workflow systems:
<b>
Capacity Management
<br/>
</b>
Just because a workflow expresses thousand-way concurrency doesn't mean that it is actually a good idea to run it on one thousand nodes! The cost of moving data to and from the execution nodes may outweigh the benefit of the added computational power. If one uses fewer nodes than the available parallelism, then it may be possible to pay the data movement cost once, and then exploit it multiple times. For most workflows, there is a "sweet spot" at which performance is significantly maximized. Of course, users don't want to discover this by experiment, they need some tool to recommend an appropriate size for the given workflow.

  <div>
  </div>
  <div>
   <b>
    Software Engineering Tools
    <br/>
   </b>
   A workflow is just another kind of program: it has source code that  must be managed, dependencies that must be gathered, and a history of  modification to be tracked.  In this sense, we are badly in need of  tools for manipulating workflows in coherent ways.  For example, we need  a
   <i>
    linker
   </i>
   that can take a workflow, find all the dependent components, and gather them together in one package.  We need a
   <i>
    loader
   </i>
   that can take an existing workflow, load it into a computing system,  and then update file names and other links to accomodate it.  We need a
   <i>
    profiler
   </i>
   that can report on the time spent across multiple runs of a workflow, so as to determine where problem spots may be.
  </div>
  <div>
  </div>
  <div>
   <b>
    <br/>
   </b>
   <span style="font-weight: bold;">
    Portability and Reproducibility
    <br/>
   </span>
   Makeflow itself enables portability across execution systems.  For example, you can run your application on Condor or SGE without modification.  However, that doesn't mean that your applications are actually portable.  If one cluster runs Blue Beanie Linux 36.5 and another runs Green Sock Linux 82.7, your chances of the same executable running on both are close to zero.  Likewise, if you run a workflow one day, then set it aside for a year, it's possible that your existing machine has been updated to the point where the old workflow no longer runs.

However, if we also explicitly state the
<span style="font-style: italic;">
execution environment
</span>
in the workflow, then this can be used to provide applications with what they need to run. The environment might be as simple as a directory structure with the applications, or as complex as an entire virtual machine. Either way, the environment becomes data that must be managed and moved along with the workflow, which affects the performance and cost issues discussed above.
<b>
Composability
<br/>
</b>
Everything in computing must be composable. That is, once you get one component working, the very next step is to hook it up to another so that it runs as a subcomponent. While we can technically hook up one Makeflow to another, this doesn't currently happen in a way that results in a coherent program. For example, the execution method and resource limits don't propagate from one makeflow to another. To truly enable large scale structures, we need a native method of connecting workflows together that connects not only the control flow, but the resource allocation, capacity management, and everything else discussed above.
<span style="font-weight: bold;">
Effortless Scalability
</span>
As a rule of thumb, I tell brand new users that running a Makeflow on 10 cores simultaneously is trivial, running on 100 cores is usually easy, and getting to 1000 cores will require some planning and debugging. Going over 1000 cores is possible (our largest system is running on 5000 cores) but requires a real investment of time by the user.

Why does scale make things harder? One reason is that computer systems are full of artificial limits that are not widely know or managed effectively. On a Unix-like system, a given process has a limited number of file descriptors per process and a limited number of files per directory. (Most people don't figure this out until they hit the limit, and then the work must be restructured to accomodate.) A complex network with translation devices may have a limited number of simultaneously network connections. A data structure that was small to ignore suddenly becomes unmanageable when there are 10,000 entries.

To have a software system that can scale to enormous size, you need to address these known technical issues, but also have methods of accomodating limits that you didn't expect. You also need an architecture that can scale naturally and observe its own limits to understand when they are reached. An ideal implementation would know its own limits and not require additional experts in order to scale up.

---

Each of these problems, though briefly described, are pretty hefty problems once you start digging into them. Some of them are large enough to earn a PhD. (In fact, some are already in progress!) They all have the common theme of making data intensive workflows manageable, useable, portable, and productive across a wide variety of computing systems.

More to follow.

  </div>
