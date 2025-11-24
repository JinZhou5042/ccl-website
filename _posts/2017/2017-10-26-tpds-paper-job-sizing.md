---
layout: "post"
title: "TPDS Paper: Job Sizing"
date: 2017-10-26T15:20:00+00:00
author: "Benjamin Tovar"
image: "/assets/blog/2017/tpds-paper-job-sizing/all_memory_first_example-a5df574950.png"
description: "When submitting jobs for execution to a computing facility, a user must make a critical decision: how many resources (such as cores, memory and disk) should …"
toc: false
related_posts: true
tags: []
---
When submitting jobs for execution to a computing facility, a user must make a critical decision: how many resources (such as cores, memory and disk) should be requested for each job?
  <br/>
  Broadly speaking, if the initial job size selected is too small, it is more likely that the job will fail and be returned, thus wasting resources on a failed run that must be retried. On the other hand, if the initial job size selected is too large, the job will succeed on the first try, but waste resources that go unused inside the job's allocation.  If the waste is large enough, throughput will be reduced because those resources could have been used to run another job.
  <br/>
  If the resources consumed by a collection of jobs were known and constant, then the solution would be easy: run one job at a large size, measure its consumption, and then use that smaller measured size for the remainder of the jobs.  However, experience shows that real jobs have non-trivial distributions.  For example, the figure shows the histogram of memory consumption for a set of jobs in a high energy physics workflow run on an
  <a href="https://research.cs.wisc.edu/htcondor/">
   HTCondor
  </a>
  batch system at the University of Notre Dame.
  <br/>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2017/tpds-paper-job-sizing/all_memory_first_example-a5df574950.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  Note that the histogram shows large peaks at approximately 900MB and 1300MB, but there are small number of outliers both above and below those values.
  <br/>
  What memory size should we select for this workload?  If we pick 3.8GB RAM for all jobs, then every job will succeed, but then most jobs would end up wasting several GB of memory that could be used to run other jobs.  On the other hand, we could try a two-step approach, in which each job is run with a smaller value, wait to see which ones succeed or fail, and those that fail are run with the maximum 3.8GB memory allocation.
  <br/>
  But precisely what smaller value should be used for the first attempt?  The dotted line, at around 1.32GB, turns out to maximize the throughput when running  the workflow under this two-step policy. Allowing for %8 of the tasks to be retried, throughput increases 2.54 times, and resources wasted decreased %44.
  <br/>
  In our recent paper
  <a href="http://ccl.cse.nd.edu/research/papers/Tovar-job-sizing-TPDS2017.pdf">
   A Job Sizing Strategy for High-Throughput Scientific Workflows
  </a>
  we fully describe the two-step strategy described above. These developments have also been integrated to makeflow and work queue in CCTools. For makeflow, the rules need to be labeled with the optimization mode:
  <br/>
  <pre style="font-size: 12px; line-height: 14px; overflow: auto; padding: 5px; width: 100%;"><code>

.MAKEFLOW CATEGORY myfirstcategory
.MAKEFLOW MODE MAX_THROUGHPUT

output_1: input_1
    cmdline input_1 -o output_1

output_2: input_2
    cmdline input_2 -o output_2

.MAKEFLOW CATEGORY myothercategory
.MAKEFLOW MODE MAX_THROUGHPUT

output_3: input_3
    cmdline input_3 -o output_3

output_4: input_4
    cmdline input_4 -o output_4

</code>
</pre>
  Also, makeflow needs to run with the resource monitor enabled, as:
  <br/>
  <tt>
   makeflow --monitor=my_resource_summaries_dir (... other options ...)
  </tt>
  <br/>
  Rules in the same category will be optimized together.
  <br/>
  Similarly, for work queue:
  <br/>
  <pre style="font-size: 12px; line-height: 14px; overflow: auto; padding: 5px; width: 100%;"><code>

q = WorkQueue(...)
q.enable_monitoring()

q.specify_category_mode('myfirstcategory', WORK_QUEUE_ALLOCATION_MODE_MAX_THROUGHPUT)

t = Task(...)
t.specify_category('myfirstcategory')
</code>
</pre>
  Additionally, we have made available a pure python implementation at:
  <br/>
  <a href="https://github.com/cooperative-computing-lab/efficient-resource-allocations">
   https://github.com/cooperative-computing-lab/efficient-resource-allocations
  </a>
