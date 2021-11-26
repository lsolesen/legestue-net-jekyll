---
title: &title "De mest populære blog posts på Fodboldens Legestue i 2020"
permalink: /mest-populaere-blog-posts/
redirect_from:
  - /blog/5-mest-l-ste-artikler-i-2014
  - /5-mest-l-ste-artikler-i-2014/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=5
  teaser: https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=5
  caption: *title
categories:
  - Om
tags:
  - webclips
last_modified_at: 2020-12-31T16:18:40Z
popular_posts:
  - /hvem-opfandt-fodbolden/
  - /aktivitetshjulet/
  - /synet/
  - /boerns-udvikling-og-traening/
  - /l-b-jer-varme/
  - /traeningsplanlaegning/
  - /bliver-man-hjulbenet-af-fodbold/
  - /udstyr-til-jonglering/
  - /global-goal-et-legeredskab/
  - /den-indre-dialog/
---

Vi har kigget lidt på statistikken over hvilke artikler der har været de mest læste i 2020. Her er de 5 mest læste artikler. Nogle af artiklerne er lidt overraskende.

Der er kommet lidt liv i Fodboldens Legestue igen. Vi er get i gang med at skrive nye blog posts og har opdateret gamle blog posts. 

Her samler vi op på de mest populære blog posts i løbet af 2020. Der er nogle ældre blog posts på {{ page.popular_posts.size }} listen, men der er også nogle nye der har sneget sig ind på listen over populære blog posts.

Tak til alle dem, der læser med, hvad vil I så gerne læse mere om i fremtiden?

## De {{ page.popular_posts.size }} mest populære blog posts i løbet af 2020

{% for permalink in page.popular_posts %}

{% assign site_posts = site.posts | where: "permalink", permalink %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

{% endfor %}

## Blog posts skrevet i 2020

{% assign date_from = '2020-01-01' | date: '%s' %}
{% assign date_to = '2020-12-31' | date: '%s' %}

{% assign site_posts = site.posts | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% capture current_year %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% if current_year == '2020' %}
      {% include archive-single.html type="grid" %}
    {% endif %}
  {% endfor %}
{% endif %}

</div>
