---
layout: "post"
title: "Exponential Backoff in Distributed Systems"
date: 2009-02-21T18:41:00+00:00
author: "Douglas Thain"
image: "/assets/blog/2009/exponential-backoff-in-distributed-systems/ethernet-5a01742a3d.gif"
description: "In response to my previous article, a commenter asked: Why exponential backoff? To put a finer point on the question, How should I choose the parameters for …"
toc: false
related_posts: true
tags: [ethernet, fault tolerance]
---

In response to my previous article, a commenter asked:
<br/>

  <div>
   <br/>
   <span style="font-size: 85%;">
    <em>
     Why exponential backoff? To put a finer point on the question, How should I choose the parameters for my exponential backoff algorithm? I think many people choose parameters that back off too much, too fast.
    </em>
   </span>
   <div>
    The idea of exponential backoff in distributed systems goes back quite a few years. An early example can be found in the Ethernet network. In its original form, an Ethernet consisted of a single cable connecting all stations on the network. Unlike some other computer networks at the time, it had no direct means of controlling which station could transmit at any time. If one station transmitted while everyone else was silent, then the message would be received by all stations. But, if two (or more) transmitted at once, every station would receive a corrupted message.
   </div>
   <br/>
   <div>
    Here's an analogy. Imagine a school gymnasium with people lined up along the walls. People have to shout to be heard, and there are multiple conversations going on at once. As you probably know from experience, this can only work if one person speaks at a time. So, each person waits for a quiet moment to speak. Occasionally, two people try to speak simultaneously, and then you have a silly game of each waiting a bit and then trying again until the tie is broken.
   </div>
   <br/>
   <div>
    That is essentially how Ethernet works. Each party that wants to transmit waits for a quiet moment, and then sends a message. The sender also simultaneously listens to see if it can hear its own message. If the message is corrupted, it means another party transmitted at the same time, so both wait a bit and try again.
   </div>
   <br/>
   <div>
    The essential question is:
    <strong>
     How long should each station wait?
    </strong>
   </div>
   <br/>
   <div>
    It does no good to have each party wait a fixed amount of time -- say, one microsecond -- because then each will try again at the same time, and the situation repeats forever. A better idea is to choose a random time -- say, between one and ten microseconds, which will break the tie in a small number of attempts. However, if many parties are trying to talk at once, the result will still be a chaotic mess of messages, with no-one making any progress.
   </div>
   <br/>
   <div>
    A more robust solution is for each party to use exponentially increasing delays. For example, delay one microsecond plus a random factor the first time, then two, then four, and so on. This solution works regardless of the number of competing parties, because it tends to thin the traffic out over time until the congestion is eased.
   </div>
   <br/>
   <div>
    I wrote a paper titled
    <a href="http://www.cse.nd.edu/~dthain/papers/ethernet-hpdc12.pdf">
     The Ethernet Approach to Grid Computing
    </a>
    on this topic a few years back, making the observation that this strategy is needed everywhere in distributed systems. Whenever you talk to a file server, a batch system, a print server, or file your taxes online, failures are possible, so you need to use Ethernet-like strategies. To encourage this, I wrote a simple language called the
    <a href="http://www.cse.nd.edu/~ccl/software/ftsh">
     Fault Tolerant Shell
    </a>
    which looks a lot like a conventional shell with exceptions. For example, here is how to reliably submit a Condor job:
   </div>
   <br/>
   <div>
    <span style="font-family: courier new;">
     try for 1 hour
    </span>
   </div>
   <div>
    <span style="font-family: courier new;">
     condor_submit job.file
    </span>
   </div>
   <div>
    <span style="font-family: courier new;">
     end
    </span>
   </div>
   <br/>
   <div>
    Or, if you have a choice of three different places to fetch a file from:
   </div>
   <br/>
   <div>
    <span>
     <span style="font-family: courier new;">
      forany server in X, Y, Z
      <br/>
      wget http://$server/myfile
      <br/>
      end
     </span>
    </span>
   </div>
   <div>
    <span>
     <br/>
    </span>
    Internally, the shell takes care of all of the error detection, retries, and so forth, so that the programmer can concentrate on the essential issues. The end result is that the system becomes much more robust to load bursts. For example, the following graph shows the performance of many clients submitting batch jobs to a queue using three methods: the Ethernet approach, the Aloha approach (an intermediate step), and a simple fixed retry:
   </div>
   <br/>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2009/exponential-backoff-in-distributed-systems/ethernet-5a01742a3d.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
  </div>
  <br/>
  <p>
   As you can see, the fixed approach crashes to zero after about 400 clients, whereas the Ethernet approach continues to maintain a high level of throughput. It is not as high as the performance under low load, but it is relatively stable over a wide range of load.
  </p>
  <p>
   The disadvantage to using exponential backoff is that it is going to extend the time to recovery after a failure by about a factor of two.  Suppose that you are a client talking to a web server which crashes.  You wait one second, try again, then two seconds, and so on.  If the web server is unavailable for thirty seconds and then recovers, the client will not notice right away, because it will be in the middle of waiting for thirty seconds before trying again.  Now, extending a thirty second outage to a sixty second outage is unlikely to cause any real heartache.  But, what about extending a thirty minutes to sixty minutes?  That could be irate customer territory.
  </p>
  <p>
   So, you need to balance the needs of your customers against the capacity of your system.  If you you want to handle 1000 clients and have a maximum recovery-after-failure time of one second, then you had better make sure that your system can handle 1000 failed requests per second at a sustained rate.  That may sound easy, but if each failed request involves a database query, a write to a log file, and an email to an administrator, then you will be quickly overwhelmed.
  </p>
  <p>
   Now let's answer the original question:
   <strong>
    How should I pick the backoff parameters?
   </strong>
  </p>
  <p>
   Let's assume that they delay chosen at any point is based on an initial timeout (T), an exponential factor (F), the number of retries so far (N), a random number (R), and a maximum timeout (M). Then:
  </p>
  <p>
   <span style="font-family: courier new;">
    delay = MIN( R * T * F ^ N , M )
   </span>
  </p>
  <ul>
   <li>
    <strong>
     R
    </strong>
    should be a random number in the range [1-2], so that its effect is to spread out the load over time, but always more conservative than plain backoff.
   </li>
   <li>
    <strong>
     T
    </strong>
    is the initial timeout, and should be set at the outer limits of expected response time for the service.  For example, if your service responds in 1ms on average but in 10ms for 99% of requests, then set t=10ms.
   </li>
   <li>
    <strong>
     F
    </strong>
    doesn't matter much, so choose 2 as a nice round number.  (It's the exponential nature that counts.)
   </li>
   <li>
    <strong>
     M
    </strong>
    should be as low as possible to keep your customers happy, but high enough that the system can definitely handle requests from all clients at that sustained rate.
   </li>
  </ul>
