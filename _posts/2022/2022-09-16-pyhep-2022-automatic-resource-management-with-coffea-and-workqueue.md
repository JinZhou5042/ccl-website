---
layout: "post"
title: "pyHEP 2022: Automatic resource management with Coffea and WorkQueue"
date: 2022-09-16T13:51:00+00:00
author: "Benjamin Tovar"
image: "/assets/blog/2022/pyhep-2022-automatic-resource-management-with-coffea-and-workqueue/img-55618716ca.png"
description: "pyHEP is a virtual workshop to discuss the use of python in the High Energy Physics community. In this year pyHEP (2022), we showcased the resource managemen…"
toc: false
related_posts: true
tags: []
---
<p><a href="https://indico.cern.ch/event/1150631/">pyHEP</a> is a virtual workshop to discuss the use of python in the High Energy Physics community. In this year pyHEP (2022), we showcased the resource management features that Work Queue offers when executing HEP analysis workflows using the <a href="https://coffeateam.github.io/coffea/">Coffea</a> framework. We showed how Work Queue is able to automatically tailor the resources allocated (cores, memory, disk) to the tasks executed, and how it modify the size of the tasks so that they can fit the resources available.<br/></p>

<p>You can access the jupyter notebook we used for the talk here: <a href="https://github.com/cooperative-computing-lab/coffea-wq-notebook">https://github.com/cooperative-computing-lab/coffea-wq-notebook</a></p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2022/pyhep-2022-automatic-resource-management-with-coffea-and-workqueue/img-55618716ca.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
