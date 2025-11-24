---
layout: "post"
title: "Makeflow Feature: JX Representation"
date: 2017-10-18T18:47:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2017/makeflow-feature-jx-representation/jx-5e321fe45d.gif"
description: "There are a number of neat new features in the latest versions of our software that I would like to highlight through some occasional blog posts.  If these s…"
toc: false
related_posts: true
tags: []
---

<div style="background-color: white; color: #222222; font-family: arial, sans-serif;">
   There are a number of neat new features in the latest versions of our software that I would like to highlight through some occasional blog posts.  If these sound interesting, please give them a try and send us your feedback.
  </div>
  <div style="color: #222222; font-family: arial, sans-serif;">
   <div style="background-color: white;">
   </div>
   <div style="background-color: white;">
    <div class="row justify-content-sm-center">
     <div class="col-sm-12">
      {% include figure.liquid path="/assets/blog/2017/makeflow-feature-jx-representation/jx-5e321fe45d.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
     </div>
    </div>
    First, I would like to highlight recent work by Tim Shaffer on JX, a new encoding for Makeflow that makes it easier to express complex workflows programmatically.
   </div>
   <div style="background-color: white;">
   </div>
   <div style="background-color: white;">
    For example, a traditional makeflow rule looks like this:
   </div>
   <div style="background-color: white;">
   </div>
   <div>
    <span style="background-color: white; font-family: monospace , monospace;">
     out.txt: in.txt calib.dat simulate.exe
    </span>
   </div>
   <div>
    <span style="background-color: white; font-family: monospace , monospace;">
     simulate.exe -i in.txt -p 10 &gt; out.txt
    </span>
   </div>
   <div style="background-color: white;">
   </div>
   <div style="background-color: white;">
    In the latest version of Makeflow, you can write the same rule in JSON like this:
   </div>
   <div style="background-color: white;">
   </div>
   <div style="background-color: white;">
    <div>
     <span style="font-family: monospace , monospace;">
      {
     </span>
    </div>
    <div>
     <span style="font-family: monospace , monospace;">
      "command" : "simulate.exe -i in.txt -p 10 &gt; out.txt",
     </span>
    </div>
    <div>
     <span style="font-family: monospace , monospace;">
      "inputs" : [ "in.txt", "calib.dat", "simulate.exe" ],
     </span>
    </div>
    <div>
     <span style="font-family: monospace , monospace;">
      "outputs": [ "out.txt" ]
     </span>
    </div>
    <div>
     <span style="font-family: monospace , monospace;">
      }
     </span>
    </div>
   </div>
   <div style="background-color: white;">
   </div>
   <div style="background-color: white;">
    Now, just using JSON by itself doesn't give you a whole lot.  However, we extended JSON with a few new features like list comprehensions, variables substitutions, and operators.  This gives us a programmable way of generating a lot of rules easily.
   </div>
   <div style="background-color: white;">
   </div>
   <div style="background-color: white;">
    For example, this represents 100 rules where the parameter varies from 0-99:
   </div>
   <div style="background-color: white;">
    <div>
     <span style="font-family: monospace , monospace;">
      <br/>
     </span>
    </div>
    <div>
     <span style="font-family: monospace , monospace;">
      {
     </span>
    </div>
    <div>
     <span style="font-family: monospace , monospace;">
      "command" : format("simulate.exe -i in.txt -p %d &gt; out.%d.txt",param,param),
     </span>
    </div>
    <div>
     <span style="font-family: monospace , monospace;">
      "inputs" : [ "in.txt", "calib.dat", "simulate.exe" ],
     </span>
    </div>
    <div>
     <span style="font-family: monospace , monospace;">
      "outputs": [ format("out.%d.txt",param) ]
     </span>
    </div>
    <div>
     <span style="font-family: monospace , monospace;">
      <br/>
     </span>
    </div>
    <div>
     <span style="font-family: monospace , monospace;">
      } f
     </span>
     <span style="font-family: monospace , monospace;">
      or param in range(100)
     </span>
    </div>
   </div>
   <div style="background-color: white;">
    <span style="font-family: monospace , monospace;">
     <br/>
    </span>
   </div>
   <span style="background-color: white;">
    For a more detailed example, see these example BWA workflows expressed in three different ways:
   </span>
   <br/>
   <div style="background-color: white;">
    <div>
     <ul>
      <li style="margin-left: 15px;">
       <a href="https://github.com/cooperative-computing-lab/makeflow-examples/blob/master/bwa/bwa.mf" style="color: #1155cc;" target="_blank">
        Traditional Makeflow
       </a>
      </li>
      <li style="margin-left: 15px;">
       <a href="https://github.com/cooperative-computing-lab/makeflow-examples/blob/master/bwa/bwa.json" style="color: #1155cc;" target="_blank">
        JSON Representation
       </a>
      </li>
      <li style="margin-left: 15px;">
       <a href="https://github.com/cooperative-computing-lab/makeflow-examples/blob/master/bwa/bwa.jx" style="color: #1155cc;" target="_blank">
        JX Representation
       </a>
      </li>
     </ul>
    </div>
    <div>
     Thanks to Andrew Litteken for converting and testing many of our example workflows into the new format.
    </div>
   </div>
  </div>
