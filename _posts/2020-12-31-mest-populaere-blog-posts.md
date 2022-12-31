---
title: &title "De mest populære blog posts på Fodboldens Legestue i 2022"
permalink: /mest-populaere-blog-posts/
redirect_from:
  - /blog/5-mest-l-ste-artikler-i-2014
  - /5-mest-l-ste-artikler-i-2014/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&h=600&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
categories:
  - Om
tags:
  - webclips
last_modified_at: 2022-12-31T16:18:40Z
popular_posts_2022:
  - /danske-fodboldsange-og-kampsange/
  - /opvarmning/
  - /lege/
  - /fodboldoevelser/
  - /fodboldovelser-8-10-aar/
  - /opvarmningslege-fodbold/
  - /fodboldovelser-12-15-aar/
  - /fodboldovelser-10-12-aar/
  - /hvem-opfandt-fodbolden/
  - /verdens-storste-fodboldstadion/
popular_posts_2021:
  - /hvem-opfandt-fodbolden/
  - /opvarmning/
  - /lege/
  - /eksplosiv-styrke/
  - /fodboldoevelser/
  - /verdens-storste-fodboldstadion/
  - /fodboldovelser-12-15-aar/
  - /fodboldovelser-8-10-aar/
  - /aktivitetshjulet/
  - /opvarmningslege-fodbold/
popular_posts_2020:
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

Vi har kigget lidt på statistikken over hvilke artikler der har været de mest læste i år. Nogle af artiklerne er lidt overraskende.

Her samler vi op på de mest populære blog posts i løbet af i år. Der er nogle ældre blog posts på {{ page.popular_posts_2022.size }} listen, men der er også nogle nye der har sneget sig ind på listen over populære blog posts.

Tak til alle dem, der læser med, hvad vil I så gerne læse mere om i fremtiden?

## De {{ page.popular_posts_2022.size }} mest populære blog posts i løbet af 2022

{% for permalink in page.popular_posts_2022 %}

{% assign site_posts = site.posts | where: "permalink", permalink %}
{% assign site_pages = site.pages | where: "permalink", permalink %}
{% assign site_posts = site_posts | concat: site_pages %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

{% endfor %}

## De {{ page.popular_posts_2021.size }} mest populære blog posts i løbet af 2021

{% for permalink in page.popular_posts_2021 %}

{% assign site_posts = site.posts | where: "permalink", permalink %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

{% endfor %}

## De {{ page.popular_posts_2020.size }} mest populære blog posts i løbet af 2020

{% for permalink in page.popular_posts_2020 %}

{% assign site_posts = site.posts | where: "permalink", permalink %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

{% endfor %}
