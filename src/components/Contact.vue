<template>
    <div v-loading="loading" class="contact">
        <h2>Contact</h2>
        <hr />
        <vue-editor class="editor" v-model="content" :editorToolbar="customToolbar"/>
        <el-button @click="onClick">Send message</el-button>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
    name: 'contact',
    data () {
        return {
            content: '',
            customToolbar: [
                ['bold', 'italic', 'underline'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['image']
            ],
            loading: false
        }
    },
    props: {

    },
    methods: {
        onClick () {
            // TODO: implement message sending mechanism
            this.loading = true
            setTimeout(() => {
                this.$notify.success({
                    message: 'Message sent successfully!',
                    duration: 2000
                })
                this.loading = false
            }, 1000)
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
</style>
