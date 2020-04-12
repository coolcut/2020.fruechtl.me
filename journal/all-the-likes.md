---
layout: layouts/post.njk
title: All the likes
date: 2020-03-26T20:30:00
media: []
tags:
  - redesign
  - 11ty
  - pinboard
---

As you might already have read in one of the older posts, this redesign process is full of silly sub-projects that sidetrack me towards my ultimate goal of finishing this redesign. This post goes into detail and tells the story of one of these sub-projects.

## Things I've liked

At some point in February, different posts bubbled into my timeline with a similar topic - self-hosted "like pages". The one that stuck with me the most was done by Robin Rendle. Robin summarised his thoughts in a blogpost called [RSS favorites](https://www.robinrendle.com/notes/rss-favorites). After reading this post, I knew I wanted something similar. I wrote down some ideas and after a while, I knew what I wanted:

> I want a way to display specific bookmarks, I saved in my Pinboard.in account to also appear publicly on my website.

With this idea statement set, I looked into technical solutions to archive this idea. Thankfully, 11ty offers help with a featured called `JavaScript Data Files`. With this feature, you simply run code at build time to fetch data - exactly the thing I needed to do.

## Connecting everything with Pinboard

With the power of `JavaScript Data Files` and a good amount of inspiration and learning from the [11ty Feedbin Plugin](https://github.com/WebInspectInc/eleventy-plugin-feedbin) I very quickly got a first version up and running. Besides some fancy caching stuff (which I basically took from the 11ty Feedbin Plugin), the main part of the job was to call the Pinboard API.

Therefore, I stored my Pinboard credentials inside a `.env` file and imported it later via the [dotenv](https://www.npmjs.com/package/dotenv) package.

```js
const fs = require('fs');
const fetch = require('node-fetch');
require('dotenv').config();

const USERNAME = process.env.PINBOARD_USERNAME;
const PASSWORD = process.env.PINBOARD_PASSWORD;

...
```

Besides that, I also used the [node-fetch](https://www.npmjs.com/package/node-fetch) package to use the basic .fetch() outside of the browser. With all of this set, the part of getting the content from Pinboard was just these lines of code:

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

The configuration to note here is, that I'm only asking for my Pinboard entries with the tag `like`. This is basically my mechanism of showing that I want to include this bookmark on my website.

Now, every time [Netlify](https://netlify.com) is building this site, I'm asking Pinboard for new data and the overall /likes pages gets refreshed.
