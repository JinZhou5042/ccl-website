---
layout: "post"
title: "Simulation of HP24stab with AWE and Work Queue"
date: 2016-08-10T20:58:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2016/simulation-of-hp24stab-with-awe-and-work-queue/hp24stab-5278e66c5b.png"
description: "The villin headpiece subdomain \"HP24stab\" is a recently discovered 24-residue stable
supersecondary structure that consists of two helices joined by a turn.
…"
toc: false
related_posts: true
tags: [highlights, molecular dynamics, workqueue]
---
<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXZf1fF_CbF_3DlEfT69VB7a4E5R8NiP2rjzDBE-wqL6xppTtG29WrirYfuky2XA-Fi5QJ0UvJ6OVgmvtJcYt9EF9x_nCxbb7UE4d63Jxa18kexyEXTd9w2j_XlpoFjHQ5aJG4PF3hdAI1/s1600/hp24stab.png" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;">
  </a>
  <a href="https://www.blogger.com/blogger.g?blogID=5169926515402298799" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;">
  </a>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2016/simulation-of-hp24stab-with-awe-and-work-queue/hp24stab-5278e66c5b.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  <div class="normal" style="text-align: justify;">
   The villin headpiece subdomain "HP24stab" is a recently discovered 24-residue stable
supersecondary structure that consists of two helices joined by a turn.
Simulating 1μs of motion for HP24stab can take days or weeks depending on the
available hardware, and folding events take place on a scale of hundreds of
nanoseconds to microseconds.  Using the
   <a href="http://ccl.cse.nd.edu/software/awe">
    Accelerated Weighted Ensemble
   </a>
   (AWE), a
   <span style="text-indent: 0.5in;">
    total of 19us of
trajectory data were simulated over the course of two months using the
   </span>
   <a href="https://simtk.org/projects/openmm" style="text-indent: 0.5in;">
    OpenMM
   </a>
   <span style="text-indent: 0.5in;">
    simulation
package. These trajectories were then clustered and sampled to create an AWE
system of 1000 states and 10 models per state. A
   </span>
   <a href="http://ccl.cse.nd.edu/software/workqueue" style="text-indent: 0.5in;">
    Work Queu
   </a>
   <span style="text-indent: 0.5in;">
    e master dispatched 10,000 simulations to a peak of 1000 connected 4-core workers, for a total of 250ns of
concurrent simulation time and 2.5μs per AWE iteration. As of August 8, 2016,
the system has run continuously for 18 days and completed 71 iterations, for a
total of 177.5μs of simulation time. The data gathered from these simulations
will be used to report the mean first passage time, or average time to fold,
for HP24stab, as well as the major folding pathways.
   </span>
   <i style="text-indent: 0.5in;">
    - Jeff Kinnison and Jesús
Izaguirre, University of Notre Dame
   </i>
  </div>
