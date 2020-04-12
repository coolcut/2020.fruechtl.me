---
layout: layouts/post.njk
title: Simple responsive css grid
date: 2020-04-16T12:30:00
media: []
tags:
  - 11ty
  - photon
  - grid
---

The main overview page of Photon is a simple grid of image squares, nothing more. In modern frontend development times, I wanted to use [CSS Grid](https://developer.mozilla.org/de/docs/Web/CSS/CSS_Grid_Layout) to help me layout this grid view.

In the past, I occasionally used Grid here and there. While it was a great help to build a grid layout more easily, it sometimes felt a little bit redundant with some responsive challenges.

My first attempt towards building this photo grid view was similar to all the old ones. It felt a bit strict and not flexible. After some research, I cam across a rather perfect way of defining the grid items themselves and make the browser do the heavy lifting for me.

```scss 
.photo-grid {
	display: grid;
	grid-gap: 16px;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}
```

Cool, but what does this mean?

1. Create a grid
2. Set the gap between each column and row to 16px
3. Set the minimum width of every column to 400px
4. Every column should have the same with
5. Fill the grid container with as many columns as possible

This is the perfect way of handling this grid. It is pure flexibility while also depending on a minimum in terms of size.

One recent article on [CSS-Tricks](https://css-tricks.com/) called Thinking in [Behaviors, Not Screen Sizes](https://css-tricks.com/thinking-in-behaviors-not-screen-sizes/) describes a very similar examples. The notion of thinking more in behaviors rather than breakpoints is a perfect summary to this neat way of handling grids.