---
layout: single
title: &title Fodboldtræner
permalink: /fodboldtraener/
excerpt: "Som fodboldtræner skal du kunne mange forskellige ting. Lad dig inspirere af disse sider."
author_profile: true
header:
  teaser: https://images.unsplash.com/photo-1585757318177-0570a997dc3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
  overlay_image: https://images.unsplash.com/photo-1585757318177-0570a997dc3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80
  caption: *title
toc: true
---

{{ page.excerpt }}

## Indlæg om at være fodboldtræner

{% assign site_posts = site.posts | where: "categories", "Fodboldtræner" | sort: "date" %}

<div class="feature__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>

## Talentudvikling

{% assign site_posts = site.posts | where: "categories", "Talentudvikling" | sort: "date" %}

<div class="feature__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>

## Veje til Udvikling

{% assign site_posts = site.posts | where: "tags", "Veje til udvikling" | sort: "date" %}

<div class="feature__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>

## Viden om

{% assign site_posts = site.posts | where: "categories", "Viden om" | sort: "date" %}

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

## Fodboldtaktik

{% assign site_posts = site.posts | where: "categories", "Fodboldtaktik" | sort: "date" %}

<div class="feature__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>

## Fodboldøvelser

Jeg har samlet en masse fodboldøvelser og træningsøvelser til fodbold, som du kan bruge til din træning. Få en oversigt over [alle fodboldøvelserne](/fodboldoevelser/).

## Opvarmningøvelser

Opvarmning er en vigtig del af fodbold. Du kan varme op på flere måder. Vi har skrevet mere om [opvarmning i fodbold](/opvarmning/). Fx kunne du bruge [fodboldrytmer som en del af opvarmningen](/fodboldrytmer/).
