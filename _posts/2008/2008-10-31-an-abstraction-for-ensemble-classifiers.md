---
layout: "post"
title: "An Abstraction for Ensemble Classifiers"
date: 2008-10-31T20:58:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2008/an-abstraction-for-ensemble-classifiers/abstr-classify-857193ecc0.gif"
description: "In the last post, I presented the idea of abstractions for distributed computing, and explained the All-Pairs abstraction , which represents a very large Car…"
toc: false
related_posts: true
tags: [chirp, classify, map-reduce, data mining, condor, hadoop, abstractions]
---

In the last post, I presented the idea of abstractions for distributed computing, and explained the
<a href="http://http//dthain.blogspot.com/2008/10/abstractions-for-distributed-computing.html">
All-Pairs abstraction
</a>
, which represents a very large Cartesian product. Of course, a single abstraction is meant to address a very focused kind of workload. If you have a different category of problem, then you need another abstraction.

We discovered another abstraction while working with Nitesh Chawla's
<a href="http://www.cse.nd.edu/~dial">
data mining group
</a>
, also at Notre Dame. A common construction in data mining is the
<strong>
ensemble classifer
</strong>
. A single classifier examines the properties of a large number of objects and divides them up into groups that are roughly similar. You may be familiar with algorithms such as K-Nearest-Neighbors or Decision Trees. Improvements upon these algorithms continue to be an active area of research.

For any given classifier, you can often improve the runtime or the accuracy of the classification by breaking the data into pieces, running the classifier on each piece, and then collecting all of the results, using a majority vote to determine the final classification. For very large datasets, you may even need to use multiple processors and disks to complete the job in a reasonable amount of time.

To address this problem, our students Chris Moretti and Karsten Steinhauser created the
<strong>
Classify
</strong>
abstraction:
<strong>
Classify( T, R, P, N, F ):
</strong>
<br/>
T - The testing set of data to classify.
<br/>
R - The training set used to train each classifier.
<br/>
P - The method of partitioning the data.
<br/>
N - The number of classifiers to employ.
<br/>
F - The classifier function to use.

Here is a schematic of the Classify abstraction:

  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2008/an-abstraction-for-ensemble-classifiers/abstr-classify-857193ecc0.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  This abstraction was also implemented on our local
  <a href="http://www.cs.wisc.edu/condor">
   Condor
  </a>
  pool and
  <a href="http://www.cse.nd.edu/~ccl/software/chirp">
   Chirp
  </a>
  storage cluster, using one CPU and disk for each classifier function.  With this implementation, Chris and Karsten were able to evaluate a number of classifier functions on multi-gigabyte datasets, using up to 128 CPUs simultaneously.  In a week, they were able to accomplish what might have taken years to organize and execute by hand.  You can read more about the technical details
  <a href="http://www.cse.nd.edu/~ccl/research/pubs/classify-icdm08.pdf">
   in our paper
  </a>
  which will be presented at the International Conference on Data Mining.

The observant reader may notice that the Classify abstraction looks a lot like the
<a href="http://labs.google.com/papers/mapreduce.html">
Map-Reduce
</a>
abstraction implemented in the
<a href="http://hadoop.apache.org/">
Hadoop
</a>
. In the next post, I'll discuss this similarity and explain the important difference between the two abstractions.
