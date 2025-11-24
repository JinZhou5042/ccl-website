---
layout: "post"
title: "A Preview of TaskVine"
date: 2023-02-22T21:32:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2023/a-preview-of-taskvine/taskvine-logo-8241eb9b27.png"
description: "We have seemed a bit quiet in the Cooperative Computing Lab lately, as we have been focused on building TaskVine , our new system for executing dynamic data …"
toc: false
related_posts: true
tags: []
---

<div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/a-preview-of-taskvine/taskvine-logo-8241eb9b27.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <p>
   <span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">
    We have seemed a bit quiet in the
   </span>
   <a href="http://ccl.cse.nd.edu" style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">
    Cooperative Computing Lab
   </a>
   <span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">
    lately, as we have been focused on building
   </span>
   <a href="http://ccl.cse.nd.edu/software/taskvine" style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">
    TaskVine
   </a>
   <span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">
    , our new system for executing dynamic data intensive workflows.
   </span>
  </p>
  <p>
   <span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">
    I am excited that TaskVine is up and running in the lab now!  We are working on refining a few technical issues and completing documentation and examples before making a general release.  I would like to share some of the details and philosophy of the system as a preview before general availability.
   </span>
  </p>
  <p>
   <span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">
    TaskVine builds upon our many years of experience building large scale workflow systems that manage millions of jobs running on thousands of nodes in clusters, clouds, and grids.  Some of our prior systems include
    <a href="http://ccl.cse.nd.edu/software/makeflow">
     Makeflow
    </a>
    , which enabled the construction of large (static) task graphs to run on batch systems;
    <a href="http://ccl.cse.nd.edu/software/workqueue">
     Work Queue
    </a>
    , which enabled the creation of applications that define and consume tasks dynamically; and
    <a href="http://ccl.cse.nd.edu/software/prune">
     Prune
    </a>
    , which enabled the management of reproducible and shareable computations.  (And you can still use those systems if you like.)
   </span>
  </p>
  <div>
   <span>
    <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
     <span style="font-family: Arial; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">
      TaskVine has some familiar concepts: it too allows the creation of large dynamically parallel distributed applications.  But where it really shines is in data management.
     </span>
    </p>
    <br/>
    <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
     <span style="font-family: Arial; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">
      In TaskVine,
     </span>
     <span style="font-family: Arial; font-size: 11pt; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">
      data is first class citizen
     </span>
     <span style="font-family: Arial; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">
      alongside tasks.  Large data sets, software packages, and software services are explicitly declared and put into a working cluster where they can be replicated and shared among nodes.  As an application runs, source data and derived results stay in the cluster and gradually creep from node to node, accelerating future tasks.  Even later workflows can take advantage of data prepared or produced by prior workflows.  We say that the workflow "grows like a vine" through the cluster.
     </span>
    </p>
    <div>
     <span>
      <br/>
     </span>
    </div>
    <div>
     <span id="docs-internal-guid-8c45ffbd-7fff-e004-f4fd-ac993438c3ca">
      <div class="row justify-content-sm-center">
       <div class="col-sm-12">
        {% include figure.liquid path="/assets/blog/2023/a-preview-of-taskvine/TaskVine-Overview-286f11e0f5.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
       </div>
      </div>
      <br/>
     </span>
    </div>
    <br/>
    <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
     <span style="font-family: Arial; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">
      The upshot is that TaskVine takes load off of the facility shared filesystem, which is often the bottleneck in scaling up large applications.  Big software stacks, reference datasets, and intermediate steps are made accessible on the worker nodes in a disciplined way, rather than a thousand nodes pounding the same filesystem at once.
     </span>
    </p>
    <div>
    </div>
    <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
     <span style="font-family: Arial; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">
      Of course, to make all this happen, there are a lot of fine details.  In the next few posts, I'll give you an overview of the system architecture, and the new capabilities that we are building out.
     </span>
    </p>
   </span>
   <br class="Apple-interchange-newline"/>
  </div>
