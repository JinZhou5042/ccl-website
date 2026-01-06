---
layout: post
title: "TaskVine Insights - Storage Management: Depth-Aware Pruning"
date: "2025-12-02T00:00:00"
author: Jin Zhou
tags:
- taskvine
- tech
- insights
description: Modern scientific workflows often span tens or hundreds of thousands of tasks, forming deep DAGs (directed acyclic graphs) that handle large volumes of intermediate data. The large number of tasks pri
toc: false
related_posts: true
---
Modern scientific workflows often span tens or hundreds of thousands of tasks, forming deep DAGs (directed acyclic graphs) that handle large volumes of intermediate data. The large number of tasks primarily results from ever-growing experimental datasets and their partitioning into various data chunks. Each data chunk is applied to a subgraph to form a branch, and different branches typically have an identical graph structure. Collectively, these form a gigantic computing graph. This graph is then fed into a WMS (workflow management system) which manages task dependencies, distributes the tasks across a HPC (high performance computing) cluster, and retrieves outputs when they are available. Below is the general architecture of the data partitioning and workflow computation process.

<div class="row justify-content-sm-center">
<div class="col-sm-12">
{% include figure.liquid path="/assets/blog/2025/taskvine-insights-storage-management-depth-aware-pruning/AVvXsEh-17IfsPJH5zrxGnMBPxskH9cLepmsY8M4HDhTPLFFeUfM6nLC6lQT8dAIBx1QN2YiA-xI2E8u-D3IKhu72wUUOM3dePceIwNEiq-GlY6OLWct1rPRhCM_KoF_cU4YHtTaT_9Q2FApKX5zsyDBJR9pHIM2Vz6vucod8KaU4xEK2pyQPjumKENb0RWfYyoh" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
</div>

TaskVine serves as the core WMS component in such an architecture. The unique feature of TaskVine lies in its advantage of leveraging NLS (node-local storage) to alleviate I/O burdens toward the centralized PFS (parallel file system). This allows all intermediate data (or part of it) to be stored and accessed on individual workers' local disks, and peer-to-peer transfers may be performed on demand.

However, one of the challenges of using NLS is that the per-node storage capacity is limited. When requesting workers in the campus-held HPC cluster at the University of Notre Dame, the typical served worker has about 500 GB, which is much less than that of the PFS that is at the scale of hundreds of TB. Below is an example where intermediate data are generated over the course of computing the graph and are accumulated on individual workers.

<div class="row justify-content-sm-center">
<div class="col-sm-12">
{% include figure.liquid path="/assets/blog/2025/taskvine-insights-storage-management-depth-aware-pruning/AVvXsEgeiobqqDO-mk9LxOCO_rHTxULzaTJWReGufdyjUseYvGmXOoAB2iSH3xsGbZ9NVL3f4W72ip8E_Eaf6rIfa2Q_4k3-iLpdj9QTps9nBsm-AOM1K1Zkv9zHpvjgnfjQcoYn_waNhsC10RcyjENhrFmRdtG2JJgsTWHLWFveRn7boH2YJBIfzEKqKc9tmfVI" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
</div>

On the one hand, we must have a way to promptly delete stale data that will not be needed in the future to free up space to avoid disk exhaustion on individual workers.

In TaskVine, we have the option to enable aggressive pruning for a workflow computation to save space. This allows us to promptly identify which files become stale and are safe to be detached from the system. Once recognized, the TaskVine manager directs all workers holding the file replicas to remove that replica from their own cache, and downstream tasks will no longer declare the pruned data as their inputs. This option is called aggressive pruning because no data redundancy is retained.

For example, the following figure shows the aggressive pruning for a given graph. File a is pruned when all the consumer tasks, namely Task 2, 3, and 4, have completed and their outputs have been updated. File b is pruned when the only consumer Task 6 has completed and the corresponding output File h has been created. At the time of T, four previously generated files have been pruned from the system, and the other four files are retained because there are some tasks needing them as inputs.

<div class="row justify-content-sm-center">
<div class="col-sm-12">
{% include figure.liquid path="/assets/blog/2025/taskvine-insights-storage-management-depth-aware-pruning/AVvXsEguYwKye4ERvstIEys6i1evkPWLBhXQK48nG7pbGrpcMmv8nJ05lyXsANlWs-NxisVtBu-WgaJXiqKxEA5ISCiQe78xu5dg0HzDxvxc7BEJy81vVy4qtTFgBgBAYsg_ZB4n5wWutqCHJVDPabbg5L-SWjLgWb2cwtO4ytt1YMTl32t7aH3d7b4LL6bV_JmF" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
</div>




However, things become complicated when we consider worker failures at runtime. In an HPC environment, there is no guarantee that your allocated workers can sustain until your computation finishes, and worker failures or evictions are not rare. When workers exit at runtime, their carried data are lost as well. If pruning is too aggressive, a single worker eviction may force a long-chain recomputation.

Below is an example of this behavior. At the time of T, Worker 2 is suddenly evicted. Task 9 and Task 10 are interrupted and collected back to the manager. Meanwhile, the intermediates stored on Worker 2, namely File e, f, g, and h, are also lost. Some of them have additional replicas on other workers, but File f does not, so it is completely lost because of the eviction. Due to the data loss, Task 9 cannot run until its input File f is recreated. To regenerate File f, we must rerun Task 7. However, Task 7 cannot run because its input File c has been pruned. Thus, we are forced to work all the way back to the top of the graph to regenerate the lost file. Worse yet, we may ultimately end up having the longest path in the graph recomputed, prolonging the graph makespan and undermining the scientific outcome.

<div class="row justify-content-sm-center">
<div class="col-sm-12">
{% include figure.liquid path="/assets/blog/2025/taskvine-insights-storage-management-depth-aware-pruning/AVvXsEg09ziwTI-KOkL8hlN4AeQ1l54fhDLrIGeEbSWUcjOL6fxu-phu2cus2ONHi8ga40akE6e-YWwrx9SU_dhGg4Ca8rezecmYZPA4J-Osy8dcLcWlDGdlvQdT6ZKl-teijlGO7aUnu1j8fGQ-OSSxrWjbRR7QLFIUZKfPjuOrFTItOmX_ZglTYI7YiG11fAj8" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
</div>


However, things become complicated when we consider worker failures at runtime. In an HPC environment, there is no guarantee that your allocated workers can sustain until your computation finishes, and worker failures or evictions are not rare. When workers exit at runtime, their carried data are lost as well. If pruning is too aggressive, a single worker eviction may force a long-chain recomputation.

Below is an example of this behavior. At the time of T, Worker 2 is suddenly evicted. Task 9 and Task 10 are interrupted and collected back to the manager. Meanwhile, the intermediates stored on Worker 2, namely File e, f, g, and h, are also lost. Some of them have additional replicas on other workers, but File f does not, so it is completely lost because of the eviction. Due to the data loss, Task 9 cannot run until its input File f is recreated. To regenerate File f, we must rerun Task 7. However, Task 7 cannot run because its input File c has been pruned. Thus, we are forced to work all the way back to the top of the graph to regenerate the lost file. Worse yet, we may ultimately end up having the longest path in the graph recomputed, prolonging the graph makespan and undermining the scientific outcome.

<div class="row justify-content-sm-center">
<div class="col-sm-12">
{% include figure.liquid path="/assets/blog/2025/taskvine-insights-storage-management-depth-aware-pruning/AVvXsEg09ziwTI-KOkL8hlN4AeQ1l54fhDLrIGeEbSWUcjOL6fxu-phu2cus2ONHi8ga40akE6e-YWwrx9SU_dhGg4Ca8rezecmYZPA4J-Osy8dcLcWlDGdlvQdT6ZKl-teijlGO7aUnu1j8fGQ-OSSxrWjbRR7QLFIUZKfPjuOrFTItOmX_ZglTYI7YiG11fAj8" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
</div>

So, to reserve certain redundancies to minimize recomputation in response to worker failures, TaskVine provides the option to tune the depth of ancestors for each file before it can be pruned.

In the implementation, pruning is triggered at the moment a task finishes, when its outputs are checked for eligibility to be discarded. Each file carries a pruning depth parameter that specifies how many generations of consumer tasks must finish before the file can be pruned. Depth-1 pruning is equivalent to aggressive pruning, while depth-k pruning (k is greater than or equal to 2) retains the file until every output of its consumer tasks has itself satisfied the depth-(k-1) criterion. Formally, the pruning time is defined as: P(f) equals the minimum of P-sub-k(g) for all g that are outputs of f's consumers.

<div class="row justify-content-sm-center">
<div class="col-sm-12">
{% include figure.liquid path="/assets/blog/2025/taskvine-insights-storage-management-depth-aware-pruning/AVvXsEhPVeDWgVXW3lVVr3qWJlUZsT6ExZpfAOVJg4uTKYP56tkABYubDPsNR18p5ERg7Dczn0cXLXKjoZgmHg6KD1CGmT6dwBU6mFkwJ7WDd86pY5TRclIFMDOtPitEOV6y5sW8PnqF_GLP6nr7bSpX2UFDYjxjVYApNbilh-RW4V8i1ylf1JfFDuRDAyvduxad" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
</div>

where Cons(F) denotes the consumer tasks of file F and Out(T) the outputs of task T. This recursive evaluation avoids expensive global scans by localizing pruning decisions to task completion events, with overhead proportional only to the chosen depth. As k increases, more ancestor files are preserved, providing redundancy and shrinking recovery sub-DAGs, whereas smaller k values reduce storage usage at the expense of higher recovery cost.

The figure below shows the improvement after applying depth-2 pruning, where we are able to preserve more data redundancy at runtime. At time T, Worker 2 is evicted, File f is completely lost, and we must recover it in order to rerun Task 9. Thanks to depth-2 pruning, File c can be found on another worker, so we can restart from there. This way, we avoid the need to go all the way back, though at the risk of consuming more local storage on individual workers.

<div class="row justify-content-sm-center">
<div class="col-sm-12">
{% include figure.liquid path="/assets/blog/2025/taskvine-insights-storage-management-depth-aware-pruning/AVvXsEhqF4tUfjU7M2DUiC4Uk8WAZH-FXPcFYA8NLDFkqrDA4ciim6FNn3hGyt3c5hrTJYjERfRd7C3N1F85-7TMFdJurRkXMIfYOhpzg5rf5qoRdC0sIU05XnZZWXRXDumvlYn7RXEDWykQ-KRbRSSQXrfvtNoxqb9tKV85txPxCOfXHlLfJ2OBpdwjBk_fUstt" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
</div>

Depth-aware pruning can work in conjunction with two other fault tolerance mechanisms in TaskVine: peer replication, in which every intermediate file is replicated across multiple workers, and checkpointing, in which a portion of intermediates are written into the PFS for persistent storage. Subsequent articles will cover these topics to help readers better understand the underlying tradeoffs and know how to select the appropriate parameters to suit their own needs.

TaskVine users can explore the manual to see how to adjust these parameters to suit their needs for the tradeoff between storage efficiency and fault tolerance. For depth-aware pruning, we recommend using aggressive pruning (depth-1 pruning) as the general and default setting to save storage space to the largest extent, and increase the depth parameter when worker failures are not uncommon and additional data redundancy is needed.
