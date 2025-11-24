---
layout: "post"
title: "OpenMalaria Preservation with Umbrella"
date: 2015-10-19T20:54:00+00:00
description: "Haiyan worked together with Alexander from CRC , successfully preserved and reproduced a C++ application, openMalaria , using Umbrella . The data dependencie…"
toc: false
related_posts: true
tags: []
---
<span style="font-size: large;"><a href="http://www3.nd.edu/~hmeng/">Haiyan</a> worked together with <a href="https://crc.nd.edu/index.php/software-development/alexander-vyushkov">Alexander </a>from <a href="https://crc.nd.edu/">CRC</a>, successfully preserved and reproduced a C++ application, <a href="https://github.com/crcresearch/umbrella-software-preservation">openMalaria</a>, using <a href="http://ccl.cse.nd.edu/software/umbrella/database/doc/umbrella.html">Umbrella</a>. The data dependencies of openMalaria include packages from yum repositories, OS images from the CCL websites, software and data dependencies from <a href="https://curate.nd.edu/">curateND</a>. Through <a href="https://github.com/crcresearch/umbrella-software-preservation/blob/master/umbrella-om-spec/openmalaria.umbrella">a JSON-format specification</a>, Umbrella allows the user to specify the complete execution environment for his application: hardware, kernel, OS, software, data, packages supported by package managers, environment variables, and command. Each dependency in an Umbrella specification also comes with its metadata information - size, format, checksum, downloading urls, and mountpoints. During runtime, Umbrella tries to construct the execution environment specified in the specification with the help of different sandboxing techniques such as Parrot and Docker, and run the user's task.</span>
