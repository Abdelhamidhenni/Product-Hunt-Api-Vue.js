<!-- CSS -->
<style lang="stylus" src="./PostsListItem.styl"></style>

<!-- HTML -->
<template>

  <ul class="posts-list-item">

    <div><img :src="proppost.thumbnail.image_url" alt=""></div>
    <h3>{{ proppost.name }}</h3>
    <li id="grey">{{proppost.votes_count}} upvotes</li>
    <li>{{ proppost.tagline }}</li>
  </ul>

</template>

<!-- JS -->
<script>

  export default {

    props: ['proppost']

  }

</script>
