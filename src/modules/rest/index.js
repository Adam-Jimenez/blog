import axios from 'axios'
import config from '@/config'

const rest = axios.create({
    baseURL: config.backendUrl
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
    editPost: (postId, postTitle, postContent, password) => {
        return rest.put(`/posts/${postId}`, {
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
    editProject: (projectId, projectTitle, projectContent, password) => {
        return rest.put(`/projects/${projectId}`, {
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
    },

    /* COMMENTS */

    uploadComment: (postId, content) => {
        return rest.post(`/comments/${postId}`, {
            content: content
        })
        .then((res) => {
            return res.data
        })
    },

    fetchComments: (postId) => {
        return rest.get(`/posts/${postId}/comments`)
        .then((res) => {
            return res.data
        })
    }
}
