import Vue from 'vue'
import rest from '@/modules/rest'
import _ from 'lodash'

export default {
    state: {
        posts: {},
        /**
         * {
         *  <pagenumber> : [ids of posts...]
         *  ...
         * }
         */
        pages: {},
        currentPage: 0,
        totalNumberOfPages: null,
        fetchedLatestPost: false
    },
    getters: {
        getPostById: (state) => (id) => {
            return state.posts[id]
        },
        /*
         * Sorts by date
         */
        getOrderedPosts: (state) => {
            if (_.isEmpty(state.posts)) {
                return null
            }
            const postsArray = _.toArray(state.posts)
            const sortedPosts = sortPostByDate(postsArray)
            return sortedPosts
        },
        getLatestPost: (state, getters) => {
            if (!state.fetchedLatestPost) {
                return null
            }
            // TODO: instead of sorting, just iterate and keep most recent
            const sortedPosts = getters.getOrderedPosts
            const latestPost = sortedPosts[0]
            return latestPost
        },
        getPostsByPageNumber: (state) => (pageNumber) => {
            const postIdsForPage = state.pages[pageNumber]
            if (!postIdsForPage) {
                return null
            }
            const posts = _.map(postIdsForPage, (postId) => {
                return state.posts[postId]
            })
            const sortedPosts = sortPostByDate(posts)
            return sortedPosts
        },
        getPostsForCurrentPage: (state, getters) => {
            return getters.getPostsByPageNumber(state.currentPage)
        }
    },
    mutations: {
        setPosts (state, posts) {
            _.each(posts, (post) => {
                Vue.set(state.posts, post.id, post)
            })
        },
        setPost (state, post) {
            Vue.set(state.posts, post.id, post)
        },
        setPage (state, page) {
            // page.page = page number and references array of post ids
            const pageNumber = page.page
            const postIds = _.map(page.data, (post) => {
                return post.id
            })
            Vue.set(state.pages, pageNumber, postIds)
            state.totalNumberOfPages = page.totalNumberOfPages
        }
    },
    actions: {
        fetchPostsByPage (context, pageNumber) {
            return rest.fetchPostsByPage(pageNumber)
            .then((page) => {
                context.commit('setPosts', page.data)
                context.commit('setPage', page)
            })
        },
        fetchPostById (context, id) {
            return rest.fetchPostById(id)
            .then((post) => {
                context.commit('setPost', post)
            })
        },
        fetchLatestPost (context) {
            return rest.fetchLatestPost()
            .then((post) => {
                context.commit('setPost', post)
                context.state.fetchedLatestPost = true
            })
        },
        uploadPost (context, post) {
            // TODO: authentification,
            // or else we are vulnerable to XSS
            return rest.uploadPost(post.title, post.content)
            .then((post) => {
                context.commit('setPost', post)
            })
        }
    }
}

function sortPostByDate (posts) {
    const sortedPosts = _.sortBy(posts, (post) => {
        return new Date(post.created_at)
    }).reverse()
    return sortedPosts
}
