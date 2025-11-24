---
layout: "post"
title: "Wrangling Massive Tasks Graphs with Dynamic Hierarchical Composition"
date: 2025-11-11T18:21:00+00:00
author: "Jin Zhou"
image: "/assets/blog/2025/wrangling-massive-tasks-graphs-with-dynamic-hierarchical-composition/ben-figure-ccc44cef54.png"
description: "On Thursday, Octobor 30, research engineer Ben Tovar presented our recent work on accelerating the execution of High Energy Physics (HEP) workflows at the Py…"
toc: false
related_posts: true
tags: []
---

<span id="docs-internal-guid-3d12e8d6-7fff-a6b0-5c34-13c6fd8fa884">
   <span style="font-family: Aptos; font-size: 12pt; vertical-align: baseline;">
    On Thursday, Octobor 30, research engineer
    <b>
     Ben Tovar
    </b>
   </span>
  </span>
  <span style="font-family: Aptos; font-size: 12pt;">
   presented our recent work on accelerating the execution of
   <b>
    High Energy Physics (HEP)
   </b>
   workflows at the
   <b>
    PyHEP 2025 Workshop
   </b>
   , a hybrid workshop held at
   <b>
    CERN
   </b>
   . The presentation centered on an execution schema called
   <b>
    Dynamic Data Reduction (DDR)
   </b>
   that runs on top of
   <b>
    TaskVine
   </b>
   .
  </span>
  <div>
   <div>
    <span>
     <span style="font-family: Aptos; font-size: 12pt; vertical-align: baseline;">
      <br/>
     </span>
    </span>
   </div>
   <div>
    <span id="docs-internal-guid-7d490d76-7fff-bbc8-818a-57e8cbd2c7a6">
     <span style="font-family: Aptos; font-size: 12pt; vertical-align: baseline;">
      Current
      <b>
       HEP
      </b>
      analysis tools, like
      <b>
       Coffea
      </b>
      , provides users with an easy way to express the overall workflow and leverage local vectorization on column-oriented data. However, this often requires expressing the entire computation graph statically from the start. This introduces several issues, such as graph generation overhead which may take several hours longer than the actual computation needed, and the creation of computation units that do not fit the resources available.
     </span>
    </span>
   </div>
   <div>
    <span>
     <span style="font-family: Aptos; font-size: 12pt; vertical-align: baseline;">
      <br/>
     </span>
    </span>
   </div>
   <div>
    <span id="docs-internal-guid-6df2a5f1-7fff-d0b5-8574-f5cef83b4301">
     <p dir="ltr" style="line-height: 1.39; margin-bottom: 8pt; margin-top: 0pt;">
      <span style="font-family: Aptos; font-size: 12pt; vertical-align: baseline;">
       With a
       <b>
        DDR
       </b>
       , we take advantage of the structure inherent in many
       <b>
        HEP
       </b>
       applications where when processing multiple collision events, the accumulation (reduction) step is typically both associative and commutative. This means that it is unnecessary to pre-determine which processed events are reduced together and can leverage factors such availability of data location. Further, the number of events processed together can respond dynamically to the resources available, and datasets can be processed independently.
      </span>
     </p>
     <p dir="ltr" style="line-height: 1.39; margin-bottom: 8pt; margin-top: 0pt;">
      <span style="font-family: Aptos; font-size: 12pt; vertical-align: baseline;">
       In the
       <b>
        DDR
       </b>
       application stack,
       <b>
        TaskVine
       </b>
       acts as the execution platform that distributes the computation to the cluster.
      </span>
     </p>
     <div>
      <div class="row justify-content-sm-center">
       <div class="col-sm-12">
        {% include figure.liquid path="/assets/blog/2025/wrangling-massive-tasks-graphs-with-dynamic-hierarchical-composition/ben-figure-ccc44cef54.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
       </div>
      </div>
     </div>
     <div>
      <span style="font-family: Aptos; font-size: 12pt; vertical-align: baseline;">
       <span id="docs-internal-guid-e06ffc70-7fff-ebe5-3743-d927b24f7fc3">
        <p dir="ltr" style="line-height: 1.39; margin-bottom: 8pt; margin-top: 0pt;">
         <span style="font-size: 12pt; vertical-align: baseline;">
          As an example, we ran Cortado, a
          <b>
           HEP
          </b>
          application that processes 419 datasets, 19,631 files, and 14TB of data (totaling 12,000 million events) in about 5.5 hours using over 1600 cores at any one time. During the run some of these cores had to be replaced because of resources eviction.
         </span>
        </p>
        <span style="font-size: 12pt; vertical-align: baseline;">
         For more information, please visit the
         <b>
          DDR
         </b>
         pipy page at
        </span>
        <a href="https://pypi.org/project/dynamic-data-reduction/">
         <span style="color: #467886; font-size: 12pt; vertical-align: baseline;">
          https://pypi.org/project/dynamic-data-reduction/
         </span>
        </a>
       </span>
      </span>
     </div>
    </span>
   </div>
  </div>
