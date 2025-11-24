---
layout: "post"
title: "REU Project: Integrating Serverless and Task Computation in Work Queue"
date: 2022-08-01T15:08:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2022/reu-project-integrating-serverless-and-task-computation-in-work-queue/Coprocess_Serverless-Poster-2022-9bc340b85a.png"
description: "David Simonetti, a junior undergraduate at Notre Dame, recently completed a summer REU project in which he added \"serverless\" computing capabilities to the W…"
toc: false
related_posts: true
tags: []
---
David Simonetti, a junior undergraduate at Notre Dame, recently completed a summer REU project in which he added "serverless" computing capabilities to the Work Queue distributed computing framework.

<p><a href="http://ccl.cse.nd.edu/software/workqueue">Work Queue</a> has historically used a "task" abstraction in which a complete program with its input files is submitted for remote execution.  David added a capability in which a coprocessor is attached to each worker, providing a hot function execution environment.  Then, lightweight tasks representing single function executions can be sent throughout the distributed system, making use of the existing scheduling, resource management, and data movement capabilities of Work Queue.<div><br/></div><div>This allows for the integrated execution of both conventional whole-process tasks and lightweight functions within the same framework.  Check out the <a href="https://drive.google.com/file/d/1KApi3Mc_-lTdOF4JE56oghbDWWJpVKan/view?usp=sharing" target="_blank">full poster</a> here:</div></p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2022/reu-project-integrating-serverless-and-task-computation-in-work-queue/Coprocess_Serverless-Poster-2022-9bc340b85a.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>
