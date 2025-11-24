---
layout: "post"
title: "Makeflow Visualization with Cytoscape"
date: 2015-03-24T20:28:00+00:00
description: "We have created a new Makeflow visualization module which exports a workflow into an xgmml file compatible with Cytoscape.  Cytoscape is a powerful network g…"
toc: false
related_posts: true
tags: [archived-blog]
---

<html><body><div class="MsoNormal" style="text-indent: .5in;">
We have created a new Makeflow visualization module which exports a workflow into an <i>xgmml</i> file compatible with Cytoscape.  Cytoscape is a powerful network graphing
application with support for custom styles, layouts, annotations, and more. While
this program is known more for visualizing molecular networks in biology, it
can be used for any purpose, and we believe it is a powerful tool for
visualizing makeflow tasks.  Our
visualization module was designed for and tested on Cytoscape 3.2. The following picture is a Cytoscape visualization of the example makeflow script provided in the User’s Manual (<a href="http://ccl.cse.nd.edu/software/manuals/makeflow.html">http://ccl.cse.nd.edu/software/manuals/makeflow.html</a>):</div>
<span id="goog_785988799"></span><br/>
<div class="MsoNormal" style="text-indent: .5in;">

<br/></div>
<span id="goog_785988800"></span><br/>

<div class="MsoNormal" style="text-indent: .5in;">
To generate a Cytoscape graph from
your makeflow script, simply run:<br/>
<blockquote class="tr_bq">
<br/>
<span style="background-color: white;"><span style="color: black;"><span>makeflow_viz –D cytoscape workflow.mf &gt; workflow.xgmml</span></span></span></blockquote>
 workflow.xgmml can then be opened in Cytoscape through File -&gt; Import <span style="font-family: Wingdings;">-&gt;</span> Network -&gt; File.  We have created a clean style named specifically
for visualizing makeflow tasks named <span>style.xml</span>, which is generated in the present
working directory when you run <span>makeflow_viz</span>. To apply the style in Cytoscape,
select File -&gt; Import -&gt; Style, and select the style.xml file.  Next,
right-click the imported network and select “Apply Style…”.  Select “makeflow” from the dropdown menu and
our style will be applied.  This will add
the proper colors, edges, arrows, and shapes for processes and files. </div>
<div class="MsoNormal" style="text-indent: .5in;">
<br/></div>
<div class="MsoNormal" style="text-indent: .5in;">
Cytoscape also has a built in
layout function which can be used to automatically rearrange nodes according to
their hierarchy.   To access this, select
Layout <span style="font-family: Wingdings;">à</span>
Settings, and a new window will pop up.  Simply
select “Hierarchical Layout” from the dropdown menu, change the settings for
that layout to your liking, and select “Execute Layout.”  There is a caveat with this function.  With larger makeflow tasks, this auto layout
function can take long to complete.   This is due to Cytoscape being designed for all
types of graphs, and they do not appear to implement algorithms specifically
for dags to take advantage of faster time complexities.  We have tested the auto-layout function with
the following test cases:<br/>
<br/>
<table border="1" cellpadding="0" cellspacing="0" class="MsoNormalTable" style="border-collapse: collapse; border: none; text-align: left; width: 474px;">
<tbody>
<tr style="height: 15.0pt;">
<td nowrap="" style="height: 15.0pt; margin: 0pt 0pt 0pt 0pt; width: 94.3pt;" valign="bottom" width="90"><div class="MsoNormal" style="margin-left: 0pt;">
<div style="text-align: center;">
Number of nodes</div>
</div>
</td>
<td nowrap="" style="border-left: none; height: 15.0pt; width: 93.4pt;" valign="bottom" width="125"><div class="MsoNormal">
<div style="text-align: center;">
Number of edges</div>
</div>
</td>
<td nowrap="" style="border-left: none; height: 15.0pt; width: 167.55pt;" valign="bottom" width="223"><div class="MsoNormal">
<div style="text-align: center;">
Time to layout nodes</div>
</div>
</td>
</tr>
<tr style="height: 15.0pt;">
<td nowrap="" style="border-top: none; height: 15.0pt; padding: 0in 5.4pt 0in 5.4pt; width: 94.3pt;" valign="bottom" width="90"><div class="MsoNormal">
114</div>
</td>
<td nowrap="" style="border-left: none; border-top: none; height: 15.0pt; padding: 0in 5.4pt 0in 5.4pt; width: 93.4pt;" valign="bottom" width="125"><div class="MsoNormal">
258</div>
</td>
<td nowrap="" style="border-left: none; border-top: none; height: 15.0pt; padding: 0in 5.4pt 0in 5.4pt; width: 167.55pt;" valign="bottom" width="223"><div class="MsoNormal">
20-30 seconds</div>
</td>
</tr>
<tr style="height: 15.0pt;">
<td nowrap="" style="border-top: none; height: 15.0pt; padding: 0in 5.4pt 0in 5.4pt; width: 94.3pt;" valign="bottom" width="90"><div class="MsoNormal">
2213</div>
</td>
<td nowrap="" style="border-left: none; border-top: none; height: 15.0pt; padding: 0in 5.4pt 0in 5.4pt; width: 93.4pt;" valign="bottom" width="125"><div class="MsoNormal">
11526</div>
</td>
<td nowrap="" style="border-left: none; border-top: none; height: 15.0pt; padding: 0in 5.4pt 0in 5.4pt; width: 167.55pt;" valign="bottom" width="223"><div class="MsoNormal">
2.5 hours</div>
</td>
</tr>
<tr style="height: 15.0pt;">
<td nowrap="" style="border-top: none; height: 15.0pt; padding: 0in 5.4pt 0in 5.4pt; width: 94.3pt;" valign="bottom" width="126"><div class="MsoNormal">
15245</div>
</td>
<td nowrap="" style="border-left: none; border-top: none; height: 15.0pt; padding: 0in 5.4pt 0in 5.4pt; width: 93.4pt;" valign="bottom" width="125"><div class="MsoNormal">
30478</div>
</td>
<td nowrap="" style="border-left: none; border-top: none; height: 15.0pt; padding: 0in 5.4pt 0in 5.4pt; width: 167.55pt;" valign="bottom" width="223"><div class="MsoNormal">
23 hours</div>
</td></tr>
</tbody></table>
</div>
<div class="MsoNormal" style="text-indent: .5in;">
<br/>

After the layout completes, the
graph should be visible in a clean fashion, and you can customize the display
further to your liking with the various options available in Cytoscape.  For more information about Cytoscape, visit <a href="http://cytoscape.org/">http://cytoscape.org</a></div>

<div class="MsoNormal" style="text-indent: .5in;">
</div>
<div class="MsoNormal" style="text-indent: .5in;">
<br/></div>
<div class="MsoNormal" style="text-indent: .5in;">
<br/>
<!--[endif]--></div></body></html>
