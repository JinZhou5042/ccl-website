---
layout: "post"
title: "New PythonTask Interface in Work Queue"
date: 2021-08-09T15:38:00+00:00
author: "Douglas Thain"
description: "The most recent version of Work Queue supports two different categories of tasks. Standard Task s describe a Unix command line and corresponding files, just …"
toc: false
related_posts: true
tags: []
---
<p>
   The most recent version of Work Queue supports two different categories of tasks.
   <b>
    Standard Task
   </b>
   s describe a Unix command line and corresponding files, just as before.  The new
   <b>
    PythonTas
   </b>
   k describes a Python function invocation and corresponding arguments:
  </p>
  <blockquote>
   <span style="font-family: courier;">
    def my_sum(x, y):
    <br/>
    <span>
    </span>
    import math
    <br/>
    <span>
    </span>
    return x+y
   </span>
   <div>
    <span style="font-family: courier;">
     task = wq.PythonTask(mysum,10,20)
     <br/>
     queue.submit(task)
    </span>
   </div>
  </blockquote>
  <div>
   When a task is returned, the function value is available as
   <span style="font-family: courier;">
    t.output
   </span>
   :
  </div>
  <div>
   <span style="font-family: courier;">
    <span>
     <span>
      <span>
      </span>
     </span>
    </span>
   </span>
  </div>
  <blockquote>
   <div>
    <span style="font-family: courier;">
     <span>
      <span>
       <span>
        task = queue.wait(5);
       </span>
      </span>
     </span>
     <br/>
    </span>
   </div>
   <div>
    <span>
     <span>
      <span>
       <span style="font-family: courier;">
        <span>
         <span>
          <span>
           if task:
          </span>
         </span>
        </span>
        <br/>
       </span>
      </span>
     </span>
    </span>
   </div>
   <div>
    <span>
     <span>
      <span>
       <span>
        <span>
         <span>
          <span style="font-family: courier;">
           <span>
            <span>
             <span>
              <span>
               <span>
               </span>
               print("task {} completed with result {}".format(task.id,task.output))
              </span>
             </span>
            </span>
           </span>
           <br/>
          </span>
         </span>
        </span>
       </span>
      </span>
     </span>
    </span>
   </div>
   <div>
   </div>
  </blockquote>
  <div>
   Underneath, a PythonTask serializes the desired function and arguments, and turns it into a standard task which can be remotely executed, using all of the existing capabilities of Work Queue.  And so, a task can be given a resource allocation, time limits, tags, and everything else needed to manage distributed execution:
  </div>
  <blockquote>
   <div>
    <span style="font-family: courier;">
     task.specify_cores(4)
    </span>
   </div>
   <div>
    <span style="font-family: courier;">
     task.specify_gpus(1)
    </span>
   </div>
   <div>
    <span style="font-family: courier;">
     task.specify_tag("hydrazine")
    </span>
   </div>
  </blockquote>
  <div>
   <span style="font-family: courier;">
   </span>
  </div>
  <div>
   Thanks for new CCL graduate student Barry Sly-Delgado for adding this new capability to Work Queue!
   <a href="https://cctools.readthedocs.io/en/stable/work_queue/#managing-python-tasks">
    See the full documentation.
   </a>
  </div>
  <div>
  </div>
  <div>
  </div>
