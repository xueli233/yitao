import Vue from 'vue'
import Router from 'vue-router'
import navList from '../components/NavList'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'navList',
      components: navList
    }
  ]
})
