---
layout: single
title: &title "Boldløft"
excerpt: "I en balance ligger bolden på en kropsdel. Balancerne giver en god fornemmelse for, hvad det vil sige at tæmme en bold. Balancerne kræver også, at du hele tiden justerer din kropsstilling, så bolden ikke ryger ned, og de kan derfor være et godt supplement til balancetræning i opvarmningen."
permalink: /fodboldtricks/balance/
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

I en balance ligger bolden på en kropsdel. Balancerne giver en god fornemmelse for, hvad det vil sige at tæmme en bold. Balancerne kræver også, at du hele tiden justerer din kropsstilling, så bolden ikke ryger ned, og de kan derfor være et godt supplement til balancetræning i opvarmningen.

Det er en god ide at begynde med at lægge bolden der, hvor du vil balancere med den, for at finde ud af, hvordan selve balancen er. Senere kan du forsøge at gribe bolden, mens du jonglerer. Efter balancerne er der nogle forslag til, hvordan du kan fortsætte jongleringen under ‘Kom videre’.

## Køb Fodboldens Tricks som PDF

{% include paypal id="MP55TM3U696BW" cta="Køb Fodboldens Tricks 25 DKK" %}

## Tricks med balance

{% assign site_posts = site.tricks | where: "tags", "Balance" %}

<div class="grid__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>
