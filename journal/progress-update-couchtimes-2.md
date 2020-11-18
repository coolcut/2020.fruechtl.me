---
layout: layouts/post.njk
title: "Progress Update: CouchTimes #2"
date: 2020-11-18T17:15:00
tags:
  - SwiftUI
  - iOS
  - CouchTimes
---

After some weeks of silence, it is time for another update focusing on CouchTimes. In two previous posts ([1](https://fruechtl.me/journal/building-an-ios-application-in-swiftui/), [2](https://fruechtl.me/journal/progress-update-couchtimes-1/)) I’ve already talked about the goals of this side project.

Not much has changed from the perspective of these goals, but a lot has changed inside the app since I wrote about it in August.

But before we get into my actual progress I need to make a short statement. While I have a lot of fun working in the iOS ecosystem and enjoy using the latest builds of my app on my iPhone, iOS development as a whole has many quirks. While some things are sooooo fast to implement (especially with SwiftUI) some things just feel broken and when you hit a roadblock, it can feel like hell. 

During the [latest episode](https://www.relay.fm/radar/204) of [Under the Radar](https://www.relay.fm/radar/) I could feel my self-esteem rise when I heard the struggles of two very experienced iOS developers during their journey of moving code to Swift and SwiftUI. One of the major misses from Apple comes down to [Apple's Piss-Poor Documentation](https://www.caseyliss.com/2020/11/10/on-apples-pisspoor-documentation) - a topic I want to write about more in the context of design systems at some point, but let’s keep the focus on CouchTimes for now.

Besides my struggles during the past months, I’m thrilled with my current progress. The latest build I’ve published to TestFlight has the following features:

- Basic structure for an onboarding screen
- Empty states for different screens
- Swipe action to mark the next episode as watched
- New library screen with favorite features to get a list for your favorite shows
- Data refresh sync with Trakt.tv
- iCloud Sync
- … more small improvements

With that we get more and more to a state I would consider version 1.0. Besides some fixes and improvements the only things missing from my current list are “Custom App Icons”, “Appearances (e.g. always dark mode)” and Widget support. The latter would definitely be the biggest investment and I’m currently unsure if this is worth it.

If you want to join the beta, please visit the [TestFlight](https://testflight.apple.com/join/TvEyoBQx).

<video controls autoplay loop playsinline style='max-width: 375px; width: 100% !important; height: auto !important;'>
  <source src="/videos/progress-update-couchtimes-2.mp4" type="video/mp4">
</video>
