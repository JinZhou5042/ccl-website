---
layout: "post"
title: "CMS Case Study Paper at CHEP"
date: 2015-10-20T16:15:00+00:00
description: "Our case study work on how to preserve and reproduce a high energy physics (HEP) application with Parrot has been accepted by Journal of Physics: Conference …"
toc: false
related_posts: true
tags: []
---
<h3 class="post-title entry-title" style="background-color: white; margin: 0.75em 0px 0px;">
<span><span style="font-weight: normal;">Our case study work on how to preserve and reproduce a high energy physics (HEP) application with Parrot has been accepted by <a href="https://conferenceseries.iop.org/">Journal of Physics: Conference Series (JPCS 2015).</a></span></span></h3>

<h3 class="post-title entry-title" style="background-color: white; margin: 0.75em 0px 0px;">
<span><span style="font-weight: normal;">The HEP application under investigation is called TauRoast, and authored by our physics collaborator, Matthias. </span></span><span>TauRoast is a complex single-machine application having lots of implicit and explicit dependencies: CVS, github, PyYAML websites, personal websites, CVMFS, AFS, HDFS, NFS, and PanFS. The total size of these dependencies is about 166.8TB.</span></h3>

<h3 class="post-title entry-title" style="background-color: white; margin: 0.75em 0px 0px;">
<span><span style="font-weight: normal;">To make TauRoast reproducible, we propose one fine-grained dependency management toolkit based on <a href="http://ccl.cse.nd.edu/software/parrot/">Parrot</a> to track the really used data and create a reduced package which gets rid of all the unused data. </span></span><span>By doing so, the original execution environment with the size of 166.8TB is reduced into a package with the size of 21GB. </span><span>The correctness of the preserved package is demonstrated in three different environments - the original machine, one virtual machine from the Notre Dame Cloud Platform and one virtual machine from the Amazon EC2 Platform.</span></h3>

<p><ul style="background-color: white; font-family: times; font-size: 16px; margin-left: 2em; padding-left: 0em;"><table style="font-size: 16px;"><tbody>
<tr><td></td></tr>
</tbody></table>
<table style="font-size: 16px;"><tbody>
<tr><td><br/></td><td><span style="font-size: small;">Haiyan Meng, <span style="font-family: sans-serif;">Matthias Wolf, Peter Ivie, Anna Woodard, Michael Hildreth and</span> Douglas Thain,</span><br/>
<a href="http://ccl.cse.nd.edu/research/papers/tauroast-casestudy-jpcs2015.pdf" style="font-family: sans-serif; font-size: medium;"><b>A Case Study in Preserving a High Energy Physics Application with Parrot</b></a><span style="font-family: sans-serif; font-size: small;">,</span><br/>
<span style="font-size: small;"><i style="font-family: sans-serif;">Journal of Physics: Conference Series</i><span style="font-family: sans-serif;">, December, 2015.</span></span></td></tr>
</tbody></table>
</ul></p>

<h3 class="post-title entry-title" style="background-color: white; color: #666666; font-family: 'Trebuchet MS', Trebuchet, Verdana, sans-serif; font-size: 22px; font-weight: normal; margin: 0.75em 0px 0px;">
<span style="font-size: 13.2px; line-height: 1.4;"> </span></h3>
