import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Portfolio from '../views/Portfolio.vue'

// The Blog List and Detail

import BlogList from '../views/Blog/Blog-List.vue'
import BlogDetail from '../views/Blog/Blog-Detail.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },

    {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },

     {
    path: '/blog',
    name: 'Blog',
    component: BlogList
  },


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
