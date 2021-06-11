---
layout: single
title: &title Fodboldøvelser og fodboldtræning for børn og unge
permalink: /fodboldoevelser/
excerpt: "Jeg har samlet en masse rigtig gode fodboldøvelser og træningsøvelser, som du kan bruge til fodboldtræning med børn og unge. Øvelserne passer til U6, U7, U8, U9, U10, U11, U12, U13 og U14, så du kan altså både finde øvelser til de yngste og de ældste børn."
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

## Træningsøvelser for 11-12 årige (U11, U12, U13)

Disse øvelser er særligt udvalgt til at passe til de 11-12 årige. Fodboldøvelserne passer rigtig godt til aldersgruppen, men de kan også sagtens bruges til de lidt yngre U10-spillere og de ældre U14, U15 og U16, hvis du tilretter øvelserne lidt, så de passer til aldersgruppen.

[Find fodboldøvelser for U11, U12 og U13]({% link _posts/2021-06-12-fodboldovelser-10-12.md %})

## Fodboldøvelser for 13-15 årige (U14, U15 og U16)

Disse øvelser er særligt udvalgt til at passe til de 13-14 årige U14, U15 og U16-spillere. Fodboldøvelserne passer rigtig godt til aldersgruppen, men de kan også sagtens bruges til de lidt yngre U12 og U13-spillere, hvis du tilretter øvelserne lidt, så de passer til aldersgruppen.

[Find fodboldøvelser for U14, U15 og U16]({% link _posts/2021-06-12-fodboldovelser-13-15.md %})

## Fodboldøvelser skudtræning og afslutningstræning

Jeg har udvalgt en række øvelser, som du kan bruge til at træne skudtræning. Det er vigtigt at træne afslutninger, så dit hold kan komme til at score nogle mål. Det er også utrolig sjovt at lave afslutningstræning og juble efterfølgende, når netmaskerne blafrer.

[Find øvelser til skudtræning og afslutningstræning]({% link _posts/2021-06-15-skudtraening-fodbold.md %})

## Træningsøvelser i fodbold med forsvar og forsvarsspil

Jeg har udvalgt en række fodboldøvelser, som du kan bruge til at træne forsvar og forsvarsspil. Det er vigtigt rigtig vigtigt at træne både forsvar og bolderobring, så dit hold kan få fat i bolden igen. Det er i forsvarsspillet, man virkelig kan arbejde med, at spillerne arbejder for hinanden.

[Find øvelser til forsvar og forsvarsspil]({% link _posts/2021-06-15-forsvarsovelser.md %})


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

Jeg har samlet en masse fodboldøvelser og træningsøvelser til fodbold, som du kan bruge  til de unge årgange. Så uanset om du træner U8, U9, U10, U11, U12, U13 eller U14 kan du finde inspiration i her på siden.

Jeg har været med til at skrive Børnetræningsmanualen, hvor du kan lære mere om at træne børn i alderen 6-14 år. Der er masser af rigtig god information i hæftet. Du kan læse mere om [Børnetræningsmanualen her]({% link _pages/bornetraeningsmanualen.md %}).

{% include feature_row type="left" %}
