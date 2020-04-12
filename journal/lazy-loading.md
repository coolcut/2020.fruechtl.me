---
layout: layouts/post.njk
title: Lazy loading
date: 2020-04-14T14:30:00
media: []
tags:
  - 11ty
  - photon
  - images
---

When it comes to content heavy sites, especially where content is placed way below the fold, lazy loading assets is a good practice to follow. It helps with loading these assets at a time when the user is just before seeing them. As a result, this practice improves the overall performance and user experience of a website.

For some weeks, I was working on a new project. This project is focused on images and needs to load a lot of them in certain circumstances. This is the perfect place to implement something like lazy loading to improve the overall performance.

At first, I was thinking about using some of the popular lazy loading libraries (e.g [lazyload](https://github.com/verlok/lazyload) or this [other lazyload](https://github.com/tuupola/lazyload) one) or building something very quick myself with the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

After [some research](https://css-tricks.com/the-complete-guide-to-lazy-loading-images/), I remembered some discussion about a new native way of handling lazy loading. I cam across [this post](https://addyosmani.com/blog/lazy-loading/) from
[Addy Osmani](https://twitter.com/addyosmani) and started to play with this new loading attribute. You only need to add `loading="lazy"` to your `<img>` as shown in this example:

```html
<img src="image.jpg" loading="lazy" alt="" />
```

It couldn't be more easy. It works also with `<picture>`, `srcset` and also support `<iframe>`.

To be honest, the easy of use way enough for me to use it in this project, regardless of the browser support. I knew, browsers would catch up at some point. But the really beauty about this new loading attribute is the fact that browser support is really decent just know.

Chrome is supporting it since [version 75](https://twitter.com/addyosmani/status/1114777583302799360?s=20) and [Firefox just shipped and update](https://www.mozilla.org/en-US/firefox/75.0/releasenotes/) to also support it now.

One interesting side note: [Firefox seems to be more aggressive](https://caniuse.com/#feat=loading-lazy-attr) in terms of "being lazy". To be honest, I think I like this approach, but we see what works better with time.

All in all, I think this is a great improvement for the web. From this point going forward, I will use this new loading attribute whenever I see fit. If browsers support it the web becomes a little faster, if they don't support it, everything is still work. All for free. No additional JavaScript needed.

This is awesome!
