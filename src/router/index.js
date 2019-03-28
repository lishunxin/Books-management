import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import home from '../components/home'
import putTheBook from '../components/putTheBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name:'home',
      component:home
    },
    {
      path:'/',
      name:'putTheBook',
      component:putTheBook
    }
  ]
})
