---
layout: single
title: Fodboldtræning for børn - Børnetræningsmanualen
permalink: /bornetraeningsmanualen/
excerpt: "Børnetræningsmanualen er en rigtig god ressource, hvis du gerne vil i gang med at træne børn."
author_profile: true
classes: wide
feature_row:
  - image_path: /assets/images/books/bornetraeningsmanual-2006.png
    alt: "Børnetræningsmanualen"
    title: "Børnetræningsmanualen"
    excerpt: "Børnetræningsmanualen er et godt sted at starte, hvis du vil have nogle gode grundlæggende øvelser til din fodboldtræning for børn mellem 6-14 år."
    #url: "#"
    #btn_label: "Læs mere"
    #btn_class: "btn--success"
toc: false
---

{% include feature_row type="left" %}

## Køb Børnetræningsmanualen som PDF

{% include paypal id="5X7F4MRTK7F2C" cta="Køb Børnetræningsmanualen 25 DKK" %}

## Eksempler på kapitler

{% assign site_posts = site.posts | where: "tags", "Børnetræningsmanual 2006" | sort: "date" %}

<div class="grid__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>
