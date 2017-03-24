<!-- CSS -->
<style lang="stylus" src="./PostsListItem.styl"></style>

<!-- HTML -->
<template>
	<li class="posts-list-item" >
		<router-link :to="{ name: 'post_component', params: { postId: proppost.id} }">
			<div  class="posts-list-item__a">
				<img :src="proppost.thumbnail.image_url" alt="post image">
			</div>
			<h2 class="posts-list-item__h2">{{proppost.name}}</h2>
		</router-link>
		<p class="posts-list-item__p">{{proppost.votes_count}} Votes</p>
		<h4 class="posts-list-item__h4">{{proppost.tagline}}</h4>
		<ul class="posts-list-item__topics">
			<li v-for="topic in proppost.topics" :key="topic.id">
				<router-link v-if="!isInsideTopic" :to="{ name: 'topic_component', params: { topicId: topic.id } }">
					#{{topic.name}}
				</router-link>
				<a v-if="isInsideTopic" @click="$parent.refreshTopic(topic.id)">#{{topic.name}}</a>
			</li>
		</ul>
		<ul class="posts-list-item__makers">
			<li v-if="!proppost.makers.length">Without Author</li>
			<li v-if="proppost.makers.length"></li>
			<li v-for="(maker, index) in proppost.makers">
				<router-link v-if="!isInsideMaker" :to="{ name: 'maker_component', params: { makerId: maker.id } }">{{maker.name}}</router-link>
				<a v-if="isInsideMaker" @click='$parent.getMaker(maker.id)'>{{maker.name}}</a>
			</li>
		</ul>
	</li>
</template>

<!-- JS -->
<script>

  export default {
	props: ['proppost', 'isInsideMaker', 'isInsideTopic']
  }

</script>
