---
layout: post
title: Exploring Execution Strategies and Compositional Trade-Offs in the Context of Large-Scale HEP Workflows
date: "2025-12-09T00:00:00"
author: Jin Zhou
image: /assets/blog/2025/exploring-execution-strategies-and-compositional-trade-offs-in-the-context-of-large-scale-hep-workflows/alan-fig2.png
tags:
- hep
description: The European Organization for Nuclear Research (CERN) has four main High Energy Physics experiments, the Compact Muon Solenoid (CMS) being one of them. These experiments are already approaching the Ex
toc: false
related_posts: true
---

The European Organization for Nuclear Research (CERN) has four main High Energy Physics experiments, the Compact Muon Solenoid (CMS) being one of them. These experiments are already approaching the Exabyte-scale, and data rates are planned to increase significantly with the High-Luminosity Large Hadron Collider (HL-LHC).

<div class="row justify-content-sm-center">
<div class="col-sm-12">
{% include figure.liquid path="/assets/blog/2025/exploring-execution-strategies-and-compositional-trade-offs-in-the-context-of-large-scale-hep-workflows/alan-fig1.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
</div>

Flexible workload specification and execution are critical to the success of the CMS Physics program, which currently utilizes approximately half a million CPU cores across the Worldwide LHC Computing Grid (WLCG) and other HPC centers, executing Directed Acyclic Graph (DAG) workflows for data reprocessing and Monte Carlo production. Each of the nodes in the DAG corresponds to a taskset, they can have different resource requirements such as operating system version, CPU cores, memory, GPUs, and every taskset can spawn 1 to millions of grid jobs.

In this research, we explore the hybrid spectrum of workflow composition by interpolating between the two currently supported specifications, known as TaskChain and StepChain. They employ very distinct workflow paradigms: TaskChain executes a single physics payload per grid job, whereas StepChain processes multiple payloads within the same job. To address the challenge of heterogeneous workflow requirements, together with an increasingly diverse set of resources, an adaptive workflow specification is essential for efficient resource utilization and increased event throughput.

A DAG workflow simulation, named [DAGFlowSim](https://github.com/amaltaro/wflow_sim), has been developed to understand the tradeoff involved in the different workflow constructions. The simulator provides insights on event throughput, resource utilization, disk I/O requirements, etc. Given a sequential DAG with 5 heterogeneous tasksets/nodes, we can analyse the CPU utilization and time per event for the 16 possible workflow constructions. Construction 1 and Construction 16 are the extreme cases already supported, representing a tightly-dependent taskset execution (Stepchain-like) and a fully independent execution (Taskchain-like), respectively.

<div class="row justify-content-sm-center">
<div class="col-sm-12">
{% include figure.liquid path="/assets/blog/2025/exploring-execution-strategies-and-compositional-trade-offs-in-the-context-of-large-scale-hep-workflows/alan-fig2.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
</div>

For more details on the methodology and simulation results, please check out the slide deck presented at the [ACAT 2025 Workshop](https://indico.cern.ch/event/1488410/contributions/6562806/).
