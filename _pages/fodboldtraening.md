---
layout: single
title: &title Fodboldtræning
permalink: /fodboldtraening/
excerpt: "Her får du gode råd til din fodboldtræning. Vi har samlet gode råd til fodboldtræneren, og du finder alt fra fodboldøvelser til gode råd om, hvordan man er træner."
author_profile: true
header:
  teaser: https://images.unsplash.com/photo-1606471029645-d081e2db4008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80
  overlay_image: https://images.unsplash.com/photo-1606471029645-d081e2db4008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1900&q=80
  caption: *title
classes: wide
toc: false
---

{{ page.excerpt }}

## Indlæg om fodboldtræning

{% assign site_posts = site.posts | where: "categories", "Fodboldtræning" | sort: "date" %}

<div class="feature__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>

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

## Fodboldhistorie

{% assign site_posts = site.posts | where: "categories", "Fodboldhistorie" | sort: "date" %}

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
