---
layout: "post"
title: "Packaging Applications with Parrot 4.2.0"
date: 2014-08-01T19:18:00+00:00
description: "CCTools 4.2.0 includes a new feature in Parrot that allows you to automatically observe all of the files used by a given application, and then collect them u…"
toc: false
related_posts: true
tags: [parrot, reproducibility, archived-blog]
---
<html><body><span style="font-family: inherit;">CCTools 4.2.0 includes a new feature in <a href="http://ccl.cse.nd.edu/software/parrot">Parrot</a> that allows you to automatically observe all of the files used by a given application, and then collect them up into a self-contained package.  The package can then be moved to another machine -- even a different variant of Linux -- and then run correctly with all of its dependencies present. The created package does not depend upon Parrot and can be re-run in a variety of ways.</span><br/>
<span style="font-family: inherit;"><b> </b> </span><br/>
<span style="font-family: inherit;">This article explains how to generate a self-contained package and then share it so that others can verify can repeat your applications. The whole process involves three steps: running the original application, creating the self-contained package, and the running the package itself.</span><br/>
<span style="font-family: inherit;"><br/>
</span><br/>
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td><a href="http://2.bp.blogspot.com/-5H2nxeoJeYI/U9va_ni4qyI/AAAAAAAABt0/MKp8WoSdy9Y/s1600/workflow-parrot-poster.jpg" style="margin-left: auto; margin-right: auto;"><span style="font-family: inherit;"></span></a></td></tr>
<tr><td class="tr-caption"><span style="font-family: inherit; font-size: small;">Figure 1 Packaging Procedure</span></td></tr>
</tbody></table>
<b>Step 1: Run the original program</b><br/>
<span style="font-family: inherit;"><span style="font-size: small;"><br/></span></span>
<span style="font-family: inherit;"><span style="font-size: small;">Run your program under parrot_run and record the filename list and environment variables by using --name-list and --env-list parameters.</span></span><br/>
<br/>
<span style="font-family: inherit; font-size: small;"><span style="color: blue;"><b>parrot_run --name-list namelist --env-list envlist /bin/bash </b></span></span><br/>
<span style="font-family: inherit; font-size: small;"> </span><span style="font-family: inherit;">
</span><br/>
<span style="font-family: inherit; font-size: small;">After the execution of this command, you can run your program inside parrot_run.  At the end of step 1, one file named namelist containing all the accessed file names and one file named envlist containing environment variables will be generated.  After everything is done, simple exit the shell.</span><br/>
<br/>
<b>Step 2: Generate a self-contained package</b><br/>
<span style="font-family: inherit;"><br/></span>
<span style="font-family: inherit;">Use parrot_package_create to generate a package based on the namelist and envlist generated in step 1.</span><br/>
<span style="font-family: inherit;"><br/></span>
<span style="font-family: inherit;"><span style="color: blue;"><b>parrot_package_create --name-list namelist --env-path envlist --package-path /tmp/package </b></span></span><br/>
<span style="font-family: inherit;"> </span><span style="font-family: inherit;">
</span><span style="font-family: inherit;">
</span><br/>
<span style="font-family: inherit;">This command causes all of the files given in the name list to be copied into the package directory /tmp/package.  You may customize the contents of the package by editing the namelist or the package directory by hand.</span><br/>
<div>
<span style="font-family: inherit;"><br/></span></div>
<span style="font-family: inherit; font-size: small;"><b>Step 3: Repeat the program using the package</b></span><br/>
<span style="font-family: inherit;"><br/></span><span style="font-family: inherit;">The newly created package is simply a complete filesystem tree that can be moved to any convenient location.  It can be re-run by any method that treats the package as a self-contained root filesystem.  This can be done by using Parrot again, by setting up a chroot environment, by setting up a Linux container, or by creating a virtual machine.</span><br/>
<span style="font-family: inherit;"><br/></span><span style="font-family: inherit;">To run the package using Parrot, do this:</span><br/>
<b style="color: blue;"><br/></b>
<b style="color: blue;">parrot_package_run --package-path /tmp/package /bin/bash </b><br/>
<span style="font-family: inherit;"><br/></span>
<span style="font-family: inherit;">To run the package using chroot, do this:</span><br/>
<span style="font-family: inherit; font-size: small;"><b style="color: blue;"><br/></b></span>
<span style="font-family: inherit; font-size: small;"><b style="color: blue;">chroot_package_run --package-path /tmp/package /bin/bash</b></span><br/>
<span style="font-family: inherit;"><span style="font-size: small;"><span style="white-space: normal;"><br/></span></span></span>
<span style="font-family: inherit;"><span style="font-size: small;"><span style="white-space: normal;">In both cases, you will be dropped into a shell in the preserved environment, where all the files used by the original command will be present.  You will definitely be able to run the original command -- whether you can run other programs depends upon the quantity of data preserved.</span></span></span><br/>
<span style="font-family: inherit;"><br/></span>
<span style="font-family: inherit;">For more information, see these man pages:</span><br/>
<ul>
<li><a href="http://ccl.cse.nd.edu/software/manuals/man/parrot_run.html" style="font-family: inherit;">parrot_run</a></li>
<li><a href="http://ccl.cse.nd.edu/software/manuals/man/parrot_package_create.html" style="font-family: inherit;">parrot_package_create</a></li>
<li><a href="http://ccl.cse.nd.edu/software/manuals/man/parrot_package_run.html" style="font-family: inherit;">parrot_package_run</a></li>
<li><a href="http://ccl.cse.nd.edu/software/manuals/man/chroot_package_run.html" style="font-family: inherit;">chroot_package_run</a></li>
</ul>
<br/>
<br/>
<br/></body></html>
