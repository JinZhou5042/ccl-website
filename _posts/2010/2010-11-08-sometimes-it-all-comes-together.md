---
layout: "post"
title: "Sometimes It All Comes Together"
date: 2010-11-08T16:00:00+00:00
author: "Douglas Thain"
description: "Most days, software engineering involves compromises and imperfect solutions. It's rare for two pieces of software to mesh perfectly -- you always have to wo…"
toc: false
related_posts: true
tags: [chirp, work queue, condor, bxgrid, weaver, parrot, makeflow]
---
Most days, software engineering involves compromises and imperfect solutions. It's rare for two pieces of software to mesh perfectly -- you always have to work to overcome the limitations or assumptions present in different modules. But, every once in a while, the pieces just come together in a satisfying way.

<br/>

<br/>

A few weeks back, we ran into a problem with BXGrid, our system for managing biometric data. Our users had just ingested a whole pile of new images and videos, and were browsing and validating the data. Because data was recently ingested, no thumbnails had been generated yet, so every screenful required a hundred or so thumbnails to be created from the high resolution images. Multiple that by each active user, and you have a web site stuck in the mud.

<br/>

<br/>

A better solution would be to generate all of the missing thumbnails offline in an orderly way. Since many of the transcoding operations are compute intensive, it makes sense to farm them out to a distributed system.

<br/>

<br/>

Peter Bui -- a graduate student in our group -- solved this problem elegantly by putting together almost all of our research software simultaneously. He used

<a href="http://dthain.blogspot.com/search/label/weaver">Weaver</a>

as the front-end language to query

<a href="http://dthain.blogspot.com/search/label/bxgrid">BXGrid</a>

and determine what thumbnails needed to be generated. Weaver generated a

<a href="http://dthain.blogspot.com/search/label/makeflow">Makeflow</a>

to perform all of the transcodings. Makeflow used

<a href="http://dthain.blogspot.com/search/label/work%20queue">Work Queue</a>

to execute the tasks, with the Workers submitted to our campus

<a href="http://dthain.blogspot.com/search/label/condor">Condor</a>

pool.

<br/>

<br/>

So far, so good. But, the missing piece was that Makeflow expects data to be available as ordinary files. At the time, this would have required that we copy several terabytes out of the archive onto the local disk, which wasn't practical. So, Peter wrote a module for Parrot which enabled access to BXGrid files under paths like

<span style="font-family: courier new;"> /bxgrid/fileid/123</span>

. Then, while attached to

<a href="http://dthain.blogspot.com/search/label/parrot">Parrot</a>

, Makeflow could access the files, being none the wiser that they were actually located in a distributed system.

<br/>

<br/>

Put it all together, and you have this:

<br/>

<br/>

<img alt="" border="0" id="BLOGGER_PHOTO_ID_5532826642233001490" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLpVxqDmvXvxVdU4UMBptIy-d_3PYYJBH6TDiF5SqR7PV3w38drG3Sq1QTq_m_y8pqa1Z5JDi1eyD0eT_I-AEaVBPcr0OFI7OWxedTcIHDTdvBALn7Fh3z6dZEwtoI7KAWUughp4IPsl8/s400/everything.gif" style="TEXT-ALIGN: center; MARGIN: 0px auto 10px; WIDTH: 447px; DISPLAY: block; HEIGHT: 354px; CURSOR: hand;"/>

Sometimes, it all comes together.
