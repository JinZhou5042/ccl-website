---
layout: "post"
title: "TaskVine + Parsl Integration"
date: 2024-12-01T21:49:00+00:00
author: "Colin Thomas"
image: "/assets/blog/2024/taskvine-parsl-integration/img-7c5dea36bf.png"
description: "The Cooperative Computing Lab team has an ongoing collaboration with the Parsl Project , maintaining the TaskVine Executor for use with the Parsl workflow sy…"
toc: false
related_posts: true
tags: []
---
<p>The Cooperative Computing Lab team has an ongoing collaboration with the <a href="https://parsl-project.org/">Parsl Project</a>, maintaining the TaskVine Executor for use with the Parsl workflow system. Using the TaskVine executor involves expressing an application using the Parsl API, where tasks are created and managed using the Parsl Data Flow Kernel. Tasks are passed to the executor which makes final scheduling decisions.</p>

<p>The TaskVine executor offers a number of features involving data management and locality scheduling. The distinction between the TaskVine executor and other available executors is largely the awareness of data dependencies and the use of node-local storage. There are a number of features to the TaskVine executor that have been recently added or are in progress.</p>

<p>One prominent new feature is the extension of TaskVine function invocations to the TaskVine executor. Function invocations reduce the overhead of starting new tasks, considerably benefiting workflows with many short-running tasks. TaskVine function calls have been described with greater detail <a href="https://cclnd.blogspot.com/2024/11/accelerating-function-centric.html">in this article by Thanh Son Phung</a>. This benefit to task startup latency is especially useful for the Parsl/TaskVine executor, since Parsl is a python-native application. Normally each task must consider starting a new python process and loading all modules used by Parsl as well as the user's application. With short running tasks, such as ones resembling quick function calls, the overhead of loading this information from shared storage, or transferring it to local storage and starting a new python process can be greater than the running time of the task itself. TaskVine function invocations allow this runtime environment information to be effectively cached, and multiple tasks to run sequentially in the same python process. A molecular dynamics application using the Parsl/TaskVine executor is shown below, with <i>L1 </i>being simple tasks, and <i>L2 </i>using TaskVine function invocations.<br/></p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/taskvine-parsl-integration/img-7c5dea36bf.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<p>Other new changes to the TaskVine executor include the addition of the <i>tune_parameters</i> to the executor configuration. TaskVine is highly configurable by users to suit the needs of their particular application or cluster resources. Adding this option to the TaskVine executor allows users to automatically replicate intermediate data, configure the degree of replication desired, disable peer transfers, and several in-depth scheduling options which fit different specific task dispatch and retrieval patterns.</p>
