<template>
    <div class="app-user">
        <mt-header fixed title="个人中心">
            <div slot="left" @click="goBack">
                <mt-button icon="back">返回</mt-button>
            </div>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>   
        
        <div class="headerphoto">
            <div class="hp-box">
                <img src="http://127.0.0.1:3000/img/iphonex.jpg">
            </div>
            <span>知足yy</span>
        </div>
        
        <div class="user-list-box">
            <ul class="user-list">
                <li class="user-list-item">
                    <router-link to="#" class="user-item">
                        个人资料
                        <span class="icon"></span>
                    </router-link>
                </li>
                <li class="user-list-item">
                    <router-link to="#" class="user-item">
                        我的优惠券
                        <span class="icon"></span>
                    </router-link>
                </li>
                <li class="user-list-item">
                    <router-link to="#" class="user-item">
                        常见问题
                        <span class="icon"></span>
                    </router-link>
                </li>
                <li class="user-list-item">
                    <router-link to="#" class="user-item">
                        使用条款
                        <span class="icon"></span>
                    </router-link>
                </li>
                <li class="user-list-item">
                    <router-link to="#" class="user-item">
                        我的订单
                        <span class="icon"></span>
                    </router-link>
                </li>
                <li class="user-list-item">
                    <router-link to="#" class="user-item">
                        退换/售后
                        <span class="icon"></span>
                    </router-link>
                </li>
                <li class="user-list-item">
                    <router-link to="#" class="user-item">
                        待收货
                        <span class="icon"></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 退出按钮 -->
        <mt-button type="primary" size="large" style="margin:5px 0;" @click="outLogin">退出登录</mt-button>
    </div>
</template>

<script>
import {Toast} from "mint-ui";
export default {
    data(){
        return {

        }
    },
    methods:{
        outLogin(){
            this.axios.get(`http://127.0.0.1:3000/logout`).then(res=>{
                console.log(res.data);
                if(res.data.code == 1){
                    Toast("您已退出");
                    this.$router.push("/Login");
                }
            })
        },
        goBack(){
            history.go(-1);
        }
    }
}
</script>

<style scoped>
ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
}
a{
    color: #000;
}
.headerphoto{
    width: 100%;
    height: 200px;
    background-color: #26a2ff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
}
.headerphoto .hp-box{
    width: 140px;
    height: 140px;
    overflow: hidden;
    border-radius: 50%;
    border: 4px solid  #0191ff;
    margin-bottom: 5px;
}
.headerphoto .hp-box img{
    width: 100%;
}

/* 个人中心列表 */
.user-list-box{
    margin-top: 10px;
    width: 100%;
    background-color: #fff;
}
.user-list-box .user-list-item{
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #eee;
    padding: 0 20px;
    font-size: 18px;
}
.user-list-box .user-item{
    display: flex;
    justify-content: space-between;
}
.user-list-box .user-list-item .icon{
    display: inline-block;
    width: 20px;
    height: 60px;
    background-image: url("http://127.0.0.1:3000/img/index/arrow-right.png");
    background-repeat: no-repeat;
    background-position: 50%;
}
</style>



