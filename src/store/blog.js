import Vue from 'vue'
import rest from '@/modules/rest'
import _ from 'lodash'

export default {
    state: {
        posts: {},
        fetchedAllPosts: false // we only want to do it once to avoid spam
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
            const sortedPosts = _.sortBy(postsArray, (post) => {
                return new Date(post.created_at)
            }).reverse()
            return sortedPosts
        },
        getLatestPost: (state, getters) => {
            if (_.isEmpty(state.posts)) {
                return null
            }
            const sortedPosts = getters.getOrderedPosts
            const latestPost = sortedPosts[0]
            return latestPost
        }
    },
    mutations: {
        setPosts (state, posts) {
            _.each(posts, (post) => {
                Vue.set(state.posts, post.id, post)
            })
            state.fetchedAllPosts = true
        },
        setPost (state, post) {
            Vue.set(state.posts, post.id, post)
        }
    },
    actions: {
        fetchAllPosts (context) {
            return rest.fetchAllPosts()
            .then((posts) => {
                context.commit('setPosts', posts)
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
