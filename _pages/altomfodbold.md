---
layout: single
title: &title Alt om fodbold
permalink: /alt-om-fodbold/
excerpt: "Her kan du læse forskellige indlæg om fodbold. Du kan læse om fodboldhistorie, fodboldudstyr og fodboldskader."
author_profile: true
header:
  teaser: https://images.unsplash.com/photo-1585757318177-0570a997dc3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=5
  overlay_image: https://images.unsplash.com/photo-1585757318177-0570a997dc3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=5
  caption: *title
classes: wide
toc: false
---

{{ page.excerpt }}

## Fodboldhistorie

{% assign site_posts = site.posts | where: "categories", "Fodboldhistorie" | sort: "date" %}

<div class="feature__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>

## Fodboldudstyr

{% assign site_posts = site.posts | where: "tags", "udstyr" | sort: "date" %}

<div class="feature__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>

## Fodboldskader

{% assign site_posts = site.posts | where: "tags", "fodboldskader" | sort: "date" %}

<div class="feature__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>

## Anmeldelser

{% assign site_posts = site.posts | where: "categories", "Anmeldelse" | sort: "date" %}

<div class="feature__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>

## Fodboldregler

{% assign site_posts = site.posts | where: "categories", "Fodboldregler" | sort: "date" %}

<div class="feature__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>
