import axios from 'axios'

// TODO: remove hardcoded url
const rest = axios.create({
    baseURL: 'http://localhost:3000/'
})

export default {

    /* POSTS */

    fetchPostsByPage: (pageNumber) => {
        return rest.get(`/posts?page=${pageNumber}`)
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
    },
    uploadPost: (postTitle, postContent, password) => {
        return rest.post('/posts', {
            title: postTitle,
            content: postContent,
            password: password
        })
        .then((res) => {
            return res.data
        })
    },

    /* PROJECTS */

    fetchProjectsByPage: (pageNumber) => {
        return rest.get(`/projects?page=${pageNumber}`)
        .then((res) => {
            return res.data
        })
    },
    fetchProjectById: (id) => {
        return rest.get(`/projects/${id}`)
        .then((res) => {
            return res.data
        })
    },
    uploadProject: (projectTitle, projectContent, password) => {
        return rest.post('/projects', {
            title: projectTitle,
            content: projectContent,
            password: password
        })
        .then((res) => {
            return res.data
        })
    },

    /* CONTACT */

    mailAdmin: (subject, htmlContent) => {
        return rest.post('/contact', {
            subject: subject,
            content: htmlContent
        }).then((res) => {
            return res.data
        })
    }
}
