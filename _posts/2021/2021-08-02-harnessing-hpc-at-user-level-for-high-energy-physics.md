---
layout: "post"
title: "Harnessing HPC at User Level for High Energy Physics"
date: 2021-08-02T19:57:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2021/harnessing-hpc-at-user-level-for-high-energy-physics/image-27bc409feb.png"
description: 'Ben Tovar presented some recent work at the (virtual) CHEP 2021 conference: "Harnessing HPC Resources for CMS Jobs Using a Virtual Private Network" . The fut…'
toc: false
related_posts: true
tags: []
---

<p>
   Ben Tovar presented some recent work at the (virtual) CHEP 2021 conference:
   <a href="http://ccl.cse.nd.edu/research/papers/tovar-vpn-ns-chep2021.pdf">
    "Harnessing HPC Resources for CMS Jobs Using a Virtual Private Network"
   </a>
   .
  </p>
  <p>
   The future computing needs of the Compact Muon Solenoid (CMS) experiment will require making use of national HPC facilities.  These facilities have substantial computational power, but for a variety of reasons, are not set up to allow network access from computational nodes out to the Internet.  This presents a barrier for CMS analysis workloads, which expect to make use of wide area data federations (like XROOTD) and global filesystems (like CVMFS) in order to execute.
  </p>
  <p>
   In this paper, Ben demonstrates a prototype that creates a user-level virtual private network (VPN) that is dynamically deployed alongside a running analysis application.  This trick here is to make the whole thing work without requiring any root-level privileges, because that simply isn't possible at an HPC facility.  The solution brings together a variety of technologies -- namespaces, openconnect, slirp4netns, ld_preload -- in order to provide a complete user-level solution:
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2021/harnessing-hpc-at-user-level-for-high-energy-physics/image-27bc409feb.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  The performance of this setup is a bit surprising: when running a single worker node, the throughput of a single file transfer is substantially lower when tunneled (196 Mbps) compared to native performance (872 Mbps).  However, when running twenty or so workers, the tunneled solution achieves the same aggregate bandwidth as native.  (872 Mbps)  The most likely explanation is that tunneling a TCP connections over another TCP connections results in substantial start-up penalty while both stacks perform slow-start.
  <p>
   You can try the solution yourself here:
  </p>
  <p>
   <a href="https://github.com/cooperative-computing-lab/userlevel-vpn-tun-tap">
    https://github.com/cooperative-computing-lab/userlevel-vpn-tun-tap
   </a>
  </p>
