---
layout: posts
permalink: /blog/
excerpt: "Fodboldens Legestues Blog med alle de læsevenlige blogindlæg."
redirect_from:
  - /artikler/
title: Fodboldens Legestues fodboldblog
seo_title: Fodboldblog - Blog om fodbold fra Fodboldens Legestue
description: Læs de seneste opdateringer på vores fodboldblog. En blog om fodbold, fodboldøvelser, fodboldtræning og det at være fodboldtræner.
classes: wide
author_profile: true
---

{{ page.description }}

<h2>Nyeste blog posts på Fodboldens Legestue</h2>

<div class="feature__wrapper">

{% assign site_posts = site.posts | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
