---
layout: "post"
title: "Visualizing Clusters in Real Time"
date: 2008-12-09T17:13:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2008/visualizing-clusters-in-real-time/viz3-97e041e070.gif"
description: "The end of the semester is nearing, so activity in our distributed system really shoots up as undergraduates finish their semester projects and graduate stud…"
toc: false
related_posts: true
tags: [chirp, map-reduce, visualizing, condor, hadoop, distributed computing]
---

<div>
   The end of the semester is nearing, so activity in our distributed system really shoots up as undergraduates finish their semester projects and graduate students hurry to generate those last few research results. You can see this activity reflected in a number of visual displays that we have created to track activity in the system.
  </div>
  <div>
  </div>
  <div>
   For example, the following is a snapshot of an applet that displays the current state of all machines in our
   <a href="http://www.cse.nd.edu/~ccl/software/chirp">
    Chirp
   </a>
   storage cluster. Each machine is represented by a box, where colors indicate resources on each machine (memory, disk, cpu), and arrows indicate active network transfers. You can click on the following snapshot, or view the current
   <a href="http://www.cse.nd.edu/~ccl/viz">
    live display
   </a>
   if you like.
  </div>
  <div>
  </div>
  <div>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2008/visualizing-clusters-in-real-time/viz3-97e041e070.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
  </div>
  <div>
  </div>
  <div>
   With a quick view, you can see four different things going on. Two students are working on their semester project in distributed systems, which is to create a dynamic cloud of web servers. This is reflected in the spread of network transfers going from two submit machines near the top, transmitting web server data to the hosts where they happen to run. One student is running a large All-Pairs job: this is reflected in the small vertical arrows about one third of the way down, indicating heavy disk traffic local to each machine. Closer to the bottom, someone is keeping the CPUs busy on the cluster named sc0-xx: this cluster runs
   <a href="http://hadoop.apache.org/">
    Hadoop
   </a>
   , so it is probably a Map-Reduce job.
  </div>
  <div>
   Of course, this kind of display is only good for the high level immediate picture. It only tells you what is going on in the last minute. For a more historical view, we track and publish data from our
   <a href="http://www.cs.wisc.edu/condor">
    Condor
   </a>
   distributed batch system. For example, this shows the CPU utilization of our system over the last week. The red part shows the number of CPUs in use by the person at the keyboard, the green part shows the number of CPUs idle, and the blue part shows the idle CPUs harnessed by Condor. As you can tell, things picked up in the middle of the week:
  </div>
  <div>
  </div>
  <div>
  </div>
  <div>
  </div>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2008/visualizing-clusters-in-real-time/util-e93e0ee05c.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  This display shows the total CPU time consumed by different users over the last year. A few students have really racked up a lot of computation!
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2008/visualizing-clusters-in-real-time/year-e7be1d2759.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  All of these displays rotate automatically on our "scoreboard", which is a monitor in a public hallway of the Engineering building at Notre Dame. It's not unusual for me to step out of my office only to find a few students checking to see who scored the highest over the last week! We ought to give a yearly award for the students who makes the best use of the system.

On a more philosophical note, the displays really help to make our work more concrete to outsiders. Because we work with intangible software instead of test tubes or fissile material, we don't have a "lab" to show visitors or prospective students. A live picture draws people in: random people from other departments stop in the hallway to look at the scoreboard and ask what is going on. A little effort put into "advertising" goes a long way.
