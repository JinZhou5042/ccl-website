---
layout: "post"
title: "TaskVine System Architecture"
date: 2023-02-22T22:05:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2023/taskvine-system-architecture/Screen-Shot-2023-02-22-at-4.36.23-PM-dc6b161be8.png"
description: "TaskVine is our newest framework for building large scale data intensive dynamic workflows.  This is the second in a series of posts giving a brief introduct…"
toc: false
related_posts: true
tags: []
---

<p>
   <span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">
    TaskVine is our newest framework for building large scale data intensive dynamic workflows.  This is the second in a series of posts giving a brief introduction to the system.
   </span>
  </p>
  <span id="docs-internal-guid-d97a8f16-7fff-a1eb-8874-b889ec82074d">
   <span style="font-family: Arial; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">
    A TaskVine application consists of a
   </span>
   <span style="font-family: Arial; font-size: 11pt; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">
    manager
   </span>
   <span style="font-family: Arial; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">
    and multiple
   </span>
   <span style="font-family: Arial; font-size: 11pt; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">
    workers
   </span>
   <span style="font-family: Arial; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">
    running in a cluster.  The manager is a Python program (or C if you prefer) that defines the
   </span>
   <span style="font-family: Arial; font-size: 11pt; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">
    files
   </span>
   <span style="font-family: Arial; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">
    and
   </span>
   <span style="font-family: Arial; font-size: 11pt; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">
    tasks
   </span>
   <span style="font-family: Arial; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">
    making up a workflow, and gives them to the TaskVine library to run.  Both the files and the tasks are distributed to the workers and put together in order to produce the results.  As a general rule, data is left in place on the workers wherever possible, so that it can be consumed by later tasks, rather than bringing it back to the manager.
   </span>
  </span>
  <div>
   <span>
    <span style="font-family: Arial;">
     <span style="font-size: 14.666666984558105px; white-space: pre-wrap;">
      <br/>
     </span>
    </span>
    <div class="row justify-content-sm-center">
     <div class="col-sm-12">
      {% include figure.liquid path="/assets/blog/2023/taskvine-system-architecture/Screen-Shot-2023-02-22-at-4.36.23-PM-dc6b161be8.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
     </div>
    </div>
    <br/>
    <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
     <span style="font-family: Arial; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">
      The workflow begins by declaring the input files needed by the workflow.  Here, "file" is used generally and means any kind of data asset: a single file on the filesystem, a large directory tree, a tarball downloaded from an external url, or even just a single string passed from the manager.  These files are pulled into the worker nodes on the cluster as needed.
     </span>
     <span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">
      Then, the manager defines tasks that consume those files.  Each task consumes one or more files, and produces one or more files.
     </span>
    </p>
   </span>
   <span>
    <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
     <span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">
      A file declaration looks like one of these:
     </span>
    </p>
    <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
     <span style="font-size: 11pt; white-space: pre-wrap;">
      <span style="font-family: courier;">
       a = FileURL("http://server.edu/path/to/data.tar.gz")
      </span>
     </span>
    </p>
    <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
     <span style="font-size: 11pt; white-space: pre-wrap;">
      <span style="font-family: courier;">
       b = FileLocal("/path/to/simulate.exe")
      </span>
     </span>
    </p>
    <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
     <span style="font-size: 11pt; white-space: pre-wrap;">
      <span style="font-family: courier;">
       c = FileTemp()
      </span>
     </span>
    </p>
    <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
     <span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">
      And then a task declaration looks like this:
     </span>
    </p>
    <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
     <span style="font-family: courier;">
      <span style="font-size: 11pt; white-space: pre-wrap;">
       t = Task("simulate.exe -i
      </span>
      <span style="font-size: 11pt; white-space: pre-wrap;">
       input.dat")
      </span>
     </span>
    </p>
    <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
     <span style="font-size: 11pt; white-space: pre-wrap;">
      <span style="font-family: courier;">
       t.add_input(a,"simulate.exe")
      </span>
     </span>
    </p>
    <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
     <span style="font-size: 11pt; white-space: pre-wrap;">
      <span style="font-family: courier;">
       t.add_input(b,"input.dat")
      </span>
     </span>
    </p>
    <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
     <span style="font-size: 11pt; white-space: pre-wrap;">
      <span style="font-family: courier;">
       t.add_output(c,"output.txt")
      </span>
     </span>
    </p>
    <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
     <span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">
      Tasks produce files which get consumed by more tasks
     </span>
     <span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">
      until you have a large graph of the entire computation that might look like this:
     </span>
    </p>
    <div class="row justify-content-sm-center">
     <div class="col-sm-12">
      {% include figure.liquid path="/assets/blog/2023/taskvine-system-architecture/Screen-Shot-2023-02-22-at-4.34.19-PM-bc9d5a193b.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
     </div>
    </div>
    <br/>
    <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
     <span style="font-family: Arial; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">
      To keep things clean, each task runs in a sandbox, where files are mapped in as names convenient to that task.  As tasks produce outputs, they generally stay on the worker where they were created, until needed elsewhere.
     </span>
     <span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">
      Later tasks that consume those outputs simply pull them from other workers as needed.  (Or, in the ideal case, run on the same node where the data already is.).
     </span>
    </p>
    <p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
     <span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">
      A workflow might run step by step like this:
     </span>
    </p>
    <div class="row justify-content-sm-center">
     <div class="col-sm-12">
      {% include figure.liquid path="/assets/blog/2023/taskvine-system-architecture/m1-b5843413c6.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
     </div>
    </div>
    <br/>
    <div class="row justify-content-sm-center">
     <div class="col-sm-12">
      {% include figure.liquid path="/assets/blog/2023/taskvine-system-architecture/m2-e7da2b7220.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
     </div>
    </div>
    <br/>
   </span>
   <span style="font-family: Arial; font-size: 11pt; white-space: pre-wrap;">
    You can see that popular files will be naturally replicated through the cluster, which is why we say the workflow "grows like a vine" as it runs. When final outputs from the workflow are needed, the manager pulls them back to the head node or sends them to another storage target, as directed.
   </span>
   <span>
    <br/>
   </span>
  </div>
