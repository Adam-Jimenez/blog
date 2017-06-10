<template>
    <div v-loading="!fetchedAllPosts" class="blog">
        <h2>Blog</h2>
        <hr />
        <transition-group name="fade" tag="div" class="post-container">
            <post-preview v-for="post in getOrderedPosts()"
                :key="post.id"
                :postId="post.id"
                :title="post.title"
                :content="post.content"
            />
        </transition-group>
    </div>
</template>

<script>

import PostPreview from '@/components/PostPreview'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    name: 'blog',
    props: {

    },
    methods: {
        ...mapActions([
            'fetchAllPosts'
        ]),
        ...mapGetters([
            'getOrderedPosts'
        ])
    },
    computed: {
        ...mapState({
            posts: state => state.blog.posts,
            fetchedAllPosts: state => state.blog.fetchedAllPosts
        })
    },
    mounted () {
        if (!this.fetchedAllPosts) {
            this.fetchAllPosts()
        }
    },
    components: {
        PostPreview
    }
}
</script>

<style lang="scss">
</style>
