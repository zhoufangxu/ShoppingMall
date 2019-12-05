import Vue from 'vue'
import Router from 'vue-router'
import List from "./components/List.vue"
import index from './components/tabbar/jd-index.vue'
import search from './components/search.vue'
import fenlei from './components/fenlei.vue'
import detalis from './components/detalis.vue'
import Login from './components/login/login.vue'
import user from './components/login/user.vue'
import cart from './components/cart/cart.vue'
import search_list from './components/search/search_pro_list.vue'
import cartLogin  from './components/cart/cartLogin.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',component:index},
    {path:'/List',component:List},
    {path:'/index',component:index},
    {path:'/search',component:search},
    {path:"/fenlei",component:fenlei},
    {path:"/detalis",component:detalis},
    {path:"/login",component:Login},
    {path:"/user",component:user},
    {path:"/cart",component:cart},
    {path:"/search_list",component:search_list},
    {path:"/cartLogin",component:cartLogin}
  ]
})