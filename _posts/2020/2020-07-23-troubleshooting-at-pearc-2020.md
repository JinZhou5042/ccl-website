---
layout: "post"
title: "Troubleshooting at PEARC 2020"
date: 2020-07-23T16:27:00+00:00
author: "Douglas Thain"
description: "CCL grad student Nate Kremer-Herman presented his work on troubleshooting distributed systems at the PEARC 2020 conference: Nathaniel Kremer-Herman and Dougl…"
toc: false
related_posts: true
tags: []
---
CCL grad student Nate Kremer-Herman presented his work on troubleshooting distributed systems at the PEARC 2020 conference:

<br/>

<br/>

<ul>
<li>Nathaniel Kremer-Herman and Douglas Thain,<a href="http://ccl.cse.nd.edu/research/papers/tlq-pearc-2020.pdf"><b> Log Discovery for Troubleshooting Open Distributed Systems with TLQ</b></a>,<i> Practice and Experience of Advanced Research Computing (PEARC)</i>, July, 2020. </li>
</ul>

Abstract:

<br/>

<br/>

<span class="style-scope yt-formatted-string" dir="auto">Troubleshooting a distributed system can be incredibly difficult. It is rarely feasible to expect a user to know the fine-grained interactions
 between their system and the environment configuration of each machine used in the system. Because of this, work can grind to a 
halt when a seemingly trivial detail changes. To address this, there is a plethora of state-of-the-art log analysis tools, debuggers, and
visualization suites. However, a user may be executing in an open distributed system where the placement of their components are
 not known before runtime. This makes the process of tracking debug logs almost as difficult as troubleshooting the failures these
logs have recorded because the location of those logs is usually not transparent to the user (and by association the troubleshooting
tools they are using). We present TLQ, a framework designed from first principles for log discovery to enable troubleshooting of
open distributed systems. TLQ consists of a querying client and a set of servers which track relevant debug logs spread across an 
open distributed system. Through a series of examples, we demonstrate how TLQ enables users to discover the locations of their
 system’s debug logs and in turn use well-defined troubleshooting tools upon those logs in a distributed fashion. Both of these tasks
 were previously impractical to ask of an open distributed system without significant a priori knowledge. We also concretely verify
 TLQ’s effectiveness by way of a production system: a biodiversity scientific workflow. We note the potential storage and performance
 overheads of TLQ compared to a centralized, closed system approach.</span>

<br/>

<br/>
