---
layout: "post"
title: "Troubleshooting Distributed Systems via Data Mining"
date: 2008-10-06T14:24:00+00:00
author: "Douglas Thain"
description: "One of our students, David Cieslak, just presented this paper on troubleshooting large distributed systems at the IEEE Grid Computing Conference in Japan.  H…"
toc: false
related_posts: true
tags: [troubleshooting, data mining, grid computing, distributed computing]
---
One of our students, David Cieslak, just presented

<a href="http://www.cse.nd.edu/%7Edthain/papers/debug-grid08.pdf">this paper</a>

on troubleshooting large distributed systems at the

<a href="http://www.grid2008.org/">IEEE Grid Computing Conference</a>

in Japan.  Here's the situation:

<br/>

<ul><li>You have a million jobs to run.</li><li>You submit them to a system of thousands of CPUs.</li><li>Half of them complete, and half of them fail.<br/></li></ul>

<span style="font-weight: bold;">Now what do you do?</span>

It's hopeless to debug any single failure, because you don't know if it represents the most important case.  It's a thankless job to dig through all of the log files of the system to see where things went wrong.  You might try re-submitting all of the jobs, but chances are that half of those will fail, and you will just be wasting more time and resources pushing them to the finish.

<br/>

<br/>

Typically, these sorts of errors come arise from an incompatibility of one kind or another.  The many versions of Linux present the most outrageous examples.  Perhaps your job assumes that the program wget can be found on any old Linux machine.  Oops!  Perhaps your program is dynamically linked against SSL version 2.3.6.5.8.2.1, but some machines only have version 2.3.6.5.8.1.9.  Oops!  Perhaps your program crashes on a machine with more than 2GB of physical memory, because it performs improper pointer arithmetic.  Oops!

<br/>

<br/>

So, to address this problem, David has constructed a nice tool that reads in some log files, and then diagnoses the

<span style="font-weight: bold;">properties of machines or jobs</span>

associated with failures, using techniques from the field of data mining.  (We implemented this on log files from

<a href="http://www.cs.wisc.edu/condor">Condor</a>

, but you could apply the principle to any similar system.)  Of course, the tool cannot diagnose the root cause, but it can help to narrow down the source of the problem.

<br/>

<br/>

For example, consider the user running several thousand jobs on our 700 CPU Condor pool.  Jobs tended to fail within minutes on certain set of eleven machines.  Of course, as soon as those jobs failed, the machines were free to run more jobs, which promptly failed.  By applying GASP, we discovered a common property among those machines:

<br/>

<br/>

<span style="font-family: courier new;">    (TotalVirtualMemory &lt; 1048576)<br/><br/></span>

They only had one gigabyte of virtual memory!  (Note: The units are KB.)  Whenever a program would consume more than that, it was promptly killed by the operating system.  This was simply a mistake made in configuration -- our admins fixed the setting, and the problem went away.

<br/>

<br/>

Here's another problem we found on the Wisconsin portion of the Open Science Grid.  Processing the log data from 100,000 jobs submitted in 2007, we found that most failures were associated with this property:

<br/>

<br/>

<span style="font-family: courier new;">    (FilesystemDomain="hep.wisc.edu")</span>

<br/>

<br/>

It turns out that a large number of users submitted jobs assuming that the filesystem they needed would be mounted on all nodes of the grid.  Not so!  Since this was an historical analysis, we could not repair the system, but it did give us a rapid understanding of an important usability aspect of the system.

<br/>

<br/>

If you want to try this out yourself, you can visit our

<a href="http://www.cse.nd.edu/%7Edial/GASP">web page</a>

for the software.
