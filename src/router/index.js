import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import home from '../components/home'
import putTheBook from '../components/putTheBook'
import footerWrap from '../components/footer-wrap'
import setting from '../components/setting'
import login from '../components/login'
import signin from '../components/signin'
import writeMore from '../components/writeMore'
import bookcase from '../components/bookcase'
import detail from '../components/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/bookcase',
      name:'bookcase',
      component:bookcase
    },
    {
      path:'/detail',
      name:'detail',
      component:detail
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
      path: '/',
      name:'home',
      component:home
    },
    {
      path:'/putTheBook',
      name:'putTheBook',
      component:putTheBook
    },
    {
      path:'/footer-wrap',
      name:'footer-wrap',
      component:footerWrap
    },
    {
      path:'/setting',
      name:'setting',
      component:setting
    }
  ]
})
