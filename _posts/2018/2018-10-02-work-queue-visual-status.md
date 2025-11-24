---
layout: "post"
title: "Work Queue Visual Status"
date: 2018-10-02T16:42:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2018/work-queue-visual-status/Screen-Shot-2018-10-01-at-9.20.12-AM-48e2caeb22.png"
description: "Check out the new Work Queue Status page by Nate Kremer-Herman.  This reveals a whole lot of information that was already reported to the global catalog in r…"
toc: false
related_posts: true
tags: []
---
Check out the new

<a href="http://ccl.cse.nd.edu/software/workqueue/status/" target="_blank">Work Queue Status</a>

page by Nate Kremer-Herman.  This reveals a whole lot of information that was already reported to the global catalog in raw JSON, but was previously hard to interpret.  For any WQ application reporting itself to the global catalog (use the -N option)  you get a nice display of workers and tasks running and the total resources consumed across the application:

<br/>

<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBh406jqhSTZZuZM6oy3oL_GkacD4eex4ekRTUAsz1xCgGHKDqFCUDKGPflZAi5qh3hlXrlf01Tz_EW4ijRNTpSt8mWuaB4pCpM6iTOGINCU-dpkTI5cNFKC9SkX34vyUMxd2cvbKXPRU/s1600/Screen+Shot+2018-10-02+at+12.34.27+PM.png" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBh406jqhSTZZuZM6oy3oL_GkacD4eex4ekRTUAsz1xCgGHKDqFCUDKGPflZAi5qh3hlXrlf01Tz_EW4ijRNTpSt8mWuaB4pCpM6iTOGINCU-dpkTI5cNFKC9SkX34vyUMxd2cvbKXPRU/s400/Screen+Shot+2018-10-02+at+12.34.27+PM.png"/></a>

<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpAxMSqt7vhP3hn8Ua6jpBTzC_IMhOUoOW4LG13j67TpfJY5SbpBqpdBBGfBMlHjAG76tznAuliirXL1p2uEHCKVKqkj8OxYC0PzBaJpUA3YETIV33qI0UcU5GauvR3q5t1XqkflMTOs8/s1600/Screen+Shot+2018-10-02+at+12.34.32+PM.png"><img border="0" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpAxMSqt7vhP3hn8Ua6jpBTzC_IMhOUoOW4LG13j67TpfJY5SbpBqpdBBGfBMlHjAG76tznAuliirXL1p2uEHCKVKqkj8OxYC0PzBaJpUA3YETIV33qI0UcU5GauvR3q5t1XqkflMTOs8/s400/Screen+Shot+2018-10-02+at+12.34.32+PM.png"/></a>

<br/>

What's more, a pie chart shows a breakdown of the master is spending its time: sending data to workers, receiving data from workers, and polling (waiting) for workers to report are the main categories.  This tells you at a glance what the bottleneck of the system is.

<br/>

<br/>

This WQ master is spending most of its time sending data out to workers, so it's close to the limit of its scalability:

<br/>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2018/work-queue-visual-status/Screen-Shot-2018-10-01-at-9.20.12-AM-48e2caeb22.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

However, this one is spending most of its time polling for results, and only a small fraction sending.  It can likely handle many more workers:

<br/>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2018/work-queue-visual-status/Screen-Shot-2018-10-01-at-9.20.20-AM-cd46527f9d.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

This one is spending *all* of its time either receiving data from workers (completed tasks) or sending data to workers for new tasks.  It is completely occupied:

<br/>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2018/work-queue-visual-status/Screen-Shot-2018-10-02-at-12.36.20-PM-29355b3adb.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>
