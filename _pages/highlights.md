---
layout: page
title: Highlights
permalink: /highlights/
---

<div class="row">
  {% assign sorted = site.highlights | sort: 'order' %}
  {% for item in sorted %}
    <div class="col-12 mb-3">
      <a href="{{ item.url | relative_url }}" class="d-block text-decoration-none">
        <h5 class="mb-1">{{ item.title }}</h5>
        {% if item.description %}
          <p class="mb-0 text-muted">{{ item.description }}</p>
        {% endif %}
      </a>
    </div>
  {% endfor %}
</div>
