---
layout: "post"
title: "A New Visualization Tool for TaskVine Released"
date: 2024-11-04T23:34:00+00:00
author: "Jin Zhou"
image: "/assets/blog/2024/a-new-visualization-tool/AVvXsEgvqytPCVNKLHQPVNnr705iWDp0NXFC983p8WqRV4U45AdTK-45mlf--578c2a3d59.png"
description: "We released a web-based tool to visualize runtime logs produced by TaskVine, available on Github . Using this tool involves two main steps. First, the requir…"
toc: false
related_posts: true
tags: []
---

<p>We released a web-based tool to visualize runtime logs produced by TaskVine, available on <a href="https://github.com/cooperative-computing-lab/taskvine-report-tool.git" target="_blank">Github</a>. Using this tool involves two main steps. First, the required data in CSV format must be generated for the manager, workers, tasks, and input/output files. After saving the generated data in the directory, users can start a port on their workstation to view detailed information about the run. This approach offers two key advantages: the generated data can be reused multiple times, minimizing the overhead of regeneration, and users can also develop custom code to analyze the structured data and extract relevant insights.</p>

<p>For example, the first section describes the general information of this run, including the start/end time of the manager, how many tasks are submitted, how many of them succeeded or failed, etc.</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/a-new-visualization-tool/AVvXsEgvqytPCVNKLHQPVNnr705iWDp0NXFC983p8WqRV4U45AdTK-45mlf--578c2a3d59.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

<br/>

<p>The second section describes the manager's storage usage through its lifetime, the a-axis starts from when the manager is started, and ends when the manager is terminated, the y-axis is in MB unit, and such pattern is applied to all diagrams in this report.</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/a-new-visualization-tool/AVvXsEjjWpr1TZnJINxAv1bMjnnjUrkfiIgQE-MmlSCnS29DIcv-JSo_gdTk-8725719a6c.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

The third section is the table of all workers' information, which is basically grabbed from the csv files from the backend, but this enables users to easily sort by their interested columns.

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/a-new-visualization-tool/AVvXsEhV274ouds663uZHgQUnSpmlMgo0i0IwNiBMvI-DNlCvGuX7XS-02es-ed5201e91d.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

The fourth section is the storage consumption among all workers. Several buttons in the top are provided, to turn the y-axis to a percentage unit, or to highlight one worker that is of interest.

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/a-new-visualization-tool/AVvXsEgdpwYMwIp9PYNnnA84IeP8dAUiMkHFv1LiNvjZYhxuMYy7Dw9HRvwg-62e5f30c11.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

The fifth section is the number of connected workers throughout the manager's lifetime, hovering the mouse on a point shows the information of a connected/disconnected worker.

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/a-new-visualization-tool/AVvXsEgP8cGge3CkJtio-Myo6-f2ye5qcarPnet2w0vsZigjCFqF1lwT1tDI-4085689aa0.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

The sixth section shows the number of concurrent workers throughout the manager's lifetime.

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/a-new-visualization-tool/AVvXsEhCbKqf9gtgTdJv-3ejtPpTtLT4iWxrPaZFh7GHJZ6O0JS4MS0e_XuI-07581d0456.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

<br/>

The seventh section is table of completed/failed tasks and their information.

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/a-new-visualization-tool/AVvXsEgB-OHaY9iJBdhKJ0Vrf5ZqED4WdhNXKxGOAlr-wCRSQUWYP4oYRjYT-2aa82874b1.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

The eighth section is the execution time distribution of different tasks. Those with a lower index on the left side of the x-axis are submitted earlier, while those on the right are submitted later. A CDF can be seen by clicking the button on the top.

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/a-new-visualization-tool/AVvXsEg0L-FZuJU15pF9bTysD0vhSQxPgXKEvg1PIfQwyXzBswSiLnuzZ2m5-7e4346f273.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

The nineth section shows the task count, average execution time and max execution time of different task categories. One category can comprise multiple tasks that have a similar behavior, such as having the same function name but with different inputs.

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/a-new-visualization-tool/AVvXsEhd9Eux4ca7LJBQFHkpGvfuksJl3rzAr_jhjheOETMTS0GdGuV5-4fq-16d1a45e34.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

The tenth section demonstrates the general runtime distribution of tasks, the y-axis is the worker-slot pair. In the following example, we have 64 workers and each with 20 cores. One can zoom in the diagram and hover to see the detailed information of one task, which is particularly useful when examining outliers.

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/a-new-visualization-tool/AVvXsEjFh0DD1x3wQavHk2o5qJpMHEwtCX1xbHVdjytVHdbgV0wfQopSobmc-9d9efa332a.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/a-new-visualization-tool/AVvXsEg4MY8wJGb6eNigXLQpV8duE8efo3TPN3bynjc24l4P9FvjR5WbBY44-319913657b.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

<br/>

The last section is about the structure of the compute graphs. Nodes in the graph are tasks with an index label, while edges are the dependencies between input/output files of tasks. Weights on those task->file edges are the execution time of tasks, while those on the file->task edges are the waiting time starting from when a file is produced to when it is consumed by a consumer task.

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2024/a-new-visualization-tool/AVvXsEhMO9EDjmrrx5ue2Z76GWBdQ4jSSU3MIOWWAGrmReR_JRd-CrLYZ7KN-7a4463d24a.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

<br/>

<p>This tool works well under the scale of hundreds of thousands of tasks, but for large runs, which may have millions of tasks, the online visualization tool may be unable to process such amount of data because the data transferring bottleneck between backend and frontend. Under such case, or just for convenience, we recommend the users to use tools under the <a href="https://github.com/cooperative-computing-lab/taskvine-report-tool/tree/main/pyplot">pyplot</a> directory, which is more lightweight and uses traditional matplotlib and seaborn to draw diagrams. Detailed explanations are provided under the README file.</p>
