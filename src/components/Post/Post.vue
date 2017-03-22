<!-- CSS -->
<style lang="stylus" src="./Post.styl"></style>

<!-- HTML -->
<template>
    <div v-if="post">
        <div class="app-header">

        <div class="title">{{post.name}}</div>
        <div class="tagline">{{post.tagline}}</div>
          <div class="tagline">{{post.user.twitter_username}}</div>
        </div>
        <div class="date">{{post.day}}</div>
        <div class="date">{{post.body}}</div>
        <div class="wrapper">
            <ul class="posts-list">
                <posts v-for="post in post.date" :proppost="date" :isInsideMaker="true" :key="post.id"></posts>
            </ul>
        </div>

        <img :src="post.thumbnail.image_url">
        <!--<span>{{ post.}}</span>-->
        <div>Nombre de commentaires :{{ post.comments_count }}</div>
    </div>
</template>

<!-- JS -->
<script>

    import axios from 'axios'
    import _ from 'lodash'

    export default {
        data() {
            return {
                post: null
            }
        },

        created() {
            this.getPost(this.$route.params.postId)
        },
        methods: {

            getPost(postId) {
                // Utilisez axios pour récupérer les posts de l'API ProductHunt
                // Variable à modifier : this.posts
                axios.get('/posts/' + postId)
                    .then((response) => {
                        this.post = response.data.post

                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }
        }

    }
</script>
