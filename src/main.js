import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state:{
    cartCount:sessionStorage.getItem("cartCount")||0,  //保存购物车图标显示数量
    cartList:sessionStorage.getItem("cartList")||[]  //保存购物车列表数据
  },
  mutations:{
    //购物车中数据加1  点击商品详细[加入购物]
    increment(state){
      state.cartCount++;
    },
    //显示购物车列表时
    updateCount(state,count){
      state.cartCount=count;
      sessionStorage.setItem("cartCount",count);
    },
    
    //更新购物车列表数据
    updataCartList(state,list){
      state.cartList = list;
      sessionStorage.setItem("cartList",list);
    },

    //更新购物车中产品数量
    upCartListCountAdd(state,i){
      state.cartList[i].count += 1;
    },
    upCartListCountReduce(state,i){
      state.cartList[i].count -= 1;
    }
  },
  getters:{
    //获取购物车中数量方法
    optCartCount:function(state){
      return state.cartCount;
    },
    //获取购物车列表数据
    getCartList(state){
      return state.cartList;
    }
  }
})




import axios from 'axios'
axios.defaults.withCredentials = true;
Vue.prototype.axios = axios;
//1:引入mint-ui 样式文件
import'mint-ui/lib/style.css'
Vue.config.productionTip = false
//2:引入 mui库样式文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//3:引入mint-ui 组件 Header
import {Header,Swipe,SwipeItem,Button} from "mint-ui"

//4:注册Header组件
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);




new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
