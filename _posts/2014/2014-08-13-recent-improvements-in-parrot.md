---
layout: "post"
title: "Recent Improvements in Parrot"
date: 2014-08-13T20:02:00+00:00
description: "There have been several exciting modifications to Parrot in the last two months which should help stabilize Parrot in many aspects. But first, what is Parrot…"
toc: false
related_posts: true
tags: [parrot, ptrace]
---
<p>There have been several exciting modifications to Parrot in the last two months which should help stabilize Parrot in many aspects. But first, what is Parrot?</p>

<p>Parrot is a system call interposition agent designed for dynamically attaching remote file system services to an application. In simpler terms, Parrot intercepts input/output requests of an application, handles any request for an attached file system service, and returns control to the application. A canonical and illustrative example of this would be:</p>

<p><code>$ cat /http/www.google.com/index.html &gt; index.html</code></p>

<p>Parrot intercepts the attempt by the cat program to open the file <tt>/http/www.google.com/index.html</tt> and performs the HTTP GET request on the application's behalf. The best part is that this all looks like a regular file access to the application, requiring no new library or special logic to be built into the application.</p>

<p>Sounds wonderful but what's the catch? Well, Parrot relies on the Linux ptrace interface to intercept and hook the system calls for a group of processes. In practice, this introduces some amount of overhead in the application. Despite this, Parrot still sees a growing number of users as these performance costs are increasingly insignificant as computing resources become more accessible, numerous, and cheap.</p>

<p>With that said, onto the real meat of this blog post. Parrot was originally written in 2004 when Linux kernels in the wild were as old as 2.4. Back then, the ptrace interface suffered from numerous debilitating problems which required careful handling and/or awkward workarounds to bypass. A new programmer looking at Parrot might be baffled to see that process hierarchies were implemented and enforced via Parrot or that numerous IO system calls for sockets and terminals are run within Parrot rather than the application. There were also numerous blocks of code reacting to bugs in the kernel's implementation and design of ptrace.</p>

<p>Nowadays, the bugs of Linux's ptrace prior to 2.6.0 have largely been corrected: The process hierarchy is no longer flattened by ptrace. Forked child processes can now be traced without rewriting the Linux <tt>clone(2)</tt> system call arguments. The behavior of the exec and exit system calls are simpler to handle. Finally, since Linux 3.4.0, it is now finally possible to correctly handle a tracee stopping due to a signal (known as group-stop in <tt>ptrace(2)</tt>).</p>

<p><div style="color: #222222; font-family: arial; font-size: small;">
In the last two months, I have labored to bring Parrot up-to-date with these latest improvements to ptrace. The ultimate goal of these updates is to reduce the number of bugs in Parrot and hopefully even get some performance improvement. These changes include:</div>
<div style="color: #222222; font-family: arial; font-size: small;">
<br/></div>
<div style="color: #222222; font-family: arial; font-size: small;">
</div>
<ul>
<li>Pull Request #<a href="https://github.com/cooperative-computing-lab/cctools/pull/472" target="_blank">472</a>: Use the <tt>PTRACE_O_TRACECLONE</tt> option to automatically trace child processes. Before Parrot would modify arguments to <tt>clone(2)</tt> <a href="https://github.com/cooperative-computing-lab/cctools/issues/270" target="_blank">which has been known to cause problems with multi-threaded applications</a>. This PR also sets the <tt>PTRACE_O_EXITKILL</tt> flag <a href="https://github.com/cooperative-computing-lab/cctools/pull/508" target="_blank">so that children are automatically killed when Parrot exits for any reason</a>.</li>
<li>Pull Request #<a href="https://github.com/cooperative-computing-lab/cctools/pull/504" target="_blank">504</a>: Parrot no longer reimplements the process hiearchy which required Parrot to handle a process calling <tt>waitpid(2)/wait4(2)</tt>. This PR effectively means that the wait system calls are passed unmodified to the kernel. Haiyan Meng's PR #<a href="https://github.com/cooperative-computing-lab/cctools/pull/458" target="_blank">458</a> also changes Parrot to pass <tt>getpgid/setpgid</tt> unmodified to the kernel.</li>
<li>Pull Request #<a href="https://github.com/cooperative-computing-lab/cctools/pull/497" target="_blank">497</a>: Parrot now supports the <tt>vfork(2)</tt> system call.</li>
<li>Pull Request #<a href="https://github.com/cooperative-computing-lab/cctools/pull/478" target="_blank">478</a>: Parrot now responds to the ptrace group-stop state properly for kernel versions 3.4.0 and later (when it was made possible to correctly respond). For versions older than 3.4.0, Parrot will notify the user that group-stop has occurred and restart the process. It is unfortunately not possible to allow the process to remain stopped.</li>
</ul></p>
