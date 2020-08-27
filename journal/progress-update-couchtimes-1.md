---
layout: layouts/post.njk
title: "Progress Update: Couchtimes #1"
date: 2020-08-27T15:00:00
tags:
  - SwiftUI
  - iOS
  - CouchTimes
---

Some weeks ago, [I wrote about CouchTimes](/journal/building-an-ios-application-in-swiftui/), the iOS tv show tracking application, I'm currently working on. In the past weeks, I did some progress on different angles of the application and I wanted to start sharing them more closely on this blog.

- I completely redid the search views from a technical standpoint
- The search now support more suggestions
- All detail view now lives inside a sheet
- Better data sharing inside the application with [@EnvironmentObject](https://developer.apple.com/documentation/swiftui/environmentobject)
- Better image API handling ⇒ default to english localised covers and posters
- Much more little details

On to of everything, I also started to push new releases to [TestFlight](https://developer.apple.com/testflight/) now. If you are interested in joining this testing round, [please write a mail](mailto:support@couchtim.es) (you need to run iOS 14).

Meanwhile, here is a video of a quick walkthrough:

<video controls autoplay loop playsinline style='max-width: 375px; width: 100% !important; height: auto !important;'>
  <source src="/videos/progress-update-couchtimes-1.mp4" type="video/mp4">
</video>
