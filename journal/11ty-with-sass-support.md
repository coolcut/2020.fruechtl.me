---
layout: layouts/post.njk
title: 11ty with Sass support
date: 2020-02-25T20:30:00
tags:
  - redesign
  - 11ty
---

[11ty](https://www.11ty.dev) is incredible in what it does, generating static sites, but it doesn't offer asset handling by default. This is not a problem per se, but it requires me to add some tooling to help with things like [Sass](https://sass-lang.com) and maybe some JavaScript in the future.

To solve this, I immediately chose [Gulp](https://gulpjs.com) to help me. For the past couple of years, this is my go-to solution when it comes to simple build-tasks for my frontend development work.

Currently, my Gulpfile is very simple and looks like this:

```js
const gulp = require("gulp");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("css", function () {
  return gulp
    .src("./assets/scss/main.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .on("error", sass.logError)
    .pipe(gulp.dest("./_includes/css"));
});

gulp.task("watch", function () {
  gulp.watch("./assets/scss/**/*.scss", gulp.parallel("css"));
});

gulp.task("build", gulp.parallel("css"));
```

As you can see, this Gulpfile only focuses on the Sass files and isn't doing anything crazy.

To get this to work with the default 11ty scripts I chained some npm tasks together like so:

```js
...
"scripts": {
    "dev": "gulp build & gulp watch & eleventy --serve",
    "build": "gulp build && yarn fonts && eleventy",
...
```

With the help of these npm scripts, I can now quickly start my development process or build a new version of my site.

### Gotcha

At first, I struggled a bit with this setup, because 11ty didn't pick up the changes of the freshly generated `.css` files after I saved a `.scss` file. After some digging, I found the problem. Because I've added the generated `.css` files to my `.gitignore` and 11ty is using the `.gitignore` itself to ignore all referenced directories and files, the changes weren't showing up.

Thankfully, 11ty has a fix for this. I've added an option to the `.eleventy.js` file like so:

```js
module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
};
```

With this all set, I can write my CSS with my beloved preprocessor, and everything still works and refreshes automatically.
