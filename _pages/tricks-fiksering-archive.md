---
layout: single
title: &title "Fiksering"
permalink: /fodboldtricks/fiksering/
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

En fiksering er at gribe bolden mellem forskellige dele af kroppen. Ligesom ved balancerne er det en god ide at begynde med at tage bolden med hænderne og lægge bolden de pågældende steder for at få fornemmelsen for balance og teknik, inden du begynder at øve dig på at gribe bolden. Efter fikseringerne er der nogle forslag til, hvordan du kan fortsætte jongleringen under ‘Kom videre’.

Brug ikke alt for glat tøj til disse øvelser.

## Køb Fodboldens Tricks som PDF

{% include paypal id="MP55TM3U696BW" cta="Køb Fodboldens Tricks 25 DKK" %}

## Fodboldjonglering og boldløft

{% assign site_posts = site.tricks | where: "tags", "Fiksering" %}

<div class="grid__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>
