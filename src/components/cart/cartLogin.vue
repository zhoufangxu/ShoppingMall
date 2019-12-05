<template>
    <div class="cartLogin">
         <mt-header fixed title="购物车">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <div class="top_login">
            <span class="text">登录后可同步账户购物车中的商品</span>
            <span class="login" @click="login">登录</span>
        </div>  
        <div class="cart_container">
            <div class="cart_box">
                <div class="cart_img">
                    <img src="http://127.0.0.1:3000/img/cart/cart.png">
                </div>
                <p>登录后可同步购物车中商品</p>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        login(){
            this.$router.push("/Login")
        }
    }
}
</script>


<style scoped>
.top_login{
    width: 100%;
    height: 60px;
    background-color: #fff;
    margin-top: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.top_login .text{
    font-size: 14px;
    color: rgb(133, 133, 133);
}
.top_login .login{
    width: 60px;
    height: 30px;
    border-radius: 5px;
    background-color: #26a2ff;
    color: #fff;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    margin-left: 10px;
}
.cart_container{
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
}
.cart_container .cart_box{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.cart_container .cart_box .cart_img{
    display: flex;
    justify-content: center;
}
.cart_container .cart_box img{
    width: 100px;
    display: block;
}
.cart_container .cart_box p{
    font-size: 16px;
    margin-top: 10px;
}
</style>