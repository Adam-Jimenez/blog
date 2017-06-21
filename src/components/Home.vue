<template>
    <div class="home">
        <h2>Latest post</h2>
        <hr />
        <post-preview v-if="latestPost"
            :postId="latestPost.id"
            :title="latestPost.title"
            :content="latestPost.content"
        />
    </div>
</template>
<script>
import PostPreview from '@/components/PostPreview'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'home',
    props: {

    },
    methods: {
        ...mapActions('blog', [
            'fetchLatestPost'
        ]),
        ...mapGetters('blog', [
            'getLatestPost'
        ])
    },
    computed: {
        latestPost () {
            return this.getLatestPost()
        }
    },
    mounted () {
        if (!this.latestPost) {
            this.fetchLatestPost()
        }
    },
    components: {
        PostPreview
    }
}
</script>
<style lang="scss">
</style>
