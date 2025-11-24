---
layout: "post"
title: "On Programming With Processes, Part II"
date: 2009-10-08T13:00:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2009/on-programming-with-processes-part-ii/tabbed-browsing-07f3e76847.gif"
description: "One of the biggest challenges in building computer systems is finding a way to make things simpler . Any propeller-head can make a piece of software more com…"
toc: false
related_posts: true
tags: [web browsers, threads, processes]
---
<p>One of the biggest challenges in building computer systems is finding a way to make things <strong>simpler</strong>. Any propeller-head can make a piece of software more complicated. Unfortunately, our industry seems to have a way of gravitating toward the complex. Let's look at the current state of the web browsers -- pick any one -- which seem to insist upon reimplementing or otherwise abusing the operating system.</p>

<br/>

<p><span style="font-weight: bold;">Exhibit 1</span>: About 2003, tabbed browsing is heralded as the wave of the future, and every web browser re-writes itself from scratch to support tabs and issues gushing press releases. What is a tab? Well, it's a way to switch between multiple running programs, each with its own title and visual space. Which is to say... it's like having windows! Except it's worse than having windows, it's like the old awful <a href="http://msdn.microsoft.com/en-us/library/ms632591%28VS.85%29.aspx">Multiple Document Interface</a>, which even Microsoft now admits confused the heck out of everyone.</p>

<br/>

<p>The funny thing is, you can achieve exactly the same behavior by dragging your taskbar to the top of the screen, like this:<br/></p>

<br/>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2009/on-programming-with-processes-part-ii/tabbed-browsing-07f3e76847.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

<br/>

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2009/on-programming-with-processes-part-ii/error-7be8fe3174.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
