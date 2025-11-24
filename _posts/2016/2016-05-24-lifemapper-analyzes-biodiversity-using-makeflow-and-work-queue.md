---
layout: "post"
title: "Lifemapper analyzes biodiversity using Makeflow and Work Queue"
date: 2016-05-24T15:30:00+00:00
author: "Benjamin Tovar"
image: "/assets/blog/2016/lifemapper-analyzes-biodiversity-using-makeflow-and-work-queue/lm_owl-281-29-d5908bf7b5.png"
description: "Lifemapper is a high-throughput, webservice-based, single- and multi-species modeling and analysis system designed at the Biodiversity Institute and Natural …"
toc: false
related_posts: true
tags: [work queue, highlights, biodiversity, makeflow, biocompute]
categories: [highlights]
---
<div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2016/lifemapper-analyzes-biodiversity-using-makeflow-and-work-queue/lm_owl-281-29-d5908bf7b5.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <a href="http://lifemapper.org/">
   Lifemapper
  </a>
  is a high-throughput, webservice-based, single- and multi-species modeling and analysis system designed at the Biodiversity Institute and Natural History Museum, University of Kansas. Lifemapper was created to compute and web publish, species distribution models using available online species occurrence data.  Using the Lifemapper platform, known species localities georeferenced from museum specimens are combined with climate models to predict a species’ “niche” or potential habitat availability, under current day and future climate change scenarios. By assembling large numbers of known or predicted species distributions, along with phylogenetic and biogeographic data, Lifemapper can analyze biodiversity, species communities, and evolutionary influences at the landscape level.

Lifemapper has had difficulty scaling recently as our projects and analyses are growing exponentially.  For a large proof-of-concept project we deployed on the XSEDE resource Stampede at TACC, we integrated Makeflow and Work Queue into the job workflow.  Makeflow simplified job dependency management and reduced job-scheduling overhead, while Work Queue scaled our computation capacity from hundreds of simultaneous CPU cores to thousands.  This allowed us to perform a sweep of computations with various parameters and high-resolution inputs producing a plethora of outputs to be analyzed and compared.  The experiment worked so well that we are now integrating Makeflow and Work Queue into our core infrastructure.  Lifemapper benefits not only from the increased speed and efficiency of computations, but the reduced complexity of the data management code, allowing developers to focus on new analyses and leaving the logistics of job dependencies and resource allocation to these tools.

Information from
  <a href="https://biodiversity.ku.edu/informatics/people/cj-grady">
   C.J. Grady
  </a>
  , Biodiversity Institute and Natural History Museum, University of Kansas.
