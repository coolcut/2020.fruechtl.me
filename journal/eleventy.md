---
layout: layouts/post.njk
title: Eleventy
date: 2019-11-18T21:00:00
media: []
tags:
  - redesign
  - 11ty
---

Last week I attended [BeyondTellerand Berlin](https://beyondtellerrand.com/events/berlin-2019/speakers), which was, as always, a fantastic conference. This year, the opening talk was given by Jeremy Keith, who talked about [The Layers Of The Web](https://vimeo.com/373128517). This fantastic talk, which you should watch, got me thinking about my tech choice for this new personal site.

Is it essential to use such a massive tool like [Gridsome](https://gridsome.org) to power this site and future playground? I love [Vue](https://vuejs.org/), and it can be a fantastic tool for building web-based applications, but do I really need this kind of power, and do I want to make the people suffer who are visiting the website because of unnecessary bloat they need to download to get the Gridsome experience?

I don't think so. I want to have a lightweight, fast, and very dull foundation for this website. Because of that, I basically removed everything from the Gridsome side and replaced it with some [11ty](https://www.11ty.io) love. Everything is entirely static and crazy fast now. Just look at these two screenshots I took to compare Gridsome and 11ty from the Firefox Network Tab. 🔥 🚀

![](https://res.cloudinary.com/dy3alb7gv/image/upload/v1574111577/Gridsome_v1bfec.jpg)

![](https://res.cloudinary.com/dy3alb7gv/image/upload/v1574111578/11ty_bh5j1g.jpg)
