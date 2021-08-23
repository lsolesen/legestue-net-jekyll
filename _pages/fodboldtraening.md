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
toc: true
---

{{ page.excerpt }}

## Fodboldøvelser

Jeg har samlet en masse fodboldøvelser og træningsøvelser til fodbold, som du kan bruge til din træning. Få en oversigt over [alle fodboldøvelserne](/fodboldoevelser/).

## Opvarmningsøvelser

Opvarmning er en vigtig del af fodbold. Du kan varme op på flere måder. Vi har skrevet mere om [opvarmning i fodbold](/opvarmning/). Fx kunne du bruge [fodboldrytmer som en del af opvarmningen](/fodboldrytmer/).

## Fodboldlege

Fodboldens Lege indeholder alle mulige fodboldlege for flere, når I vil selvtræne. Her får du et udpluk af alle de lege og spil, jeg synes allerbedst om. Tjek alle vores [fodboldlege](/lege/).

## Fodboldtricks

En slidt læderbold, udtrådte gummisko med små fodboldfødder i og et mål,
hvor malingen er ved at skalle af. Som med et trylleslag forvandles pladsen
til et stort stadion med berømte spillere i små korte bukser og lange korte
ærmer (til at vokse i) med idolets nummer på ryggen og i bevidstheden. Hvad kan du få bolden til at gøre?

Læs mere om [fodboldtricks](/fodboldtricks/).

## Fodboldtaktik

{% assign site_posts = site.posts | where: "categories", "Fodboldtaktik" | sort: "date" %}

<div class="feature__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>

## Fodboldteknik

{% assign site_posts = site.posts | where: "categories", "Fodboldteknik" | sort: "date" %}

<div class="feature__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>

## Indlæg om fodboldtræning

{% assign site_posts = site.posts | where: "categories", "Fodboldtræning" | sort: "date" %}

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

## Viden om

{% assign site_posts = site.posts | where: "categories", "Viden om" | sort: "date" %}

<div class="feature__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>
