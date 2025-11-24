---
layout: "post"
title: "Condor Week 2016 presentation"
date: 2016-05-24T12:32:00+00:00
author: "Benjamin Tovar"
description: "We presented in Condor Week 2016 our approach to create a comprehensive resource feedback loop to execute tasks of unknown size. In this feedback look, tasks…"
toc: false
related_posts: true
tags: []
---
We presented in Condor Week 2016 our approach to create a comprehensive resource feedback loop to execute tasks of unknown size. In this feedback look, tasks are monitored and measured in user-space as they run; the resource usage is collected into an online archive; and further instances are provisioned according to the application's historical data to avoid resource starvation and minimize resource waste.  We present physics and bioinformatics case studies consisting of more than 600,000 tasks running on 26,000 cores (96% of them from opportunistic resources), where the proposed solution leads to an overall increase in throughput (from 10% to 400% across different workflows), and a decrease in resource waste compared to workflow executions without the resource feedback-loop.
  <a href="http://ccl.cse.nd.edu/presentations/2016-05-18-resource-allocation-condor-week.pdf">
   condor week 2016 slides
  </a>
