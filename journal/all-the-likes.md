---
layout: layouts/post.njk
title: All the likes
date: 2020-04-14T18:15:00
tags:
  - redesign
  - 11ty
  - pinboard
---

As you might have already read in one of the older posts, this redesign process is full of silly sub-projects that sidetrack me towards my ultimate goal of finishing the redesign at some point in the future. This post tells the story of one of these sub-projects.

## Things I've liked

At some point in February, different posts bubbled into my timeline with a similar topic: self-hosted “like pages”. One post that stuck with me the most was written by [Robin Rendle](https://www.robinrendle.com/). Robin summarized his thoughts in a blogpost on his own blog called [RSS favorites](https://www.robinrendle.com/notes/rss-favorites). After reading it, I knew, I wanted something similar. I quickly collected some ideas and after a while, I had a clear goal:

> I want a way to display specific bookmarks, I saved in my Pinboard.in account, to also appear publicly on my website.

With a goal in mind, I looked into technical solutions to archive the desired outcome. Thankfully, 11ty offers help with a feature called [JavaScript Data Files](https://www.11ty.dev/docs/data-js/). With this feature, you simply run code at build time to fetch data — exactly the thing I needed to do.

## Connecting everything with Pinboard

With the power of `JavaScript Data Files` and a good amount of inspiration and learning from the [11ty Feedbin Plugin](https://github.com/WebInspectInc/eleventy-plugin-feedbin), I quickly got a first version up and running. Besides some fancy caching stuff (which I basically took from the `11ty Feedbin Plugin`), the primary task was to call the Pinboard API and get the data I wanted.

Therefore, I stored my Pinboard credentials inside a `.env` file and imported it later via the [dotenv](https://www.npmjs.com/package/dotenv) package.

```js
const fs = require('fs');
const fetch = require('node-fetch');
require('dotenv').config();

const USERNAME = process.env.PINBOARD_USERNAME;
const PASSWORD = process.env.PINBOARD_PASSWORD;

...
```

Besides that, I imported the [node-fetch](https://www.npmjs.com/package/node-fetch) package to use the `fetch()` functionality, which is available inside of modern browsers, in a Node.js environment. With all of this, the part of getting the content from Pinboard was just some lines of JavaScript:

```js
...

async function fetchPinboard() {
	if (!USERNAME || !PASSWORD) {
		console.warn(`>>> unable to fetch Pinboard: missing username or password`);
		return false;
	}

	let url = `https://${USERNAME}:${PASSWORD}@api.pinboard.in/v1/posts/all?format=json&tag=like`;
	const response = await fetch(url);

	if (response.status === 200) {
      const feed = await response.json();
	  return feed;
	}

	return null;
}

...
```

One side note: I'm only asking for my Pinboard entries with the tag `like`. This is my mechanism of only showing the bookmarks I want to have accessible here.

Now, every time [Netlify](https://netlify.com) is building this site, 11ty automatically asks Pinboard for new data and refreshes the `/likes` pages with it.
