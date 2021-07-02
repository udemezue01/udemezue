import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'


// The Blog List and Detail

import BlogDetail from '../views/Blog/Blog-Detail.vue'

// The portfolio List and Detail

import PortfolioDetail from '../views/Portfolio/Portfolio-Detail.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('../views/Landing.vue')
  },

  // Portfolio List and Detail
    {
    path: '/portfolio',
    name: 'Portfolio-List',
    component: () => import('../views/Portfolio/Portfolio-List.vue')
  },

     {
    path: '/portfolio/:id',
    name: 'Portfolio-Detail',
    component: () => import('../views/Portfolio/Portfolio-Detail.vue')
  },

  // Blog List and Detail

     {
    path: '/blog',
    name: 'Blog-List',
    component: () => import('../views/Blog/Blog-List.vue')
  },

       {
    path: '/blog/:slug',
    name: 'Blog-Detail',
    component: () => import('../views/Blog/Blog-Detail.vue')
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
