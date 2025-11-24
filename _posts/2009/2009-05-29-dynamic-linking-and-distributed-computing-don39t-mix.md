---
layout: "post"
title: "Dynamic Linking and Distributed Computing Don&#39;t Mix"
date: 2009-05-29T20:00:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2009/dynamic-linking-and-distributed-computing-don39t-mix/static-linking-55fd5676c0.gif"
description: "Dynamic linking is one of the more frustrating aspects of distributed computing in the real world. It's is the sort of technology that is meant to optimize t…"
toc: false
related_posts: true
tags: [linking, distributed computing]
---

<div>
  </div>
  <br/>
  <div>
   Dynamic linking is one of the more frustrating aspects of distributed computing in the real world. It's is the sort of technology that is meant to optimize the computer's happiness at the expense of the end user's sanity.
   <span style="FONT-WEIGHT: bold;">
    Dynamic linking should really be avoided, except in a few very specific cases outlined below.
   </span>
   For those of you who don't remember, here is a brief primer on linking:

Back in the good old days, programmers would group commonly used functions (like printf and strlen) into a common module, otherwise known as a
<span style="FONT-WEIGHT: bold;">
library
</span>
. However, managing the library was difficult. If you simply compiled your library into the program, it would work, but your program would be full of unused code. The alternative was to cut-and-paste the needed routines into your program, but this was time consuming, and led to many copies of the code that were difficult to synchronize. Frustration was the result.

The solution to this is a tool known as a
<span style="FONT-WEIGHT: bold;">
link editor
</span>
or just
<span style="FONT-WEIGHT: bold;">
linker
</span>
. A linker looks at a program and a set of libraries, figures out all the pieces that are needed, and then constructs a complete executable program with only the routines that are actually needed. In the example below, suppose that main.o needs to use the functions printf.o and baz.o. The linker figures out that those reside in libc.a and libstrange.a, and puts the whole thing together in prog.exe. This program can be copied to any other machine, and will run correctly. This is now known as
<span style="FONT-WEIGHT: bold;">
static linking
</span>
.

  </div>
  <br/>
  <div>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2009/dynamic-linking-and-distributed-computing-don39t-mix/static-linking-55fd5676c0.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
   As machines grew larger, and had ever more programs and libraries installed, someone clever observed an inefficiency. Nearly every program requires printf, so a copy of the printf code was present in nearly every single program, wasting space in both the filesystem and virtual memory. Further, if someone fixed a bug or security flaw in printf, it was necessary to recompile everything.

To address these problems,
<span style="FONT-WEIGHT: bold;">
dynamic linking
</span>
was invented. In this model, the linker does not copy routines into the executable, it simply makes a note that the program depends upon a certainly library. When the program is actually run, the
<span style="FONT-WEIGHT: bold;">
loader
</span>
binds the function calls in the program to the shared libraries on disk. Often, the executable program is very small, and simply consists of a few calls to a large number of libraries.

  </div>
  <br/>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2009/dynamic-linking-and-distributed-computing-don39t-mix/dynamic-linking-a99270c9fc.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  <p>
   Now enter distributed systems. Suppose that you wish to take a program that you have written on one machine, and run it on another machine? If you have employed static linking, it's easy: you simply copy the program over, and run it. If you have used dynamic linking, it's a real pain: you must identify all of the libraries that the program depends upon, copy them over, set some obscure environment variables, and then run the program.

Ironically, dynamic linking is less efficient than static linking in several ways. First, it actually ends up using more disk space, virtual memory, and network traffic, because you have to copy over the entire libraries, not just the parts that your program needs. (Of course, you can break the dynamic library up into smaller libraries, but then you are just making it harder on the programmer and user to identify the right libraries.) Second, it makes program startup very slow, especially on a distributed filesystem, because the loader must search for every single library in the search path.

For a nice example of how this can make a simple program ridiculously complicated, try the following two commands on Linux:
<span style="FONT-WEIGHT: bold;">
ldd /bin/ls
</span>
and
<span style="FONT-WEIGHT: bold;">
strace /bin/ls
</span>
. The former shows the libraries required to run the ls command, and the latter shows the hundreds of system calls needed to just start the program. Of course, a few hundred system calls isn't much by itself, but when you think of hundreds of users sharing a common file server, and ever call to exec() results in this traffic, you can start to see why this might not be a good idea.

So, to sum up:

  </p>
  <table>
   <tbody>
    <tr>
     <td>
     </td>
     <td style="TEXT-ALIGN: center;">
      <b>
       Static Linking
      </b>
     </td>
     <td style="TEXT-ALIGN: center;">
      <b>
       Dynamic Linking
      </b>
     </td>
    </tr>
    <tr>
     <td style="TEXT-ALIGN: center;">
      <b>
       On A Single
       <br/>
       Computer
      </b>
     </td>
     <td style="TEXT-ALIGN: center;">
      Easy to use.
      <br/>
      Wastes space.
     </td>
     <td style="TEXT-ALIGN: center;">
      Easy to use.
      <br/>
      Saves space.
     </td>
    </tr>
    <tr>
     <td>
      <b>
      </b>
      <div style="TEXT-ALIGN: center;">
       <b>
        In a Distributed
        <br/>
        System
       </b>
      </div>
     </td>
     <td style="TEXT-ALIGN: center;">
      <br/>
      Easy to use.
      <br/>
      Saves space.
     </td>
     <td style="TEXT-ALIGN: center;">
      <br/>
      Hard to use.
      <br/>
      Wastes space.
     </td>
    </tr>
   </tbody>
  </table>
  My advice?
  <span style="FONT-WEIGHT: bold;">
   Always use static linking, unless you are 100% sure that every single computer on the planet has the libraries that you need.
  </span>
  That means, link dynamically against the standard C and math libraries,
  <span style="FONT-STYLE: italic;">
   maybe
  </span>
  against pthreads and X11, and statically against everything else.
  <br/>
  <span style="FONT-WEIGHT: bold; font-size: 100%;">
   <br/>
   <hr/>
   <br/>
   Appendix: How to control linking with gcc.
  </span>
  To link everything in your program statically, use the -
  <span style="FONT-WEIGHT: bold;">
   static
  </span>
  flag:
  <br/>
  <span style="font-family: courier new;">
   gcc -static main.o -lstrange -lc -lm -o prog.exe
  </span>
  To link some libraries statically and some dynamically, use -
  <span style="FONT-WEIGHT: bold;">
   Xlinker -Bdynami
  </span>
  c and
  <span style="FONT-WEIGHT: bold;">
   -Xlinker -Bstatic
  </span>
  to switch between modes:
  <br/>
  <span style="font-family: courier new;">
   gcc main.o -Xlinker -Bstatic -lstrange -Xlinker -Bdynamic -lc -lm -o prog.exe
  </span>
  To see what dynamic libraries your program depends upon, use the
  <span style="FONT-WEIGHT: bold;">
   ldd
  </span>
  command:
  <br/>
  <span style="font-family: courier new;">
   % ldd /bin/ls
  </span>
  <br/>
  <span style="font-family: courier new;">
   libc.so.6 =&gt; /lib/tls/libc.so.6 (0x00a99000)
  </span>
  <br/>
  <span style="font-family: courier new;">
   libpthread.so.0 =&gt; /lib/tls/libpthread.so.0 (0x00cf8000)
  </span>
  <br/>
  <span style="font-family: courier new;">
   /lib/ld-linux.so.2 (0x00a7f000)
  </span>
