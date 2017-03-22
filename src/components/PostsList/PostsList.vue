<!-- CSS -->
<style lang="stylus" src="./PostsList.styl"></style>

<!-- HTML -->
<template>
  <div class="wrapper">
    <div class="posts-list-filters">
      <select v-model="daysAgo" @change="getPosts(daysAgo)" name="day">
        <option v-for="day in days" :value='day'>{{selectDaysLabel(day) }}</option>
      </select>
    </div>
    <ul class="posts-list-stats">
      <li class="posts-list-stats__li" v-for="stat in stats">
        <p class="posts-list-stats__li--nbr">{{stat.count}}</p>
        <p class="posts-list-stats__li--label">{{stat.label}}</p>
      </li>
    </ul>

    <ul class="posts-list" >
      <posts-list-item v-for="post in posts" :proppost="post" :key="post.id"></posts-list-item>
    </ul>
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
        posts: null,
        daysAgo: 0,
        days: _.range(31),
        stats: {
          posts: {
            count: 0,
            label: 'Posts'
          },
          votes: {
            count: 0,
            label: 'Votes'
          },
          comments: {
            count: 0,
            label: 'Comments'
          },
          makers: {
            count: 0,
            label: 'Makers'
          }
        }
      }
    },

    created() {

      this.getPosts(this.daysAgo)

    },
    methods: {

      getPosts(selectedDay, topicId = null) {
        // Utilisez axios pour récupérer les posts de l'API ProductHunt
        // Variable à modifier : this.posts
        axios.get('/posts', {
          params: {
            days_ago: selectedDay,
            "search[topic]": topicId
          }
        })
            .then((response) => {
              console.log(response.data.posts)
              this.posts = response.data.posts
              this.countStats(this.posts)
            })
            .catch(function (error) {
              console.log(error)
            })
        

        console.log('getPosts...')
      },

      countStats(posts) {
        // Appeler cette méthode pour calculer les stats à chaque fois qu'on récupère les posts
        for (var post in this.posts) {
          this.stats.posts.count += 1
          this.stats.votes.count += this.posts[post].votes_count
          this.stats.comments.count += this.posts[post].comments_count
          this.stats.makers.count += this.posts[post].makers.length
        }
        // Calcul du nombre de postes
        // this.stats.posts.count = posts.length

        // // Calcul du nombre de votes
        // let votesTotal = 0
        // _.each(posts, function(post){
        //   votesTotal += post.votes_count 
        // })
        // this.stats.votes.count = votesTotal

        // // Calcul du nombre de commentaires
        // let commentsTotal = 0
        // _.each(posts, function(post){
        //   commentsTotal += post.comments_count 
        // })
        // this.stats.comments.count = commentsTotal

        console.log('countStats...')
      },

      selectDaysLabel(day) {
        // Retourne "Today", "Yesterday", ou "X days ago" en fonction de "day"
        let label
        if (day === 0) label = 'Today'
        else if (day === 1) label = 'Yesterday'
        else label = `${day} days ago`
        return label
      }

    }

  }

</script>
