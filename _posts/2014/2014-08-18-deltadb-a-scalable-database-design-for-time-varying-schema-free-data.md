---
layout: "post"
title: "DeltaDB - A Scalable Database Design for Time-Varying Schema-Free Data"
date: 2014-08-18T18:21:00+00:00
description: "DeltaDB is a log-structure database and query model designed for time-varying and schema-free data. The following video gives a high level overview of DeltaD…"
toc: false
related_posts: true
tags: [archived-blog]
---

<html><body>DeltaDB is a log-structure database and query model designed for time-varying and schema-free data. The following video gives a high level overview of DeltaDB and describes how the model is scalable using MapReduce.<br/>
<br/>

<span id="goog_719630263"></span><br/>
This database design is implemented within CCTools in two parts. Part 1 (data storage) has been available for over a year and is called the catalog server. Part 2 (data analysis) has recently been implemented and is not yet in a release, but is available in the following commit:<br/>
<br/>
<a href="https://github.com/pivie/cctools/commit/bca998baf00c71484b567110d73c36bd042c3b3e">https://github.com/pivie/cctools/commit/bca998baf00c71484b567110d73c36bd042c3b3e</a><br/>
<br/>

<br/>
<br/>
<br/>
<br/>
The data model is designed to handle schema-free status reports from various services. And while the reports can be schema-free, most of the fields will normally remain the same between subsequent reports from the same instance of a service.<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
The first status report is saved in it's entirety, and then the subsequent reports are saved as changes (or "deltas") on the original report. Snapshots of the status of all services and instances are stored on a daily basis. This allows a query for analysis based on a given time frame to jump more quickly to the start of the time frame, rather than have to start at the very beginning of the life of the catalog server.<br/>
<br/>
<br/>
<br/>
<br/>
A query is performed by applying a series of operators to the data. For a distributed system, spatial distribution is when the data is distributed such that a given instance always ends up on the same node. In this situation, all but the last of the operators can be performed in the map stage of the MapReduce model. This allows for better scalability because less work has to be performed by a single node in the reduce stage.<br/>
<br/>

Much more detail is provided in a paper which was published at IEEE Bigdata 2014, and is available at the following URL:<br/>
<br/>
<a href="http://ccl.cse.nd.edu/research/papers/pivie-deltadb-2014.pdf">http://ccl.cse.nd.edu/research/papers/pivie-deltadb-2014.pdf</a><br/>
<br/>
For further inquiries, please email <a href="mailto:pivie@nd.edu">pivie@nd.edu</a>.<br/>
<br/>
<br/></body></html>
