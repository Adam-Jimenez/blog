<template>
    <!-- TODO fix for pagination -->
    <div v-loading="!getPostsForCurrentPage" class="blog">
        <h2>Blog</h2>
        <hr />
        <post-preview v-for="post in getPostsForCurrentPage"
            :key="post.id"
            :postId="post.id"
            :title="post.title"
            :content="post.content"
        />
        <div v-if="totalNumberOfPages">
            <el-pagination
                layout="prev, pager, next"
                :current-page="currentPage + 1"
                :page-count="totalNumberOfPages"
                @current-change="onPageChange"
            />
        </div>
    </div>
</template>

<script>

import PostPreview from '@/components/PostPreview'
import $ from 'jquery'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    name: 'blog',
    props: {

    },
    methods: {
        ...mapActions([
            'fetchPostsByPage'
        ]),
        onPageChange (targetPage) {
            // -1 because state is zero-indexed
            this.$store.commit('setCurrentPage', targetPage - 1)

            // scroll back to top of content
            const toolbarHeight = $('.nav-main').height()
            const offsetTop = $('.content').offset().top - toolbarHeight
            $('html, body').animate({
                scrollTop: offsetTop
            })
        }
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
