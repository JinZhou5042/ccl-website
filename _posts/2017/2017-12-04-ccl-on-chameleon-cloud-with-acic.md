---
layout: "post"
title: "CCL on Chameleon Cloud with ACIC"
date: 2017-12-04T20:36:00+00:00
image: "/assets/blog/2017/ccl-on-chameleon-cloud-with-acic/PqlQKMrZ-b717b734a7.png"
description: "As has been a tradition for several years, the CCL has had the opportunity to teach about the CCTools and distributed computing as part of Applied Cyberinfra…"
toc: false
related_posts: true
tags: []
---

As has been a tradition for several years, the CCL has had the opportunity to teach about the CCTools and distributed computing as part of Applied Cyberinfrastructure Concepts(ACIC) course at University of Arizona and taught by Dr. Nirav Merchant and Dr. Eric Lyons. Due to the number of features that have been added as of recently, this year primarily focused on Makeflow and how we use it on the Cloud and with containers. The topics we talk about were:
<br/>

  <ul>
   <li>
    Thinking opportunistically
   </li>
   <li>
    Overview of the Cooperative Computing Tools
   </li>
   <li>
    Makeflow
   </li>
   <li>
    Makeflow using Work Queue as a batch system
   </li>
   <li>
    Makeflow using the Cloud as a batch system
   </li>
   <li>
    Specifying and managing resources
   </li>
   <li>
    Using containers in and on a Makeflow
   </li>
   <li>
    Specifying Makeflow with JSON and JX
   </li>
  </ul>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2017/ccl-on-chameleon-cloud-with-acic/PqlQKMrZ-b717b734a7.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  The major topic I wanted to focus on here is running Makeflow on the Cloud. For several months we have supported Makeflow submitting to Amazon EC2 directly, and there is an upcoming release that will incorporate support for the Amazon Batch system. For this class we also worked on deploying CCTools on Chameleon Cloud, which is a "configurable experimental environment for large-scale cloud research" as found
  <a href="https://www.chameleoncloud.org/">
   https://www.chameleoncloud.org/
  </a>
  . Chameleon Cloud is a great test bed for researchers to deploy cloud instances and utilizes the OpenStack KVM interface.
