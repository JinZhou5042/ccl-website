---
layout: "post"
title: "Toward a Common Model of Highly Concurrent Programming"
date: 2014-05-19T19:14:00+00:00
author: "Douglas Thain"
description: "(This is the short version of a talk I gave at the MTAGS workshop at Supercomputing 2013. See the slides here .) Historically, highly concurrent programming …"
toc: false
related_posts: true
tags: [work queue, makeflow, abstractions]
---
(This is the short version of a talk I gave at the MTAGS workshop at Supercomputing 2013.

<a href="http://www3.nd.edu/~dthain/talks/model-mtags13.pptx" target="_blank">See the slides here</a>

.)

<br/>

<br/>

Historically, highly concurrent programming has been closely associated with high performance computing.  Two programming models have been dominant: shared memory machines in which concurrency was expressed via multiple threads, and distributed memory machines in which concurrency was expressed via explicit message passing.  It is widely agreed that both of these programming models are very challenging, even for the veteran programmer.  In both cases, the programmer is directly responsible for designing the program from top to bottom and handling all of the issues of granularity, consistency, and locality necessary to achieve acceptable performance, with very little help from the runtime or operating systems.

<br/>

<br/>

However, a new approach to concurrent programming has been emerging over the last several years, in which the user programs in a much higher level language and relies upon the system to handle many of the challenging underlying details.  To achieve this, the program is successively decomposed into simpler representations, such that each layer of the system can gradually adapt it to the hardware available.

<br/>

<br/>

The layers can be described as follows:

<br/>

<ul>
<li>A <strong>declarative language (DL)</strong> for compactly representing a complete program.</li>
<li>A <strong>directed graph (DAG)</strong> to represent the expanded program and its resources.</li>
<li>A <strong>bag of independent tasks (BOT)</strong> with explicit input and output dependencies.</li>
<li>A <b>shared-nothing cluster </b>to which data and tasks must be assigned.</li>
</ul>

Several different research communities have arrived at this computing model somewhat independently: the high performance computing community, the scientific workflow community, and the cloud computing community.  In each case, the scale and complexity of the systems in use eventually made it impossible for the programmer or the user to take responsibility for all of the challenges of parallel/distributed computing.  Although each community employs different technologies and has distinct optimization goals, the overall structure of these systems is surprisingly similar.

<br/>

<br/>

A (very incomplete) selection of systems that follow this model:

<br/>

<br/>

<p><br/>
<table><tbody>
<tr><td><b>Layer </b></td><td><b>Cloud Stack </b></td><td><b>Workflow Stack </b></td><td><b>HPC Stack</b></td></tr>
<tr><td>Declarative Language (DL)    </td><td>Pig </td><td>Weaver </td><td>Swift-T </td></tr>
<tr><td>Directed Acyclic Graph (DAG)</td><td>Map-Reduce    </td><td>Makeflow </td><td>- </td></tr>
<tr><td>Bag of Tasks (BOT)</td><td>JobTracker </td><td>Work Queue Master </td><td>Turbine </td></tr>
<tr><td>Distributed Data </td><td>HDFS </td><td>Work Queue Workers    </td><td>MPI </td></tr>
</tbody></table>
<br/>
Each layer of the system fulfills a distinct need.  The declarative language (DL) at the top is compact, expressive, and easy for end users, but is intractable to analyze in the general case because it may have a high order of complexity, possibly Turing-complete.  The DL can be used to generate a (large) directed acyclic graph (DAG) that represents every single task to be executed.  The DAG is not a great user-interface language, but it is much more suitable for a system to perform capacity management and optimization because it is a finite structure with discrete components.  A DAG executor then plays the graph, dispatching individual tasks as their dependencies are satisfied.  The BOT consists of all the tasks that are ready to run, and is then scheduled onto the underlying computer, using the data dependencies made available from the higher levels.<br/>
<br/>
Why bother with this sort of model?  It allows us to compare the fundamental capabilities and expressiveness of different kinds of systems.  For example, in the realm of compilers, everyone knows that a proper compiler consists of a scanner, a parser, an optimizer, and a code generator.  Through these stages, the input program is transformed from a series of tokens to an abstract syntax tree, an intermediate representation, and eventually to assembly code.  Not every compiler uses all of these stages, much less the same code, but by using a common language, it is helpful to understand, compare, and design new systems.<br/>
<br/>
<br/></p>
