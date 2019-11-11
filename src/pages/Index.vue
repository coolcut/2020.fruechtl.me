<template>
  <Layout>
    <section>
      <article v-for="{ node } in $page.posts.edges" :key="node._id">
        <h2>{{node.title}}</h2>
        <time :datetime="node.publishDate">{{humanReadableDate(node.publishDate)}}</time>
        <div v-html="markdownToHTML(node.body)"></div>
      </article>
    </section>
  </Layout>
</template>

<page-query>
query {
  posts: allContentfulBlogpost {
    edges {
      node {
        id
        title
        publishDate
        body
      }
    }
  }
}
</page-query>

<script>
const Marked = require("marked");
import moment from "moment";

export default {
  metaInfo: {
    title: "Blog"
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
