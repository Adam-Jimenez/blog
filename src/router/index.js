import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import About from '@/components/About'
import NotFound from '@/components/NotFound'
import Projects from '@/components/Projects'
import Post from '@/components/Post'
import Compose from '@/components/Compose'
import Project from '@/components/Project'
import PostEditor from '@/components/PostEditor'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/blog',
            component: Blog
        },
        {
            path: '/posts/:id',
            component: Post,
            props: true // passes route params as props to component
        },
        {
            path: '/:postType/:id/edit', //  postType is either projects or posts
            component: PostEditor,
            props: true // passes route params as props to component
        },
        {
            path: '/about',
            component: About
        },
        // TODO: fix mail sending before re-enabling route
        // {
        //     path: '/contact',
        //     component: Contact
        // },
        {
            path: '/projects',
            component: Projects
        },
        {
            path: '/projects/:id',
            component: Project,
            props: true
        },
        {
            path: '/compose',
            component: Compose
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})
