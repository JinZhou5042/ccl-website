---
layout: "post"
title: "Floability at eScience 2025: Making Notebooks Portable with Backpacks Across HPC Clusters"
date: 2025-09-23T16:30:00+00:00
author: "Saiful Islam"
image: "/assets/blog/2025/floability-at-escience-2025-making-notebooks-portable-with-backpacks-across-hpc-/floability1-532e6269a5.png"
description: "Grad student Saiful Islam presented our paper “Backpacks for Notebooks: Enabling Containerized Notebook Workflows in Distributed Environments” at the 2025 IE…"
toc: false
related_posts: true
tags: []
---

<p>
   Grad student Saiful Islam presented our paper
   <em>
    “Backpacks for Notebooks: Enabling Containerized Notebook Workflows in Distributed Environments”
   </em>
   at the 2025 IEEE eScience Conference in Chicago, Illinois.
  </p>
  <p>
   Notebooks have become the de facto interface for scientific computing, but moving from a local notebook to large-scale HPC clusters is far from seamless—especially when the notebook contains a distributed workflow that must be submitted across multiple nodes. A notebook file alone doesn’t capture the full execution context—it misses environment specifications, data locations, and resource requirements. As a result, the same notebook often runs on one system but fails on another.
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/floability-at-escience-2025-making-notebooks-portable-with-backpacks-across-hpc-/floability1-532e6269a5.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <p>
   This paper introduces the concept of a backpack—a lightweight companion that travels with the notebook and captures everything needed for execution. A backpack makes explicit the software environment, data sources, and resource requirements that are often left implicit in code. With
   <a href="https://floability.github.io/">
    Floability
   </a>
   , our implementation of backpack specifications, backpacks transform ordinary notebooks into portable, reproducible workflows that can execute across heterogeneous HPC clusters with zero to minimal code modification.
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/floability-at-escience-2025-making-notebooks-portable-with-backpacks-across-hpc-/floability2-674fc89517.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <p>
   We evaluated Floability on three representative scientific workflows—distributed image convolution, climate trend analysis, and high-energy physics data analysis—running them across five heterogeneous HPC systems (Notre Dame CRC, Purdue Anvil, UT Stampede3, OSPool, and AWS). In each case, backpacks successfully captured the required software and data dependencies, provisioned worker environments, and reproduced execution without code changes. While runtime varied due to site-specific infrastructure like schedulers and storage, all workflows completed consistently, demonstrating that backpacks enable portable, reproducible, and scalable execution of notebook workflows across diverse HPC environments.
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/floability-at-escience-2025-making-notebooks-portable-with-backpacks-across-hpc-/floability-run-a35dfe9657.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <p>
   For all the details, please check out our paper here:
  </p>
  <p>
   <span style="font-family: times;">
    <span style="background-color: white;">
     Md Saiful Islam, Talha Azaz, Raza Ahmad, A D M Shahadat Hossain, Furqan Baig, Shaowen Wang, Kevin Lannon, Tanu Malik, and Douglas Thain,
     <a href="https://ccl.cse.nd.edu/research/papers/floability-escience-2025.pdf" target="_blank">
      Backpacks for Notebooks: Enabling Containerized Notebook Workflows in Distributed Environments
     </a>
     , IEEE Conference on eScience, pages 9, September 2025.
    </span>
   </span>
  </p>
  <p>
   Project website:
   <a class="decorated-link" href="https://floability.github.io" rel="noopener" target="_new">
    https://floability.github.io
   </a>
  </p>
  Example backpacks:
  <a class="decorated-link" href="https://github.com/floability/floability-examples" rel="noopener" target="_new">
   https://github.com/floability/floability-examples
  </a>
