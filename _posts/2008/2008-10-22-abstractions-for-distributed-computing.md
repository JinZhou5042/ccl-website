---
layout: "post"
title: "Abstractions for Distributed Computing"
date: 2008-10-22T16:37:00+00:00
author: "Douglas Thain"
description: "My current research revolves around the idea of abstractions for distributed computing. An abstraction is a way of simplifying a workload that runs on thousa…"
toc: false
related_posts: true
tags: [assembly language, condor, allpairs, distributed computing, abstractions]
---
<p>My current research revolves around the idea of <strong>abstractions</strong> for distributed computing. An abstraction is a way of simplifying a workload that runs on thousands of machines, in much the same way that a high level language simplifies the tiresome process of programming in assembly language. Let me explain a little more.</p>

<p>Real assembly language has operations like this:</p>

<ul><li>MOV memory to register</li><li>PUSH register to stack</li><li>CALL procedure</li></ul>

<p>As you may know, programming in assembly language stinks. The programmer has to keep track of the limited number of registers in use, the current state of the stack, and the meaning of external memory locations. If that's not enough, you have to worry about the behavior of instructions that have wildly varying runtimes, unusual exceptions, and sometimes asynchronous behavior.</p>

<p>We find much the same story in distributed computing, where the operations are something like:</p>

<ul><li>TransferFile( source, destination );</li><li>ExecuteJob( executable, input, output );</li><li>AllocateVM( cpu, mem, disk, time );</li></ul>

<p>If this is your instruction set, then you have many of the same problems. You have to manage a limited amount of local and remote storage, carefully cleaning up when jobs complete. If that's not enough, you have to worry about the behavior of instructions that have wildly varying runtimes, unusual exceptions, and sometimes asynchronous behavior. Sound familiar?</p>

<p>So, we advocate that users should employ high level abstractions that hide many of these ugly details, allowing the user to focus on the big picture. An abstraction expresses a pattern of computation that is simple, but may be very large, and thus requires significant effort to implement correctly and efficiently.</p>

<p>Chris Moretti is working on one abstraction called <strong>AllPairs</strong>. This abstraction crops up in a variety of domains, including biology, bioinformatics, and data mining, to name a few. It is easily stated:</p>

<p><strong>AllPairs( set A, set B, function F ) returns matrix M<br/>where M[i,j] = F( A[i],B[j] );</strong></p>

<p>Of course, AllPairs is easy to execute on a small problem: just write a nested loop. But, what if sets A and B have 10,000 elements of 1MB each, and the function F takes ten seconds to run? You would be looking at 100TB of I/O and 1157 days of computation.</p>

<p>Instead, you need to harness a distributed system such as <a href="http://www.cs.wisc.edu/condor">Condor</a> to split up the computation across hundreds of machines. But you can't just submit 100,000,000 jobs: the queueing system would fall over. You can't just blindly have each job access the data over the network: the file server would file over. Without some careful tuning, your task will run even more slowly than the sequential version. The larger the problem gets, the more you have to worry about.</p>

<p>Fortunately, if your program fits in the All-Pairs abstraction, then we have solved the problem for you. If your "sets" are a bunch of files in a directory and your "function" is a Unix program that compares two objects, then you can simply invoke this at the command line:</p>

<p><strong>allpairs A B Func</strong></p>

<p>In the background, the All-Pairs implementation will measure the size of the objects, test the runtime of the function, choose the resources to use, distribute the data to the nodes, deal with failures, and then clean up the system. The user only has to worry about the problem to solve, not the method of achieving it.</p>

<p>In short, by using an abstraction, we can guide our users to appropriate ways of solving problems, and get them results in a reasonable time. You can read more about this in our <a href="http://www.cse.nd.edu/~ccl/pubs/allpairs-ipdps08.pdf">paper on All-Pairs </a>presented at IPDPS in the spring.</p>

<p>In future posts, I'll elaborate on other abstractions that we are designing and implementing.</p>
