---
layout: "post"
title: "On Parallel Programming with Processes"
date: 2009-02-25T14:54:00+00:00
author: "Douglas Thain"
description: "About once a week, a well-meaning person stops by my office to ask a question like this: I need to run about 1000 simulations that take about an hour each.  …"
toc: false
related_posts: true
tags: [threads, processes, parallel, abstractions]
---
About once a week, a well-meaning person stops by my office to ask a question like this:

<span style="font-style: italic; font-weight: bold;"><br/><br/>I need to run about 1000 simulations that take about an hour each.  I can't wait a thousand hours for the results, so I need to parallelize my simulation.  So, should I re-write my application using threads, MPI, or something else?</span>

<br/>

<br/>

For some reason, they are always disappointed by my response:

<span style="font-style: italic; font-weight: bold;"><br/><br/>Just run multiple copies of your program at once.</span>

<br/>

<p>The reasoning is very simple.  You already have a complete, debugged program.  You have multiple processors, and your operating system knows how to use them.  Running four processes at once on a four CPU machine will give you four times the number of results in the same amount of time.  Your work will be down in 250 hours instead of 1000.  In fact, you can take the same sequential program and submit it to a large batch system that can run on 100 different processors at once and complete one hundred simulations in one hour.  If you only get 99 hosts, that's ok, you will still get a 99x improvement.<br/></p>

<p>The alternative is almost too awful to contemplate.  Those who have written multithreaded or message passing programs knows that it sounds great on the chalkboard, but the reality is much more complicated.    Debugging tools are ineffective on parallel programs.  Many existing libraries are not thread safe.  You have to deal with synchronization problems, and an endless slew of tuning parameters.  If you write a message passing program that requires eight hosts, then you need to wait until you have exactly eight hosts available for your exclusive use.  It is all too likely that you will spend more time trying to correct the program than you actually will running it.<br/></p>

<p>The funny part is, many people do not like this advice.  But... that's not... <span style="font-weight: bold;">parallel</span>!  Or, if they concede it's parallel, it's merely <span style="font-weight: bold;">embarassingly</span> parallel, or even worse, <span style="font-weight: bold;">shamefully</span> parallel.  (As if using 100 CPUs simultaneously with processes was somehow less parallel than using 8 CPUs with threads.)  They were hoping to doing some really difficult, macho programming, but now find there is a simple solution to the problem.<br/></p>

<p>Now, I'm over-simplifying a little bit.  There are certainly cases where it makes sense to take an existing program and parallelize it to use multiple processors.  There are a few good reasons for doing so.  First, if you really need one particular result <span style="font-weight: bold;">as soon as possible</span>, then it makes sense to parallelize.  For example, if you are predicting tomorrow's weather, you need the result before tomorrow.  Second, if your sequential program has fully consumed another resource on the machine, then it may make sense to parallelize.  For example, if your simulation uses all available memory on a machine, then you cannot run two copies at once on the same machine.  Third, if one program will run for longer than you can realistically keep a computer up without rebooting, then it may make sense to parallelize.  However, none of these cases are as common as you might think, and it's usually best to avoid threads or message passing until the necessity has been proven.</p>

<p>A middle ground that we have been exploring in my lab is the use of <span style="font-weight: bold;">abstractions</span> to represent large parallel programs.  In this approach, the user provides a sequential program that performs the key kernel of computation in which they specialize.  Many invocations of the kernel are then combined together to run very large parallel programs with parallelism measured in hundreds of CPUs.  You can read more about the <a href="http://dthain.blogspot.com/2008/12/bxgrid-biometrics-research-grid.html">BXGrid</a>, <a href="http://dthain.blogspot.com/2008/11/wavefront-abstraction.html">Wavefront</a>, <a href="http://dthain.blogspot.com/2008/10/abstractions-for-distributed-computing.html">All-Pairs</a>, and <a href="http://dthain.blogspot.com/2008/10/abstraction-for-ensemble-classifiers.html">Classify</a> abstractions.</p>
