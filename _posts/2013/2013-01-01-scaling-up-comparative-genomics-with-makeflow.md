---
layout: "post"
title: "Scaling Up Comparative Genomics with Makeflow"
date: 2013-01-01T19:04:00+00:00
author: "Douglas Thain"
description: "The CoGe Comparative Genomics Portal provides on-the-fly genomic analysis and comparative tools for nearly 
20,000 genomes from 15,000 organisms and has beco…"
toc: false
related_posts: true
tags: [highlights, makeflow, bioinformatics]
---
<a href="http://ccl.cse.nd.edu/community/stories/coge.png" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="240" src="http://ccl.cse.nd.edu/community/stories/coge.png" width="320"/></a>

The

<a href="http://genomevolution.org/">CoGe Comparative Genomics Portal</a>

provides on-the-fly genomic analysis and comparative tools for nearly 
20,000 genomes from 15,000 organisms and has become more and more 
popular as genome sequence has become less expensive.  The portal runs 
about 10,000 workflows a month and needed a robust solution for 
distributed computing of various workflows that range from simple to 
complex.  Using

<a href="http://www.nd.edu/%7Eccl/software/makeflow">Makeflow</a>

,
 the CoGe team is modularizing the workflows being run through CoGe, has
 early wins in delivering value to the system by easily 
monitoring/restarting workflows, and is now starting to work on 
distributing computation across multiple types of compute resources.

<br/>

<br/>

-

<i>Eric Lyons, University of Arizona</i>
