<template>
    <div class="home" v-loading="loading">
        <h2>Latest post</h2>
        <hr />
        <post-preview v-if="latestPost"
            :post="latestPost"
        />
    </div>
</template>
<script>
import PostPreview from '@/components/PostPreview'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'home',
    data () {
        return {
            loading: false
        }
    },
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
            this.loading = true
            this.fetchLatestPost()
            .then(() => {
                this.loading = false
            })
        }
    },
    components: {
        PostPreview
    }
}
</script>
<style lang="scss">
</style>
