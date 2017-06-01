<template>
    <div class="post-preview">
        <router-link :to="`/posts/${postId}`">
            <h3>{{ title }}</h3>
        </router-link>
        <p>{{ trimmedContent }}</p>
        <router-link :to="`/posts/${postId}`">Read more</router-link>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'post-preview',
    props: {
        postId: {
            type: Number,
            default: 0
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
        trimmedContent () {
            const CHAR_LIMIT = 255
            return this.content.substring(0, CHAR_LIMIT)
        }
    },
    components: {

    }
}
</script>

<style lang="scss">
@import '../assets/css/variables';

.post-preview {
    h3 {
        margin-bottom: 20px;
        color: #333;
    }
    h3:hover {
        text-decoration: underline;
    }
    p {
        word-wrap: break-word;
        margin-bottom: 15px;
        color: $color_gray;
    }
    a {
        font-size: 80%;
    }
}
</style>
