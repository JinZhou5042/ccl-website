---
layout: "post"
title: "Green Cloud Online"
date: 2010-01-11T16:07:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2010/green-cloud-online/greencloud-9cb2aa5df0.gif"
description: "The Green Cloud is now online! The Green Cloud is the invention of Dr. Paul Brenner at the ND Center for Research Computing.  It is a containerized data cent…"
toc: false
related_posts: true
tags: [grid heating, condor, green cloud, genome assembly]
---

The Green Cloud is now online!

The Green Cloud is the invention of Dr. Paul Brenner at the ND Center for Research Computing. It is a containerized data center located at the South Bend city greenhouse, stocked with used servers kindly donated by Ebay, Inc. The first batch of machines was installed in December, and will eventually reach about 400 cores once everything is turned on.

  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2010/green-cloud-online/greencloud-9cb2aa5df0.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  What makes the data center unique is that is has
  <span style="font-weight: bold;">
   no air conditioning
  </span>
  .  Instead, the data center takes in ambient air, and then exhausts it into the greenhouse.  This benefits Notre Dame, since we no longer pay the cost of cooling, but it also benefits the greenhouse, which has significant heating costs during the winter months.  (We used to call this idea
  <a href="http://dthain.blogspot.com/2009/06/grid-heating-putting-data-center-heat.html">
   grid heating
  </a>
  .)

Of course, this means the capacity of the system may change with the weather. During the winter, the system can run at full blast and deliver as much heat as possible to the greenhouse. During the spring and fall, the heat may not be needed, and can be vented outdoors. During the hottest part of the summer, we may need to shut some machines down to get the temperature under control. However, recent studies by big data center operators suggest that machine temperature could be safely increased to 80 or 90 degrees, so there may be a fair amount of headroom available. We will see.

For a normal data center that runs web servers and databases, shutting down machines is not really an option. However, the Green Cloud provides fungible computing power for large computations in science and engineering at Notre Dame. If structured correctly, these workloads can adapt to 10 or 100 or 1000 cores. So, turning machines on and off will affect performance, but not correctness.

A good example of a flexible workload is genome assembly. Two of our students, Christopher Moretti and Michael Olson presented initial results on a
<a href="http://www.cse.nd.edu/%7Eccl/research/papers/assembly-mtags09.pdf">
Scalable Genome Assembler
</a>
at the
<a href="http://dsl.cs.uchicago.edu/MTAGS09/">
MTAGS Workshop
</a>
held at
<a href="http://www.sc09.org/">
Supercomputing 2009
</a>
. Their assembler uses our
<a href="http://www.cse.nd.edu/%7Eccl/software/workqueue">
Work Queue
</a>
framework to manage a variable workforce, pushing out sequence fragments to whatever machines are available. The system has scaled up to about 1000 cores, spread across the Notre Dame campus, the Green Cloud, Purdue University, and the University of Wisconsin.

We are currently working on a journal paper and an open source release of the assembler, so stay tuned for details.
