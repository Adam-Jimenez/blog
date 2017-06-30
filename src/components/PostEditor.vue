<template>
    <div v-loading="loading" class="post-editor">
        <h2>Edit post</h2>
        <hr />
        <el-input placeholder="Post Title" v-model="title" />
        <vue-editor class="editor" v-model="content" :editorToolbar="customToolbar"/>
        <el-input type="password" class="password" placeholder="Password" v-model="password" />
        <el-button class="postButton" @click="onClick">Save</el-button>
        </div>
    </template>

    <script>

import { VueEditor } from 'vue2-editor'
import { mapActions } from 'vuex'

export default {
    name: 'compose',
    data () {
        return {
            title: '',
            content: '',
            password: '',
            loading: false,
            customToolbar: [
                ['bold', 'italic', 'underline', 'link'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['image', 'code-block']
            ]
        }
    },
    props: {
        postType: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    },
    methods: {
        ...mapActions('blog', [
            'editPost'
        ]),
        ...mapActions('projects', [
            'editProject'
        ]),
        onClick () {
            this.loading = true

            // function used for uploading
            let upload = null

            if (this.postType === 'posts') {
                upload = this.editPost
            } else if (this.postType === 'projects') {
                upload = this.editProject
            } else {
                throw new Error('Invalid upload target')
            }

            return upload({
                id: this.id,
                title: this.title,
                content: this.content,
                password: this.password
            })
            .then(() => {
                this.$notify.success({
                    message: 'Posted successfully!',
                    duration: 2000
                })
            })
            // no finally :(
            .then(() => {
                this.loading = false
            })
            .catch(() => {
                this.loading = false
            })
        }
    },
    computed: {
    },
    mounted () {
        /**
            the following is a mess to load
            the correct data in the editor
            depending on whether we are looking at a post or a project
        */
        let fetchAction = null
        let post = null
        if (this.postType === 'posts') {
            post = this.$store.state.blog.posts[this.id]
            fetchAction = 'blog/fetchPostById'
        } else if (this.postType === 'projects') {
            post = this.$store.state.projects.projects[this.id]
            fetchAction = 'projects/fetchProjectById'
        }
        let promise = Promise.resolve()
        if (!post) {
            promise = this.$store.dispatch(fetchAction, this.id)
        }
        promise.then(() => {
            if (this.postType === 'posts') {
                post = this.$store.state.blog.posts[this.id]
            } else if (this.postType === 'projects') {
                post = this.$store.state.projects.projects[this.id]
            }
            this.content = post.content
            this.title = post.title
        })
    },
    components: {
        VueEditor
    }
}
</script>

<style lang="scss">
.post-editor {
    .password {
        max-width: 200px;
    }
    .postButton {
        float: right;
    }
}
</style>
