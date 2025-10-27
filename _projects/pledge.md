---
layout: project
title: "Pledge: Accelerating Data Intensive Scientific Workflows with Consistency Contracts"
subtitle: "PI: Douglas Thain"
description: Expresses workflow I/O intentions using consistency contracts to enable efficient, cluster-wide storage and execution optimizations.
long_description: Advanced discovery in scientific computing increasingly depends upon the successful execution of complex workflows that make use of a shared filesystem. We observe that workflows rarely need the full power of global sequential consistency. Rather, they tend to follow several common I/O patterns that can be characterized at a high level. Rather than depend upon the filesystem to "figure things out" at the last minute, we propose consistency contracts as a means of expressing the I/O intentions of complex workflows. With a contract in hand, the runtime system can then perform a variety of optimizations that exploit the internal storage and I/O capacity of the cluster as a whole.
img: assets/img/projects/pledge-small.png
order: 3
category: work
carousel: true
---

Advanced discovery in scientific computing increasingly depends upon the successful execution of complex workflows that make use of a shared filesystem. We observe that workflows rarely need the full power of global sequential consistency. Rather, they tend to follow several common I/O patterns that can be characterized at a high level. Rather than depend upon the filesystem to "figure things out" at the last minute, we propose **consistency contracts** as a means of expressing the I/O intentions of complex workflows. With a contract in hand, the runtime system can then perform a variety of optimizations that exploit the internal storage and I/O capacity of the cluster as a whole.
