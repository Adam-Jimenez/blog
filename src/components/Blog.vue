<template>
    <div class="blog">
        <h2>Blog</h2>
        <hr />
        <template v-show="arePostsReady">
            <transition-group name="fade" tag="div" class="post-container">
                <post-preview v-for="post in posts"
                    :key="post.id"
                    :postId="post.id"
                    :title="post.title"
                    :content="post.content"
                />
            </transition-group>
        </template>
    </div>
</template>

<script>

import _ from 'lodash'
import PostPreview from '@/components/PostPreview'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'blog',
    props: {

    },
    methods: {
        ...mapActions([
            'fetchAllPosts'
        ])
    },
    computed: {
        ...mapState({
            posts: state => state.blog.posts
        }),
        arePostsReady () {
            return !_.isEmpty(this.posts)
        }
    },
    mounted () {
        if (!this.arePostsReady) {
            setTimeout(() => {
                this.fetchAllPosts()
            }, 1000)
        }
    },
    components: {
        PostPreview
    }
}
</script>

<style lang="scss">
</style>
