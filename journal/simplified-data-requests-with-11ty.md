---
layout: layouts/post.njk
title: Simplified data requests with 11ty
date: 2020-06-12T10:00:00
tags:
  - redesign
  - 11ty
---

In a [previous post](/journal/all-the-likes/), I described my process of generating my [/likes](/likes/) page. In its original shape and form, it needed a good amount of custom code to retrieve the data from the [Pinboard API](https://pinboard.in/api/). I also created a simple cache, which I mostly used to simplify my local development process, but it always felt like a hack.

Some weeks ago, I came across a new little 11ty utility that simplifies this whole process extremely. [Zach](https://twitter.com/zachleat), the creator of [11ty](https://www.11ty.dev), published [eleventy-cache-assets](https://github.com/11ty/eleventy-cache-assets) which basically does all the work, but in a much more elegant way.

After installing `eleventy-cache-assets` this is all the code I now need to archive the same functionality as before:

```js
const Cache = require("@11ty/eleventy-cache-assets");
require('dotenv').config();

const USERNAME = process.env.PINBOARD_USERNAME;
const PASSWORD = process.env.PINBOARD_PASSWORD;

module.exports = async function() {
  let json = await Cache(`https://${USERNAME}:${PASSWORD}@api.pinboard.in/v1/posts/all?format=json&tag=like`, {
    duration: "1d",
    type: "json"
  });

  return json;
};
```

And to be fully clear, this is a much better system as before. Additionally, I also get a more robust and flexible caching system for free on top.

I also used the same utility to get the data I need for the little [Dribbble](https://dribbble.com) preview I now have on my homepage. Just these few lines of code and everything works.

```js
const Cache = require("@11ty/eleventy-cache-assets");
require('dotenv').config();

const TOKEN = process.env.DRIBBBLE_TOKEN;

module.exports = async function() {
  let json = await Cache(`https://api.dribbble.com/v2/user/shots?per_page=6&access_token=${TOKEN}`, {
    duration: "1d",
    type: "json"
  });

  return json;
};
```

With the `duration` option you have full control over the duration timeframe of the cache itself. The `type` is extendable to other types like `text` or `Buffer` as well.

This utility really makes it a breeze to get data from an API and include it on your own website running 11ty.

### Update #1 - June 28th 2020
For some reason, the way I handled the Pinboard requests stopped working — I couldn't reproduce it myself. Thankfully, [Arne](https://arne.me), who also used this setup came up with a [fix](https://github.com/bahlo/arne.me/commit/039c0e96ffb7ea5a32d7cdc9bb26477757d03ccb) that solved the problem for us.