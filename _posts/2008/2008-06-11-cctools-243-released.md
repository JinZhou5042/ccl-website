---
layout: "post"
title: "CCTools 2.4.3 Released"
date: 2008-06-11T21:05:00+00:00
author: "Douglas Thain"
description: "We are pleased to announce release 2.4.3 of the Cooperative Computing Tools, including Parrot, Chirp, and other tools which may be downloaded here . Major it…"
toc: false
related_posts: true
tags: []
---

<br/>
  We are pleased to announce release 2.4.3 of the Cooperative Computing
  <br/>
  Tools, including Parrot, Chirp, and other tools which may be downloaded
  <a href="http://www.cse.nd.edu/~ccl/software/download.shtml">
   here
  </a>
  .
  <br/>
  <p>
   Major items in this release:
  </p>
  <ol>
   <br/>
   <li>
    <a href="http://www.cse.nd.edu/~ccl/software/manuals/api/html">
     New documentation for the Chirp APIs
    </a>
   </li>
   <li>
    Improvements to the Chirp server:
    <br/>
    <ul>
     <br/>
     <li>
      New support for streaming I/O and server-side FIFOs
      <br/>
     </li>
     <li>
      New support for complex path names using RFC 2396 encoding.
      <br/>
     </li>
     <li>
      New P right that allows a user only to put new files.
      <br/>
     </li>
    </ul>
   </li>
   <li>
    Improvements to the Chirp clients:
    <br/>
    <ul>
     <br/>
     <li>
      Strided I/O routines for array access.
      <br/>
     </li>
     <li>
      Client interfaces for streaming I/O.
      <br/>
     </li>
     <li>
      Improvement to the build flags that make it easier for other programs to compile against Chirp.
      <br/>
     </li>
    </ul>
   </li>
   <li>
    Miscellaneous bug fixes:
    <br/>
    <ul>
     <br/>
     <li>
      Fixed case where server improperly returns "permission denied" instead of "file not found".es in the server.
      <br/>
     </li>
    </ul>
    <br/>
   </li>
  </ol>
