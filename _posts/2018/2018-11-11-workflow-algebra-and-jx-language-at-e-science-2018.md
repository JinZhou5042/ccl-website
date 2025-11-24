---
layout: "post"
title: "Workflow Algebra and JX Language at e-Science 2018"
date: 2018-11-11T17:32:00+00:00
description: "Nick Hazekamp presented the paper An Algebra for Robust Workflow Transformations and Tim Shaffer presented a poster on A First Look at the JX Workflow Langua…"
toc: false
related_posts: true
tags: [archived-blog]
---
<html><body>Nick Hazekamp presented the paper
<a href="http://ccl.cse.nd.edu/research/papers/workflow-transformation-escience-2018.pdf">An Algebra for Robust Workflow Transformations</a>
and Tim Shaffer presented a poster on
<a href="http://ccl.cse.nd.edu/research/papers/jx-escience-2018.pdf">A First Look at the JX Workflow Language</a>
at the 
<a href="http://conferences.computer.org/IC2E/2018/">IEEE International Conference on eScience 2018</a> October 27-November 1, 2018 in Amsterdam.

<br/>
<br/>
In An Algebra for Robust Workflow Transformations 
(<a href="http://ccl.cse.nd.edu/research/papers/workflow-transformation-escience-2018.pdf">paper</a>
<a href="http://ccl.cse.nd.edu/presentations/2018-10-31-workflow-transformation-escience.pdf">slides</a>) 
we introduce the an algebra for applying and nesting different task level transformations to a workflow. 
As a basis for this work we clearly defined what a task is and the task structure in JSON.
Using this JSON representation, we explicitly show how tasks can be nested and give a method for
deriving consistent behavior from these nested transformations. We showed how this worked using 
three use cases, multi-level nested transformations, multi-site workflow operation, and methods for using
transformations to debug workflow failures.
Abstract posted here:

<br/>
<br/>
Scientific workflows are often designed with a particular compute site in mind. As a user changes sites the workflow needs to adjust. These changes include moving from a cluster to a cloud, updating an operating system, or investigating failures on a new cluster. As a workflow is moved, its tasks do not fundamentally change, but the steps to configure, execute, and evaluate tasks differ. When handling these changes it may be necessary to use a script to analyze execution failure or run a container to use the correct operating system. To improve workflow portability and robustness, it is necessary to have a rigorous method that allows transformations on a workflow. These transformations do not change the tasks, only the way tasks are invoked. Using technologies such as containers, resource managers, and scripts to transform workflows allow for portability, but combining these technologies can lead to complications with execution and error handling. We define an algebra to reason about task transformations at the workflow level and express it in a declarative form using JSON. We implemented this algebra in the Makeflow workflow system and demonstrate how transformations can be used for resource monitoring, failure analysis, and software deployment across three sites.<br/>
<br/>


<br/>
In A First Look at the JX Workflow Language
(<a href="http://ccl.cse.nd.edu/research/papers/jx-escience-2018.pdf">paper</a>
<a href="http://ccl.cse.nd.edu/presentations/2018-10-31-jx-escience-poster.pdf">poster</a>)
we took a look at JX and the flexibility it affords the user when describing the high-level characteristics of a workflow.


Abstract posted here:

<br/>
<br/>
Abstract—Scientific workflows are typically expressed as a graph of logical tasks, each one representing a single program along with its input and output files. This poster introduces JX (JSON eXtended), a declarative language that can express complex workloads as an assembly of sub-graphs that can be partitioned in flexible ways. We present a case study of using JX to represent complex workflows for the Lifemapper biodiversity project. We evaluate partitioning approaches across several computing environments, including ND-Condor, IU-Jetstream, and SDSC-Comet, and show that a coarse partitioning results in faster turnaround times, reduced data transfer, and lower master utilization across all three systems.


<br/>
<br/>

<br/>
<br/></body></html>
