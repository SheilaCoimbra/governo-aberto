import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Visualization from '../views/Visualization.vue'
import Dataset from '../views/Dataset.vue'
import Projects from '../views/Projects.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Governo Aberto"
    }
  },
  {
    path: '/projetos',
    name: 'Projects',
    component: Projects,
    meta: {
      title: "Governo Aberto - Projetos"
    }
  },
  {
    path: '/cidades/:state/:city',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      title: "Governo Aberto - Painel"
    }
  },
  {
    path: '/cidades/:state/:city/visao/:alias',
    name: 'Visualization',
    component: Visualization,
    meta: {
      title: "Governo Aberto - Visão"
    }
  },
  {
    path: '/cidades/:state/:city/conjunto/:name',
    name: 'Dataset',
    component: Dataset,
    meta: {
      title: "Governo Aberto - Conjunto"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

const DEFAULT_TITLE = 'Governo Aberto';
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router
