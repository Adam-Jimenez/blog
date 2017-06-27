import Vue from 'vue'
import rest from '@/modules/rest'
import _ from 'lodash'
import { Notification } from 'element-ui'

export default {
    namespaced: true,
    state: {
        projects: {},
        /**
         * {
         *  <pagenumber> : [ids of project...]
         *  ...
         * }
         */
        pages: {},
        currentPage: 0,
        totalNumberOfPages: null
    },
    getters: {
        getProjectById: (state) => (id) => {
            return state.projects[id]
        },
        getProjectsByPageNumber: (state) => (pageNumber) => {
            const projectIdsForPage = state.pages[pageNumber]
            if (!projectIdsForPage) {
                return null
            }
            const projects = _.map(projectIdsForPage, (projectId) => {
                return state.projects[projectId]
            })
            const sortedProjects = sortProjectByDate(projects)
            return sortedProjects
        },
        getProjectsForCurrentPage: (state, getters) => {
            return getters.getProjectsByPageNumber(state.currentPage)
        }
    },
    mutations: {
        setProjects (state, projects) {
            _.each(projects, (project) => {
                Vue.set(state.projects, project.id, project)
            })
        },
        setProject (state, project) {
            Vue.set(state.projects, project.id, project)
        },
        setPage (state, page) {
            // page.page = page number and references array of project ids
            const pageNumber = page.page
            const projectIds = _.map(page.data, (project) => {
                return project.id
            })
            Vue.set(state.pages, pageNumber, projectIds)
            state.totalNumberOfPages = page.totalNumberOfPages
        },
        setCurrentPage (state, pageNumber) {
            state.currentPage = pageNumber
        }
    },
    actions: {
        fetchProjectsByPage (context, pageNumber) {
            return rest.fetchProjectsByPage(pageNumber)
            .then((page) => {
                context.commit('setProjects', page.data)
                context.commit('setPage', page)
            })
            .catch(notifyError)
        },
        fetchProjectById (context, id) {
            return rest.fetchProjectById(id)
            .then((project) => {
                context.commit('setProject', project)
            })
            .catch(notifyError)
        },
        uploadProject (context, project) {
            return rest.uploadProject(project.title, project.content, project.password)
            .then((project) => {
                context.commit('setProject', project)
            })
            .catch(notifyError)
        }
    }
}

function sortProjectByDate (projects) {
    const sortedProjects = _.sortBy(projects, (project) => {
        return new Date(project.created_at)
    }).reverse()
    return sortedProjects
}

function notifyError (err) {
    Notification.error({
        message: err.message,
        duration: 2000
    })
    throw err
}
