<template>
    <div class="project-preview">
        <router-link :to="`/projects/${projectId}`">
            <h3>{{ title }}</h3>
        </router-link>
        <div class="content-preview" v-html="content"></div>
        <router-link class="read-more" :to="`/projects/${projectId}`">Read more</router-link>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'project-preview',
    props: {
        projectId: {
            type: Number,
            default: 0
        },
        title: {
            type: String,
            default: 'Project title'
        },
        content: {
            type: String,
            default: 'Project content'
        }
    },
    methods: {

    },
    components: {

    }
}
</script>

<style lang="scss">
@import '../assets/css/variables';

.project-preview {
    h3 {
        margin-bottom: 30px;
        margin-top: 30px;
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
