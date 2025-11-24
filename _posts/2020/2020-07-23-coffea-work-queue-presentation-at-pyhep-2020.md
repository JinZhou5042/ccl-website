---
layout: "post"
title: "Coffea + Work Queue Presentation at PyHEP 2020"
date: 2020-07-23T16:55:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2020/coffea-work-queue-presentation-at-pyhep-2020/Screen-Shot-2020-07-23-at-12.44.53-PM-a88ed6f63a.png"
description: "CCL grad student Cami Carballo gave an interactive notebook talk on scaling up data analysis workloads at the PyHEP 2020 conference on Python for high energy…"
toc: false
related_posts: true
tags: []
---

<div style="text-align: justify;">
   CCL grad student Cami Carballo gave an interactive notebook talk on scaling up data analysis workloads at the
   <a href="https://indico.cern.ch/event/882824/" target="_blank">
    PyHEP
   </a>
   2020 conference on Python for high energy physics.
  </div>
  <div style="text-align: justify;">
  </div>
  <div style="text-align: justify;">
   This Python notebook (
   <a href="https://github.com/cooperative-computing-lab/PyHEP2020-Coffea-WorkQueue/blob/master/Integrating-Coffea-and-WorkQueue.ipynb">
    Integrating-Coffea-and-WorkQueue.ipynb
   </a>
   ) demonstrates the combination of the Coffea data analysis framework running on the Work Queue distributed execution system, all packaged up within a Jupyter notebook.
  </div>
  <br/>
  <div class="separator" style="clear: both; text-align: center;">
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2020/coffea-work-queue-presentation-at-pyhep-2020/Screen-Shot-2020-07-23-at-12.44.53-PM-a88ed6f63a.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   <span id="goog_377716920">
   </span>
   <span id="goog_377716921">
   </span>
   <a href="https://www.blogger.com/">
   </a>
  </div>
  <br/>
  <div style="text-align: justify;">
   A particular challenge in cluster environments is making sure that the remote execution nodes have the proper Python execution environment needed by the end user.  Scientific applications change quickly, and so it's important to have exactly the right Python interpreter along with the precise set of libraries (Python and native) installed.  To accomplish this, the Coffea-WorkQueue module performs a static analysis of the dependencies needed by an application, and ships them along with the remote tasks, deploying them as needed so that multiple independent applications can run simultaneously on the cluster.
  </div>
  <br/>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2020/coffea-work-queue-presentation-at-pyhep-2020/Coffea--2B-WQ-b5ce0521f4.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <div class="separator" style="clear: both; text-align: justify;">
   Coffea + Work Queue is under active development as we continue to tune and scale the combined system.
  </div>
  <br/>
