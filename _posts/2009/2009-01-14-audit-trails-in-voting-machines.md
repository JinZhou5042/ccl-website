---
layout: "post"
title: "Audit Trails in Voting Machines"
date: 2009-01-14T14:19:00+00:00
author: "Douglas Thain"
description: "Kim Zetter at Wired magazine recently wrote about the use of log files in electronic voting machines . (It actually shows snippets of the relevant data, whic…"
toc: false
related_posts: true
tags: [log file, troubleshooting, condor, audit trail, elections]
---

Kim Zetter at Wired magazine recently wrote about the use of
<a href="http://blog.wired.com/27bstroke6/2009/01/diebold-audit-l.html">
log files in electronic voting machines
</a>
. (It actually shows snippets of the relevant data, which is a refreshing use of primary evidence in journalism.) The article illustrates an often overlooked rule of software engineering:
<span style="FONT-WEIGHT: bold;">
A DEBUG FILE IS NOT THE SAME THING AS AN AUDIT TRAIL.
<br/>
</span>
<br/>
Here is my rough guess at what happened: Political forces informed the software company that the voting machines must produce an audit trail. Management instructed the programmers to produce a log file of some kind. The programmers already had some debug log files, so they added a few more printfs, and everyone seemed happy.

As Ms. Zetter explains, election officials attempted to read the audit trail and discovered it was essentially useless. Events were recorded in inconsistent ways. Items were incompletely specified, so the reader couldn't distinguish between deck zero on ballot A and deck zero on ballot B. Data in some messages is just plain wrong. Uncommon but expected events are recorded with scary messages like "Exception!" or "Lost deck!"

The problem is that the programmers created a
<span style="FONT-WEIGHT: bold;">
debug file
</span>
instead of creating a distinct
<span style="FONT-WEIGHT: bold;">
audit trail
</span>
. A debug file is a handy tool for recording messages during development. Debug messages are added haphazardly to the code as the programmer works to create and debug tricky bits of code. They are often cryptic or personal, because they are only intended to be read by the person that wrote them. For example, here is a bit of a debug log from the
<a href="http://www.cs.wisc.edu/condor">
Condor
</a>
distributed system. Note that ZKM is one of the programmer's names, who put his initials in to make it easy to find his own messages.
<span style="font-size: 85%;">
1/7 19:42:12 (89102.0) (9319): in pseudo_job_exit: status=0,reason=100
<br/>
1/7 19:42:12 (89102.0) (9319): rval = 0, errno = 25
<br/>
1/7 19:42:12 (89102.0) (9319): Shadow: do_REMOTE_syscall returned less than 0
<br/>
1/7 19:42:12 (89102.0) (9319): ZKM: setting default map to (null)
<br/>
1/7 19:42:12 (89102.0) (9319): Job 89102.0 terminated: exited with status 0
<br/>
1/7 19:42:12 (89102.0) (9319): \*\*\*\* condor_shadow (condor_SHADOW) EXITING WITH STATUS 100
<br/>
</span>
<br/>
<span style="font-size: 100%;">
An
<strong>
audit trail
</strong>
is something
</span>
<span style="FONT-WEIGHT: bold; font-size: 100%;">
completely different
</span>
<span style="font-size: 100%;">
. It communicates to a third party some essential property of the system, such as number of users served, tax forms in progress, or ballots submitted. If you are creating an audit trail, you must add carefully crafted audit statements to the code in strategic places. Someone other than the programmer is going to read it, so it must be clear, concise, and consistent.
</span>
<br/>
<span style="font-size: 100%;">
<br/>
For example, the following is an audit log for users logging in and out of a standard Linux machine:
</span>
<span style="font-size: 85%;">
dthain pts/2 Tue Jan 13 20:56 - 21:23 (00:26)
<br/>
dthain pts/2 Tue Jan 13 12:53 - 16:22 (03:29)
<br/>
dthain pts/1 Tue Jan 13 12:52 still logged in
<br/>
</span>
<br/>
To summarize, a debugging file usually:
<br/>

  <ul>
   <li>
    has an ad-hoc format to facilitate human consumption.
   </li>
   <li>
    omits normal events and reports unusual or unexpected events.
   </li>
   <li>
    does not completely describe the state of the system.
   </li>
  </ul>
  but an audit trail must:
  <ul>
   <li>
    have a well defined format that facilitates automatic analysis.
   </li>
   <li>
    record every essential event in the system, whether normal or abnormal.
   </li>
   <li>
    completely describe the essential state of the system at any time.
   </li>
  </ul>
  Now, we may interpret the problem with the voting machines in two different ways.

First, there is an language problem. Political forces used the term "audit trail", but at some step in communication, this was corrupted to "log file". Perhaps the programmers observed that they had a debug file, added a few more printfs, and assumed that the requirement was satisfied. You can see how this accident might have been made in good faith.

Second, there is a serious oversight problem. The purpose of an audit trail is to allow a third party to read the output and draw conclusions about the system. If we only discover that the audit trail is useless after the election, we can only conclude that nobody looked it during testing. If the project managers and their political overseers had demanded to see the so-called audit trail during testing, the entire problem would have been avoided.

So, the two morals of the story for computer programmers are:

  <ul style="FONT-WEIGHT: bold;">
   <li>
    A debug file is not the same thing as an audit trail.
   </li>
   <li>
    Always double check that you got exactly what you asked for.
   </li>
  </ul>
