import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/ListMobs.vue'
import Mob from '../views/Mob.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'ListMobs',
    component: Home
  },
  {
    path: '/mob/:mob_name',
    name: 'Mob',
    component: Mob
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL, // process.env.BASE_URL,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/don-t-starve-encyclopedia/'
  : '/',
  routes
})

export default router
