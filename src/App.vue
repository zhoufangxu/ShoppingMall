<template>
 <div class="app-container">
    <router-view></router-view>
    
   <!-- tabbar -->
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/index" @click.native="change">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/fenlei" @click.native="change">
          <span class="mui-icon mui-icon mui-icon-bars"></span>
          <span class="mui-tab-label">分类</span>
        </router-link>
        <div class="mui-tab-item" @click="goCart">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                      <span class="mui-badge">{{$store.getters.optCartCount}}</span>
                  </span>
          <span class="mui-tab-label">购物车</span>
        </div>
        <div class="mui-tab-item" :class="isLogin == true?'router-link-active':''" @click="goLogin">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">我的</span>
        </div>
		</nav>
      
 </div>
</template>


<script>
import {Toast} from 'mint-ui';
  export default {
    data(){
      return{
       isLogin:false
      }
    },
    methods:{
        change(){
          this.isLogin = false;
        },
       goCart(){
         this.isLogin = false;
         this.axios.get("http://127.0.0.1:3000/isLogin").then(res=>{
           if(res.data.code == -1){
             Toast("您还没有登录");
             this.$router.push("/cartLogin");
           }else{
             this.$router.push("/cart")
           }
         })
       },
       goLogin(){
         this.axios.get(`http://127.0.0.1:3000/isLogin`).then(res=>{
            if(res.data.code == 1){
              this.$router.push("/user");
              this.isLogin = true;
            }else{
              this.$router.push("/Login");
              this.isLogin = false;
            }
         })
       }
    }
  }
</script>


<style>
.app-container{
  padding-top:40px;
  padding-bottom:50px;
  overflow-x:hidden;
}
.mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
.app-container .mui-bar-tab .router-link-active{
  color: #007aff;
}
.mui-icon .mui-badge{
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
}
</style>
