---
layout: "post"
title: "TPDS Paper: Storage Management in Makeflow"
date: 2017-12-04T20:36:00+00:00
description: "As the scale of workflows and their data grow, 
it becomes increasingly difficult to execute within the provide storage. 
This issue is only exacerbated when…"
toc: false
related_posts: true
tags: [makeflow, storage, archived-blog]
---
As the scale of workflows and their data grow, 
it becomes increasingly difficult to execute within the provide storage. 
This issue is only exacerbated when attempting to run multiple workflows at the same time, often sharing the resources. 
Up until recently, the user would often make a guess at the total size of the workflow and execute until failure, 
having to remove older experiment and data to accommodate the needed room; 
creating a time consuming cycle of run->fail->clean until the required space is achieved.

<br/>

<br/>

The initial solution, which is effective in many cases, is to turn on garbage collection. 
Garbage collection in Makeflow track a created file from creation until it is no longer needed, at which point it is deleted. 
This initial solution works well to limit the active footprint of the workflow. 
However, the user is still left in a situation where they are not aware of the space needed to execute.

<br/>

<br/>

To resolve this added an algorithm that will estimate the size of the workflow, and what this minimum size needed to execute said workflow would be. This is done by determining the different paths of execution and finding the resulting minimum path(s) through the workflow. This is most accurately done by estimating and labeling the files in the Makeflow:

<br/>

<pre>.SIZE test.dat 1024K
</pre>

<pre>
</pre>

Using this information Makeflow can statically analyze the workflow and tell you the minimum and maximum storage needed to execute. This information can then be coupled with a run-time storage manager and garbage collection to stay within a user specified limit. Instead of actively trying to schedule in an order to prevent going over the limit, nodes are submitted when there is enough space to permit the it to run and have space for all of its children. This allows for the more concurrency if the space allows. Below is an image that shows how this limit can be used to at different levels.

<br/>

<br/>

This first image shows a bioinformatics workflow running using the minimum required space. We can see several(10) peaks in the workflow. Each of these correspond to a larger set of intermediate files that can be removed later. In the naive case where we don't track storage these can all occur at the same time using more storage than may be available.

<br/>

In this second case, we set a limit on storage that is higher than the minimum. We can see similar spikes, run-time manager is only scheduling as many branches as can be run under the limit.

<br/>

To use this feature, which is now released and available in the main branch of CCTools here are the steps:

<br/>

<ol>
<li>Label the files. A slight over-estimate will work as well as the exact number is not known ahead of time. The default size is 1G.<pre>.SIZE file.name 5M</pre>
</li>
<li>Find the estimated size of the Makeflow. <pre>makeflow --storage-print storage-estimate.dat</pre>
</li>
<li>Run Makeflow setting a mode and limit. The limit can be anywhere between the min and the max. Type 1 indicates a min tracking which holds below the limit set.<pre>makeflow --storage-type 1 --storage-limit 10G</pre>
</li>
</ol>
