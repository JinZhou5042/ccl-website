---
layout: "post"
title: "BXGrid: The Biometrics Research Grid"
date: 2008-12-29T16:55:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2008/bxgrid-the-biometrics-research-grid/bxgrid-atlas-44eb87c7a7.gif"
description: "One of our graduate students, Hoang Bui, presented a poster on the Biometrics Research Grid (BXGrid) at the IEEE e-Science conference in Indianapolis a few w…"
toc: false
related_posts: true
tags: [bxgrid, allpairs, distributed computing, abstractions]
---
One of our graduate students, Hoang Bui, presented a poster on the Biometrics Research Grid (BXGrid) at the IEEE e-Science conference in Indianapolis a few weeks ago. BXGrid is a large data repository that we have built to support both production research in biometrics and to provide a platform for research in large scale data intensive computing. It provides another example of the idea of
  <a href="http://dthain.blogspot.com/2008/10/abstractions-for-distributed-computing.html">
   abstractions
  </a>
  for distributed computing.  This project is a collaboration between
  <a href="http://www.nd.edu/~flynn">
   Dr. Patrick Flynn
  </a>
  and my research group at Notre Dame.

The Computer Vision Research Lab studies methods for identifying people via biometrics such as fingerprints, iris scans, and surveillance videos. The group collects hundreds of thousands of images and movies from hundreds of volunteers on campus, and uses them to test clever new identification algorithms.  For example, here is an atlas of photos from one particular subject (our department chair):
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2008/bxgrid-the-biometrics-research-grid/bxgrid-atlas-44eb87c7a7.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  Each image is annotated with
  <strong>
   metadata
  </strong>
  that describes who the subject is, what camera took the picture, what the conditions were, and so forth.  In BXGrid, you can see all the metadata for a given image like this:
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2008/bxgrid-the-biometrics-research-grid/bxgrid-detail-582dd43eab.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  Before BXGrid, all of this data was stored in an ordinary file system as big directories of images. This worked acceptably, but required an enormous amount of error prone scripting in order to answer interesting research questions. For example, a user might want to locate all close up face images taken in low light with a given camera, using only data for subjects with more than twenty images. You can do this in a filesystem, but it isn't easy, and it certainly isn't fast.

So, we designed BXGrid to be a filesystem-database hybrid that can store large amounts of data reliably, but enable new modes of exploration. The system consists of one central database that indexes all of the metadata, and sixteen active storage servers that provide storage that scales in both capacity and performance. Each item in the system is replicated three times across the cluster for reliability, so you can continue to operate even with several storage servers offline. A nice web interface on the front makes it easy to search, download, and process data from your desktop.

What's more is that the database really simplifies tasks that were previously arduous. For example, when ingesting new data into the system, a human needs to manually verify that each image really is of the intended person. BXGrid can simply pop up a screen that shows newly images alongside a selection of known good images of the old subject, and the user can quickly scan them and press a button if there is a problem. What used to be a Sisyphean task for one poor graduate student can now be accomplished by ten people working together in a few hours. Here is what it looks like:
  <p>
   The next step is to automate research tasks using abstractions. Many research problems in biometrics can be answered using the following formula:
  </p>
  <ol>
   <li>
    Select a number of images according to some criterion.
   </li>
   <li>
    Transform those images by a standard function.
   </li>
   <li>
    Compare all of those images to each other with another function.
   </li>
  </ol>
  <p>
   To formalize it a little bit, we call this the BXGrid abstraction:
  </p>
  <ol>
   <li>
    S = Select( R );
   </li>
   <li>
    T = Transform( S, F(s) );
   </li>
   <li>
    M = AllPairs( T, G(x,y) );
   </li>
  </ol>
  <p>
   Although easily stated, each of these steps is computationally expensive to perform on a large amount of data. On a single machine, a workload could take months just to compute.
  </p>
  <p>
   However, BXGrid can be used to dramatically accelerate discovery. The database facilitates fast Select operations by virtue of indexing, the active storage cluster acclerates Transform by virtue of parallel storage, and our computing grid provides the
   <a href="http://dthain.blogspot.com/2008/10/abstractions-for-distributed-computing.html">
    All-Pairs
   </a>
   capability on hundreds of processors. Once results are generated, they are sent back to the database where they can be shared with other users.
  </p>
