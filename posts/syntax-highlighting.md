---
layout: layouts/post.njk
title: Syntax Highlighting
date: 2019-12-08T08:30:00+01:00
media: []
tags:
  - redesign
  - 11ty
---

During my searches through the [11ty documentation](https://www.11ty.dev/docs/), I stumbled upon the official [syntax highlighting plugin](https://www.11ty.dev/docs/plugins/syntaxhighlight/) offered by 11ty. The beauty of this plugin is that it does all during build-time. This means that there is no need for any client-side JavaScript.

As an example of how this new syntax highlighting looks for now, here you can see a case with the configuration for the syntax highlighting plugin itself:

```js
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
};
```
