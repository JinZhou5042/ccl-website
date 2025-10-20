---
layout: "post"
title: "Integrating TaskVine with Merlin"
date: 2024-10-16T19:14:00+00:00
author: "Barry Sly-Delgado"
description: "Graduate student, Barry Sly-Delgado , completed a summer internship onsite at Lawrence Livermore National Laboratory where he worked on integrating TaskVine …"
toc: false
related_posts: true
tags: []
---

<p>Graduate student, <a href="https://barryslydelgado.github.io/">Barry Sly-Delgado</a>, completed a summer internship onsite at Lawrence Livermore National Laboratory where he worked on integrating TaskVine with <a href="https://merlin.readthedocs.io/en/latest/">Merlin</a>, an executor for machine learning workflows. Barry worked as a member of the WEAVE team under Brian Gunnarson and Charles Doutriaux.</p>

<p>Previously, Merlin used <a href="https://docs.celeryq.dev/en/stable/index.html">Celery</a> to distribute tasks across a compute cluster. With TaskVine's addition, utilization of in-cluster resources (bandwidth, disk) is available for workflow execution. Existing Merlin specifiacations can use TaskVine as a task scheduler with little change to the specification itself.</p>

<p>Merlin works with TaskVine by utilizing the Vine Stem, a DAG manager that borrows the concepts of groups and chains to create workflows from Celery. With this, the Vine Stem sends tasks (Merlin Steps) to the TaskVine manager for execution. Execution of these tasks eventually create a directory hierarchy that previous Merlin workflows already do. In addition to the workflow specification, a Merlin Specification contains specifications for starting workers, which are submitted via a batch system (HTCondor, UGE,Slurm)</p>

<p>Architecture of Merlin with TaskVine</p>

<p>Sample Merlin Specification Block With TaskVine as Task Server<br/></p>

<p>The TaskVine task server option will be included in an upcoming release of Merlin. We would be happy to find more use cases so please check it out once released!<br/></p>
