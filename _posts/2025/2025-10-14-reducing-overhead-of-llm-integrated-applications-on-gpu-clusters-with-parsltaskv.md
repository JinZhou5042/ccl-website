---
layout: "post"
title: "Reducing Overhead of LLM-integrated Applications on GPU Clusters with Parsl+TaskVine"
date: 2025-10-14T20:39:00+00:00
author: "Thanh Son Phung"
image: "/assets/blog/2025/reducing-overhead-of-llm-integrated-applications-on-gpu-clusters-with-parsltaskv/AVvXsEgxTbzt3MZ48XPGRUQnbkyTL6Wi2WmerFazLYJcNlAGkjhj8OYbltdK-5c7c995b1b.png"
description: "Large Language Models (LLMs) are becoming a key tool for scientific discovery, but using them on High-Performance Computing (HPC) clusters is challenging due…"
toc: false
related_posts: true
tags: []
---
<div style="text-align: justify;">
   <span id="docs-internal-guid-631baee0-7fff-a7df-40ec-91bde5510591">
    <span face="Arial, sans-serif" style="font-size: 11pt; vertical-align: baseline;">
     Large Language Models (LLMs) are becoming a key tool for scientific discovery, but using them on High-Performance Computing (HPC) clusters is challenging due to the limitations of traditional resource allocation methods. For instance,
    </span>
    <span face="Arial, sans-serif" style="font-size: 11pt; font-weight: 700; vertical-align: baseline;">
     static allocation
    </span>
    <span face="Arial, sans-serif" style="font-size: 11pt; vertical-align: baseline;">
     , which assigns a dedicated set of GPUs for a task, is a rigid system. This can lead to long queues of frustrated users and wasted resources, as the allocated GPUs sit idle while waiting for the next job to start. Meanwhile,
    </span>
    <span face="Arial, sans-serif" style="font-size: 11pt; font-weight: 700; vertical-align: baseline;">
     opportunistic allocation
    </span>
    <span face="Arial, sans-serif" style="font-size: 11pt; vertical-align: baseline;">
     allows tasks to use available, but not guaranteed, resources. While this improves overall cluster utilization, it's problematic for LLM applications. The initial loading of a multi-billion-parameter LLM is a time-consuming process, and since tasks in an opportunistic environment can be preempted at any moment, this expensive startup often has to be repeated from scratch.
    </span>
   </span>
  </div>
  <span style="background-color: transparent; vertical-align: baseline;">
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2025/reducing-overhead-of-llm-integrated-applications-on-gpu-clusters-with-parsltaskv/AVvXsEgxTbzt3MZ48XPGRUQnbkyTL6Wi2WmerFazLYJcNlAGkjhj8OYbltdK-5c7c995b1b.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   <div style="text-align: justify;">
    <span face="Arial, sans-serif" style="font-size: 14.6667px;">
     <br/>
    </span>
   </div>
  </span>
  <p dir="ltr" style="line-height: 1.38; margin-bottom: 12pt; margin-top: 12pt; text-align: justify;">
   <span id="docs-internal-guid-5e40c0d4-7fff-d9a4-910d-e539f08686d6">
    <span face="Arial, sans-serif" style="font-size: 11pt; vertical-align: baseline;">
     To solve this, we propose a new technique called
    </span>
    <span face="Arial, sans-serif" style="font-size: 11pt; font-weight: 700; vertical-align: baseline;">
     Pervasive Context Management
    </span>
    <span face="Arial, sans-serif" style="font-size: 11pt; vertical-align: baseline;">
     . The core idea is to decouple the LLM initialization context from the actual inference tasks and keep this context persistent on GPUs until it is no longer needed. This transforms the high startup cost into a one-time, amortizable expense. When a task is preempted, it can be quickly rescheduled to another GPU that already has the necessary context loaded, eliminating the need to re-initialize the model. Our Parsl+TaskVine system can also transfer existing context between nodes to bootstrap new GPUs, reducing data transfer time and avoiding bottlenecks.
    </span>
   </span>
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/reducing-overhead-of-llm-integrated-applications-on-gpu-clusters-with-parsltaskv/AVvXsEgZgumOzgyqmyg1Mzqx7v63yD9oot-2MsLZCrOpxPjZUDVpudtCZhaV-5fd363a048.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <div style="text-align: justify;">
   <span face="Arial, sans-serif" style="font-size: 14.6667px;">
    <br/>
   </span>
  </div>
  <div style="text-align: justify;">
  </div>
  <p dir="ltr" style="line-height: 1.38; margin-bottom: 12pt; margin-top: 12pt; text-align: justify;">
   <span id="docs-internal-guid-74df98fb-7fff-1860-4b34-250764a14ff6">
    <span face="Arial, sans-serif" style="font-size: 11pt; vertical-align: baseline;">
     To demonstrate the effectiveness of this approach, we transformed a fact-verification application to use Pervasive Context Management and conducted a comprehensive evaluation. Our results show a significant improvement in performance on both static and opportunistic resources. By enabling Pervasive Context Management, the end-to-end execution time of our application was reduced by 72.1%, from 3 hours to just 48 minutes, using the same number of GPUs. The application also scaled efficiently on up to 32.8% of all GPUs (up to 186 GPUs) in the cluster, further reducing the execution time to a mere 13 minutes.
    </span>
   </span>
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/reducing-overhead-of-llm-integrated-applications-on-gpu-clusters-with-parsltaskv/AVvXsEhHPIzIfbRWqY_G0jVI_1ywOQ_9ickEjB86GT_plaAjhUeDTHzUv6Qw-8139a82120.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <div style="text-align: justify;">
   <span face="Arial, sans-serif" style="font-size: 14.6667px;">
    <br/>
   </span>
  </div>
  <div style="text-align: justify;">
  </div>
  <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt; text-align: justify;">
   <span id="docs-internal-guid-109001c2-7fff-56cc-ef0b-b15ff78b920e">
    <span face="Arial, sans-serif" style="font-size: 11pt; vertical-align: baseline;">
     Additionally, Pervasive Context Management helps users avoid the complex problem of tuning the inference batch size. Because the expensive startup cost is now a one-time event, the application's performance becomes much more stable regardless of the batch size chosen. This removes the burden of manual tuning and ensures near-optimal execution. In summary, our findings show that this new approach is a viable solution for running high-throughput LLM inference applications efficiently on heterogeneous and opportunistic HPC clusters.
    </span>
   </span>
  </p>
  <div style="text-align: justify;">
  </div>
  <span id="docs-internal-guid-6cc90b33-7fff-130d-2bed-6fdbc2c11bf7">
   <div style="text-align: justify;">
   </div>
  </span>
