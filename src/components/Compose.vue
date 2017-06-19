<template>
    <div v-loading="loading" class="compose">
        <h2>New post</h2>
        <hr />
        <el-input placeholder="Post Title" v-model="title" />
        <vue-editor class="editor" v-model="content" :editorToolbar="customToolbar"/>
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
            password: '',
            loading: false,
            customToolbar: [
                ['bold', 'italic', 'underline'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['image', 'code']
            ]
        }
    },
    props: {

    },
    methods: {
        ...mapActions([
            'uploadPost'
        ]),
        onClick () {
            this.loading = true
            this.uploadPost({
                title: this.title,
                content: this.content,
                password: this.password
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
.compose {
    .password {
        max-width: 200px;
    }
    .postButton {
        float: right;
    }
}
</style>
