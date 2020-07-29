---
layout: layouts/post.njk
title: Building an iOS application in SwiftUI
date: 2020-07-29T17:00:00
tags:
  - SwiftUI
  - iOS
---

One of my personal long-term goals in the past couple of years has been having an app in the App Store. I'm not 100% sure why the idea of having my own app in the App Store appeals to me so much. Maybe it has something to do with touching and interacting with a native app on an iPhone, iPad or Apple Watch that feels more magical to me. Weirdly, it's a feeling that web-based applications (which I'm equipped to build) never gave me.

In the past, I tried to archive this goal multiple times. I tried to get familiar with [Objective-C](https://en.wikipedia.org/wiki/Objective-C), back in the days when [Swift](<https://en.wikipedia.org/wiki/Swift_(programming_language)>) wasn't a thing. After the introduction of Swift I was hyped but couldn't get over that hump of releasing an app. I always got stuck in an intermediate state.

After the introduction of [SwiftUI](https://developer.apple.com/xcode/swiftui/) last year, things changed. At the beginning of 2020, I familiarised myself more and more with Swift and SwiftUI.

This phase started as it always did. I was full of energy and couldn't think of anything else for weeks. The difference now was, that this phase never has ended and I'm still working on an app until now.

## Work In Progress

The app I'm working on isn't fancy or original in any way. It's the kind of application I always wanted, but in a way that wasn't already on the App Store. What I'm talking about is a simple way of tracking progress while watching your favourite TV shows. In other words, I'm building a TV show tracking app.

The idea of this app, which is called CouchTimes, goes back years. To be honest, most of the time, when I gave iOS development a try, I started with CouchTimes as my first project. This iteration of CouchTimes is probably the fifth attempt of getting something out the door.

## Scope and technology

While I have concrete ideas what I want CouchTimes to become, I also know that time is a limited resource. Focus is key and I don't want to get drawn away from my main goal, which is getting something in the App Store.

Therefore, I want to keep the scope for the first version as simple as possible. CouchTimes will focus on the essentials. To give you a basic idea what I'm talking about, here are some examples:

1. Customers have a screen called Watchlist where all shows they are watching are listed
2. Customers can search for shows they want to add to their Watchlist. Search will also offer some suggestions of popular shows or similar.
3. Shows have a „Detail Screen“ with various information as well as seasons and episodes which can be marked as seen.
4. And much more...

Building a TV show tracking app has some angles to it. First, I need a source of all the data customers want to access and interact with. One of the most prominent services in this space is [Trakt.tv](https://trakt.tv/) and CouchTimes is going to run on the data Trakt.tv provides.

## SwiftUI is fun

Besides the data source, CouchTimes is running on SwiftUI. While SwiftUI is still very new and limited in some ways, it feels very magical. It offers ways to make CouchTimes more easily available on other platforms in the future. Looking at you, Apple Watch, iPad and Mac!

While iOS development sometimes makes me struggle, I enjoyed the past month working on CouchTimes and I learned so much. I fought with my networking layer multiple times (I rewrote it three times). I learned more about Combine and I'm more and more amazed about SwiftUI itself. Especially when we look at what happened during this year's WWDC. So many nice improvements and no earth-shattering changed from the first version to the second version like we experienced in the early days of Swift.

## Next Steps

All in all, iOS development excites me very much. I love the new technologies Apple gave us in the past years and it will make development generally more approachable. My goals with CouchTimes is to finish the first version by the end of this year. I want to continue writing about it here or talking about it on one of my podcasts called [Sprachnachrichten.fm](https://sprachnachrichten.fm) (German).

If you want to learn a bit more about SwiftUI, I can recommend the WWDC sessions from this year. Besides that, here are some further resources:

- [Hackingwithswift](https://www.hackingwithswift.com)
- [Swift with Majid](https://swiftwithmajid.com)
- [Jordan Singer](https://twitter.com/jsngr)
- [Thomas Ricouard](https://twitter.com/Dimillian)
- [Objc - SwiftUI](https://talk.objc.io/collections/swiftui)
- [Thinking in SwiftUI](https://www.objc.io/books/thinking-in-swiftui/)
