---
layout: "post"
title: "Summer REU: Toward Elastic Scientific Applications"
date: 2010-10-18T16:04:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2010/summer-reu-toward-elastic-scientific-applications/wq-f949c06db2.gif"
description: "In recent months, we have been working on the problem of building elastic parallel applications that can adapt to the available resources at run-time. Much h…"
toc: false
related_posts: true
tags: [work queue, protomol, replica exchange, mpi, elastic applications]
---
In recent months, we have been working on the problem of building

<span style="FONT-WEIGHT: bold;">elastic parallel applications</span>

that can adapt to the available resources at run-time. Much has been written about elastic internet services, but scientific applications have a ways to catch up.

<br/>

<br/>

Traditional parallel applications are

<span style="FONT-WEIGHT: bold;">rigid</span>

: the user chooses how many nodes (or cores or CPUs) to use when the program starts. If more resources become available, or the application needs to grow, it is stuck. Even worse, if a node is lost due to a failure or a scheduling change, the program must be aborted. Rigid parallelism has been used for many years in dedicated clusters and supercomputers in the form of libraries such as MPI. It works fine for systems of tens or hundreds of nodes, but if you try to go bigger, it gets harder and harder to find a fully reliable system.

<br/>

<br/>

In contrast, an

<span style="FONT-WEIGHT: bold;">elastic</span>

parallel application can be modified at run-time to use greater or fewer resources as they become available, or if the size of the problem changes. Typically, an elastic application has one central coordinating node that tracks the progress of the program, and dispatches work units to other nodes. If new nodes are added to the system, the coordinator gives it some work to do. If a node fails or is removed, the coordinator makes a note of this, and sends the work to another node.

<br/>

<br/>

If you have an elastic application, then it becomes much easier to harness large scale computing systems such as clouds and grids. In fact, it becomes easier to harness any kind of computer, because you don't have to worry about them being reliable or even particularly fast. It's also useful in a traditional computing center, because you don't have to sit idle waiting for your ideal number of nodes to become free -- you can start work with whatever is available now.

<br/>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2010/summer-reu-toward-elastic-scientific-applications/wq-f949c06db2.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2010/summer-reu-toward-elastic-scientific-applications/Noname-bb8e2e1694.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
