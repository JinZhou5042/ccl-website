---
layout: "post"
title: "Accelerating Function-Centric Applications via Reusable Function Context in Workflow Systems"
date: 2024-11-11T16:07:00+00:00
author: "Thanh Son Phung"
description: "Modern applications are increasingly being written in high-level programming languages (e.g., Python) via popular parallel frameworks (e.g., Parsl, TaskVine,…"
toc: false
related_posts: true
tags: []
---
<br/>

<br/>

Modern applications are increasingly being written in high-level programming languages (e.g., Python) via popular parallel frameworks (e.g., Parsl, TaskVine, Ray) as they help users quickly translate an experiment or idea into working code that is easily executable and parallelizable on HPC clusters or supercomputers. Figure 1 shows the typical software stack of these frameworks, where users wrap computations into functions, which are sent to and managed by a parallel library as a DAG of tasks, and these tasks eventually are scheduled by an execution engine to execute on a remote worker node.

<br/>

<br/>

<img height="280" src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdfSSMfXfohwD8ezyox5mQQPprk6j25Nu0ONSnshzvFhVLFupNhtdMd1OMaJVpogifH3nBOVBoV_zSKWw5RCOkAMbImQ4C8B24ZvdgVZUQJYEESGqNrt1dBObf0ANAnd7eamkyI=w433-h280?key=cCz5PNOsLeNPyFesl61mmqBR" width="433"/>

<br/>

<br/>

A traditional way to execute functions remotely is to translate them into executable tasks by serializing functions and their associated arguments into input files, such that these functions and arguments are later reconstructed on remote nodes for execution. While this way fits function-centric applications naturally into well understood task-based workflow systems, it brings a hefty penalty to short-running functions. A function now takes extra time for its states to be sent and reconstructed on a remote node which are then unnecessarily destroyed at the end of that function’s execution.

<br/>

<br/>

<br/>

At HPDC 2024, graduate students Thanh Son Phung and Colin Thomas proposed the idea that function contexts, or states, should be decoupled from function’s actual execution code. This removes the overhead of repeatedly sending and reconstructing a function’s state for execution, and allows functions of the same type to share the same context. The rest of the work then addresses how a workflow system can treat a function as a first-class citizen by discovering, distributing, and retaining such context from a function. Figure below shows the execution time of the Large-Scale Neural Network Inference application, totaling 1.6 million inferences separated into 100k tasks, with increasing levels of context sharing (L1 is no sharing, L3 is maximum sharing). Decoupling the inference function’s context from the inference massively reduces the execution time of the entire workflow by 94.5%, from around 2 hours to approximately 7 minutes.

<br/>

<br/>

<img height="390" src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXc5F_h-hsV7Iwzt_WlCjVLG980_zRi20NEPLsf8J4eLOub4RfkGvhQDRqWwwNtVsbPatxzyG2TMgkCyx0xQeW6rHakyKibvTvRexCUYq-HCwUIMU8KBaHUxPA7mCGM2J_Yv--4Tlg=w456-h390?key=cCz5PNOsLeNPyFesl61mmqBR" width="456"/>

<br/>

<br/>

<br/>

An interested reader can find more details about this work in the paper:Thanh Son Phung, Colin Thomas, Logan Ward, Kyle Chard, and Douglas Thain. 2024.

<a href="https://ccl.cse.nd.edu/research/papers/function-context-hpdc-2024.pdf">Accelerating Function-Centric Applications by Discovering, Distributing, and Retaining Reusable Context in Workflow Systems</a>

. In Proceedings of the 33rd International Symposium on High-Performance Parallel and Distributed Computing (HPDC '24). Association for Computing Machinery, New York, NY, USA, 122–134. https://doi.org/10.1145/3625549.3658663

<br/>

<br/>
