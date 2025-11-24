---
layout: "post"
title: "Scaling Up Julia: Hidden Filesystem Stress"
date: 2022-02-07T18:47:00+00:00
author: "Benjamin Tovar"
image: "/assets/blog/2022/scaling-up-julia-hidden-filesystem-stress/3bP5sBA1GjmlCUrXoPzmpxhrj6rbo1Wz7kTziQ8LEbGxYMIb8hM9qfCz3ZhX-e3aeabe144.png"
description: "HTCondor Cluster View In the CCL , we study the design and implementation of scalable systems and applications that run on very large computing systems.  It …"
toc: false
related_posts: true
tags: []
---

<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="float: right; margin-left: 1em; text-align: right;">
   <tbody>
    <tr>
     <td style="text-align: center;">
      <div class="row justify-content-sm-center">
       <div class="col-sm-12">
        {% include figure.liquid path="/assets/blog/2022/scaling-up-julia-hidden-filesystem-stress/3bP5sBA1GjmlCUrXoPzmpxhrj6rbo1Wz7kTziQ8LEbGxYMIb8hM9qfCz3ZhX-e3aeabe144.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
       </div>
      </div>
     </td>
    </tr>
    <tr>
     <td class="tr-caption" style="text-align: center;">
      HTCondor Cluster View
      <br/>
     </td>
    </tr>
   </tbody>
  </table>
  <span id="docs-internal-guid-c467c051-7fff-b328-c8f5-4daf6048d830" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em; text-align: start;">
  </span>
  In the
  <a href="http://ccl.cse.nd.edu">
   CCL
  </a>
  , we study the design and implementation of scalable systems and applications that run on very large computing systems.  It is not unusual for us to encounter an application that runs well on a few nodes, but causes trouble when running on thousands of nodes.  This happened recently with a simulation written in Julia that was using
  <a href="http://research.cs.wisc.edu/htcondor">
   HTCondor
  </a>
  to run millions of tasks running on several thousands nodes on our
  <a href="http://condor.cse.nd.edu/condor_matrix.cgi">
   campus cluster.
  </a>
  It ran fine on one node, but when deployed to thousand nodes, this simulation would cause a total meltdown of the shared filesystem, even though its I/O needs were relatively small.  What was going on?
  <br/>
  <p style="text-align: justify;">
   Here is what we found:
  </p>
  <p style="text-align: justify;">
   The Julia programming language uses a just-in-time compiler to generate efficient machine code before execution. Julia organizes code in modules, and user applications in projects, where a project is a list of modules. By default, the compilation step is performed
   <b>
    every single time
   </b>
   an application is executed and considers all the modules listed in the given project.  If an end user sets up an application in the normal way, the result is that the code will be compiled simultaneously on all nodes of the system!
  </p>
  <div style="text-align: justify;">
   Internally, Julia checks the project's list of modules, checks for files with a modification time more recent than the machine code already available, and if needed, generates new machine code.  As usual, the modifications times are done using the stat() system call. To give some perspective, the simulation used a dozen standard Julia modules, resulting in
   <b>
    12,000 stat() calls
   </b>
   even when
   <b>
    no recompilation was needed
   </b>
   . But the number of open() calls to needed files was less than
   <b>
    10
   </b>
   . In particular, the file that listed the modules in the project (Project.toml) had close to
   <b>
    2,000 stat()
   </b>
   calls, but only
   <b>
    one open()
   </b>
   call. For comparison, the number of calls to open() and stat() for data files particular to the application was less than 5.
  </div>
  <div style="text-align: justify;">
  </div>
  <div style="text-align: justify;">
   When executed in a single machine on a local file system, even a few thousand system calls may unnoticed by the user. However, they become a big problem when trying to run at scale in a cluster where all nodes share a common networked filesystem. If one thousand nodes start at once, the shared filesystem must field
   <b>
    twelve million stat()
   </b>
   operations just to determine that nothing has changed.  Thus, the scale at which the simulation can run will be limited by factors hidden to the end user, that is, not by the cores, memory, or disk available, but by these file system operations that become expensive when moving from a local to a shared setting.
  </div>
  <div style="text-align: justify;">
   Once the problem is understood, the workaround is to pre-compile a binary image with the needed modules that then is shipped together with each task.  This reduced the number of stat() calls from the original
   <b>
    12,000
   </b>
   to about
   <b>
    200
   </b>
   per invocation.  This is image is shipped compressed with each job, to reduce its size from 250MB to 50MB, and decompressed just before the task start execution.  Generating the binary image takes about 5 minutes, prior to job submission.
  </div>
  <div style="text-align: justify;">
  </div>
  <div style="text-align: justify;">
   The user application made the generation of the binary image much easier because all the dependencies were listed in a single file. As an example, consider this file that simply lists some modules:
  </div>
  <div style="text-align: justify;">
  </div>
  <span style="font-family: courier;">
  </span>
  <blockquote>
   <div style="text-align: justify;">
    # my_modules.jl
   </div>
   <div style="text-align: justify;">
    using Pkg
   </div>
   <div style="text-align: justify;">
    using Random
   </div>
   <div style="text-align: justify;">
    using Distributions
   </div>
   <div style="text-align: justify;">
    using DataFrames
   </div>
   <div style="text-align: justify;">
    using DataStructures
   </div>
   <div style="text-align: justify;">
    using StatsBase
   </div>
   <div style="text-align: justify;">
    using LinearAlgebra
   </div>
  </blockquote>
  <div style="text-align: justify;">
   If we count the number system calls that involve filenames, we get:
  </div>
  <div style="text-align: justify;">
  </div>
  <div style="text-align: justify;">
   <span style="font-family: courier;">
    $ strace -f -e trace=%%file julia my_modules.jl |&amp; grep  -E '(stat|open)'| wc -l
   </span>
  </div>
  <span style="font-family: courier;">
   <div style="text-align: justify;">
    5106
   </div>
  </span>
  <div style="text-align: justify;">
  </div>
  <div style="text-align: justify;">
   These calls will be repeated everytime the program runs. Using the module PackageCompiler we can generate a Julia system image as follows:
  </div>
  <div style="text-align: justify;">
  </div>
  <p style="text-align: justify;">
   <span style="font-family: courier;">
    # comp.jl
   </span>
  </p>
  <div style="text-align: justify;">
   <span style="font-family: courier;">
    # run as: julia comp.jl
   </span>
  </div>
  <span style="font-family: courier;">
   <div style="text-align: justify;">
    loaded_by_julia = filter((x) -&gt; typeof(eval(x)) &lt;:  Module &amp;&amp; x ≠ :Main, names(Main,imported=true));
   </div>
  </span>
  <div style="text-align: justify;">
   <span style="font-family: courier;">
    include("my_modules.jl")
   </span>
  </div>
  <span style="font-family: courier;">
   <div style="text-align: justify;">
   </div>
   <div style="text-align: justify;">
    loaded_all = filter((x) -&gt; typeof(eval(x)) &lt;:  Module &amp;&amp; x ≠ :Main, names(Main,imported=true));
   </div>
   <div style="text-align: justify;">
    loaded_by_ch = setdiff(loaded_all, loaded_by_julia);
   </div>
   <div style="text-align: justify;">
   </div>
   <div style="text-align: justify;">
    println("Creating system image with:");
   </div>
   <div style="text-align: justify;">
    println(loaded_by_ch);
   </div>
   <div style="text-align: justify;">
   </div>
   <div style="text-align: justify;">
    using PackageCompiler;
   </div>
   <div style="text-align: justify;">
    create_sysimage(loaded_by_ch; sysimage_path="sysimage.so", cpu_target="generic")
   </div>
  </span>
  <div style="text-align: justify;">
  </div>
  <div style="text-align: justify;">
   Using the image, the number of file releated calls, and there the stress on the
  </div>
  <div style="text-align: justify;">
   share file system,  are greatly reduced:
  </div>
  <div style="text-align: justify;">
  </div>
  <blockquote style="text-align: left;">
   <div style="text-align: justify;">
    <span style="font-family: courier;">
     $ strace -f -e trace=%file julia -Jsysimage my_modules.jl |&amp; grep -E '(stat|open)' | wc -l
    </span>
   </div>
   <span style="font-family: courier;">
    <div style="text-align: justify;">
     353
    </div>
   </span>
  </blockquote>
  <div style="text-align: justify;">
  </div>
  <div style="text-align: justify;">
   Also, as expected, the overhead per run also decreases, as the runtime decreases from about 10s to about 0.5s, which is significant for short running tasks.
  </div>
  <p style="text-align: justify;">
   So what's the moral of the story?
  </p>
  <p style="text-align: justify;">
   1 - When moving from a single node to a distributed system, operations that were previously cheap may become more expensive.  You can't fix what you can't measure, so use tools like strace to understand the system-call impact of your application.
  </p>
  <p style="text-align: justify;">
   2 - Avoid exponential behavior, even when individual costs are cheap.  Every Julia import results in checking the freshness of that module, and then all of its dependencies recursively, and so leaf modules get visited over and over again.  The Julia compiler needs to memoize those visits!
  </p>
