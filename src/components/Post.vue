<template>
    <div v-loading="!post" class="post">
        <template v-if="post">
            <h2>{{ post.title }}</h2>
            <hr />
            <div class="post-content" v-html="post.content"></div>
            <hr />
            <comment-section :postId="id" />
        </template>
    </div>
</template>

<script>

import { mapActions } from 'vuex'
import CommentSection from '@/components/CommentSection'

export default {
    name: 'post',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    methods: {
        ...mapActions('blog', {
            fetchPostById: 'fetchPostById'
        })
    },
    computed: {
        post () {
            const post = this.$store.getters['blog/getPostById'](this.id)
            return post
        }
    },
    mounted () {
        if (!this.post) {
            this.fetchPostById(this.id)
        }
    },
    components: {
        CommentSection
    }
}
</script>

<style lang="scss">
.post {
    .post-content {
        padding-top: 10px;
        padding-bottom: 10px;
        * {
            max-width: 100%;
        }
    }
}
</style>
