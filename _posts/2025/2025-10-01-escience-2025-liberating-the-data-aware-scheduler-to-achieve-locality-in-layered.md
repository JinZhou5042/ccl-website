---
layout: "post"
title: "eScience 2025: Liberating the Data Aware Scheduler to Achieve Locality in Layered Scientific Workflow Systems"
date: 2025-10-01T14:55:00+00:00
author: "Colin Thomas"
image: "/assets/blog/2025/escience-2025-liberating-the-data-aware-scheduler-to-achieve-locality-in-layered/AVvXsEhfasZZ_MtyPWX6tE-NMzIgKS28-SSgYhbRkjhvX9KcOJoUw3cXaEpS-37ab586c86.png"
description: "On September 16 graduate student Colin Thomas presented the paper titled: Liberating the Data Aware Scheduler to Achieve Locality in Layered Scientific Workf…"
toc: false
related_posts: true
tags: []
---

<p>
   On September 16 graduate student Colin Thomas presented the paper titled:
   <i>
    Liberating the Data Aware Scheduler to Achieve Locality in Layered Scientific Workflow Systems
   </i>
   at the 21st IEEE International Conference on eScience in Chicago, Illinois.
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/escience-2025-liberating-the-data-aware-scheduler-to-achieve-locality-in-layered/AVvXsEhfasZZ_MtyPWX6tE-NMzIgKS28-SSgYhbRkjhvX9KcOJoUw3cXaEpS-37ab586c86.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <p style="margin-left: 1em; margin-right: 1em;">
   This work engages mutliple topics including workflow systems, data management, and task scheduling. The title describes two key components; The
   <i>
    Data Aware Scheduler,
   </i>
   and
   <i>
    Layered Scientific Workflow Systems
   </i>
   . Data aware schedulers are capable of understanding task data dependencies and making task scheduling decisions based on that information, primarily to benefit from data locality when there is intermediate workflow data which is already cached somewhere in the cluster. It is beneficial to schedule tasks who consume this data to the same site in which the data was created, so that the dependencies to not have to move through the network, or perhaps even out of memory.
  </p>
  <p style="margin-left: 1em; margin-right: 1em;">
   The term "layered workflow system" is a way to describe multiple popular workflow systems in the HPC community such as Parsl and Dask. These workflow systems consist of two primary components. The DAG manager and executor. The DAG manager understands the workflow composition and data dependencies. The executor receives tasks from the DAG manager and uses its understanding of the cluster and available resources to place tasks on their execution sites.
  </p>
  <p style="margin-left: 1em; margin-right: 1em;">
   The primary argument of the paper is highlighting the obstacles created by using a data aware scheduler in this layered execution scheme.  If we take a DAG such as the one described by Figure 1, we can easily identify opportunities for data locality in the groups of sequentially dependent tasks. However the data aware scheduler is not privy to this picture of the DAG. Rather the scheduler, or executor, is only aware of tasks which are ready to run, while the DAG manager withholds future task information until they are ready to run as well. This forces a data aware scheduler to make last-minute scheduling decisions based on individual tasks. In many cases it may occupy a node in which a later task would have been better suited due to data locality opportunities.
  </p>
  <p style="margin-left: 1em; margin-right: 1em;">
   The paper shows an implementation of a modified Parsl DAG manager and TaskVine data aware scheduler which passes through intermediate-dependent sequential tasks to the data aware scheduler before all of them are ready to run. This allows TaskVine to identify the group dependencies and the ideal execution pattern, and schedule these task groups in batches rather than on an individual basis.
  </p>
  <p style="margin-left: 1em; margin-right: 1em;">
   The result of this increases the data locality achieved on the 2 workflows in the evaluation. In addition it reduces the total number of scheduling operations by a factor of the average task group size.
  </p>
  <p style="margin-left: 1em; margin-right: 1em;">
   The link to the full paper can be found below:
  </p>
  <p style="margin-left: 1em; margin-right: 1em;">
   <a href="https://ccl.cse.nd.edu/research/papers/liberating-escience-2025.pdf">
    https://ccl.cse.nd.edu/research/papers/liberating-escience-2025.pdf
   </a>
  </p>
