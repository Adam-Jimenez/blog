<template>
    <div class="comment-section" v-loading="loading">
        <strong>Comments</strong>
        <div class="comment">
            INSERT FETCHED COMMENTS HERE
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
            'uploadComment'
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

    },
    components: {
        VueEditor
    }
}
</script>

<style lang="scss">
.comment-section {
    .comment {
        margin-top: 20px;
        padding: 15px;
    }
    .new-comment-box {
        margin-top: 40px;
    }
    .postComment {
        margin-top: 5px;
    }
}
</style>
