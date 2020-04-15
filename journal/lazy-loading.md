---
layout: layouts/post.njk
title: Lazy loading
date: 2020-04-15T16:30:00
media: []
tags:
  - 11ty
  - photon
  - images
---

When it comes to content heavy sites, especially when content is placed below the fold, lazy loading of specific assets is a good practice to follow. It helps with only loading these assets at a time when the user needs them. As a result, it improves the overall performance and user experience of a website.

For some weeks, I have been working on a new project. This project is focused on displaying images and it needs to load a lot of them in certain circumstances. This is the perfect place to implement something like lazy loading to improve the overall performance.

At first, I thought about using some popular lazy loading libraries (e.g. [lazyload](https://github.com/verlok/lazyload) or this [other lazyload](https://github.com/tuupola/lazyload) one) or building something myself with the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

After [some research](https://css-tricks.com/the-complete-guide-to-lazy-loading-images/), I remembered a discussion about a new native way of handling lazy loading. I came across [this post](https://addyosmani.com/blog/lazy-loading/) from [Addy Osmani](https://twitter.com/addyosmani) and started to play with the new loading attribute. You only need to add `loading="lazy"` to your `<img>` as shown in this example:

```html
<img src="image.jpg" loading="lazy" alt="describe your image here" />
```

This couldn't be easier! It works with `<picture>`, `srcset` and also supports `<iframe>`.

To be honest, the simplicity was enough for me to use it in this project, regardless of the browser support. I knew, browsers would catch up at some point. For me, the beauty about this new loading attribute is the fact that browser support is really decent just now — this was a positive surprise.

Chrome is supporting it since [version 75](https://twitter.com/addyosmani/status/1114777583302799360?s=20) and [Firefox just recently shipped an update](https://www.mozilla.org/en-US/firefox/75.0/releasenotes/) to also support it.

One interesting side note: [Firefox seems to be more aggressive](https://caniuse.com/#feat=loading-lazy-attr) in terms of “being lazy”. To be honest, I like this approach, but we will see what works better in the future.

All in all, I think this is a great improvement for the web. From this point going forward, I will use this new loading attribute whenever I see fit. If browsers already support it, the web becomes a bit faster. If they don't support it yet, everything still works. All for free. No additional JavaScript needed.

This is awesome! 🚀