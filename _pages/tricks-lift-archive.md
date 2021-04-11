---
layout: single
title: &title "Boldløft"
permalink: /fodboldtricks/boldloft/
header:
  teaser: /assets/images/books/tricks-2020.png
  overlay_image: /assets/images/fodboldens-tricks.jpg
  caption: *title
comments: false
classes: wide
author_profile: true
feature_row:
  - image_path: /assets/images/books/tricks-2020.png
    alt: "Fodboldens Tricks"
    title: "Fodboldens Tricks"
    excerpt: "Ambitionen i Fodboldens Tricks har været at samle så mange tricks, driblinger, finter, finurlige spark som overhovedet muligt. Der er masser at gå i gang med."
    url: "/fodboldtricks/"
    btn_label: "Læs alle tricks"
    btn_class: "btn--success"
---

Et boldløft er en måde at få bolden fra jorden og op i luften på, uden at du
behøver at samle den op med hænderne.

## Køb Fodboldens Tricks som PDF

{% include paypal id="MP55TM3U696BW" cta="Køb Fodboldens Tricks 25 DKK" %}

## Fodboldjonglering og boldløft

{% assign site_posts = site.tricks | where: "tags", "Boldløft" %}

<div class="grid__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>
