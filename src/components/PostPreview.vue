<template>
    <div class="post-preview">
        <div class="preview-header">
            <router-link :to="`/posts/${post.id}`">
                <h3>{{ post.title }}</h3>
            </router-link>
            <div class="post-date">{{ moment(post.created_at).fromNow() }}</div>
        </div>
        <div class="content-preview" v-html="post.content"></div>
        <router-link class="read-more" :to="`/posts/${post.id}`">Read more</router-link>
        <hr />
    </div>
</template>

<script>

import moment from 'moment'

export default {
    name: 'post-preview',
    props: {
        post: {
            required: true
        }
    },
    methods: {

    },
    computed: {
        moment () {
            return moment
        }
    },
    components: {

    }
}
</script>

<style lang="scss">
@import '../assets/css/variables';

.post-preview {
    .preview-header {
        margin-bottom: 30px;
        margin-top: 30px;
    }
    .post-date {
        font-size: 70%;
        color: grey;
    }
    h3 {
        color: #333;
        margin-bottom: 5px;
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
    .content-preview {
        max-height: 200px;
        overflow: hidden;
    }
    .read-more {
        display: inline-block;
        margin-top: 20px;
    }
}
</style>
