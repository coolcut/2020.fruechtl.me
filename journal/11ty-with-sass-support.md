---
layout: layouts/post.njk
title: 11ty with Sass support
date: 2020-02-23T10:00:00+01:00
media: []
tags:
  - redesign
  - 11ty
---

[11ty](https://www.11ty.dev) is awesome in what it does, generating static sites, but it doesn't offer any kind of asset pipeline or handling by default. This is a not a problem per se, but it requires us to add some additional tool to help us with our [Sass](https://sass-lang.com) and maybe some JavaScript related stuff later.

To solve this for me, I immediately chose [Gulp](https://gulpjs.com) to help me. For the past couple of years, this is my go-to solution when it comes to quite simple build-tasks or automations for my frontend development processes.

Currently, my Gulpfile looks like this:

```js
const gulp = require("gulp");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("css", function() {
  return gulp
    .src("./src/scss/main.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .on("error", sass.logError)
    .pipe(gulp.dest("./_includes/css"));
});

gulp.task("watch", function() {
  gulp.watch("./src/scss/**/*.scss", gulp.parallel("css"));
});

gulp.task("build", gulp.parallel("css"));
```

As you can see, this Gulpfile only focusses on the Sass files and isn't really doing anything crazy here.

To get this now to work with the default 11ty scripts you need to run during development I basically chained some npm tasks together like so:

```js
...
"scripts": {
    "dev": "gulp build & gulp watch & eleventy --serve",
    "build": "gulp build && yarn fonts && eleventy",
...
```

With the help of these npm scripts, I can now quickly start my development process or just build a new version of my site.

### Gotcha

At first I struggled a bit with this setup, because eleventy didn't pick up the changes of the freshly generated `.css` files after I saved a `.scss` file. After some digging I found, that the problem was that I've added the generated `.css` files into my `.gitignore`. This was a problem for my workflow, because by default 11ty is looking into the `.gitignore` file to ignore all the directories and files during the build.

We can fix this issue by adding this option to the `.eleventy.js` file:

```js
module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
};
```
