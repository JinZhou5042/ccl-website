---
layout: "post"
title: "JX Language:  REPL Tool and Dot Operator"
date: 2021-11-05T19:44:00+00:00
description: "Undergraduate student Jack Rundle has been making improvements to the JX language used throughout the CCTools package for expressing workflows, database quer…"
toc: false
related_posts: true
tags: []
---
<p>
   <span style="font-size: small;">
    Undergraduate student Jack Rundle has been making improvements to the JX language used throughout the CCTools package for expressing workflows, database queries, and other structured information.
    <br/>
   </span>
  </p>
  <p style="line-height: normal; margin: 0px;">
   <span>
    First, we added a new command line tool,
   </span>
   <span style="color: #454545; font-family: courier; font-size: small;">
    jx_repl
   </span>
   <span style="color: #454545; font-family: Helvetica Neue; font-size: small;">
    , which provides an interactive
    <a href="https://en.wikipedia.org/wiki/Read–eval–print_loop" target="_blank">
     REPL
    </a>
   </span>
   <span style="color: #454545; font-family: Helvetica Neue; font-size: small;">
    environment to work with the JX language:
   </span>
  </p>
  <p style="line-height: normal; margin: 0px;">
   <span style="color: #454545; font-family: Helvetica Neue; font-size: small;">
    <span style="color: #454545; font-family: Helvetica Neue;">
     In addition to standard JX evaluation, the tool also reserves a number of symbols in the context, acting as commands when entered (ex: "help", "quit", etc.).  A full guide for the REPL is outlined in the
     <a href="https://cctools.readthedocs.io/en/stable/jx/jx-repl/" target="_blank">
      CCTools documentation
     </a>
     .  One interesting feature is that both the input expression and output for each line are stored throughout the program's life-cycle.  Previous input expressions can be
    </span>
    <span style="color: #454545; font-family: Helvetica Neue;">
     <span>
      referenced via "in_#" and the associated output via "out_#".  Furthermore, JX will resolve symbols in the input expressions, which themselves may include references to "out_#".
     </span>
    </span>
   </span>
  </p>
  <p>
   <span>
    Next, we provide support for a new operator in JX: the “dot” operator, which resembles
   </span>
   <span style="font-size: small;">
    <a href="https://en.wikipedia.org/wiki/Anaphoric_macro" target="_blank">
     anaphoric macros in Lisp
    </a>
    <span>
     .  The dot operator can be placed after an expression (A) and before a function (B), then JX will evaluate the operator by inserting the expression as the first parameter of the function (B(A)).  In cases of functions with multiple parameters, the other parameters simply get shifted over.  For example:
    </span>
   </span>
  </p>
  <p>
   <span style="font-family: courier;">
    <span style="font-size: small;">
     BEFORE: len([1,2,3,4])    # 4
     <br/>
     AFTER:  [1,2,3,4].len()   # 4 

BEFORE: like("abc", "a.+")   # true
     <br/>
     AFTER:  "abc".like("a.+")    # true 

BEFORE: format("ceil(%f) -&gt; %d", 9.1, 10)   # "ceil(9.1) -&gt; 10"
     <br/>
     AFTER:  "ceil(%f) -&gt; %d".format(9.1, 10)    # "ceil(9.1) -&gt; 10"
    </span>
   </span>
  </p>
  <p>
   <span style="font-size: small;">
    <span style="font-family: courier;">
     BEFORE: len(project(select([{"a": 1}, {"a": 2}], a&gt;0), a))    # 2
     <br/>
     AFTER:  [{"a": 1}, {"a": 2}].select(a&gt;0).project(a).len()     # 2
    </span>
   </span>
  </p>
  <p>
   In order to make this work, we did have to swap the parameter order for three different functions: project(), select(), and like().  However, we can now query the global catalog server with database like queries:
  </p>
  <p>
   <span style="font-family: courier;">
    fetch("http://catalog.cse.nd.edu:9097/query.json").select(type=="wq_master").project([name,tasks_total_cores])
    <br/>
   </span>
  </p>
  <p>
   Yields:
  </p>
  <p>
   <span style="font-family: courier;">
    [
    <br/>
    ["earth.crc.nd.edu",7373],
    <br/>
    ["hallofa.ps.uci.edu",15],
    <br/>
    ["hpc-services1.oit.uci.edu",2],
    <br/>
    ["vm65-195.iplantcollaborative.org",1460],
    <br/>
    ...
    <br/>
    ]
   </span>
  </p>
