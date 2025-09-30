---
layout: page
title: Work Queue
description: Work Queue is an application framework for creating and managing dynamic manager-worker style programs that scale up to tens of thousands of machines on clusters, clouds, and grids.
img: assets/img/dummy/dummy-logo.png
carousel: true
order: 3
category: work
---

Work Queue is a framework for building large distributed applications that span thousands of machines drawn from clusters, clouds, and grids. Work Queue applications are written in Python, Perl, or C using a simple API that allows users to define tasks, submit them to the queue, and wait for completion. Tasks are executed by a general worker process that can run on any available machine. Each worker calls home to the manager process, arranges for data transfer, and executes the tasks. A wide variety of scheduling and resource management features are provided to enable the efficient use of large fleets of multicore servers. The system handles a wide variety of failures, allowing for dynamically scalable and robust applications.
