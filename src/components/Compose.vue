<template>
    <div v-loading="loading" class="compose">
        <h2>New post</h2>
        <hr />
        <el-input placeholder="Post Title" v-model="title" />
        <vue-editor class="editor" v-model="content" :editorToolbar="customToolbar"/>
        <el-select v-model="target" placeholder="Target">
            <el-option label="Posts" value="posts" />
            <el-option label="Projects" value="projects" />
        </el-select>
        <el-input type="password" class="password" placeholder="Password" v-model="password" />
        <el-button class="postButton" @click="onClick">Post</el-button>
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
            target: '', // create post or project
            password: '',
            loading: false,
            customToolbar: [
                ['bold', 'italic', 'underline'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['image', 'code-block']
            ]
        }
    },
    props: {

    },
    methods: {
        ...mapActions('blog', [
            'uploadPost'
        ]),
        ...mapActions('projects', [
            'uploadProject'
        ]),
        onClick () {
            this.loading = true

            // function used for uploading
            let upload = null

            if (this.target === 'posts') {
                upload = this.uploadPost
            } else if (this.target === 'projects') {
                upload = this.uploadProject
            } else {
                throw new Error('Invalid upload target')
            }

            return upload({
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
    components: {
        VueEditor
    }
}
</script>

<style lang="scss">
.compose {
    .password {
        max-width: 200px;
    }
    .postButton {
        float: right;
    }
}
</style>
