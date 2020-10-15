const moment = require("moment");
const fs = require("fs");
const pluginRSS = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRSS);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(inclusiveLangPlugin);

  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  // Posts Collection
  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getFilteredByGlob(["journal/*.md"]);
  });

  eleventyConfig.addCollection("postsPreview", function(collection) {
    return collection.getFilteredByGlob(["journal/*.md"]).sort(function(a, b) {
      return b.date - a.date;
    }).slice(0, 4);
  });

  // Work Collection
  eleventyConfig.addCollection("work", function(collection) {
    return collection.getFilteredByGlob(["work/*.md"]).sort(function(a, b) {
      return a.data.sortId - b.data.sortId;
    });
  });

  eleventyConfig.addCollection("workPreview", function(collection) {
    return collection.getFilteredByGlob(["work/*.md"]).sort(function(a, b) {
      return a.data.sortId - b.data.sortId;
    }).slice(0, 2);
  });

  // Side Projects Collection
  eleventyConfig.addCollection("sideProjects", function(collection) {
    return collection.getFilteredByGlob(["side-projects/*.md"]).sort(function(a, b) {
      return a.data.sortId - b.data.sortId;
    });
  });

  // Date Formatting
  eleventyConfig.addFilter("readableDate", dateObj => {
    return moment.utc(dateObj).format("dddd, MMMM Do YYYY");
  });

  eleventyConfig.addFilter("readableDateShort", dateObj => {
    return moment.utc(dateObj).format("MMMM DD, YYYY");
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return moment.utc(dateObj).format("YYYY-MM-DD");
  });

  // URL Formatting
  eleventyConfig.addFilter('simpleURL', (url) => {
    var url = new URL(url);
    return url.hostname.replace("www.","");
  });

  // Podcast Cover
  eleventyConfig.addFilter('podcastCover', (image) => {
    const UPLOAD_URL = "/uploads/podcasts/"

    const i = image.lastIndexOf('.');
    const IMAGE_NAME = image.substring(0, i);
    const IMAGE_EXT = image.substring(i + 1);

    return `${UPLOAD_URL}${IMAGE_NAME}-500px.${IMAGE_EXT}`
  });

  eleventyConfig.addNunjucksShortcode("youtube", function(youTubeId) {
    return `<div class="video video--youtube">
              <lite-youtube videoid="${youTubeId}"></lite-youtube>
            </div>`
  });

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("uploads");
  eleventyConfig.addPassthroughCopy("videos");
  eleventyConfig.addPassthroughCopy("favicons");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy('admin/config.yml');
  eleventyConfig.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');

  eleventyConfig.addPassthroughCopy('node_modules/lite-youtube-embed/src/lite-yt-embed.css');
  eleventyConfig.addPassthroughCopy('node_modules/lite-youtube-embed/src/lite-yt-embed.js');

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('_site/404/index.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // You can also pass this in on the command line using `--pathprefix`

    // pathPrefix: "/",

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // These are all optional, defaults are shown:
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
