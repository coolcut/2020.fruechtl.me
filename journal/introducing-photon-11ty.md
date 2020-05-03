---
layout: layouts/post.njk
title: Introducing Photon 11ty
date: 2020-05-03T13:00:00
media: []
tags:
  - 11ty
  - photon
  - images
---

I'm happy to share a little project I've worked on for the past weeks. It's called [Photon 11ty](https://github.com/usephoton/photon-11ty) and before we get into the details, here are the hard facts:

- It's a simple way of sharing & presenting photos on the web
- It's based on [11ty](https://www.11ty.dev/)
- It's [open source](https://github.com/usephoton/photon-11ty)
- It's focused on being fast and easy to use
- It's not finished in any way, this is only the first version

## Where it all started

To be honest, I didn't want to start this project at first. I didn't want to invest time in it, because I thought I already had what I wanted.

At the beginning of this year, I build [my own little version of Instagram](/journal/my-own-little-instagram/). It enabled me to share the photos I wanted to share with the world. Everything was happening on my website with my own domain - I was happy!

After building this little version for myself, a good friend of mine, [Arne](https://arne.codes), was constantly bugging me about the fact that he wanted to do something similar, but decoupling my `/photos` section from the repository of my personal site would be painful. Sure, the code of this website is [available on GitHub](https://github.com/coolcut/fruechtl.me), but it would've been a bad experience for everybody who wanted to do the same. He was repeating himself for weeks.

Then there was another, similar project, called [Photo Stream](https://github.com/maxvoltar/photo-stream) by [Tim van Damme](https://www.timvandamme.com) which was the final motivation for me to look into ways of decoupling my own `/photos` page from my personal site. Generally, alternatives are great and maybe separating the `/photos` section from my personal site was a good idea after all.

At some point, I started to sketch some ideas with my girlfriend. These ideas vastly extend the scope of the current version of `Photon 11ty` but they were enough to push me over the edge.

## Where it is at

I started with some design in [Figma](https://www.figma.com/file/n2Tcy7ZATLsSFxmTvFvg7l/Exploration?node-id=80%3A54). It was all about building a grid of photos and deciding what makes the cut and gets into a very simple MVP.

After some initial direction, I quickly boiled the visual design down to a bare minimum and tried to follow the basic idea of showing squares as an overview and going full-screen for every single view.

From that point going forward I started moving things into code. I quickly build my foundation with `11ty` and focused to build the simple design in a basic and responsive manner.

Now I'm at a point were it makes sense to make this project public. Currently, the following features are available in this first version of `Photon 11ty`:

- **Pre-optimized image resolutions:** During build time, [Gulp](https://gulpjs.com/) runs a task with [gulp-responsive](https://www.npmjs.com/package/gulp-responsive) to generate a lot of different thumbnails based on the original uploaded images.
- **Improved lazy loading of images:** Photon uses the native browser `loading="lazy"` functionality.
- **Every photo has its own URL:** Everything is static. Every photo has its own HTML page. No JavaScript magic.
- **Basic open graph support:** Support for previews on other social media platforms and messaging apps.
- **Support for light and dark themes:** The designs adapt to the appearance (light or dark mode) of your operating system.
- **Keyboard shortcuts:** Users can navigate photos with `ESC` (close a photo) as well as the `left/right arrow keys`.
- **RSS feed:** Every photon site has RSS support.
- **Option for adding other social media references:** If you want to link to other social media accounts, you can configure this inside the config. Social media links will appear inside the page header.
- **Support for Netlify deploy button:** One-click deploy to [Netlify](https://www.netlify.com).

## How can you use it

If you have a little bit of [Git](https://git-scm.com/) knowledge, you're the right person to give `Photon 11ty` a try. You can either use the [Netlify](https://www.netlify.com/) deploy button (which is the fastest way of getting something up and running) or use anything that supports static-file hosting.

If you want to build a new version of your site, please use the `yarn build` command. A freshly generated version of your site will be created inside the `_site` directory.

When it comes to creating new posts, Photon has two simple rules:

1. You need to put all images inside the `/uploads` directory.
2. To show these images on your website, you need to create a markdown file inside the `/posts` directory. This markdown file handles everything from referencing the image you want to show as well as handling additional metadata for this specific post.

You can find more details regarding these steps as well as documentation about the functionality behind some content blocks inside the [README](https://github.com/usephoton/photon-11ty#how-to-use-photon).

## Where it is heading

To be honest, I don't know for sure. I'm pretty happy about the current state but I'm also really interested in other options and open to suggestions.

I have some ideas floating around in my head, but I haven't decided yet if these ideas are right for this project. I was thinking about basic offline support or support for [Webmention](https://indieweb.org/Webmention). These are all ideas I'm not sure about, but I know that I want to leverage the awesome web environment and see how new APIs and technologies can push this little project forward.

Besides that, I want to make smaller improvements regarding performance and maybe automate some more things.

## Anything else

As I said earlier, I'm happy with the outcome so far. I'm totally aware that this solution is primarily focused on people with a bit of technical knowledge.

I think this is okay for the start, but there should also be something that everybody can use. Something that is build with the privacy, data ownership and the foundation of the web in mind.

I'm not talking about another open-source alternative to Instagram or another social network. I'm talking about an easy way of sharing visual creations, like photos. Maybe with some small social aspects, but without the constant run for likes, algorithms and other things that increase the pressure on humans and ultimately don't make us happy.

Maybe someday this will be available. For now, I hope `Photon 11ty` can also help in small ways.

P.S. I removed the `/photos` section from this website and moved everything over to [photos.fruechtl.me](https://photos.fruechtl.me) running `Photon 11ty`.
