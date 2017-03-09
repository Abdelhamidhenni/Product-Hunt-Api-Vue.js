<!-- CSS -->
<style lang="stylus" src="./PostsListItem.styl"></style>

<!-- HTML -->
<template>

  <li class="posts-list-item">

    <div><img :src="proppost.thumbnail.image_url" alt=""></div>
    <span>{{ proppost.name }}</span>
    <span>{{proppost.votes_count}} upvotes</span>
    <span>{{ proppost.tagline }}</span>
  </li>

</template>

<!-- JS -->
<script>

  export default {

    props: ['proppost']

  }

</script>
