---
layout: "post"
title: "From Database to Filesystem and Back Again"
date: 2010-10-27T15:00:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2010/from-database-to-filesystem-and-back-again/iris-07bee05be7.jpeg"
description: "Hoang Bui is leading the development of ROARS: a Rich Object Archival System, which is our generalization many of the ideas expressed in the Biometrics Resea…"
toc: false
related_posts: true
tags: [bxgrid, parrot, roars]
---
Hoang Bui is leading the development of ROARS: a Rich Object Archival System, which is our generalization many of the ideas expressed in the
  <a href="http://dthain.blogspot.com/search/label/bxgrid">
   Biometrics Research Grid
  </a>
  .  Hoang presented a
  <a href="http://cse.nd.edu/%7Eccl/research/pubs/roars-didc.pdf">
   paper on ROARS
  </a>
  at the workshop on Data Intensive Distributed Computing earlier this year.

What makes ROARS particularly interesting is that it combines elements of both relational databases and file systems, and makes it possible to swap back and forth between both representations of the data.

A ROARS repository is an unordered collection of items.  Each item consists of a binary file and metadata that describes the file.  The metadata does not have a schema; you can attach whatever properties you like to an object.   Here is an example item consisting of a iris image with five properties:
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2010/from-database-to-filesystem-and-back-again/iris-07bee05be7.jpeg" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <span style="font-family: courier new;">
   fileid = 356
  </span>
  <br/>
  <span style="font-family: courier new;">
   subjectid = "S123"
  </span>
  <br/>
  <span style="font-family: courier new;">
   color = "Blue"
  </span>
  <br/>
  <span style="font-family: courier new;">
   camera = "Likon"
  </span>
  <br/>
  <span style="font-family: courier new;">
   date = "23-Oct-2010"
  </span>
  <br/>
  <span style="font-family: courier new;">
   type = "jpeg"
  </span>
  If you like to think in SQL, then you can query the system via SQL and you get back tabular data, as you might expect:
  <span style="font-family: courier new;">
   SELECT fileid, subjectid, color FROM irises WHERE color='Blue';
  </span>
  Of course, if you are going to actually process the files in some way, you need to put them into a filesystem where your scripts and tools can access them.  For this, you use the EXPORT command, which will produce the files.  EXPORT has a neat bit of syntax in which you can specify that the name of each file is generated from the metadata.  For example this command:
  <span style="font-family: courier new;">
   EXPORT irises WHERE camera='Likon' AS color/subjectid.type
  </span>
  will dump out all of the matching files, put them into directories according to color, and name each file according to the subject and the file type.  The example above would be named "Blue/S123.jpeg".  (If the naming scheme doesn't result in unique filenames, then you need to adjust it to include something that is unique like fileid.)

Of course, if you are going to process a huge amount of data, then you don't actually want to copy all of it out to your local filesystem.  Instead what you can do is create a "filesystem view" which is a directory tree containing pointers back to the objects in the repository.  That has a very similar syntax:
  <span style="font-family: courier new;">
   VIEW irises WHERE camera='Likon' AS color/subjectid.type
  </span>
  Creating a filesystem view is much faster than exporting the actual data.  Now, you can run your programs or scripts to iterate over the files.  As they open up each file, the repository is accessed directly to open and read the necessary file data.  (This is accomplished transparently by using
  <a href="http://www.cse.nd.edu/%7Eccl/software/parrot/">
   Parrot
  </a>
  to connect to the repository.)

The end result: a database that looks like a filesystem!
