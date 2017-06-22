<template>
    <div class="comment-section" v-loading="loading">
        <strong>Comments</strong>
        <div class="comments">
            <div v-for="comment in comments" class="comment">
                <div class="author">Anonymous</div>
                <div class="date">{{ moment(comment.created_at).fromNow() }}</div>
                <div class="comment-content" v-html="comment.content"></div>
            </div>
        </div>
        <vue-editor
            :editorToolbar="customToolbar"
            v-model="newComment"
            placeholder="Share your thoughts"
            class="new-comment-box"
        />
        <el-button class="postComment" @click="postComment">Post comment</el-button>
    </div>
</template>

<script>

import { VueEditor } from 'vue2-editor'
import { mapActions } from 'vuex'
import moment from 'moment'

export default {
    name: 'comment-section',
    data () {
        return {
            newComment: '',
            loading: false,
            customToolbar: [
                ['bold', 'italic', 'underline'],
                [{ 'list': 'ordered' }, {'list': 'bullet'}],
                ['image', 'code-block']
            ]
        }
    },
    props: {
        postId: {
            required: true
        }
    },
    methods: {
        ...mapActions('blog', [
            'uploadComment',
            'fetchComments'
        ]),
        postComment () {
            this.loading = true
            this.uploadComment({
                postId: this.postId,
                content: this.newComment
            })
            .then(() => {
                this.$notify.success({
                    message: 'Posted successfully!',
                    duration: 2000
                })
                this.loading = false
            })
        }
    },
    computed: {
        comments () {
            const comments = this.$store.getters['blog/getCommentsForPost'](this.postId)
            return comments
        },
        moment () {
            return moment
        }
    },
    mounted () {
        if (!this.comments) {
            this.loading = true
            this.fetchComments(this.postId)
            .then(() => {
                this.loading = false
            })
        }
    },
    components: {
        VueEditor
    }
}
</script>

<style lang="scss">
.comment-section {
    .comments {
        padding: 20px;
    }
    .comment {
        font-size: 80%;
        margin-bottom: 20px;
        .author {
            font-weight: 600;
            display: inline-block;
            margin-right: 5px;
        }
        .date {
            font-size: 80%;
            display: inline-block;
            color: grey;
        }
        .comment-content {
            padding-top :5px;
            padding-left: 5px;
            word-wrap: break-word;
        }
    }
    .postComment {
        margin-top: 5px;
    }
}
</style>
