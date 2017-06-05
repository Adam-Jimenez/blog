<template>
    <div class="post">
        <h2>{{ title }}</h2>
        <hr />
        <p>{{ content }}</p>
    </div>
</template>

<script>
export default {
    name: 'post',
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            default: 'Post title'
        },
        content: {
            type: String,
            default: 'Post content'
        }
    },
    methods: {

    },
    computed: {

    },
    components: {

    }
}
</script>

<style lang="scss">

</style>
