---
layout: "post"
title: "The Forty Tribes of Linux"
date: 2010-04-05T16:45:00+00:00
author: "Douglas Thain"
description: "As I have noted in this column before, a perennial challenge of distributed computing in the real world is dealing with the multiplicity of operating systems…"
toc: false
related_posts: true
tags: [condor, java, linux, virtual machines]
---
As I have noted in this column before, a perennial challenge of distributed computing in the real world is dealing with the multiplicity of operating systems and related environments.  If you are dealing with an uncontrolled environment like a large university or an 'at home' computing environment, there is no telling what you are going to get.    If you have a piece of software that depends exactly on the presence of Linux 19.5.3.4.9.2, it just isn't going to work.

You might think that this could be avoided by having a professionally managed environment.  At Notre Dame, we have a site license for Red Hat Linux, and our staff are pretty rigorous in keeping everything up to date and on track.  But even then, you can't assume everything is identical: there is no way to upgrade everyone simultaneously, and every machine operates on a different schedule (and discipline) for picking up automatic updates.  For example, we are currently in the tail of of a general campus migration from Red Hat 4 to Red Hat 5.

Here is some hard evidence.  We recently started using the neat 'cron' feature in Condor to make a daily observation of the operating system version, kernel version, and C library version of each machine.  With a few variations on condor_status, we can see the upgrade status of the whole system:

The major release numbers (below) aren't too bad.  About 3/4 of our cores are running the latest Red Hat, but another 73 machines are behind by a version or two.  And, oops, looks like someone plugged in their own personal CentOS machine.  Not too hard to deal with, if you are careful to put 'redhat_version' in your requirements:
  <pre><br/>% condor_status -format "%s\n" redhat_version | sort | uniq -c | sort -rn

782 Red Hat Enterprise Linux Server release 5.4 (Tikanga)<br/>27  Red Hat Enterprise Linux AS release 4 (Nahant Update 7)<br/>26  Red Hat Enterprise Linux Server release 5.3 (Tikanga)<br/>10  Red Hat Enterprise Linux AS release 4 (Nahant Update 8)<br/>10  Red Hat Enterprise Linux WS release 4 (Nahant Update 7)<br/>4   CentOS release 5.3 (Final)<br/></pre>
  If we go a little deeper, the picture gets murkier.  Below are the distribution of Linux kernel versions.  Interesting to note that a few are hand-modified for some unusual hardware, and only two are Xen virtualized.  Hope that you don't have any code sensitive to the kernel version.
  <pre><br/>% condor_status -format "%s\n" kernel_version | sort | uniq -c | sort -rn

342 2.6.18-164.9.1.el5<br/>294 2.6.18-164.el5<br/>94  2.6.18-164.10.1.el5<br/>32  2.6.18-164.11.1.el5<br/>32  2.6.9-78.0.13.ELsmp<br/>14  2.6.18-128.7.1.el5<br/>12  2.6.18-164.6.1.el5<br/>10  2.6.18-128.2.1.el5<br/>6   2.6.18-164.2.1.el5<br/>5   2.6.9-78.0.17.ELsmp<br/>4   2.6.27.8-md-microway<br/>4   2.6.9-89.0.20.ELsmp<br/>2   2.6.18-128.4.1.el5<br/>2   2.6.18-164.9.1.el5xen<br/>2   2.6.9-78.0.5.ELsmp<br/>2   2.6.9-89.0.16.ELsmp<br/>2   2.6.9-89.0.9.ELsmp<br/></pre>
  For completeness, here is the distribution of glibc versions, which has much the same story:
  <pre><br/>% condor_status -format "%s\n" glibc_version | sort | uniq -c

452 glibc-2.5-42.el5_4.2<br/>296 glibc-2.5-42<br/>34  glibc-2.5-42.el5_4.3<br/>24  glibc-2.3.4-2.41<br/>16  glibc-2.5-34.el5_3.1<br/>14  glibc-2.5-34<br/>13  glibc-2.3.4-2.41.el4_7.1<br/>6   glibc-2.3.4-2.43<br/>4   glibc-2.3.4-2.43.el4_8.1<br/></pre>
  In the good old days, you could just indicate that a program required OpSys=="LINUX" and more or less expect it to run.  That certainly isn't possible now.  Perhaps we are misleading users by talking about this thing called Linux, which doesn't really exist in any consistent form.  Instead, we should be telling our users that a new operating system gets invented every week, and is usually named after a team on Survivor.

The good folks at Sun tried to solve this problem almost 20 years ago with Java.  The idea was that they would create a stable platform that could be implemented on any machine.  Then, you could write programs that would be universally portable.  The problem was, well...
  <pre><br/>% condor_status -format "%s " JavaVendor -format "%s\n" JavaVersion | sort | uniq -c | sort -rn<br/>308 Sun Microsystems Inc. 1.6.0<br/>222 Sun Microsystems Inc. 1.6.0_15<br/>174 Sun Microsystems Inc. 1.6.0_17<br/>52  Free Software Foundation, Inc. 1.4.2<br/>28  Sun Microsystems Inc. 1.6.0_18<br/>3   Sun Microsystems Inc. 1.5.0_17<br/>2   Apple Computer, Inc. 1.5.0_19<br/></pre>
  Many people think the grand solution to this problem is virtual machines.  Perhaps, but more on that next time.
