import Vue from 'vue'
import rest from '@/modules/rest'
import _ from 'lodash'

export default {
    namespaced: true,
    state: {
        posts: {},
        /**
         * {
         *  <pagenumber> : [ids of posts...]
         *  ...
         * }
         */
        pages: {},
        /**
         * <postId>: [comments]
         */
        comments: {},
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
        },
        getCommentsForPost: (state) => (postId) => {
            if (!state.comments[postId]) {
                return null
            }
            // TODO sort by date
            return state.comments[postId]
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
        },
        setCurrentPage (state, pageNumber) {
            state.currentPage = pageNumber
        },
        setComments (state, {postId, comments}) {
            Vue.set(state.comments, postId, comments)
        },
        setComment (state, {postId, comment}) {
            if (!state.comments[postId]) {
                state.comments[postId] = []
            }
            state.comments[postId].push(comment)
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
            return rest.uploadPost(post.title, post.content, post.password)
            .then((post) => {
                context.commit('setPost', post)
            })
        },
        uploadComment (context, payload) {
            const postId = payload.postId
            const content = payload.content // comment text content

            return rest.uploadComment(postId, content)
            .then((comment) => {
                context.commit('setComment', { postId, comment })
            })
        },
        fetchComments (context, postId) {
            return rest.fetchComments(postId)
            .then((comments) => {
                context.commit('setComments', { postId, comments })
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
