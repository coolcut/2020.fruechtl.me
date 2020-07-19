---
layout: layouts/post.njk
title: Building an iOS application in SwiftUI
date: 2020-07-12T20:30:00
tags:
  - SwiftUI
  - iOS
---

After the introduction of SwiftUI last year, things changed a bit more. At the beginning of 2020, I familiarized myself more and more with Swift and SwiftUI again.

This phase started as it always did, I was full of energy and couldn't think of anything else for some days or weeks. The different now was, that this phase never ended and I'm still working on this app for month.

## Work In Progress

The app I'm working on isn't fancy or original in any way. It's the kind of application I always wanted, but in a way that wasn't already there. I want to solve this problem in the way I imagine, besides the fact that there are already tens of alternatives.

What I'm talking about is a simple way of tracking your progress while watching your favorite TV shows. In other words, I'm building a TV show tracking app.

The idea of this app, which is called CouchTimes, goes back years.

Most of the time, when I gave iOS development another try, I started with CouchTimes as my first project. I'm not quite sure, but this iteration of CouchTimes is probably the fourth one.

## Scope and technology

While I have concrete ideas what I want for CouchTimes, I also know that time is a limited resource. I can't get drawn away from my main goal - getting my app in the App Store.

Therefore, I want to keep the scope for the first version as simple as possible. CouchTimes will focus on the essentials. To give you a basic idea what I'm talking about, here are some examples:

1. Customers have a screen called Watchlist where all shows they are watching are listed
2. Customers can search for shows they want to add to their Watchlist. Search will also offer some suggestions of popular shows or similar.
3. Shows have a Detail Screen with various information as well as their seasons and episodes which can be marked as seen.
4. ...

Building a TV show tracking app has some different angles to it. First, we need a source for all the data we want to display and interact with. One of the most prominent services in the space is [Trakt.tv](https://trakt.tv/) and CouchTimes is going to run on the data Trakt.tv provides. I'm personally not the biggest fan of the Trakt.tv app, it doesn't a lot of things in a way I don't like, but their data is solid. Plus, this is also the reason why I want to have CouchTimes.

## SwiftUI is fun

Besides the data source, CouchTimes is running on SwiftUI. While SwiftUI is still very new and limited it is also very magical. It offers ways to make CouchTimes more easily available on other platforms in the future. Looking at you, Apple Watch, iPad and Mac!

While iOS development sometimes makes me struggle, I enjoyed the past month working on CouchTimes and I learned so much. I fought with my networking layer multiple times (I rewrote it three times). I learned more about Combine and I'm more and more amazed about SwiftUI itself. Especially when we look at what happened on this year's WWDC. So many nice improvements and no earth shattering changed from version to version like we experienced in the early days of Swift.

## Next Steps

All in all, iOS development excites my very much in my spare time. I love the new technologies Apples gave us in the past years and it will make development more approachable. My goals with CouchTimes is to finish the first version by the end of this year. I want to continue writing about it here or talking about it on my podcast Sprachnachrichten.fm (German).

If you want to learn a bit more about SwiftUI, I can recommend the WWDC sessions from this year. Besides that, here are some further ressources:

- [Hackingwithswift](https://www.hackingwithswift.com)
- [Swift with Majid](https://swiftwithmajid.com)
- [Jordan Singer](https://twitter.com/jsngr)
- [Thomas Ricouard](https://twitter.com/Dimillian)
- [Objc - SwiftUI](https://talk.objc.io/collections/swiftui)
- [Thinking in SwiftUI](https://www.objc.io/books/thinking-in-swiftui/)
