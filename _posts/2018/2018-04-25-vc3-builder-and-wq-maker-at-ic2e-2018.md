---
layout: "post"
title: "VC3-Builder and WQ-MAKER at IC2E 2018"
date: 2018-04-25T17:48:00+00:00
description: "Ben Tovar presented the paper Automatic Dependency Management for Scientific Applications on Clusters and Nick Hazekamp presented the paper MAKER as a Servic…"
toc: false
related_posts: true
tags: [archived-blog]
---
<html><body>Ben Tovar presented the paper
<a href="http://ccl.cse.nd.edu/research/papers/tovar-vc3builder-ic2e2018.pdf">Automatic Dependency Management for Scientific Applications on Clusters</a>
and Nick Hazekamp presented the paper
<a href="http://ccl.cse.nd.edu/research/papers/maker-service-ic2e2018.pdf">MAKER as a Service: Moving HPC applications to Jetstream Cloud</a>
at the 
<a href="http://conferences.computer.org/IC2E/2018/">IEEE International Conference on Cloud Engineering (IC2E 2018)</a> on April 18, 2018 in Orlando, Florida.

<p>In Automatic Dependency Management for Scientific workflows 
(<a href="http://ccl.cse.nd.edu/research/papers/tovar-vc3builder-ic2e2018.pdf">paper</a>
<a href="http://ccl.cse.nd.edu/presentations/tovar-vc3-builder-ic2e2018.pdf">slides</a>) 
we introduce a tool for software environments deployments in clusters. 
This tool, called the vc3-builder, has minimal dependencies and  a lightbootstrap, which allows it to be deployed along batch jobs. 
The vc3-builder then install any missing software using only user-privileges (e.g., no sudo) so that the actual user payload can be executed. 
The vc3-builder is being developed as part of the DOE funded Virtual Clusters for Community Computation (VC3) project, 
in which users can construct custom short-lived virtual clusters across different computational sites.


</p><p>In MAKER as a Service: Moving HPC applications to Jetstream Cloud
(<a href="http://ccl.cse.nd.edu/research/papers/maker-service-ic2e2018.pdf">paper</a>
<a href="http://ccl.cse.nd.edu/presentations/2018-04-17-maker-jetstream-ic2e-poster.pdf">poster</a>
<a href="http://ccl.cse.nd.edu/presentations/2018-04-18-maker-jetstream-ic2e-presentation.pdf">slides</a>) 
we discussed the lessons learn in migrating MAKER, a traditional HPC application, to the cloud. 
This focused on issues like recreating the software stack using VC3-Bulder, 
addressing the lack of shared filesystems and inter-node communications with Work Queue, 
and building the application focused on user feedback allowing for informed decisions in the cloud.
Using WQ-MAKER we were able to run MAKER not only on Jetstream, but also resources from Notre Dame's Condor cluster. 
Below you can see the systems architecture.

</p></body></html>
