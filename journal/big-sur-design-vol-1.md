---
layout: layouts/post.njk
title: "macOS Big Sur - Design Changes Vol. 1"
date: 2020-12-09T20:15:00
tags:
  - macOS
  - design
---

With the latest version of macOS, Apple not only changed the version number from 10.15 to 11. They also revisited a lot of their previous decisions regarding user interface guidelines and overall appearance.

In an [introductory video from this year's WWDC](https://www.apple.com/105/media/us/macos/big-sur/2020/f14b0c7e-9f7e-4b9f-bd0c-b4b86ee46c92/films/design/macos-design-tpl-cc-us-2020_1280x720h.m3u8), Alan Dye, Apple’s VP of human interface design, talked about the goals and thoughts that went into these design changes. As a goal of this redesign, he mentioned clarity as one of their focus points. While clarity was important, they also wanted to retain the powerful capabilities and simplicity of macOS. 

Furthermore, they wanted to keep the focus on the users’ content and let buttons or controls appear when they are needed. Consistency throughout the ecosystem was another focus that can be recognised in examples like the unification of their icons system called [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols/overview/), which already existed on iOS and iPadOS. Additionally, examples like the new sidebar design that also arrived on iPadOS can be highlighted to underline the goals of becoming more consistent.

All in all, the goals and references in this video were one of the resources I used while trying to understand why Apple made these changes. While I think some changes make Big Sur a “more modern” operating system, I also feel that a lot is still in flux and doesn’t meet the standards and goals Alan Dye were mentioning in the video.

While it is always difficult so make sense of decisions from the outside, I highly respect and admire every human who worked on this massive redesign. Nevertheless, I wanted to document some questions I had after using Big Sur for a while.

If you understand German, you can also listen to [episode 15 of my podcast Sprachnachrichten](https://sprachnachrichten.fm/sn015-der-kontrast-und-die-suche/), where my co-host Arne and I talk about this topic.

## General observations
From a visual standpoint, I quite like Big Sur. It feels fresh and looks good in most instances. While this point mostly goes on the subjective side of things, I wanted to state it first and try to ignore it more and more later on.

Another point that feels quite refreshing to me are the new system sounds. I’m not sure if this is a personal observation because the sounds are new to me, but I have the feeling that there are more sounds on more occasions now — but again, not sure if this is true.

## App Icons
One of the first and obvious changes of Big Sur is the new style of the individual App Icons. This discussion point might be one I’m still quite conflicted about myself. As stated in the video by Alan Dye, the App Icons are focused on the goal of becoming more consistent throughout the Apple ecosystem.

> We wanted consistency throughout the ecosystem, so users can move fluently between their Apple devices. But we also love that Mac icons have a deep history and a distinct look and feel….

While I understand their aim, it is not clear to me if this move solves the stated goal. To me, the current solution is only going half way, while creating different other problems that were previously not existent.

One clear point for the old icon style is that they are way easier to spot in the Dock or App Switcher because they are bigger and have a unique shape. 

On the other hand, the new style provides more consistency, which leads to a cleaner look. Additionally, a more similar icon style across the ecosystem could lead to better brand recognition. While being similar might help in some areas, these icons aren't equal and support their platform specific characteristics. This doesn’t help designers or developers because in a perfect world, they always need to create different types of app icons that share a similar foundation while being optimized and specific to their platform.

In the end, it arguably makes everything more similar which has its pros but also rapidly can bring up different other problems like usability and fast recognition — similar to the [latest redesign of the Google products](https://twitter.com/danidonovan/status/1322356167063031814).

I want to close this segment with a [Twitter thread from Craig Hockenberry](https://twitter.com/chockenberry/status/1328392677717512192) which highlights a similar question.

## System preferences
During the following sections (including the next volumes), I will go through some examples and highlight questions and decisions that are not clear to me in Big Sur. All examples have one screenshot made in Catalina (left) and one made in Big Sur (right) to underline the differences.

We will see some questionable patterns throughout the interfaces. For this section, let’s start with the system preferences, which focuses mainly on controls.

### System preferences - Overview
<figure class="post-content__wide-image">
  <img src="/uploads/journal/system-preferences.jpg" alt="Screenshot of the system preferences window on macOS Catalina and Big Sur">
</figure>

I quite like the new icons on the system preferences overview. Most of them to me, feels quite at home with the new style Big Sur is promoting. In some instances, they even benefit from their distinct shape and form (e.g. Notifications). Something we already talked about in the section above

Some other notes based on the info circles:
1. One of the most annoying patterns throughout the new Big Sur interfaces is the lack of contrast. One prominent victim is the search field inside the toolbar. The text field itself is hard to distinguish from the very light toolbar, even on a iMac 5K with full brightness settings.

### System preferences - Keyboard
<figure class="post-content__wide-image">
  <img src="/uploads/journal/system-preferences-keyboard.jpg" alt="Screenshot of the system preferences keyboard window on macOS Catalina and Big Sur">
</figure>

A good example of a medium-sized window with many options and states that suffer from a very bright and light visual interface and not much visual hierarchy.

Some other notes based on the info circles:
1. Same contrast problem with the search field.
2. The new segmented control style also lacks contrast, especially in comparison to the old style. Because the whole interface is very light, it becomes harder to quickly see the active state (which is now indicated by a white shape). Furthermore, the individual dividers in-between the other inactive items are barely noticeable.
3. The slider also suffers from bad contrast levels. While the old version also could be improved, and the new sliders arguably look “more modern”, they might be harder to use and aren't quickly scannable.

## That’s all for today
In Vol. 2, we will look at five other applications from Apple and 3rd party developers and dive more deeply into the changes Big Sur and the [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/macos/overview/whats-new-in-macos/) introduced.