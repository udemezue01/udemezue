import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate";

import post from './modules/post.js'
import portfolio from './modules/portfolio.js'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
	post,
	portfolio,
  },

  plugins: [createPersistedState()],
})
