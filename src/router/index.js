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
import idManagement from '../components/idManagement'
import homepage from '../components/homepage'
import completeInformation from '../components/completeInformation'
import bookcase from '../components/bookcase'
import details from '../components/details'


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
      path:'/details',
      name:'details',
      component:details
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
    },
    {
      path:'/idManagement',
      name:'idManagement',
      component:idManagement
    },
    {
      path:'/homepage',
      name:'homepage',
      component:homepage
    },
    {
      path:'/completeInformation',
      name:'completeInformation',
      component:completeInformation
    }
  ]
})
