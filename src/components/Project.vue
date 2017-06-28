<template>
    <div v-loading="!project" class="project">
        <template v-if="project">
            <h2>{{ project.title }}</h2>
            <hr />
            <div class="project-content" v-html="project.content"></div>
        </template>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    name: 'project',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    methods: {
        ...mapActions('projects', {
            fetchProjectById: 'fetchProjectById'
        })
    },
    computed: {
        project () {
            const project = this.$store.getters['projects/getProjectById'](this.id)
            return project
        }
    },
    mounted () {
        if (!this.project) {
            this.fetchProjectById(this.id)
        }
    },
    components: {

    }
}
</script>

<style lang="scss">

.project {
    .project-content {
        padding-top: 10px;
        padding-bottom: 10px;
        * {
            max-width: 100%;
        }
    }
}
</style>
