<!-- CSS -->
<style lang="stylus" src="./Maker.styl"></style>

<!-- HTML -->
<template>
    <div v-if="maker">
        <div class="app-header">
            <router-link :to="{ name: 'home_component' }">
                <h1 class="app-title">ProductHunt</h1>
            </router-link>
            <p class="app-tagline">Posts Of : {{maker.name}}</p>
        </div>
        <div class="wrapper">
            <ul class="posts-list">
                <posts-list-item v-for="post in maker.maker_of" :proppost="post" :isInsideMaker="true" :key="post.id"></posts-list-item>
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
                maker: null
            }
        },

        created() {
            this.getMaker(this.$route.params.makerId)
        },
        methods: {

            getMaker(makerId) {
                // Utilisez axios pour récupérer les posts de l'API ProductHunt
                // Variable à modifier : this.posts
                axios.get('/users/' + makerId)
                    .then((response) => {
                        console.log(response.data.user)
                        this.maker = response.data.user
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }

        }

    }
</script>
