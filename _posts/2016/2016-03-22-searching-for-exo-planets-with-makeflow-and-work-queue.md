---
layout: "post"
title: "Searching for Exo-Planets with Makeflow and Work Queue"
date: 2016-03-22T19:14:00+00:00
author: "Douglas Thain"
description: "Students at the University of Arizona made use of Makeflow and Work Queue to build an image processing pipeline on the Chameleon cloud testbed at TACC . The …"
toc: false
related_posts: true
tags: []
---
<a href="https://pods.iplantcollaborative.org/wiki/display/ACIC2015/Class+Schedule">
   Students at the University of Arizona
  </a>
  made use of
  <a href="http://ccl.cse.nd.edu/software/makeflow">
   Makeflow
  </a>
  and
  <a href="http://ccl.cse.nd.edu/software/workqueue">
   Work Queue
  </a>
  to build an image processing pipeline on the
  <a href="https://www.tacc.utexas.edu/systems/chameleon">
   Chameleon
  </a>
  cloud testbed at
  <a href="https://www.tacc.utexas.edu/home">
   TACC
  </a>
  .

The course project was to build an image processing pipeline to accelerate the research of astronomer
  <a href="http://makana.as.arizona.edu/">
   Jared Males
  </a>
  , who designs instruments to search for exo-planets by observing the changes in appearance of a star.  This results in hundreds of thousands of images of a single star, which must then be processed in batch to eliminate noise and align the images.

The students built a solution (Find-R) which consumed over 100K CPU-hours on Chameleon, distributed using Makeflow and Work Queue. 

Read more here:
  <br/>
  <a href="https://www.tacc.utexas.edu/-/in-search-of-a-planet">
   https://www.tacc.utexas.edu/-/in-search-of-a-planet
  </a>
  <br/>
