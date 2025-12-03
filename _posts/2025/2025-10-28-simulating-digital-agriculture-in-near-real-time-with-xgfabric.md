---
layout: "post"
title: "Simulating Digital Agriculture in Near Real-Time with xGFabric"
date: 2025-10-28T17:56:00+00:00
author: "Jin Zhou"
image: "/assets/blog/2025/simulating-digital-agriculture-in-near-real-time-with-xgfabric/AVvXsEj97WuTLgOrgpPmpjxsaU7Cgv0_4nYJTWJ2jO1wgWAZYT9q4v0BtzyQ-2cbe3d174b.png"
description: "Advanced scientific applications in digital agriculture require coupling distributed sensor networks with high-performance computing facilities, but this int…"
toc: false
related_posts: true
featured: true
tags: [xgfabric, digital-agriculture, 5g, hpc, cspot, laminar]
---

<p>
   Advanced scientific applications in digital agriculture require coupling distributed sensor networks with high-performance computing facilities, but this integration faces significant challenges. Sensor networks provide low-performance, unreliable data access from remote locations, while HPC facilities offer enormous computing power through high-latency batch processing systems. For example, the Citrus Under Protective Screening (CUPS) project monitors environmental conditions in agricultural facilities to detect protective screening damage and requires real-time computational fluid dynamics simulations to guide interventions. Traditional networking approaches struggle to bridge these contrasting computing domains with the low latency and high reliability needed for near real-time decision making.
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/simulating-digital-agriculture-in-near-real-time-with-xgfabric/AVvXsEj97WuTLgOrgpPmpjxsaU7Cgv0_4nYJTWJ2jO1wgWAZYT9q4v0BtzyQ-2cbe3d174b.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <p>
   To address this challenge, we developed xGFabric, an end-to-end system that couples sensor networks with HPC facilities through private 5G wireless networks. The key innovation is using 5G network slicing to provide reliable, high-throughput connectivity between remote sensors and centralized computing resources. xGFabric integrates the CSPOT distributed runtime system for delay-tolerant networking and the Laminar dataflow programming environment to manage the entire pipeline from data collection to simulation execution. The system masks network interruptions, device failures, and batch-queuing delays by storing all program state in persistent logs, allowing computations to pause and resume seamlessly when resources become available.
  </p>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/simulating-digital-agriculture-in-near-real-time-with-xgfabric/AVvXsEgoZAPluZuM4qqi3Sc2SvGuVhNKkdgC7rlFu_OLIbVva76sfXICyCg9-176125995c.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <p>
   To demonstrate the system's effectiveness, we deployed a working prototype connecting sensors at the University of Nebraska-Lincoln via private 5G networks to HPC facilities at multiple institutions. Their evaluation showed that the private 5G network achieved uplink throughput up to 65.97 Mbps and scaled effectively across multiple devices. Message latency through the CSPOT system averaged just 101 milliseconds over 5G, meeting the application's real-time requirements. The OpenFOAM CFD simulation completed in approximately 7 minutes using 64 cores, enabling the system to generate updated environmental predictions within the 30-minute decision window required by agricultural operators.
  </p>
  <div class="separator" style="clear: both; text-align: center;">
   <a href="https://blogger.googleusercontent.com/img/a/AVvXsEieduSv73JEbIbQhNJoXE8w0lsyIuHkJ7C3I-jxHsO2kD1byciHI3xkgdGT6F8UovCwBEgPZWMi_c_POa3gU5bRXTNWENHeI8usBuR4oim_vHElKLGnU66QjyUcpLu_irzmMvcyugkQk3_t7OofLK2z73aV4DvshSZWoc_357__9gGK_cOT0hyeNDHCFeZw" style="margin-left: 1em; margin-right: 1em;">
   </a>
   <div class="separator" style="clear: both; text-align: center;">
    <a href="https://blogger.googleusercontent.com/img/a/AVvXsEieduSv73JEbIbQhNJoXE8w0lsyIuHkJ7C3I-jxHsO2kD1byciHI3xkgdGT6F8UovCwBEgPZWMi_c_POa3gU5bRXTNWENHeI8usBuR4oim_vHElKLGnU66QjyUcpLu_irzmMvcyugkQk3_t7OofLK2z73aV4DvshSZWoc_357__9gGK_cOT0hyeNDHCFeZw" style="margin-left: 1em; margin-right: 1em;">
    </a>
    <div class="row justify-content-sm-center">
     <div class="col-sm-12">
      {% include figure.liquid path="/assets/blog/2025/simulating-digital-agriculture-in-near-real-time-with-xgfabric/AVvXsEhA-LVYhiJkwzhPkxQZN5Y85wyqU9opI4Z8jT0DTuOOm9YHV7XNrBz9-8395916b17.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
     </div>
    </div>
   </div>
   <div class="row justify-content-sm-center">
    <div class="col-sm-12">
     {% include figure.liquid path="/assets/blog/2025/simulating-digital-agriculture-in-near-real-time-with-xgfabric/AVvXsEieduSv73JEbIbQhNJoXE8w0lsyIuHkJ7C3I-jxHsO2kD1byciHI3xk-834427a401.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
   </div>
  </div>
  <div class="row justify-content-sm-center">
   <div class="col-sm-12">
    {% include figure.liquid path="/assets/blog/2025/simulating-digital-agriculture-in-near-real-time-with-xgfabric/AVvXsEgE8kqn-iB36PnpcviWgIGIxxlaZGr0XW_-omE0A8DxOG-E3Sa0Ft3g-ec3f2cbf5c.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
  </div>
  <br/>
  <p>
   Overall, xGFabric demonstrated that private 5G networks can successfully bridge the gap between edge sensor deployments and HPC resources for time-critical scientific applications. By providing a unified software stack across all device scales and leveraging 5G's low latency and reliability, the system enables "in-the-loop" high-performance computing for real-time decision support in digital agriculture and other domains requiring coupled sensor-simulation workflows.
  </p>
  <p>
   This work will be presented by Liubov Kurafeeva at the XLOOP workshop at SC '25 in St. Louis, Missouri
  </p>
  <p>
   For more information you can visit our website at: https://sites.google.com/view/xgfabric
  </p>
