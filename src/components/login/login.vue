<template>
    <div class="app-login">
        <mt-header fixed title="登录注册">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>   

        <!-- 用户名密码输入框 -->
        <div class="login-box">
            <div class="input-border">
                <input type="text" placeholder="用户名／邮箱／手机号" v-model="uname">
            </div>
            <div class="input-border input-pwd">
                <input type="password" placeholder="请输入密码" v-model="upwd">
                <i></i>
                <span>忘记密码</span>
            </div>
        </div>

        <div class="login-btns">
            <div class="login-btnd" @touchend="login">登录</div>
            <div class="login-btny">一键登录</div>
            <div class="login-ks">
                <span>短信验证码登录</span>
                <span>手机快速注册</span>
            </div>
        </div>
        
        <div class="other-login">
            <h4>
                <div>其他登录方式</div>
            </h4>
            <div class="other-login-btn">
                <div class="other-qq login-b">
                    <i class="mui-icon mui-icon-qq"></i>
                    <span>QQ</span>
                </div>
                <div class="other-wx login-b">
                    <i class="mui-icon mui-icon-weixin"></i>
                    <span>微信</span>
                </div>
            </div>
            <p>登录即代表您已同意<router-link to="#" class="active">隐私政策</router-link></p>
        </div>

    </div>    
</template>


<script>
import {Toast} from 'mint-ui';
export default {
    data(){
        return{
            uname:"",
            upwd:""
        }
    },
    methods:{
        login(){
            var u = this.uname,
                p = this.upwd;
            var reg = /^[a-z0-9]{3,12}$/i;
            if(!reg.test(u)){
                Toast("用户名格式不正确");
                return;
            }
            if(!p){
                Toast("密码不能为空");
                return;
            }
            this.axios.get("http://127.0.0.1:3000/login?uname="+u+"&&upwd="+p).then(res=>{
                if(res.data.code==1){
                    this.axios.get(`http://127.0.0.1:3000/cartlist`).then(res=>{
                        var rows = res.data.data;
                        this.$store.commit("updateCount",rows.length);
                    })
                    Toast("登录成功");
                    this.$router.push("/user");
                }else{
                    Toast(res.data.msg)
                }
            })

        }
    }
}
</script>

<style scoped>
.app-login{
    background-color: #fff;
}
.login-box{
    width: 100%;
    padding: 20px 20px;
}
.login-box input{
    border: none;
    margin-bottom: 0;
    height: 40px;
}
.login-box .input-border{
    border-bottom: 1px solid rgb(240, 240, 240);
    height: 60px;
}
.login-box .input-border input{
    margin-top: 10px;
    padding-left: 0;
    font-size: 16px;
}
.login-box .input-pwd{
    display: flex;
    justify-content: left;
    align-items: center;
}
.login-box .input-pwd input{
    width: 240px;
}
.login-box .input-pwd i{
    margin-top: 10px;
    width: 1px;
    height: 30px;
    line-height: 30px;
    background-color: rgb(211, 211, 211);
    margin-right: 16px;
}
.login-box .input-pwd span{
    width: 80px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: rgb(159, 159, 159);
    margin-top: 10px;
    font-size: 16px;
}
.app-login .login-btns{
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    padding-top: 0px;
}
.app-login .login-btns .login-btnd{
    width: 100%;
    height: 56px;
    background-color: #26a2ff;
    border-radius: 30px;
    text-align: center;
    line-height: 56px;
    color: #fff;
    font-size: 18px;
}
.app-login .login-btns .login-btny{
    width: 100%;
    height: 56px;
    border: 2px solid #26a2ff;
    margin-top: 10px;
    border-radius: 30px;
    color: #26a2ff;
    line-height: 56px;
    text-align: center;
    font-size: 18px;
    margin-bottom: 20px;
}
.app-login .login-btns .login-ks{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: rgb(126, 126, 126);
}


.app-login .other-login{
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    
}
.app-login .other-login h4{
    font-size: 14px;
    color: rgb(193, 193, 193);
    border-bottom: 1px solid rgb(193, 193, 193);
    position: relative;
    margin-bottom: 40px;
}
.app-login .other-login>h4>div{
    position: absolute;
    background-color: #fff;
    width: 160px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    left: 50%;
    margin-left: -80px;
    top: -10px;
}
.app-login .other-login .other-login-btn{
    display: flex;
    justify-content: center;
}
.app-login .other-login .other-login-btn .login-b{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 60px;
    height: 60px;
    color:rgb(193, 193, 193);
    font-size: 14px;
}
.app-login .other-login .other-login-btn .other-qq i{
    color: #26a2ff;
}
.app-login .other-login .other-login-btn .other-wx i{
    color: #26ff63;
}
.app-login .other-login p{
    width: 100%;
    text-align: center;
    color: rgb(193, 193, 193);
    margin-bottom: 25px;
}
</style>

