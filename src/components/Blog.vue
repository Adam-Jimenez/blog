<template>
    <!-- TODO fix for pagination -->
    <div v-loading="!getPostsForCurrentPage" class="blog">
        <h2>Blog</h2>
        <hr />
        <transition-group name="fade" tag="div" class="post-container">
            <post-preview v-for="post in getPostsForCurrentPage"
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
            'fetchPostsByPage'
        ])
    },
    computed: {
        ...mapState({
            currentPage: state => state.blog.currentPage,
            totalNumberOfPages: state => state.blog.totalNumberOfPages
        }),
        ...mapGetters([
            'getPostsForCurrentPage'
        ])
    },
    watch: {
        currentPage (value) {
            if (!this.getPostsForCurrentPage) {
                this.fetchPostsByPage(this.currentPage)
            }
        }
    },
    mounted () {
        if (!this.getPostsForCurrentPage) {
            this.fetchPostsByPage(this.currentPage)
        }
    },
    components: {
        PostPreview
    }
}
</script>

<style lang="scss">
</style>
