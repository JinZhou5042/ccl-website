---
layout: "post"
title: "REU Project: TopEFT Performance Analysis: Solving Bottlenecks in Data Transfer and Task Resource Management"
date: 2022-08-01T16:30:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2022/reu-project-topeft-performance-analysis-solving-bottlenecks-in-data-transfer-and/TopEFT-Performance-Analysis-Poster-2022-1a33fc3f6c.png"
description: "Andrew Hennessy, a junior at Notre Dame, recently completed a summer REU project in which he analyzed and improved the performance of TopEFT, a high energy p…"
toc: false
related_posts: true
tags: []
---
<p>Andrew Hennessy, a junior at Notre Dame, recently completed a summer REU project in which he analyzed and improved the performance of TopEFT, a high energy physics analysis application built using the <a href="http://coffeateam.github.io">Coffea framework</a> and the <a href="http://ccl.cse.nd.edu/software/workqueue">Work Queue</a> distributed execution system.</p>

<p>This applications runs effectively in production, but takes about one hour to complete an analysis on O(1000) cores -- we would like to get it down to fifteen minutes or less in order to enable "near real time" analysis capability.   Andrew built a visualization of the accumulation portion and observed one problem: the data flow is highly unbalanced, resulting in the same data moving around multiple times.  He modified the scheduling of the accumulation step, resulting in a balanced tree with reduced I/O impact.</p>

<p>Next, he observed that processing tasks acting on different datasets have different resource needs: tasks consuming monte carlo (simulated) data take much more time and memory than tasks consuming Production (acquired) data.  This results in a slowdown as the system gradually adjusts to the changing task size.  The solution here is to ask the user to label the datasets appropriately, and place the Monte Carlo and Production tasks in different "categories" in Work Queue, so that resource prediction will be more accurate.</p>

<p>See the entire poster here:</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2022/reu-project-topeft-performance-analysis-solving-bottlenecks-in-data-transfer-and/TopEFT-Performance-Analysis-Poster-2022-1a33fc3f6c.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>
