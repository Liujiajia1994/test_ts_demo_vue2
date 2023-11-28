// import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

const routes: Array<VueRouter.RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/error/404View.vue')
  },
  {
    path: '/calculator/:id',
    name: 'calculator',
    component: () => import('../views/CalculatorView.vue'),
  },
  {
    path: "/:catchAll(.*)", // 不识别的path自动匹配404
    redirect: '/404',
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
