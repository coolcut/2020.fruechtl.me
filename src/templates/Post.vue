<template>
  <Layout>
    <div v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    content
  }
}
</page-query>


<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>
