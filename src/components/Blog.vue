<template>
    <div class="blog">
        <h2>Blog</h2>
        <hr />
        <post-preview />
        <post-preview />
        <post-preview />
        <post-preview />
        <post-preview />
    </div>
</template>

<script>

import PostPreview from '@/components/PostPreview'

export default {
    name: 'blog',
    props: {

    },
    methods: {

    },
    computed: {

    },
    components: {
        PostPreview
    }
}
</script>

<style lang="scss">

</style>
