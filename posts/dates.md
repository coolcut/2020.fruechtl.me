---
title: Dates
date: 2019-11-07
layout: layouts/post.njk

---
With a flexible data model, provided by [Contentful](https://www.contentful.com), I’ve added a new date input to my blogpost model. At first, I tried to get something like an internal or predefined `publishDate` provided by Contentful. It turned out to be harder than I expected at first.

With a new date input in place, I was able to render a machine-optimized version of a date to my page. The next step was adding a proper [`<time>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time) tag to every post. With a `<time>` tag and the corresponding date-time attribute, I have new opportunities. I now can render both a human-readable and a machine optimized version of a date to every post.

After that, I rendered the machine-optimized date from Contentful inside the datetime attribute. For the human-readable side of things, I’ve added [moment.js](https://momentjs.com) to my project.

With the power of `moment.js`, I've added a `moment(DATE_FROM_CONTENTFUL).format("dddd, MMMM Do YYYY")` function call. With that in place, I can now also render an optimized date formatting for humans. The result of this specific formatting is now present in every post.