import axios from 'axios'

const rest = axios.create({
    baseURL: 'http://localhost:3000/'
})

export default {
    fetchAllPosts: () => {
        return rest.get('/posts')
        .then((res) => {
            return res.data
        })
    },
    fetchPostById: (id) => {
        return rest.get(`/posts/${id}`)
        .then((res) => {
            return res.data
        })
    },
    fetchLatestPost: () => {
        return rest.get('/posts/latest')
        .then((res) => {
            return res.data
        })
    }
}
