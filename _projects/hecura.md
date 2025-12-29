---
layout: project
title: "Data Intensive Abstractions for High End Biometric Applications"
subtitle: "PIs: Douglas Thain and Patrick Flynn. This work is supported by the National Science Foundation under grant CNS-06-21434"
description: "Description goes here."
long_description: "Description goes here."
order: 9
skip_list: true
category: work
carousel: false
publication_keywords:
  - hecura
---

Biometric research requires the execution of very large data intensive batch workloads. To evaluate new matching algorithms, researchers wish to compare thousands of images to each other by brute force. When these sort of workloads are submitted to conventional batch systems in the usual way, they induce massive amount ofs network and I/O traffic that result in very poor throughput. How can we execute such large workloads effectively?

To attack this problem, we are introducing **data intensive abstractions** that allow the user to easily provide the system with more information about the **structure of a workload** so that is can partition the data and execute it effectively. The abstraction explicitly specifies the data to be processed, the code that will process it, and the relationship between the two. One example of an abstraction is All-Pairs:

```
All-Pairs( set S, function F ):
For all Si and Sj in set S, compute: F( Si, Sj )
```

A computing system with an All-Pairs interface can easily find a more efficient implementation than a demand-paged filesystem. The input data can be staged to the computation nodes by a spanning tree, and the partitioning of work units into jobs can be done according to the performance properties of the system. In this project, we are designing a variety of similar data intensive abstractions that allow for the easy and efficient execution of large scientific workloads.
