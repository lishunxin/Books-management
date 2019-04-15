import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import home from '../components/home'
import putTheBook from '../components/putTheBook'
import footer from '../components/footer'
import setting from '../components/setting'
import login from '../components/login'
import signin from '../components/signin'
import writeMore from '../components/writeMore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/writeMore',
      name: 'writeMore',
      component: writeMore
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
      path:'/setting',
      name:'setting',
      component:setting
    }
  ]
})
