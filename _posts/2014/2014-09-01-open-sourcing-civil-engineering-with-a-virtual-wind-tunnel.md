---
layout: "post"
title: "Open Sourcing Civil Engineering with a Virtual Wind Tunnel"
date: 2014-09-01T18:21:00+00:00
description: "In addition to the CCL tools themselves, members of the CCL lab often collaborate with other research groups to help them solve their scientific problems, us…"
toc: false
related_posts: true
tags: [archived-blog]
---
<html><body>In addition to the CCL tools themselves, members of the CCL lab often collaborate with other research groups to help them solve their scientific problems, using collaborative computing. Often, such collaborative projects drive the development and debugging of our tools.<br/>
<br/>
<table cellpadding="0" cellspacing="0" class="tr-caption-container" style="float: left; margin-right: 1em; text-align: left;"><tbody>
<tr><td style="text-align: center;"></td></tr>
<tr><td class="tr-caption" style="text-align: center;">An uploaded design in the Virtual Wind Tunnel</td></tr>
</tbody></table>
<br/>
One such project is a Virtual Wind Tunnel, which was created in collaboration with the Notre Dame Civil Engineering Department, as part of a larger project to explore collaboration in civil design. On the surface, this is a fairly simple idea. A user uploads a building shape for analysis to a web portal. Then, the user can run wind flow simulations upon horizontal cross sections of the building. Once complete, the results of these simulations can be viewed and downloaded.<br/>
<br/>
Making all of this work, however, requires a large number of interlocking components. For now, I would just like to describe how the CCL tools play a role in this system. When simulations are to be run, one very simple way to deliver simulation tasks to available computing resources is to run a Work Queue worker on those machines. The front-end of the system runs a Work Queue master, which queues up tasks.<br/>
<br/>
<table cellpadding="0" cellspacing="0" class="tr-caption-container" style="float: right; margin-left: 1em; text-align: right;"><tbody>
<tr><td style="text-align: center;"></td></tr>
<tr><td class="tr-caption" style="text-align: center;">Viewing Results of a Simulation</td></tr>
</tbody></table>
This has several advantages, but the most important is that we can be flexible about the resources which we use at any given time, even using computing resources from multiple sources at the same time. For example, we have a small private cloud which we use for experimental purposes. We also have access to an on-campus SGE grid, but must share with many other customers. Our current approach is to set up a handful of VM on the private cloud, which run workers. If demand for simulations is high enough, we ask for more workers from the SGE.<br/>
<br/>
By using Work Queue as a means of distributing tasks, we can be more flexible about the backend upon which those tasks are run. This allows us to tailor our resource usage to our actual needs and, as needed, to adjust our resource usage when appropriate.</body></html>
