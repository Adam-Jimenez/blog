import rest from '@/modules/rest'
import promises from '@/constants/promises'

export default {
    state: {
        posts: [],
        requestState: null
    },
    mutations: {
        setPosts: function (state, posts) {
            state.posts = posts
        },
        setRequestState (state, requestState) {
            state.requestState = requestState
        }
    },
    actions: {
        fetchAllPosts: function (context) {
            context.commit('setRequestState', promises.PENDING)
            rest.fetchAllPosts()
            .then((posts) => {
                context.commit('setPosts', posts)
                context.commit('setRequestState', promises.FULFILLED)
            })
            .catch((err) => {
                context.commit('setRequestState', promises.REJECTED)
                throw err
            })
        }
    }
}
