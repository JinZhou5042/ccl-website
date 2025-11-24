---
layout: "post"
title: "Teaching Distributed Computing with Work Queue"
date: 2013-01-15T15:12:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2013/teaching-distributed-computing-with-work-queue/planets-4c175dfd2f.gif"
description: "The undergraduate Programming Paradigms class at the University of Notre Dame
introduces undergraduate students to a variety of parallel and distributed
prog…"
toc: false
related_posts: true
tags: [work queue, highlights]
categories: [highlights]
---

<div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2013/teaching-distributed-computing-with-work-queue/planets-4c175dfd2f.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  The undergraduate Programming Paradigms class at the University of Notre Dame
introduces undergraduate students to a variety of parallel and distributed
programming models.
  <a href="http://www.nd.edu/%7Eccl/software/workqueue">
   Work Queue
  </a>
  is used as an example of large scale distributed computing.
Using a solar system simulator developed in a previous assignment,
students were tasked with splitting a trajectory
of the planets' positions into individual frames, populating POVRay
scene files, rendering the scenes in a distributed manner using Work
Queue, and combining the frames into a movie using ImageMagick.  Since
the students had used Python extensively, they found it very easy to
write a single Work Queue master using the Python bindings.
Several of the students went above and
beyond the requirements by adding textures to the planets and
animating the movement of the camera.  The students really enjoyed the
assignment while learning about the advantages and pitfalls
of distributed computing.

- <i>
   Ronald J. Nowling and Jesus A. Izaguirre, University of Notre Dame
  </i>
