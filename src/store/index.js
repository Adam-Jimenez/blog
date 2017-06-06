import Vuex from 'vuex'
import Vue from 'vue'
import blog from './blog'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        blog: blog
    }
})

export default store
