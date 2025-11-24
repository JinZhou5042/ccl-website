---
layout: "post"
title: "Big CMS Data Analysis at Notre Dame"
date: 2017-02-17T14:37:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2017/big-cms-data-analysis-at-notre-dame/CMSCycles-7f9800b990.png"
description: "Analyzing the data produced by the Compact Muon Solenoid (CMS), one of the experiments at the Large Hadron Collider , requires a collaboration of physicists,…"
toc: false
related_posts: true
tags: [cms, lobster, work queue, physics]
---
Analyzing the data produced by the

<a href="https://home.cern/about/experiments/cms">Compact Muon Solenoid</a>

(CMS), one of the experiments at the

<a href="http://home.cern/topics/large-hadron-collider">Large Hadron Collider</a>

, requires a collaboration of physicists, computer scientists to harness hundreds of thousands of computers at universities and research labs around the world.  The contribution of each site to the global effort, whether small or large, is reported out on a regular basis.

<br/>

<br/>

This recent graph tells an interesting story about contributions to CMS computing in late 2016.  Each color in the bargraph represents the core-hours provided by a given site over the course of a week:

<br/>

<br/>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2017/big-cms-data-analysis-at-notre-dame/CMSCycles-7f9800b990.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

The various computing sites are divided into tiers:

<br/>

<br/>

<ul>
<li><b>Tier 0</b> is <a href="http://cern.ch/">CERN</a>, which is responsible for providing data to the lower tiers.</li>
<li><b>Tier 1</b> contains the national research labs like <a href="http://fnal.gov/">Fermi National Lab</a> (FNAL), <a href="http://www.stfc.ac.uk/about-us/where-we-work/rutherford-appleton-laboratory/">Rutherford Appleton Lab</a> in in UK, and so forth, that facilitate analysis work for universities in their countries.</li>
<li><b>Tier 2</b> contains universities like Wisconsin, Purdue, and MIT, that have significant shared computing facilities dedicated to CMS data analysis.</li>
<li><b>Tier 3</b> is everyone else performing custom data analysis, sometimes on private clusters, and sometimes on borrowed resources. Most of those are so small that they are compressed into black at the bottom of the graph.</li>
</ul>

<br/>

Now, you would think that the big national sites would produce most of the cycles, but there are a few interesting exceptions at the top of the list.

<br/>

<br/>

First, there are several big bursts in dark green that represent the contribution of the

<a href="http://news.fnal.gov/2016/02/hep-cloud-how-to-add-thousands-of-computers-to-your-data-center-in-a-day/">HEPCloud</a>

prototype, which is technically a Tier-3 operation, but is experimenting with consuming cycles from Google and Amazon.  This has been successful at big bursts of computation, and the next question is whether this will be cost-effective over the long term.

<br/>

<br/>

Next, the Tier-2 at the

<a href="https://www.hep.wisc.edu/cms/comp/">University of Wisconsin</a>

consistently produces a huge number of cycles from their dedicated facility and opportunistic resources from the C

<a href="http://www.chtc.wisc.edu/">enter for High Throughput Computing</a>

.  This group works closely with the

<a href="http://research.cs.wisc.edu/htcondor">HTCondor</a>

team at Wisconsin to make sure every cycle gets used, 365 days a year.

<br/>

<br/>

Following that, you have the big computing centers at CERN and FNAL, which is no surprise.

<br/>

<br/>

And, then the next contributor is our own little Tier-3 at Notre Dame, which frequently produces more cycles than most of the Tier-2s and some of the Tier-1s!  The CMS group at ND harnesses a small dedicated cluster, and then adds to that unused cycles from our campus

<a href="http://crc.nd.edu/">Center for Research Computing</a>

by using

<a href="http://lobster.crc.nd.edu/">Lobster</a>

and the CCL

<a href="http://ccl.cse.nd.edu/software/workqueue">Work Queue</a>

software on top of HTCondor.

<br/>

<br/>

The upshot is, on a good day, a single grad student from Notre Dame can perform data analysis at a scale that rivals our national computing centers!

<br/>

<br/>

<br/>
