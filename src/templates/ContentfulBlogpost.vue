<template>
  <Layout>
    <article>
      <h1>{{$page.post.title}}</h1>
      <time :datetime="$page.post.publishDate">{{humanReadableDate($page.post.publishDate)}}</time>
      <div v-html="markdownToHTML($page.post.body)"></div>
    </article>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: contentfulBlogpost(path: $path) {
    title
    publishDate
    body
  }
}
</page-query>

<script>
const Marked = require("marked");
import moment from "moment";

export default {
  metaInfo: {
    title: "Blogpost"
  },

  methods: {
    markdownToHTML(content) {
      return Marked(content);
    },

    humanReadableDate(date) {
      return moment(date).format("dddd, MMMM Do YYYY");
    }
  }
};
</script>
