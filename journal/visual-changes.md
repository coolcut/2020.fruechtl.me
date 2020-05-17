---
layout: layouts/post.njk
title: Visual changes
date: 2020-05-17T09:00:00
tags:
  - redesign
---

This site looks different! And to tell you a little secret. the new looks also depends on the settings of your operating systems. Which mode are you currently using? Dark Mode? Light Mode? The visual changes reflect your settings. Try it out! 🌈

## But first, more structure

During the past little visual updates, I slowly prepared this site to become more mature. I wanted to loose the "this is a blog" feeling it had before - at least this was my feeling about this site.

To tackle this problem, I first tried to build different but in a whole similar layouts. This layout, which consists of three main parts, probably reveals itself the clearest in terms of the navigation.

![](/uploads/journal/layout-grid.jpg)

## Color is fun

I didn't want to build another standard and simple website with a white background. I wanted to do something with color and in terms of inspiration, I definitely have to reference the websites from [Laura Kalbag](https://laurakalbag.com) and [Tatiana Mac](https://tatianamac.com). Both websites are beautiful in there own way and both use color very individually and create a warm experience throughout the whole page.

I wanted to do something similar, therefore I set out to create different color themes for different areas of my side. To make this extra challenging, I also wanted to have them react for the dark/light mode setting of the person visiting this site.

This all may sound very challenging, and it was to some degree, but from a pure technical standpoint, CSS really makes things more approachable and straightforward in a sense. The magic-word here is [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (aka. CSS variables). What I did was to create a small theming system like so:

```scss
--background-color: #f5f3ef;
--text-primary-color: #{$black-90};
--text-secondary-color: #{$black-60};
--border-color: #{$black-10};
--text-action-color: rgba(73, 71, 215, 0.9);
--text-action-hover-color: rgba(73, 71, 215, 0.7);
```

Based on these CSS custom properties, I created a scaffold that spreads across the site and all its styles. As and example, setting the `background-color` on the `body` element with the defined `--background-color` CSS custom properties looks like this:

```css
body {
  background-color: var(--background-color);
}
```

With all the setup, every site still looks the same, it now is just running on CSS custom properties instead of hardcoded values or SCSS variables.

The next step I took was adding unique classes to the individual pages, so I could add styles to them. To make this process a bit more clear, let's take the homepage as an example. The homepage only needed a new custom `background-color`, so I've added this piece of code to solve it:

```css
.cs-homepage {
  --background-color: #f1f6f9;

  @media (prefers-color-scheme: dark) {
    --background-color: #12232b;
  }
}
```

All this is really doing is reassigning the `--background-color` CSS custom property to `#f1f6f9`.

To make it even more awesome and also add support for dark mode, I've added the `@media (prefers-color-scheme: dark)` media query. Inside the media query I'm reassigning `--background-color` to `#12232b` - that's all.

With this setup, I can react individually to every page and set all the CSS custom properties I've listed earlier to any value I want.
