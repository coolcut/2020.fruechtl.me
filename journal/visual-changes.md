---
layout: layouts/post.njk
title: Visual changes
date: 2020-05-21T09:00:00
tags:
  - redesign
---

This site looks different now! And to tell you a little secret, this new look also depends on the settings of your operating systems. Which mode are you currently using? Dark Mode? Light Mode? The visual changes reflect your settings. Try it out yourself! 🌈

## Part 1 — More structure

During the past couple of weeks, I prepared this site to become more mature. I wanted to drop the "this is a blog" feeling it communicated before — at least this was my feeling back then.

To tackle this problem, I first tried to build a layout system based on a grid. That allowed me to be flexible but also convey the feeling of similarity.

To support my descriptions above, take a look at the following example page:

![](/uploads/journal/layout-grid.jpg)

When you visit some other pages on this website, you can see the three main columns in action. Sometimes two columns morph into one, but they always stay true to their initial structure.

## Part 2 — Color is fun

I didn't want to build another standard and simple website with a white background. I wanted to do something with color. In terms of inspiration, I have to mention the websites from [Laura Kalbag](https://laurakalbag.com) and [Tatiana Mac](https://tatianamac.com). Both websites are beautiful in their own way and use color in a characteristic style and create a unique experience.

I wanted to do something similar, so I set out to create  different color themes for different areas of my website. To make this  extra challenging, I also set out to have them react for the dark/light  mode setting of the person visiting my website.

This all may sound very challenging, and it was to some degree, but from a pure technical standpoint, CSS really makes things more approachable and straightforward. The magic-word here is [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (aka. CSS variables). What I did was to create a small theming system like so:

```scss
body {
	--background-color: #f5f3ef;
	--text-primary-color: #{$black-90};
	--text-secondary-color: #{$black-60};
	--border-color: #{$black-10};
	--text-action-color: rgba(73, 71, 215, 0.9);
	--text-action-hover-color: rgba(73, 71, 215, 0.7);
}
```

Based on these CSS custom properties, I created a scaffold that spreads across the site and all its styles. As an example, setting the `background-color` on the `body` element with the defined `--background-color` CSS custom properties looks like this:

```css
body {
  background-color: var(--background-color);
}
```

With this setup, every page still looked the same. But now it was  running on CSS custom properties instead of hard-coded values or SCSS  variables.

The next step I took was adding unique classes to the individual pages I wanted to change, so I could add different styles to them.

To make this process a bit more clear, let's take the homepage as an example. The homepage only needed a new custom `background-color`, so I've added this piece of code to solve it:

```css
.cs-homepage {
  --background-color: #f1f6f9;

  @media (prefers-color-scheme: dark) {
    --background-color: #12232b;
  }
}
```

All it's doing is reassigning the `--background-color` CSS custom property to `#f1f6f9`. With that, every component which is referencing this `var(--background-color)` somewhere, updates to the new color value.

To make it even more awesome and add support for dark mode, I've added the `@media (prefers-color-scheme: dark)` media query. Inside this [media query](https://developer.mozilla.org/de/docs/Web/CSS/Media_Queries/Using_media_queries) I'm reassigning `--background-color` to `#12232b` - that's all.

With this setup, I can react to every page and set all the CSS custom properties I've listed earlier to any value I want.  

All in all, this is a simple but powerful approach of adding custom theming to my site. For more details, feel free to look into the [repository of this site](https://github.com/coolcut/fruechtl.me).