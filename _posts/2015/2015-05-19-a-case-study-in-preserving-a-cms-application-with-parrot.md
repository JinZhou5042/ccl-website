---
layout: "post"
title: "A Case Study in Preserving a CMS Application with Parrot"
date: 2015-05-19T14:58:00+00:00
description: "Haiyan Meng will present her case study work in preserving a CMS application with Parrot at CHEP 2015 in Japan: Haiyan Meng, Matthias Wolf, Peter Ivie, Anna …"
toc: false
related_posts: true
tags: []
---

Haiyan Meng will present her case study work in preserving a CMS application with Parrot at
<a href="http://chep2015.kek.jp/">
CHEP 2015
</a>
in Japan:

Haiyan Meng, Matthias Wolf, Peter Ivie, Anna Woodard, Michael Hildreth, Douglas Thain
<br/>

  <div>
  </div>
  <div style="color: #555555; font-family: Georgia, Garamond, 'Droid serif', 'Linux Libertine', Palatino, serif; font-size: 14.3000001907349px;">
  </div>
  <div style="color: #555555; font-family: Georgia, Garamond, 'Droid serif', 'Linux Libertine', Palatino, serif; font-size: 14.3000001907349px;">
   The reproducibility of scientific results increasingly depends upon the preservation of computational artifacts. Although preserving a computation to be used later sounds trivial, it is surprisingly difficult due to the complexity of existing software and systems. Implicit dependencies, networked resources, and shifting compatibility all conspire to break applications that appear to work well. Tools are needed which can automatically identify both local and remote dependencies, so that they can be captured and preserved.
  </div>
  <div style="color: #555555; font-family: Georgia, Garamond, 'Droid serif', 'Linux Libertine', Palatino, serif; font-size: 14.3000001907349px;">
   To investigate these issues, we present a case study of preserving a CMS application using Parrot. We analyze the application and attempt several methods at extracting its dependencies for the purposes of preservation. We demonstrate a fine-grained dependency management toolkit which can observe both the local filesystem and remote network dependencies, using the system call tracing capabilities of Parrot. We observe that even a simple application depends upon 22,068 files and directories totalling 21 GB of data and software drawn from 8 different sources including cvmfs, hdfs, afs, git, http, cvs, PanFS and local root filesystem.
  </div>
  <div style="color: #555555; font-family: Georgia, Garamond, 'Droid serif', 'Linux Libertine', Palatino, serif; font-size: 14.3000001907349px;">
   Once the dependencies are observed, a portable execution package can be generated. This package is not tied to any particular technology and can be re-run using Parrot, Docker, a chroot Jail, or as a virtual machine image, depending on the technology available at the execution site. We will report on the performance and completeness of re-execution using both public and private clouds and offer some guidance for future work in application preservation.
  </div>
