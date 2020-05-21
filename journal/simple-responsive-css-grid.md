---
layout: layouts/post.njk
title: Simple responsive CSS Grid
date: 2020-05-22T12:30:00
media: []
tags:
  - 11ty
  - photon
  - grid
---

[The main overview page](https://photon-11ty.netlify.app/) of [Photon 11ty](https://github.com/usephoton/photon-11ty) is a simple grid of image squares, nothing more. In modern frontend development times, I wanted to use [CSS Grid](https://developer.mozilla.org/de/docs/Web/CSS/CSS_Grid_Layout) to help me with the grid layout.

In the past, I only used CSS Grid occasionally. While it was usually very helpful to build layout with, it sometimes felt a bit redundant. Especially when it comes to repetitive responsive settings.

My first attempt towards building this photo grid layout was similar to my previous attempts. It felt a bit strict and not flexible. After some  research, I came across a rather perfect way of defining the grid items. Now the browser would do the heavy lifting:

```scss 
.photo-grid {
	display: grid;
	grid-gap: 16px;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}
```

Cool, but what does this mean?

1. Create a grid
2. Set the gap between each column and row to `16px`
3. Set the minimum width of every column to `400px`
4. Every column should have the same width
5. Fill the grid container with as many columns as possible

This is the perfect way of handling this grid. It is pure flexibility while also depending on a reasonable  minimum size.

One recent article on [CSS-Tricks](https://css-tricks.com/) called Thinking in [Behaviors, Not Screen Sizes](https://css-tricks.com/thinking-in-behaviors-not-screen-sizes/) describes a very similar example. The notion of thinking more in behaviors rather than breakpoints is a perfect summary to this neat way of handling grids.