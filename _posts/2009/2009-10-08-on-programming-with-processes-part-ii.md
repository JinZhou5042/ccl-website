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
<div>
   One of the biggest challenges in building computer systems is finding a way to make things
   <strong>
    simpler
   </strong>
   . Any propeller-head can make a piece of software more complicated. Unfortunately, our industry seems to have a way of gravitating toward the complex. Let's look at the current state of the web browsers -- pick any one -- which seem to insist upon reimplementing or otherwise abusing the operating system.
  </div>
  <br/>
  <div>
   <span style="font-weight: bold;">
    Exhibit 1
   </span>
   : About 2003, tabbed browsing is heralded as the wave of the future, and every web browser re-writes itself from scratch to support tabs and issues gushing press releases. What is a tab? Well, it's a way to switch between multiple running programs, each with its own title and visual space. Which is to say... it's like having windows! Except it's worse than having windows, it's like the old awful
   <a href="http://msdn.microsoft.com/en-us/library/ms632591%28VS.85%29.aspx">
    Multiple Document Interface
   </a>
   , which even Microsoft now admits confused the heck out of everyone.
  </div>
  <br/>
  <div>
   The funny thing is, you can achieve exactly the same behavior by dragging your taskbar to the top of the screen, like this:
  </div>
  <br/>
  <div>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2009/on-programming-with-processes-part-ii/tabbed-browsing-07f3e76847.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   <span style="font-weight: bold;">
    Exhibit 2
   </span>
   : You cannot run the latest version of Netscape (a.k.a Mozilla, Firefox, SeaMonkey, IceWeasel, good grief...)
   <a href="http://www.google.com/search?q=firefox+nfs+home">
    if your home directory is on a distributed file system
   </a>
   . Never mind that putting your home directory on a shared filesystem is
   <span style="font-weight: bold;">
    the normal practice in 90% of the industrialized worl
   </span>
   <span style="font-weight: bold;">
    d
   </span>
   , where the user of the machine works for an organization that keeps important documents on a central server.

Apparently, Firefox uses an embedded database to store your preferences, bookmarks, cache, etc, and it cannot tolerate multiple simultaneous access. So, if you try to run multiple instances at once, it has to be clever enough to find the running copy and tell it to open a new window. If it cannot find it because the other copy is running in another console or on another machine, you get this ridiculous message:
  </div>
  <br/>
  <div>
  </div>
  <br/>
  <div>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2009/on-programming-with-processes-part-ii/error-7be8fe3174.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   <br/>
   <p>
    <span style="font-weight: bold;">
     Exhibit 3:
    </span>
    Google Chrome is supposed to be the re-invention of the web browser, except simpler and more robust. Instead of threads, it uses this new-fangled technology called "processes" instead of those old gnarly threads. So far, so good. Then Firefox decides to get on this bandwagon.
   </p>
   <p>
    Unfortunately, Firefox is
    <span style="font-weight: bold;">
     missing the point entirely
    </span>
    . The plan is to break the UI that controls
    <strong>
     all the windows
    </strong>
    into one process, and the plugins, parsers, renderers, etc into separate processes. It should come as no surprise that this makes things
    <a href="https://wiki.mozilla.org/Content_Processes">
     even more complicated
    </a>
    , because the various pieces have to communicate with each other. More subtly, it makes the failure semantics really strange: if a helper process dies, one window will fail, but if the UI process dies, a whole bunch of windows will fail. If you look at the set of running processes, you are going to see an unpredictable number of processes with names that have no relation to what you are actually doing.
   </p>
   <p>
    Everyone seems to have missed a ridiculously simple solution to all of these problems:
    <strong>
     Run each browser window in a separate process
    </strong>
    . You don't have to separate out all of the complex plugins, renderers, and so forth, because if one crashes, it will only take down that window. Furthermore, to open a new browser page in any context, all you have to do is fork() and exec("browser http://") and the operating system takes care of the rest.
   </p>
   <p>
    See also:
    <a href="http://dthain.blogspot.com/2009/02/on-parallel-programming-with-processes.html">
     On Parallel Programming with Processes
    </a>
   </p>
  </div>
