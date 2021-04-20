import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Visualization from '../views/Visualization.vue'
import Dataset from '../views/Dataset.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cidades/:state/:city',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/cidades/:state/:city/visao/:alias',
    name: 'Visualization',
    component: Visualization
  },
  {
    path: '/cidades/:state/:city/conjunto/:name',
    name: 'Dataset',
    component: Dataset
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

import VueRouterBackButton from 'vue-router-back-button'

Vue.use(VueRouterBackButton, { router })

export default router
