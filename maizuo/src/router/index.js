import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
  path: '/fimlsdetail',
  name: 'fimlsdetail',
  component: () => import( '../views/Fimlsdetail.vue'),
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import( '../views/Detail.vue'),
    children: [
      {
        path: 'nowPlaying',
        component: () => import('../views/NowPlaying.vue')
      }, {
        path: 'comingSoon',
        component: () => import('../views/ComingSoon.vue')
      }
    ],
    redirect: "/detail/nowPlaying"

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
