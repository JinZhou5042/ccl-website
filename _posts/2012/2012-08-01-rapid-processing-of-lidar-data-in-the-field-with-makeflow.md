---
layout: "post"
title: "Rapid Processing of LIDAR Data in the Field with Makeflow"
date: 2012-08-01T18:10:00+00:00
author: "Douglas Thain"
description: "Makeflow is used to manage the data processing workflow of the Airborne Lidar Processing System (ALPS) for the Experimental Advanced Airborne Research Lidar …"
toc: false
related_posts: true
tags: [highlights, lidar, makeflow]
---
<a href="http://ccl.cse.nd.edu/community/stories/eaarl.gif" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="320" src="http://ccl.cse.nd.edu/community/stories/eaarl.gif" width="267"/></a>

<a href="http://www.nd.edu/%7Eccl/software/makeflow">Makeflow</a>

is used to manage the data processing workflow of the

<a href="http://ngom.usgs.gov/dsp/tech/alps/index.php">Airborne Lidar Processing System (ALPS)</a>

for the

<a href="http://ngom.usgs.gov/dsp/tech/eaarl/index.php">Experimental Advanced Airborne Research Lidar (EAARL)</a>

at the USGS.  Over the course of several hours of flight time, about a 
gigabyte of raw LIDAR waveform data is collected.  This data must be 
geo-referenced in order to convert it into point clouds broken into 2km 
tiles suitable for GIS use.  When we collect this data in the field, it 
is critical that the field crew can process the data rapidly and take a 
look at it for obvious problems so they can be corrected before the next
 flight.

<br/>

<br/>

Using Makeflow, the data can be processed quickly on a 
portable 32-core cluster in the field in about 20 minutes.  The data can
 be processed fast enough to do some cursory analysis and also 
re-process it a few times if needed to troubleshoot issues.  Using 
Makeflow, it is easy to run the exactly same workflow in the field on 
the portable cluster or back in the office on a multi-core system.

<br/>

<br/>

-

<i>David Nagle, US Geological Survey</i>
