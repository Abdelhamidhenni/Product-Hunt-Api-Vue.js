<!-- CSS -->
<style lang="stylus" src="./PostsListItem.styl"></style>

<!-- HTML -->
<template>

  <ul class="posts-list-item">
    <router-link :to="{ name: 'post_component', params: { postId: proppost.id } }">
    <div><img :src="proppost.thumbnail.image_url" alt=""></div>
    <h3>{{ proppost.name }}</h3>
    <li id="grey">{{proppost.votes_count}} upvotes</li>
    <li>{{ proppost.tagline }}</li>
    </router-link>

  </ul>

</template>

<!-- JS -->
<script>

  export default {

    props: ['proppost']

  }

</script>
