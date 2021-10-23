import { createRouter, createWebHashHistory } from 'vue-router'

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
