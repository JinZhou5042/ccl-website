---
layout: "post"
title: "PONCHO Toolkit for Portable Python"
date: 2021-11-04T15:27:00+00:00
author: "Barry Sly-Delgado"
description: "PONCHO ,  is  a  lightweight  Python  based toolkit  which  allows  users  to  synthesize  environments  from a concise, human-readable JSON file containing …"
toc: false
related_posts: true
tags: []
---

<p>
   <span face="sans-serif">
    <span face="sans-serif">
     <b>
      PONCHO
     </b>
     ,  is  a  lightweight  Python  based
    </span>
    <span face="sans-serif">
     toolkit  which  allows  users  to  synthesize  environments  from
    </span>
    <span face="sans-serif">
     a concise, human-readable JSON file containing the necessary
    </span>
    <span face="sans-serif">
     information  required  to  build  a  self-contained  Conda  virtual
    </span>
    <span face="sans-serif">
     environment needed to execute scientific applications on dis
    </span>
    <span face="sans-serif">
     tributed systems. Poncho is composed of three parts:
     <b>
      poncho_package_analyze
     </b>
     ,
     <b>
      poncho_package_create
     </b>
     and
     <b>
      poncho_package_run
     </b>
    </span>
   </span>
  </p>
  <p>
   <b style="font-size: 16.4578px;">
    poncho_package_analyze
   </b>
   <span style="font-size: 16.4578px;">
    performs a static analysis of dependencies used within a python application. The output is JSON file listing the dependencies.
   </span>
  </p>
  <p>
   <span style="font-family: courier;">
    <span face="sans-serif">
     <span face="sans-serif">
      <b>
       poncho_package_analyze application.py spec.json
      </b>
     </span>
    </span>
   </span>
  </p>
  This will give you a dependency file like this:
  <br/>
  <blockquote style="border: medium none; margin: 0px 0px 0px 40px; padding: 0px; text-align: left;">
   <p>
    <span style="font-family: courier;">
     <span face="sans-serif">
      {
     </span>
    </span>
   </p>
   <p>
    <span style="font-family: courier; font-size: 12pt; white-space: pre-wrap;">
     "conda":{
    </span>
   </p>
   <p style="line-height: 1.2; margin-bottom: 0pt; margin-left: 36pt; margin-top: 0pt;">
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      "channels":[
     </span>
    </span>
   </p>
   <p style="line-height: 1.2; margin-bottom: 0pt; margin-left: 72pt; margin-top: 0pt;">
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      "defaults",
     </span>
    </span>
   </p>
   <p style="line-height: 1.2; margin-bottom: 0pt; margin-left: 72pt; margin-top: 0pt;">
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      "conda-forge"
     </span>
    </span>
   </p>
   <p style="line-height: 1.2; margin-bottom: 0pt; margin-left: 36pt; margin-top: 0pt;">
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      ],
     </span>
    </span>
   </p>
   <p style="line-height: 1.2; margin-bottom: 0pt; margin-left: 36pt; margin-top: 0pt;">
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      "packages":[
     </span>
    </span>
   </p>
   <p style="line-height: 1.2; margin-bottom: 0pt; margin-left: 72pt; margin-top: 0pt;">
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      "ndcctools=7.3.0",
     </span>
    </span>
   </p>
   <p style="line-height: 1.2; margin-bottom: 0pt; margin-left: 72pt; margin-top: 0pt;">
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      "parsl=1.1.0",
     </span>
    </span>
   </p>
   <p style="line-height: 1.2; margin-bottom: 0pt; margin-left: 36pt; margin-top: 0pt;">
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      ]
     </span>
    </span>
   </p>
   <p style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      },
     </span>
    </span>
   </p>
   <p style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      "pip": [
     </span>
    </span>
   </p>
   <p style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt; text-indent: 36pt;">
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      "topcoffea"
     </span>
    </span>
   </p>
   <p style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      ]
     </span>
    </span>
   </p>
   <p style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      }
     </span>
    </span>
   </p>
  </blockquote>
  Then if needed, you can manually add other kinds of code and data dependencies like this:
  <blockquote style="border: medium none; margin: 0px 0px 0px 40px; padding: 0px; text-align: left;">
   <span style="font-family: courier; font-size: 16px; white-space: pre-wrap;">
    {
   </span>
   <p style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      "git": {
     </span>
    </span>
   </p>
   <p style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
     </span>
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
     </span>
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      "DATA_DIR": {
     </span>
    </span>
   </p>
   <p style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
     </span>
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
     </span>
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
     </span>
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      "remote": "http://.../repo.git"
     </span>
    </span>
   </p>
   <p>
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
     </span>
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
     </span>
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      }
     </span>
    </span>
   </p>
   <p>
    <span style="font-family: courier;">
     <span style="color: black; font-size: 12pt; font-variant: normal; vertical-align: baseline; white-space: pre-wrap;">
      },
     </span>
    </span>
   </p>
   <p>
    <span style="font-family: courier; font-size: 12pt; white-space: pre-wrap;">
     <span>
     </span>
     "http": {
    </span>
   </p>
   <p>
    <span style="font-family: courier; font-size: 12pt; white-space: pre-wrap;">
     "REFERENCE_DB": {
    </span>
   </p>
   <p>
    <span style="font-family: courier; font-size: 12pt; white-space: pre-wrap;">
     "type": "file",
    </span>
   </p>
   <p>
    <span style="font-family: courier; font-size: 12pt; white-space: pre-wrap;">
     "url": "https://.../example.dat"
    </span>
   </p>
   <p>
    <span style="font-family: courier; font-size: 12pt; white-space: pre-wrap;">
     }
    </span>
   </p>
   <p>
    <span style="font-family: courier; font-size: 12pt; white-space: pre-wrap;">
     }
    </span>
   </p>
   <p>
    <span style="font-family: courier; font-size: 12pt; white-space: pre-wrap;">
     }
    </span>
   </p>
  </blockquote>
  <p>
   <b style="font-size: 16.4578px;">
    poncho_package_create
   </b>
   <span style="font-size: 16.4578px;">
    allows users to create an environment from a JSON specification file. This specification may include Conda packages, Pip packages, remote Git repos and arbitrary files accessible via HTTPS.  This environment is then packaged into a tarball.
   </span>
  </p>
  <p>
   <b style="font-family: courier; font-size: 12pt; white-space: pre-wrap;">
    poncho_package_create spec.json env.tar.gz
   </b>
  </p>
  <blockquote>
   <blockquote>
   </blockquote>
  </blockquote>
  <p>
   <b style="font-size: 16.4578px;">
    poncho_package_run
   </b>
   <span style="font-size: 16.4578px;">
    will unpack and and activate the an environment. As an input, a command will then be executed within this environment. Any Git repos or files specified within the environment will be set as environment variables.
   </span>
   <span style="font-family: courier; font-size: 16.4578px;">
   </span>
  </p>
  <p>
   <span face="sans-serif">
    <span face="sans-serif">
     <span style="font-family: courier;">
      <b>
       poncho_package_run -e env.tar.gz python application.py
       <span>
       </span>
      </b>
     </span>
    </span>
   </span>
  </p>
  <p>
   This programmable interface allows us to now take a Python application and easily move it from place to place within a cluster, and is in production with the Coffea data analysis application and the Parsl workflow system when using Work Queue as an execution system.
  </p>
  <p>
   The poncho tools can be found in the
   <a href="https://cctools.readthedocs.io/en/latest/poncho/">
    latest release
   </a>
   of the Cooperative Computing Tools.
  </p>
