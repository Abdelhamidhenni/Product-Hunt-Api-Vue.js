<!-- CSS -->
<style lang="stylus" src="./Post.styl"></style>

<!-- HTML -->
<template>
      <div v-if="post">
          <div class="app-header">

          <div class="title">{{post.name}}</div>
          <div class="tagline">{{post.tagline}}</div>
            <div class="tagline"><a target="_blank" :href="userTwit">@{{post.user.twitter_username}}</a></div>
          </div>
          <div class="date">{{post.day}}</div>
          <div class="date">{{post.body}}</div>`
          <div class="wrapper">
              <ul class="posts-list">
                  <posts v-for="post in post.date" :proppost="date" :isInsideMaker="true" :key="post.id"></posts>
              </ul>
          </div>

          <img :src="post.thumbnail.image_url">
          <div>Nb Comments :{{ post.comments_count }}</div>
        <ul id="comments">
          <div class="title">Comments:</div>
          <li v-for="comment in post.comments">
          <div class="comment-user">{{ comment.user.name}}:</div>
            <div class="comment-body">{{ comment.body }}</div>
          </li>
        </ul>


      </div>
</template>

<!-- JS -->
<script>

    import axios from 'axios'
    import _ from 'lodash'

    export default {
        data() {
            return {
                post: null,
                comments:null

            }
        },
      computed:{
           userTwit(){
               return `http://twitter.com/${this.post.user.twitter_username}`
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
