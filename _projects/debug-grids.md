---
layout: project
title: "Debugging Grids with Machine Learning Techniques"
subtitle: "PIs: Nitesh Chawla, Xiaohui Song, Shaowen Wang, and Douglas Thain. This work is supported by the National Science Foundation under grant CNS-07-20813."
description: "Description goes here."
order: 9
skip_list: true
category: work
carousel: false
publication_keywords:
  - debug-grids
---
Debugging distributed systems is notoriously hard. Not only do distributed systems fail frequently, they fail _strangely_. System failure can arise from physical failures, from network outages, from misconfiguration, or simply from program inputs. Not only is distinguishing between these cases difficult, but users are often unable to even extract the necessary information from the system. The state of the art in distributed debugging is to use `ssh` to log into a node and use `grep` to search server logs. 

Of course, we have good tools such as `gdb` and `purify` for debugging standalone systems, but these models of debugging just don't apply to distributed systems. We cannot just stop processes in a distributed system in order to examine their memory contents: we may not have permission to do so, nor may the process in question be currently accessible. New models of debugging are required. 

Data mining techniques can be applied to the problem of large scale troubleshooting. Computing grids expose a large amount of structured information about both jobs and the resources that they consume. If these items are well described, then classification algorithms can be used to find properties of each that correlate with success or failure. An ideal troubleshooter would report to the user something like: _Your jobs always fail on Linux 2.8 machines, always fail on cluster X between midnight and 6 A.M, and fail with 50 percent probability on machines owned by user Y._ Further, these discoveries may be used to automatically avoid making bad placement decisions that waste time and resources. 

We have implemented a prototype of such a debugging system that examines log data produced by the [Condor](http://www.cs.wisc.edu/condor) distributed batch system, and has diagnosed several previously unknown problems on the Teragrid and the Northwest Indiana Computational Grid. 