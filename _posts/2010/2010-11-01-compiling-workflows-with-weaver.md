---
layout: "post"
title: "Compiling Workflows with Weaver"
date: 2010-11-01T15:00:00+00:00
author: "Douglas Thain"
description: "Over the last year, our Makeflow system has become quite popular here at Notre Dame.  Briefly, Makeflow takes a workload expressed in the plain old Make form…"
toc: false
related_posts: true
tags: [weaver, makeflow, allpairs]
---

Over the last year, our
<a href="http://www.cse.nd.edu/%7Eccl/software/makeflow">
Makeflow
</a>
system has become quite popular here at Notre Dame. Briefly, Makeflow takes a workload expressed in the plain old Make format, and executes it in a distributed system, using the dependency information to set up the appropriate remote execution environment. It does not require a distributed filesystem, so it's easy to get your applications going on hundreds to thousands of processors from the cloud or the grid. Makeflow is currently the back-end engine for our science portals in bioinformatics, biometrics, and molecular dynamics.

It didn't take long before our users started writing scripts in Perl or Python in order to generate Makeflows with tens of thousands of nodes. Those scripts all did similar things (query a database, break a dataset into N pieces) but also started to get unruly and difficult to debug. It wasn't easy to look at a script generator and determine what it was trying to accomplish.

Enter Weaver, which is the creation of Peter Bui, one of our graduate students. Weaver is a high level Python framework that, in a few simple lines, can generate enormous (optimized) Makeflows. Peter presented a
<a href="http://www.cse.nd.edu/%7Eccl/research/pubs/weaver-clade2010.pdf">
paper about Weaver
</a>
at the workshop on Challenges of Large Applications in Distributed Environments at HPDC earlier this year.

Consider this common biometrics workload: extract all of the blue irises from our repository, then convert each iris into a 'template' data type, then compare all of them to each other. Here is how you do it in Weaver:
<br/>

  <pre><br/>b = SQLDataSet (’db’,’biometrics','irises')<br/>nefs = Query(db,db.color='Blue')

conv = SimpleFunction('convertiristotemplate',outsuffix='bit')<br/>bits = Map(conv,nefs)

cmp = SimpleFunction('compareiristemplates')<br/>AllPairs(cmp,bits,bits,output='matrix.txt')<br/></pre>
  <br/>
  In the simplest case, Weaver just emits one gigantic Makeflow that performs all of the operations.  However, sometimes there are patterns that can be executed more efficiently, given some better underlying tool.
  <a href="http://dthain.blogspot.com/search/label/allpairs">
   AllPairs
  </a>
  is the perfect example of this optimization -- you
  <span style="font-weight: bold;">
   can
  </span>
  do an AllPairs using Makeflow, but it won't be as efficient as our native implementation.  If the various data types line up appropriately, Weaver will simply call the All-Pairs abstraction.  If not, it will expand the call into Makeflow in the appropriate way.

In principle, this is a lot like a C compiler: under certain conditions, the addition of two arrays can be accomplished with a vector add instruction, otherwise it must be expanded into a larger number of conventional instructions. So, we think of Weaver as a
<span style="font-weight: bold;">
compiler for workflows
</span>
: it chooses the best implementation available to execute a complex program, leaving the programmer to worry about the higher level objectives.
