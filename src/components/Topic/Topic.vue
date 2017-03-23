<!-- CSS -->
<style lang="stylus" src="./Topic.styl"></style>

<!-- HTML -->
<template>
    <div v-if="topic">
        <div class="app-header">
            <router-link :to="{ name: 'home_component' }">
                <h1 class="app-title">ProductHunt</h1>
            </router-link>
            <p class="app-tagline">Voici les postes de la catégorie: <b>#{{topic.name}}</b></p>
        </div>
        <div class="wrapper">
            <ul class="posts-list">
                <posts-list-item v-for="post in posts" :proppost="post" :isInsideTopic="true" :key="post.id"></posts-list-item>
            </ul>
        </div>
    </div>
</template>

<!-- JS -->
<script>
    // Import de certaines librairies nécessaires dans ce composant
    import axios from 'axios'
    import _ from 'lodash'

    // Import du composant PostsListItem
    import PostsListItem from '../PostsListItem/PostsListItem.vue'

    export default {

        components: {
            'posts-list-item': PostsListItem
        },

        data() {
            return {
                topic: null,
                posts: []
            }
        },

        created() {

            this.refreshTopic(this.$route.params.topicId)

        },
        methods: {

            refreshTopic(topicId){
                this.getTopicDetails(topicId)
                this.getPostsTopic(topicId)
            },

            getPostsTopic(topicId) {
                // Utilisez axios pour récupérer les posts de l'API ProductHunt
                // Variable à modifier : this.posts
                axios.get('/posts/all', {
                      params: {
                        "search[topic]": topicId
                      }
                    })
                    .then((response) => {
                        this.posts = response.data.posts
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            getTopicDetails(topicId) {
                // Utilisez axios pour récupérer les posts de l'API ProductHunt
                // Variable à modifier : this.posts
                axios.get('/topics/' + topicId)
                    .then((response) => {
                        this.topic = response.data.topic
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }

        }

    }
</script>