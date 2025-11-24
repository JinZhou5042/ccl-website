---
layout: "post"
title: "Grid Heating: Putting Data Center Heat to Productive Use"
date: 2009-06-02T15:33:00+00:00
author: "Douglas Thain"
description: "Dr. Paul Brenner, a research scientist in the Computing Research Center at the University Notre Dame, has been advocating a novel idea called grid heating . …"
toc: false
related_posts: true
tags: [grid heating, condor, grid computing]
---
Dr. Paul Brenner, a research scientist in the Computing Research Center at the University Notre Dame, has been advocating a novel idea called

<strong>grid heating</strong>

. He recently won a "Green IT Award" from the Uptime Institute for his work. Here is a short introduction  to the idea:

<br/>

<br/>

Around the world, large data centers consume enormous amounts of power. In addition to the energy needed to spin disks and rearrange electrons, an approximately equal amount of power is needed to run the air conditioners and fans to remove that heat from the data center. In this sense, data centers are doubly inefficient, because they are using power to both heat and cool the same space. If we could put that heat to productive use, then we could save energy on cooling the data center, as well as save energy that would have otherwise been used to generate heat.

<br/>

<br/>

<br/>

Last year. Dr. Brenner constructed a prototype of this idea at the city greenhouse in South Bend, which was struggling with enormous heating bills during the winter. He constructed a small cluster, and placed it in the Arizona Desert display in the greenhouse, where the plants need the highest temperature. Notre Dame paid the electricity bill, the greenhouse got the benefit of the heat, and the computers simply joined our campus Condor pool. Everybody wins, and nobody has to pay an air conditioning bill.

<br/>

<br/>

<br/>

<img alt="" border="0" id="BLOGGER_PHOTO_ID_5342753509542151410" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwmj9AIw02B4M-mpEswxocBlEg457nmwAmDj_5NROK3ghsbmTydT33pBeiLHsNEWVNlKnDGF3hf4bbTxZAwW5UzTHv4O9G8Of-Ryt7QO3HYRILN0LxCo9Tw3N1WybqkUSUES35_5wZmn0/s320/Picture+004.jpg" style="TEXT-ALIGN: center; MARGIN: 0px auto 10px; WIDTH: 240px; DISPLAY: block; HEIGHT: 320px; CURSOR: hand;"/>

<br/>

However, the first cluster was just a prototype, and couldn't generate nearly enough heat for the entire greenhouse. So, this year, Dr. Brenner is building a small data center in a modular shipping container. next to the greenhouse. With a new electricity and network hookup, the data center will run several hundred CPUs, and function as a secondary furnace for the facility, hopefully reducing the heating bill by half over the winter.

<br/>

<br/>

<img alt="" border="0" id="BLOGGER_PHOTO_ID_5342753422145299490" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCkOgeKnlh2vwzQhuKbuhdTuc8UGeoWI9rtxrAZkt92sfYGW2tObdTtu6RSmoz45_tmdymdTrQp_JV60-0MnWBWv08wxNJ2Q_i42DUZVw0ruaiz4ox85YkS1GeZdLNNr8rRZlAQ1Y_xBs/s320/Picture+003.jpg" style="TEXT-ALIGN: center; MARGIN: 0px auto 10px; WIDTH: 320px; DISPLAY: block; HEIGHT: 240px; CURSOR: hand;"/>

<br/>

<br/>

<p>The new facility will significantly add to our campus grid, and will also give us some interesting scheduling problems to work on. The greenhouse needs heat the most during the winter, and to a lesser extent during the summer, so the computing capacity of the system will change with the seasons. Further, the price of electricity varies significantly during the day, so jobs run in the dead of night may be cheaper than those run during the day. If we can connect our "campus grid" to the "smart electric grid", we can make the system automatically schedule around these constraints.</p>

<p>Here are some recent articles about Grid Heating:</p>

<ul><li><a href="http://chronicle.com/blogs/architecture/2094/lowering-heating-and-cooling-bills-with-flower-er-cactus-power">Lowering Heating and Cooling Bills with Flower... er. Cactus Power</a></li><li><a href="http://www.humanflowerproject.com/index.php/weblog/comments/warm_the_cacti_cool_the_computers/">Warm the Cacti, Cool the Computers</a></li><li><a href="http://newsinfo.nd.edu/news/11754-nd-receives-uptime-institutes-green-enterprise-it-award">ND Receives Uptime Institute's Green Enterprise IT Award</a></li><li><a href="http://www.cse.nd.edu/~dthain/papers/gheat-uptime09.pdf">Grid Heating Clusters: Transforming Cooling Constraints Into Thermal Benefits</a></li></ul>
