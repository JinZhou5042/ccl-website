---
layout: "post"
title: "The Virtualization Theorem Ignored for Three Decades"
date: 2010-11-16T18:00:00+00:00
author: "Douglas Thain"
description: "Today, in my graduate operating systems class, we discussed what I believe is the most important result in computer science ever to be persistently ignored :…"
toc: false
related_posts: true
tags: [virtual machines]
---

Today, in my graduate operating systems class, we discussed what I believe is the most important result in computer science ever to be
<span style="font-weight: bold;">
persistently ignored
</span>
:

Popek and Goldberg,
<a href="http://portal.acm.org/citation.cfm?id=361011.361073">
Formal Requirements for Virtualizible Third Generation Architectures
</a>
, Communications of the ACM, Volume 17, Issue 7, July 1974.

This paper puts forth a very simple principle that must be observed in order for a CPU to be capable of running in a virtual machine. First, two definitions:
<br/>

  <ul>
   <li>
    A
    <span style="font-style: italic; font-weight: bold;">
     sensitive
    </span>
    instruction reads or modifies supervisor state
   </li>
   <li>
    A
    <span style="font-weight: bold; font-style: italic;">
     privileged
    </span>
    instruction traps if attempted in user mode.
   </li>
  </ul>
  And this central theorem:
  <br/>
  <ul>
   <li>
    <span style="font-weight: bold; font-style: italic;">
     All sensitive operations must be privileged.
    </span>
   </li>
  </ul>
  Here is why this is important.  A conventional operating system (OS) is in charge of the whole machine, and is free to modify the processor status, page tables, I/O devices, and other sensitive aspects of the machine in order to run normal processes.

But, if you take that OS and put it in a virtual machine (VM), it is no longer in charge of the whole machine. All of those actions on sensitive state must be
<span style="font-weight: bold;">
translated
</span>
in some way by the virtual machine monitor. The simplest way to accomplish that translation is to run the OS in user mode, allowing the VMM to execute sensitive operations on its behalf. To make sure that the VMM gets all of the sensitive operations, they must all be forced to trap.

This principle was articulated very clearly in 1974, when virtualization was already a widely applied technique in the world of mainframe computing. Unfortunately, the principle didn't make the leap into the microcomputer world. In fact, there was an enduring tradition of releasing processors that were not virtualizable, only to realize the mistake and issue a second version with a minor fix.

For example, the venerable
<a href="http://en.wikipedia.org/wiki/Motorola_68000">
Motorola 68000
</a>
was first released in 1978, and was heralded as a "mainframe on a chip". Except, it had one little problem: a read from the sensitive status register did not trap, preventing the construction of a virtual memory system. So, Motorola issued the
<a href="http://en.wikipedia.org/wiki/Motorola_68010">
68010
</a>
, which was
<span style="font-weight: bold;">
almost identical
</span>
, except that a read from the status register forced a trap, enabling correct virtualization of memory.

Unfortunately, not everybody got the memo.

For nearly three decades, the Intel x86 series of processors did not have this property. In user mode, many instructions could be used to view sensitive state, and many attempts to write sensitive state would fail silently without a trap. From the 1970s until the late 1990s, efficient virtualization was basically impossible on the most widely used processor family.

Around the year 2000, virtualization became of interest as a way to service the multi-tenancy needs of large internet services. A number of solutions were developed simultaneously to work around the limitations of the Intel chips. One approach used in VMWare was to dynamically compile assembly code at runtime to convert sensitive instructions into deliberate traps to the VMM. Another approach used in the Xen hypervisor was to modify the operating system code so that it explicitly called the VMM instead of invoking sensitive instructions.

There are many other approaches to working around the limitation. Suffice to say that they are all rather complicated, but they can be made to work.

Finally, in 2005, both Intel and AMD introduced virtualization extensions to their processors, enabling basic trap-and-execute virtualization, only
<span style="font-weight: bold;">
29 years
</span>
after the Popek and Goldberg theorem was widely circulated.

So, what's the moral of the story?
