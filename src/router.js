import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home/Home.vue')
    }, {
    	path: '/city',
      name: 'city',
      component: () => import('./views/city/City.vue')
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('./views/detail/Detail.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x:0, y:0 }
  }
})
