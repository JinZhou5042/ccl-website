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

<p><span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">We have seemed a bit quiet in the </span><a href="http://ccl.cse.nd.edu" style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">Cooperative Computing Lab</a><span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;"> lately, as we have been focused on building </span><a href="http://ccl.cse.nd.edu/software/taskvine" style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">TaskVine</a><span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">, our new system for executing dynamic data intensive workflows.</span></p>

<p><span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">I am excited that TaskVine is up and running in the lab now!  We are working on refining a few technical issues and completing documentation and examples before making a general release.  I would like to share some of the details and philosophy of the system as a preview before general availability.</span></p>

<p><span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">TaskVine builds upon our many years of experience building large scale workflow systems that manage millions of jobs running on thousands of nodes in clusters, clouds, and grids.  Some of our prior systems include <a href="http://ccl.cse.nd.edu/software/makeflow">Makeflow</a>, which enabled the construction of large (static) task graphs to run on batch systems; <a href="http://ccl.cse.nd.edu/software/workqueue">Work Queue</a>, which enabled the creation of applications that define and consume tasks dynamically; and <a href="http://ccl.cse.nd.edu/software/prune">Prune</a>, which enabled the management of reproducible and shareable computations.  (And you can still use those systems if you like.)</span></p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2023/a-preview-of-taskvine/TaskVine-Overview-286f11e0f5.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
