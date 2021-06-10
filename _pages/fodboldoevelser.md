---
layout: single
title: &title Fodboldøvelser og fodboldtræning for børn og unge
permalink: /fodboldoevelser/
excerpt: "Jeg har samlet en masse rigtig gode fodboldøvelser, som du kan bruge til fodboldtræning med børn og unge. Øvelserne passer til U6, U7, U8, U9, U10, U11, U12, U13 og U14, så du kan altså både finde øvelser til de yngste og de ældste børn."
author_profile: true
header:
  teaser: https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
  overlay_image: https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80
  caption: *title
classes: wide
feature_row:
  - image_path: /assets/images/books/bornetraeningsmanual-2006.png
    alt: "Børnetræningsmanualen"
    title: "Fodbold Børnetræningsmanualen"
    excerpt: "Børnetræningsmanualen er et godt sted at starte, hvis du vil have nogle gode grundlæggende fodboldøvelser til din fodboldtræning for børn mellem 6-14 år."
    #url: "#"
    #btn_label: "Læs mere"
    #btn_class: "btn--success"
toc: false
---

{{ page.excerpt }}

## Fodboldøvelser for 8-10 årige (U8, U9, U10)

Disse øvelser er særligt udvalgt til at passe til de 8-10 årige. Fodboldøvelserne passer rigtig godt til aldersgruppen, men de kan også sagtens bruges til U6, U7, hvis du tilretter øvelserne lidt.

[Find fodboldøvelser for U8, U9 og U10]({% link _posts/2021-06-12-fodboldovelser-8-10.md %})

## Fodboldøvelser for 11-12 årige (U11, U12, U13)

Disse øvelser er særligt udvalgt til at passe til de 11-12 årige. Fodboldøvelserne passer rigtig godt til aldersgruppen, men de kan også sagtens bruges til de lidt yngre U10-spillere og de ældre U14, U15 og U16, hvis du tilretter øvelserne lidt, så de passer til aldersgruppen.

[Find fodboldøvelser for U11, U12 og U13]({% link _posts/2021-06-12-fodboldovelser-10-12.md %})

## Fodboldøvelser for 13-15 årige (U14, U15 og U16)

Disse øvelser er særligt udvalgt til at passe til de 13-14 årige U14, U15 og U16-spillere. Fodboldøvelserne passer rigtig godt til aldersgruppen, men de kan også sagtens bruges til de lidt yngre U12 og U13-spillere, hvis du tilretter øvelserne lidt, så de passer til aldersgruppen.

[Find fodboldøvelser for U14, U15 og U16]({% link _posts/2021-06-12-fodboldovelser-13-15.md %})

## Artikler med fodboldøvelser og fodboldtræning til børn

{% assign site_posts = site.posts | where: "categories", "Fodboldøvelser" | sort: "date" %}

<div class="feature__wrapper">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}
</div>

## Fodboldøvelser til U5, U6, U7, U8, U9, U10, U11, U12, U13, U14, U15 og U16

Børnetræningsmanualen til fodbold er fyldt med fodboldøvelser til de unge årgange. Så uanset om du træner U8, U9, U10, U11, U12, U13 eller U14 kan du finde inspiration i bogen.

Jeg har har skrevet Børnetræningsmanualen, hvor du kan lære mere om at træne børn i alderen 6-14 år. Der er masser af rigtig god information i hæftet, som du kan købe som en PDF. Du kan læse mere om [Børnetræningsmanualen her]({% link _pages/bornetraeningsmanualen.md %}).

{% include feature_row type="left" %}
