import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import home from '../components/home'
import putTheBook from '../components/putTheBook'
import footer from '../components/footer'
import setting from '../components/setting'

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
      path:'/putTheBook',
      name:'putTheBook',
      component:putTheBook
    },
    {
      path:'footer',
      name:'footer',
      component:footer
    },
    {
      path:'/',
      name:'setting',
      component:setting
    }
  ]
})
