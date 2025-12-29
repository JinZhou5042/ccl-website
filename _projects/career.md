---
layout: project
title: "Data Intensive Grid Computing on Active Storage Clusters"
subtitle: "PI: Douglas Thain. This work is supported by the National Science Foundation under grant CNS-06-43229"
description: "Description goes here."
order: 9
skip_list: true
category: work
carousel: false
publication_keywords:
  - career
---

Distributed computing has traditionally focused on managing the computation needs of large scale science. However, as CPUs outpace storage and networking technologies, managing the data required by scientific applications is becoming more and more critical. Traditional abstractions such as filesystems have not proven to be sufficient for these needs. Instead, new mechanisms and algorithms are needed to ensure that computation and data are partitioned and performed in an efficient manner.

### Foundation: The Tactical Storage System

<div class="row justify-content-sm-center mt-3">
    <div class="col-sm-8">
        {% include figure.liquid path="assets/img/projects/tactical.gif" class="img-fluid rounded z-depth-0" zoomable=true %}
    </div>
</div>

In order to execute data intensive applications, we must have a software foundation that allows us to harness and access storage and computing in a coordinated manner. This software is called the [tactical storage system (TSS)](http://www.nd.edu/~dthain/papers/tss-sc05.pdf). Deployed on a large network of machines [[catalog](http://chirp.cse.nd.edu:9097) \- [visual](../operations/storage/visual)] at the University of Notre Dame, the TSS allows ordinary users to construct and employ complex storage structures such as filesystems and databases, share them with external users via [fine-grained security policies](http://www.nd.edu/~dthain/papers/cons-sisw05.pdf) and a [decentralized group system](http://www.nd.edu/~dthain/papers/groups-grid06.pdf), manage local space through an [allocation mechanism.](http://www.nd.edu/~dthain/papers/alloc-grid06.pdf), and securely execute code close to data using a technique called [identity boxing](http://www.nd.edu/~dthain/papers/ibox-sc05.pdf).

### Techniques for Computing on Distributed Storage

Given the ability to store and access data on a large number of disks in a cluster, we can begin to view scientific computation and data analysis in a new way.

This simplest is just to view a cluster as a large, endlessly expandable storage device. For example, the [GRAND](http://www.nd.edu/~grand) astrophysics experiment at Notre Dame employs tactical storage to build a high-capacity filesystem on a cluster of commodity machines. By employing parallel disks, we have improved the throughput of data processing by several orders of magnitude. As more capacity or thoughput is needed, the software can be instructed to harness additional cluster nodes, regardless of their hardware or location.

A more complex example is to use multiple storage devices and protocols distributed across the wide area. Many scientific codes employ a common set of large datasets that are impractical for every user to replicate. However, given a replication location service, multiple codes can access the same copy of data. Our software permits users to harness distributed copies, regardless of their location or storage prototocol, without changing the underlying application. This approach has been used by the [IBCP bioinformatics group](http://www.nd.edu/~dthain/papers/bio-grid06.pdf) at the University of Lyon, the [CDF](http://www.nd.edu/~dthain/papers/cdf-parrot-chep06.pdf) high energy physics experiment at Fermi National Lab, and the [BaBar](http://www.nd.edu/~dthain/papers/transparent-ccpe.pdf) experiment at CERN.

<div class="row justify-content-sm-center mt-3">
    <div class="col-sm-8">
        {% include figure.liquid path="assets/img/projects/tactical-functional.gif" class="img-fluid rounded z-depth-0" zoomable=true %}
    </div>
</div>

An unconventional view is to consider a cluster as a database facility for both generating, tracking, and post-processing simulations. The [GEMS distributed database](http://www.nd.edu/~dthain/papers/gems-hpdc14.pdf) for molecular dynamics simulation uses a simulation database as an index into distributed storage. This allows the end user to submit simulation queries which are then either computed or returned as needed. Local storage and computation are employed to minimize network computation. A functional programming style is used to name and access computation and data easily.
