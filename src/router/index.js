import { createRouter, createWebHashHistory } from 'vue-router'
import store                                  from '@/store'

const routes = [{
  path:      `/`,
  meta:      { label: `Home` },
  component: () => import(`../views/home.vue`),
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router