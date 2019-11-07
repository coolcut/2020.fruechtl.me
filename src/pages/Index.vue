<template>
  <Layout>
    <section>
      <article v-for="{ node } in $page.posts.edges" :key="node._id">
        <h2>{{node.title}}</h2>
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
var MarkdownIt = require("markdown-it")();

export default {
  metaInfo: {
    title: "Blog"
  },

  methods: {
    markdownToHTML(content) {
      return MarkdownIt.render(content);
    }
  }
};
</script>
