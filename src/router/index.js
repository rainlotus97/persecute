import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
 
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/birth',
    name: 'Birth',
    component: () => import( '../views/festival/birth.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
