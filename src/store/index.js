import Vuex from 'vuex'
import Vue from 'vue'
import blog from './blog'
import projects from './projects'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        blog: blog,
        projects: projects
    }
})

export default store
