<template>
    <div v-loading="!post" class="post">
        <template v-if="post">
            <h2>{{ post.title }}</h2>
            <hr />
            <div v-html="post.content"></div>
        </template>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    name: 'post',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    methods: {
        ...mapActions({
            fetchPostById: 'fetchPostById'
        })
    },
    computed: {
        post () {
            const post = this.$store.getters.getPostById(this.id)
            return post
        }
    },
    mounted () {
        if (!this.post) {
            this.fetchPostById(this.id)
        }
    },
    components: {

    }
}
</script>

<style lang="scss">

</style>
