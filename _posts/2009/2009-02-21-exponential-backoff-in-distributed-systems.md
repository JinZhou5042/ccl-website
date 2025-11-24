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

<div class="row justify-content-sm-center">
  <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2009/exponential-backoff-in-distributed-systems/ethernet-5a01742a3d.gif" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<br/>

<p>As you can see, the fixed approach crashes to zero after about 400 clients, whereas the Ethernet approach continues to maintain a high level of throughput. It is not as high as the performance under low load, but it is relatively stable over a wide range of load.</p>

<p>The disadvantage to using exponential backoff is that it is going to extend the time to recovery after a failure by about a factor of two.  Suppose that you are a client talking to a web server which crashes.  You wait one second, try again, then two seconds, and so on.  If the web server is unavailable for thirty seconds and then recovers, the client will not notice right away, because it will be in the middle of waiting for thirty seconds before trying again.  Now, extending a thirty second outage to a sixty second outage is unlikely to cause any real heartache.  But, what about extending a thirty minutes to sixty minutes?  That could be irate customer territory.</p>

<p>So, you need to balance the needs of your customers against the capacity of your system.  If you you want to handle 1000 clients and have a maximum recovery-after-failure time of one second, then you had better make sure that your system can handle 1000 failed requests per second at a sustained rate.  That may sound easy, but if each failed request involves a database query, a write to a log file, and an email to an administrator, then you will be quickly overwhelmed.</p>

<p>Now let's answer the original question: <strong>How should I pick the backoff parameters?</strong></p>

<p>Let's assume that they delay chosen at any point is based on an initial timeout (T), an exponential factor (F), the number of retries so far (N), a random number (R), and a maximum timeout (M). Then:</p>

<p><span style="font-family: courier new;">delay = MIN( R * T * F ^ N , M ) </span></p>

<ul><li><strong>R</strong> should be a random number in the range [1-2], so that its effect is to spread out the load over time, but always more conservative than plain backoff.</li><li><strong>T</strong> is the initial timeout, and should be set at the outer limits of expected response time for the service.  For example, if your service responds in 1ms on average but in 10ms for 99% of requests, then set t=10ms.</li><li><strong>F</strong> doesn't matter much, so choose 2 as a nice round number.  (It's the exponential nature that counts.)</li><li><strong>M</strong> should be as low as possible to keep your customers happy, but high enough that the system can definitely handle requests from all clients at that sustained rate.</li></ul>
