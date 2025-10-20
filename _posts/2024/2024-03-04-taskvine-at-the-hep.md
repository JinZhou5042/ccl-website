---
layout: "post"
title: "TaskVine at the HEP Analysis Grand Challenge"
date: 2024-03-04T14:39:00+00:00
author: "Barry Sly-Delgado"
image: "/assets/blog/2024/taskvine-at-the-hep/title-0c9fb00653.png"
description: "Barry Sly-Delgado and Ben Tovar recently presented our work on transforming high energy physics data analysis applications into near-interactive execution at…"
toc: false
related_posts: true
tags: []
---
<p><span>Barry Sly-Delgado and Ben Tovar </span><a href="https://indico.cern.ch/event/1367741/contributions/5805540/attachments/2811626/4907353/Reshaping%20High%20Energy%20Physics%20Applications%20for%20Near-Interactive%20Execution%20Using%20TaskVine.pdf">recently presented</a> our work on transforming high energy physics data analysis applications into near-interactive execution at the IRIS-HEP <a href="https://indico.cern.ch/event/1367741/">Analysis Grand Challenge Demo Day</a>.</p>

<p><div><div>By using the <a href="http://ccl.cse.nd.edu/software/taskvine">TaskVine</a> framework, we have enabled the transformation of a production physics data analysis application (DV3), reducing execution time from <b>over an hour</b> to just over <b>three minutes </b></div><div>on about <b>four thousand cores </b>of a campus HPC cluster.</div></div></p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/taskvine-at-the-hep/title-0c9fb00653.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

<p><div>Advancements to hardware and software components in an application stack aid in the facilitation of application reshaping. With application reshaping, we are transitioning applications from long running to near-interactive.  While improvements to hardware and low-level software improvements can produce measurable speedup, significant speedup is obtainable via optimization to the scheduling and execution layers of the distributed application.</div></p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/taskvine-at-the-hep/ReshapingApplication-c32b53d2a2.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<p><div style="text-align: left;"><div><div><a href="http://ccl.cse.nd.edu/software/taskvine">TaskVine</a>, our latest workflow technology, makes use of in-cluster bandwidth and disk to mitigate data movement by enabling peer transfers between worker nodes within a compute cluster.  TaskVine is currently used to run a variety of custom data analysis workflows written by the CMS physics group at Notre Dame.  These applications are written in high-level Python, making use of standard technologies like Numpy, Coffea, and Dask in order to generate large task graphs.  TaskVine then takes that graph and deploys it into the cluster.</div></div></div></p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/taskvine-at-the-hep/StackProgression-7fca046711.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<p>Our previous versions of these physics applications utilized our earlier <a href="http://ccl.cse.nd.edu/software/workqueue">WorkQueue</a> executor.  TaskVine improves upon the earlier system in two distinct ways:</p>

<p><b>First</b> - While Work Queue only transfers data between the manager and workers, TaskVine transfers data directly between peer workers.  Peer transfers relieve pressure on the manager to distribute data dependencies to worker nodes within the cluster. For workflows that generate large amounts of intermediate data, this can be extremely costly to scheduling performance, because the manager sends and receives large amounts of data.</p>

<p>This animation shows the data transfer throughout an application when using Work Queue:</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/taskvine-at-the-hep/anim-df0d26c0e9.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/taskvine-at-the-hep/anim-8be795bb63.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<p><b>Second</b> - TaskVine extends the notion of task execution into a <b>serverless model.</b>  Python code in the analysis application can be defined once as a LibraryTask which is deployed into the cluster.  Then, lightweight FunctionCall tasks can invoke the code in the LibraryTask without constantly restarting the Python environment.  In this modem the python interpreter is now invoked once per worker.</p>

<p>This graph compares the distribution of execution times between normal tasks and serverless function calls, improving the lower limit of execution time by an order of magnitude.</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/taskvine-at-the-hep/ExecutionRuntime-32c53eb6ab.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<p><span>These four graphs show the overall performance of the data analysis application through four improvement states: first with Work Queue and Hadoop, then with Work Queue and VAST (new HPC filesystem), then TaskVine with peer transfers, and finally TaskVine with serverless execution.  Overall, this transforms a one hour workflow into a 3 minute workflow.</span></p>
