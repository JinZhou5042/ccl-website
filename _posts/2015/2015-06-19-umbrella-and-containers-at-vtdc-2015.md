---
layout: "post"
title: "Umbrella and Containers at VTDC 2015"
date: 2015-06-19T18:21:00+00:00
author: "Douglas Thain"
description: "Two CCL students presented their latest work at the Virtualization Technologies in Distributed Computing (VTDC) at the Symposium on High Performance Distribu…"
toc: false
related_posts: true
tags: []
---
Two CCL students presented their latest work at the Virtualization Technologies in Distributed Computing (VTDC) at the Symposium on High Performance Distributed Computing (HPDC) in Portland, Oregon.

<br/>

<br/>

Haiyan Meng presented her work on

<a href="http://ccl.cse.nd.edu/software/umbrella">Umbrella</a>

, a system for specifying and materializing execution environments in a portable and reproducible way.  Umbrella accepts a declarative specification for an application, and then determines the minimum technology needed to deploy it.   The application will be run natively if the local execution environment is compatible, but if not, Umbrella will deploy a container, a virtual machine, or make use of a public cloud if necessary.

<br/>

<br/>

<table>
<tbody>
<tr>
<td><a href="http://ccl.cse.nd.edu/research/papers/umbrella-vtdc15.pdf" style="color: navy;">
<img alt="(PDF)" border="1" height="128" src="http://ccl.cse.nd.edu/research/thumbs/912.0.png" style="padding: 5px;" width="93"/></a></td>
<td>Haiyan Meng and Douglas Thain,<br/>
<a href="http://ccl.cse.nd.edu/research/papers/umbrella-vtdc15.pdf" style="color: navy;"><b>Umbrella: A Portable Environment Creator for Reproducible Computing on Clusters, Clouds, and Grids</b></a>,<br/>
<i>Workshop on Virtualization Technologies in Distributed Computing (VTDC) at HPDC</i>, June, 2015. <a href="http://dx.doi.org/10.1145/2755979.2755982" style="color: navy;">DOI: 10.1145/2755979.2755982</a></td>
</tr>
</tbody>
</table>

<br/>

Charles Zheng presented his work on integrating Docker containers into the

<a href="http://ccl.cse.nd.edu/software/makeflow">Makeflow</a>

workflow engine and the

<a href="http://ccl.cse.nd.edu/software/workqueue">Work Queue</a>

runtime system, each with different tradeoffs in performance and isolation.  These capabilities will be included in the upcoming 5.0 release of CCTools.

<br/>

<br/>

<table>
<tbody>
<tr>
<td><a href="http://ccl.cse.nd.edu/research/papers/wq-docker-vtdc15.pdf" style="color: navy;"><img alt="(PDF)" border="1" height="128" src="http://ccl.cse.nd.edu/research/thumbs/910.0.png" style="padding: 5px;" width="93"/></a></td>
<td>Charles Zheng and Douglas Thain,<br/>
<a href="http://ccl.cse.nd.edu/research/papers/wq-docker-vtdc15.pdf" style="color: navy;"><b>Integrating Containers into Workflows: A Case Study Using Makeflow, Work Queue, and Docker</b></a>,<br/>
<i>Workshop on Virtualization Technologies in Distributed Computing (VTDC)</i>, June, 2015. <a href="http://dx.doi.org/10.1145/2755979.2755984" style="color: navy;">DOI: 10.1145/2755979.2755984</a></td></tr>
</tbody></table>
