---
layout: layouts/post.njk
title: No tracking
date: 2020-09-02T14:00:00
tags:
  - redesign
  - 11ty
  - analytics
---

I decided to remove the simple analytics, I used in the past, from all of my sites. For some months, I’ve used [Fathom](https://usefathom.com) as a privacy-focused alternative to the de-facto standard tracking solution we probably all know, Google Analytics.

Fathom is great — it’s simple, light-weight, privacy-focused and is built by some independent humans. It’s also fun to see that posts like [11ty with Sass support](/journal/11ty-with-sass-support/) or [Simplified data requests with 11ty](/journal/simplified-data-requests-with-11ty/) were by far the most visited posts in the past months. Most of these clicks came probably from Google and other search engines, which also means that maybe some people were looking for solutions in these areas and maybe found them. Awesome!

Nevertheless, I thought about the need of tracking on my personal sites for the past weeks and to be honest, I really don’t see a strong argument why I need it. Additionally, with `$14/month` Fathom is also not cheap, when the main benefit for me is a minute of “that’s interesting” or “that’s nice” one time each month.

Besides that, the past weeks there was also a discussion about the differences between client-side tracking (aka. Fathom, Google Analytics…) or server-side tracking (aka. Netlify Analytics, Server logs…). In his post [Comparing Data in Google and Netlify Analytics](https://blog.jim-nielsen.com/2020/google-vs-netlify-analytics/), Jim did a great job showing the different results he gathered.

> In the end, I put more merit behind Netlify’s analytics than I do Google’s because Netlify’s analytics are server-side which removes a lot of the “yes, but” caveats you have to remember when reading GA’s data. For example, because Google’s tracking is client-side and relies on JavaScript, it can’t capture any data around people who either don’t have JavaScript enabled or it failed to execute (for who knows what reason).

All in all, I removed and deleted my Fathom account. You won’t find any analytics or cookies on my site. Fathom is still a cool service, which I probably would recommend if you need something like this.

For now, I don’t.
