<template>
    <div v-loading="!getProjectsForCurrentPage" class="projects">
        <h2>Projects</h2>
        <hr />
        <transition-group tag="div" name="scroll" >
            <project-preview v-for="project in projectsForCurrentPage"
                :key="project.id"
                :projectId="project.id"
                :title="project.title"
                :content="project.content"
            />
        </transition-group>
        <div class="pagination-section" v-if="totalNumberOfPages">
            <el-pagination
                layout="prev, pager, next"
                :current-page="currentPage + 1"
                :page-count="totalNumberOfPages"
                @current-change="onPageChange"
            />
        </div>
    </div>
</template>

<script>

import ProjectPreview from '@/components/ProjectPreview'
import $ from 'jquery'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    name: 'projects',
    data () {
        return {
            projectsForCurrentPage: []
        }
    },
    props: {

    },
    methods: {
        ...mapActions('projects', [
            'fetchProjectsByPage'
        ]),
        onPageChange (targetPage) {
            // -1 because state is zero-indexed
            this.$store.commit('projects/setCurrentPage', targetPage - 1)

            // scroll back to top of content
            const toolbarHeight = $('.nav-main').height()
            const offsetTop = $('.content').offset().top - toolbarHeight
            $('html, body').animate({
                scrollTop: offsetTop
            })
        }
    },
    computed: {
        ...mapState('projects', {
            currentPage: state => state.currentPage,
            totalNumberOfPages: state => state.totalNumberOfPages
        }),
        ...mapGetters('projects', [
            'getProjectsForCurrentPage'
        ])
    },
    watch: {
        currentPage (value) {
            if (!this.getProjectsForCurrentPage) {
                this.fetchProjectsByPage(this.currentPage)
            }
        },
        getProjectsForCurrentPage (projects) {
            if (projects && projects.length > 0) {
                this.projectsForCurrentPage = projects
            }
        }
    },
    mounted () {
        if (!this.getProjectsForCurrentPage) {
            this.fetchProjectsByPage(this.currentPage)
        } else {
            this.projectsForCurrentPage = this.getProjectsForCurrentPage
        }
    },
    components: {
        ProjectPreview
    }
}
</script>

<style lang="scss">
.pagination-section {
    text-align: center;
}
.scroll-enter-active {
    transition: all 1s;
}
.scroll-leave-active {
    display: none;
}
.scroll-enter {
    opacity: 0;
}

</style>
