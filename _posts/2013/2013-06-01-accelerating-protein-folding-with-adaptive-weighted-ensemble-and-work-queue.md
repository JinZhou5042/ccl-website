---
layout: "post"
title: "Accelerating Protein Folding with Adaptive Weighted Ensemble and Work Queue"
date: 2013-06-01T18:07:00+00:00
author: "Douglas Thain"
description: "Computational protein folding has historically relied on long-running
 simulations of single molecules. Although many such simulations can run
 be at once, t…"
toc: false
related_posts: true
tags: [work queue, highlights, molecular dynamics]
---
<a href="http://ccl.cse.nd.edu/community/stories/protein.png" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" src="http://ccl.cse.nd.edu/community/stories/protein.png"/></a>

<i></i>

Computational protein folding has historically relied on long-running
 simulations of single molecules. Although many such simulations can run
 be at once, they are statistically likely to sample the same common 
configurations of the molecule, rather than exploring the many possible 
states it may have.  To address this, a team of researchers from the 
University of Notre Dame and Stanford University designed a system that 
combined the

<a href="http://www3.nd.edu/%7Eccl/research/papers/folding-escience12.pdf">Adaptive Weighted Ensemble</a>

technique to run thousands of short

<a href="http://www.gromacs.org/">Gromacs</a>

and

<a href="http://protomol.sourceforge.net/">Protomol</a>

simulations in parallel with periodic resampling to explore the rich state space of a molecule.  Using the

<a href="http://www.nd.edu/%7Eccl/software/workqueue">Work Queue</a>

framework, these simulations were distributed across thousands of CPUs 
and GPUs drawn from the Notre Dame, Stanford, and commercial cloud 
providers.  The resulting system effectively simulates the behavior of a
 protein at 500 ns/hour, covering a wide range of behavior in days 
rather than years.

<br/>

<br/>

<br/>

<span style="font-weight: normal;"><i>- Jesus Izaguirre, University of Notre Dame and Eric Darve, Stanford University</i></span>
