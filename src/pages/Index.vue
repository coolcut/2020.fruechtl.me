<template>
  <Layout>
    <li v-for="{ node } in $page.posts.edges" :key="node._id">
      <span>
        <h2 v-html="node.title" />
        <div v-html="node.content"></div>
      </span>
    </li>
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "2020.fruechtl.me"
  }
};
</script>
