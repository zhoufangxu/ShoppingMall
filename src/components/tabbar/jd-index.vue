<template>
    <div class="app-index">
        <!-- 顶部背景图 -->
        <div class="bg-top"></div>
        <!-- 顶部导航栏 -->
        <div class="header">
            <span class="category" @click="goFenlei"></span>
            <div class="header-search">
                <span class="logo"></span>
                <i class="line"></i>
                <span class="search-icon"></span>
                <input type="text" class="search" placeholder="搜索" @touchend="goSearch">
            </div>
            <span class="login" v-if="userUid==1" @click="goUser">知足yy</span>
            <span class="login" @click="login" v-else>登录</span>
        </div>
        <!-- 轮播图 -->
        <div class="banner">
            <mt-swipe>
                <mt-swipe-item v-for="(item,i) of list" :key="i">
                    <img :src="item.img_url">
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <div class="dt">
            <img src="http://127.0.0.1:3000/img/dt.gif">
        </div>

        <!-- 九宫格 -->
        <div class="lattice">
            <ul>
                <li>
                    <a>
                        <img src="../../img/icon/1.webp">
                        <span>超市</span>
                    </a>
                </li>
                 <li>
                    <a>
                        <img src="../../img/icon/2.webp">
                        <span>生鲜</span>
                    </a>
                </li>
                 <li>
                    <a>
                        <img src="../../img/icon/3.webp">
                        <span>省钱</span>
                    </a>
                </li>
                 <li>
                    <a>
                        <img src="../../img/icon/4.webp">
                        <span>充值</span>
                    </a>
                </li>
                 <li>
                    <a>
                        <img src="../../img/icon/5.webp">
                        <span>拼单</span>
                    </a>
                </li>
                 <li>
                    <a>
                        <img src="../../img/icon/6.webp">
                        <span>电器</span>
                    </a>
                </li>
                 <li>
                    <a>
                        <img src="../../img/icon/7.webp">
                        <span>服装</span>
                    </a>
                </li>
                 <li>
                    <a>
                        <img src="../../img/icon/8.webp">
                        <span>领券</span>
                    </a>
                </li>
            </ul>
        </div>

        <!-- 秒杀轮播 -->
        <div class="Seckill">
            <div class="Seckill-top">
                <span class="self">秒杀专场</span>
                <span class="a-time">20点整</span>
                <div class="time-dbox">
                    <span class="time-box">01</span>
                    <span>:</span>
                    <span class="time-box">12</span>
                    <span>:</span>
                    <span class="time-box">00</span>
                </div>
                <div class="more">
                    更多秒杀
                    <span class="mui-icon mui-icon-forward"></span>
                </div>
            </div>
            <div class="Seckill-bottom">
                <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" tag="div">
                    <ul>
                        <li>
                            <router-link to="#" class="Seckill-item">
                                <img src="http://127.0.0.1:3000/img/iphone.jpg">
                                <b>¥3399</b>
                                <span>¥3699</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#" class="Seckill-item">
                                <img src="http://127.0.0.1:3000/img/iphonex.jpg">
                                <b>¥6799</b>
                                <span>¥6999</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#" class="Seckill-item">
                                <img src="http://127.0.0.1:3000/img/erji.jpg">
                                <b>¥1099</b>
                                <span>¥1299</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#" class="Seckill-item">
                                <img src="http://127.0.0.1:3000/img/xj.jpg">
                                <b>¥4299</b>
                                <span>¥4599</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#" class="Seckill-item">
                                <img src="http://127.0.0.1:3000/img/watch.jpg">
                                <b>¥2699</b>
                                <span>¥2999</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#" class="Seckill-item">
                                <img src="http://127.0.0.1:3000/img/watch.jpg">
                                <b>¥2699</b>
                                <span>¥2999</span>
                            </router-link>
                        </li>
                    </ul>
                </v-touch>
            </div>
        </div>

    <!-- 优惠券 -->

    <div class="coupon">
        <div class="coupon-left">
            <img src="http://127.0.0.1:3000/img/sbanner1.jpg">
        </div>
        <div class="coupon-right">
            <img src="http://127.0.0.1:3000/img/sbanner2.jpg">
        </div>
    </div>
    <!-- 京东小院 -->
    <div class="lc">
        <img src="http://localhost:3000/img/lc1.png" alt="">
    </div>
    <!-- 京东小院产品列表 -->
    <div class="jd-box">
        <div class="jd-top">
            <div class="jd-top-list">
                <div class="jd-title">
                    <h2>爱烘焙</h2>
                    <span>小仙女最爱的</span>
                </div>
                <div class="jd-list">
                    <ul>
                        <li>
                            <router-link to="#">
                                <img src="http://localhost:3000/img/x.jpg">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#">
                                <img src="http://localhost:3000/img/jd.jpg">
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="jd-top-list">
                <div class="jd-title">
                    <h2>爱烘焙</h2>
                    <span>小仙女最爱的</span>
                </div>
                <div class="jd-list">
                    <ul>
                        <li>
                            <router-link to="#">
                                <img src="http://localhost:3000/img/x.jpg">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#">
                                <img src="http://localhost:3000/img/jd.jpg">
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="jd-bottom">
            <ul>
                <li>
                    <router-link to="javascript;">
                        <h1>炫酷出行</h1>
                        <span>代步神器</span>
                        <img src="http://localhost:3000/img/iphonex.jpg">
                    </router-link>
                </li>
                <li>
                    <router-link to="javascript;">
                        <h1>炫酷出行</h1>
                        <span>代步神器</span>
                        <img src="http://localhost:3000/img/iphonex.jpg">
                    </router-link>
                </li>
                <li>
                    <router-link to="javascript;">
                        <h1>炫酷出行</h1>
                        <span>代步神器</span>
                        <img src="http://localhost:3000/img/iphonex.jpg">
                    </router-link>
                </li>
                <li>
                    <router-link to="javascript;">
                        <h1>炫酷出行</h1>
                        <span>代步神器</span>
                        <img src="http://localhost:3000/img/iphonex.jpg">
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

    <!-- 每日逛楼层 -->
    <div class="lc1">
        <img src="http://localhost:3000/img/lc2.png">
    </div>


    <!-- 每日逛产品列表 -->
    <div class="everyday">
        <ul>
            <li>
                <router-link to="javascript;">
                    <h1>免息星球</h1>
                    <span>白条免息购</span>
                    <img src="http://localhost:3000/img/iphone.jpg">
                </router-link>
            </li>
            <li>
                <router-link to="javascript;">
                    <h1>免息星球</h1>
                    <span>白条免息购</span>
                    <img src="http://localhost:3000/img/iphone.jpg">
                </router-link>
            </li>
            <li>
                <router-link to="javascript;">
                    <h1>免息星球</h1>
                    <span>白条免息购</span>
                    <img src="http://localhost:3000/img/iphone.jpg">
                </router-link>
            </li>
            <li>
                <router-link to="javascript;">
                    <h1>免息星球</h1>
                    <span>白条免息购</span>
                    <img src="http://localhost:3000/img/iphone.jpg">
                </router-link>
            </li>
            <li>
                <router-link to="javascript;">
                    <h1>免息星球</h1>
                    <span>白条免息购</span>
                    <img src="http://localhost:3000/img/iphone.jpg">
                </router-link>
            </li>
            <li>
                <router-link to="javascript;">
                    <h1>免息星球</h1>
                    <span>白条免息购</span>
                    <img src="http://localhost:3000/img/iphone.jpg">
                </router-link>
            </li>
            <li>
                <router-link to="javascript;">
                    <h1>免息星球</h1>
                    <span>白条免息购</span>
                    <img src="http://localhost:3000/img/iphone.jpg">
                </router-link>
            </li>
            <li>
                <router-link to="javascript;">
                    <h1>免息星球</h1>
                    <span>白条免息购</span>
                    <img src="http://localhost:3000/img/iphone.jpg">
                </router-link>
            </li>
        </ul>
    </div>

    <!-- 新闻滚动 -->
    <div class="news">
            <div class="msg">消息快报</div>
            <div class="new-msg">
                最新
                <span class="new-msg-item">面膜几天敷一次才好</span>
            </div>
            <i class="news-line"></i>
            <span class="news-more">更多</span>
    </div>

    <!-- 楼层三 为你推荐 -->
    <div class="lc2">
        <img src="http://localhost:3000/img/lc3.jpg">
    </div>

    <!-- 产品列表 -->
    <div class="products">
        <ul class="products-list">
            <li v-for="(item,i) of products_list" :key="i">
                <router-link :to=" 'detalis?pid=' + item.lid ">
                    <img :src="url + item.md">
                    <p>{{item.title}}</p>
                    <div class="products-price">
                        <span class="price">¥{{item.price.toFixed(2)}}</span>
                        <span class="addcart mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>

    <!-- 记载更多 -->
    <mt-button type="primary" size="large" @click="loadMore">加载更多</mt-button>

    
       
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
            products_list:[],
            pno:1,
            pageSize:8,
            url:"http://127.0.0.1:3000/",
            userUid:0
        }
    },
    created(){
        this.getImage();
        this.getproducts();
        this.isLogin();
    },
    methods:{
        onSwipeLeft(e){ //秒杀左滑
            console.log(e)
        },
        onSwipeRight(e){ //秒杀右滑
            console.log(e)
        },
        goFenlei(){
            this.$router.push("/fenlei");
        },
        goUser(){
            this.$router.push("/user");
        },
        isLogin(){
            this.axios.get(`http://127.0.0.1:3000/isLogin`).then(res=>{
                this.userUid = res.data.code;
         })
        },
        getImage(){
            this.axios.get("http://localhost:3000/imageList").then((res)=>{
                this.list = res.data;
            })
        },
        getproducts(){
            this.axios.get("http://localhost:3000/products").then(res=>{
                this.products_list = res.data.data;
            })
        },
        loadMore(){
            this.pno ++;
            this.axios.get("http://127.0.0.1:3000/products?pno="+this.pno+"&&pageSize="+this.pageSize).then(res=>{
                var rows = this.products_list.concat(res.data.data);
                this.products_list = rows;
            })
        },
        goSearch(){
            this.$router.push("/search");
        },
        login(){
            this.$router.push("/login");
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
ul,li{
    list-style-type: none;
}
a{
    color: black;
}
.bg-top{
    width: 100%;
    height: 120px;
    background: #26a2ff;
    position: relative;
    top: 0;
    border-radius: 0 0 20% 20%;
}
/* 顶部导航 */
.header{
    width: 100%;
    height: 50px;
    background-color: #26a2ff;
    display: flex;
    justify-content:space-around;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 9;
}
.header .category{
    width: 30px;
    height: 30px;
    background-image: url("../../img/fl.png");
    background-size: 30px 30px;

}
.header .header-search{
    display: flex;
    justify-content:left;
    align-items: center;
    background-color: #fff;
    height: 30px;
    width: 240px;
    border-radius: 50px;
}
.header .header-search .logo{
    width: 20px;
    height: 20px;
    background-image: url("../../img/logo.png");
    background-size: 20px 20px;
    margin-left: 12px;
}
.header .header-search .line{
    width: 1px;
    height: 20px;
    background-color: #26a2ff;
    margin-left: 8px;
}
.header .header-search .search-icon{
    width: 20px;
    height: 20px;
    background-image: url("../../img/search.png");
    background-size: 20px 20px;
    margin-left: 8px;
}
.header .header-search .search{
    width: 150px;
    height: 20px;
    margin-top: 15px;
    padding: 0;
    border:none;
    font-size: 14px;
    margin-left: 15px;
}
.header .login{
    font-size: 15px;
    color: #fff;
}
/* 轮播图 */
.banner{
    width: 96%;
    margin: 0 auto;
    height: 140px;
    margin-top: 8px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 5px;
    margin-top: -110px;
}
.banner img{
    width: 100%;
}

.app-index .dt{
    margin-top: 10px;
}
.app-index .dt img{
    width: 100%;
}

/* 九宫格 */
.lattice{
    width: 100%;
}
.lattice ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    font-size: 14px;
}
.lattice ul li{
    width: 25%;
    display: flex;
    flex-direction:column;
    text-align: center;
    padding: 5px 10px;
   
}
.lattice ul li img{
    width: 60px;
    display: inline-block;
}


/* 轮播秒杀 */
.Seckill{
    width: 96%;
    margin: 0 auto;
    padding: 8px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
}
.Seckill .Seckill-top{
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.Seckill .Seckill-top .self{
    font-size: 18px;
    font-weight: bold;
    margin-right: 5px;
}
.Seckill .Seckill-top .a-time{
    font-size: 14px;
    margin-right: 5px;
}
.Seckill .Seckill-top .time-dbox .time-box{
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid rgb(215, 215, 215);
    font-size: 13px;
    text-align: center;
    line-height: 18px;
}
.Seckill .Seckill-top .more{
    margin-left: 50px;
    font-size:16px;
    font-weight: bold;
    color: #26a2ff;
}
.Seckill .Seckill-bottom{
    overflow: hidden;
    width: 100%;
}
.Seckill .Seckill-bottom ul{
    width: 516px;
    display: flex;
    justify-content: start;
}
.Seckill .Seckill-bottom li{
    width: 86px;
}
.Seckill .Seckill-bottom li .Seckill-item{
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
}
.Seckill .Seckill-bottom li .Seckill-item img{
    width: 100%;
    margin-bottom: 6px;
}
.Seckill .Seckill-bottom li .Seckill-item b{
    font-size: 18px;
    color: red;
}
.Seckill .Seckill-bottom li .Seckill-item span{
    color: rgb(140, 140, 140);
    text-decoration: line-through;
}
.app-index .coupon{
    width: 96%;
    margin: 0 auto;
    margin-top: 10px;
    display: flex;
    justify-content: left;
    border-radius: 10px;
    overflow: hidden;
}
.app-index .coupon>div{
    width: 50%;
}
.app-index .coupon>div img{
    width: 100%;
    display: block;
}
/* 京东小院楼层 */
.lc{
    width: 100%;
    margin: 10px 0;
}
.lc img{
    width: 100%;
}
/* 京东小院产品列表 */
.jd-box{
    width: 96%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
}
.jd-box .jd-top{
    display: flex;
    justify-content: space-around;
}
.jd-box .jd-top .jd-title h2{
    font-size: 20px;
    background: -webkit-linear-gradient(left,#45CAFF,#1471FB);
    background: linear-gradient(90deg, #45CAFF,#1471FB);
    -webkit-background-clip: text;
    color: transparent;
}
.jd-box .jd-top .jd-title span{
    font-size: 13px;
    color: rgb(150, 150, 150);
}
.jd-box .jd-top .jd-top-list .jd-list>ul{
    display: flex;
    justify-content: space-around;
}
.jd-box .jd-top .jd-top-list .jd-list>ul img{
    width: 80px;
}
.jd-bottom{
    margin-top: 4px;
}
.jd-bottom>ul{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.jd-bottom>ul>li{
    width: 25%;
}
.jd-bottom>ul>li>a{
    display: flex;
    flex-direction: column;
}
.jd-bottom>ul>li>a h1{
    font-size: 18px;
}
.jd-bottom>ul>li>a span{
    color: rgb(164, 164, 164);
    font-size: 13px;
    margin-top: 3px;
}
.jd-bottom>ul>li>a img{
    width: 85px;
}
/* 每日逛楼层 */
.lc1{
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
}
.lc1 img{
    width: 100%;
}
/*  每日逛产品列表 */
.everyday{
    padding: 10px;
    width: 96%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
}
.everyday ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.everyday ul li{
    width: 25%;
}
.everyday ul li a{
    display: flex;
    flex-direction: column;
}
.everyday ul li a h1{
    font-size: 18px;
    background: -webkit-linear-gradient(left,#45CAFF,#1471FB);
    background: linear-gradient(90deg, rgb(255, 93, 255),rgb(251, 20, 205));
    -webkit-background-clip: text;
    color: transparent;
}
.everyday ul li a span{
    color: rgb(164, 164, 164);
    font-size: 13px;
    margin-top: 3px;
}
.everyday ul li a img{
    width: 85px;
    display: block;
}
.news{
    width: 96%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
    margin-top:10px;
    margin-bottom:10px;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 40px;
}
.news .msg{
    font-size: 18px;
    background: -webkit-linear-gradient(left,#45CAFF,#1471FB);
    background: linear-gradient(90deg, rgb(255, 93, 131),rgb(186, 59, 5));
    -webkit-background-clip: text;
    color: transparent;
    margin-left: 20px;
    margin-right: 10px;
}
.news .new-msg{
    font-size: 14px;
    color: red;
    font-weight: bold;
    margin-right:50px;
}
.news .new-msg .new-msg-item{
    font-size: 14px;
    color: rgb(152, 152, 152);
}
.news .news-line{
    width: 1px;
    height: 16px;
    background-color: rgb(152, 152, 152);
    margin-right: 5px;
}
.news .news-more{
    font-size: 14px;
}
.lc2{
    width: 96%;
    margin: 0 auto;
    background-color: #fff;
    margin-bottom: 5px;
}
.lc2 img{
    width: 100%;
}
.products{
    width: 96%;
    margin: 0 auto;
}
.products .products-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.products .products-list li{
    width: 50%;
    background-color: #fff;
    margin-bottom: 2px;
    
}
.products .products-list li a{
    display: flex;
    flex-direction: column;
    padding: 5px;
}
.products .products-list li a img{
    width: 100%;
    display: block;
    margin-bottom: 4px;
}
.products .products-list li a p{
    height: 30px;
    overflow: hidden;
    margin-bottom: 6px;
    line-height: 15px;
}
.products-price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
}
.products-price .price{
    color: red;
    font-weight: bold;
    font-size: 18px;
}
.products-price .addcart{
    color: red;
    font-size:26px;
}
</style>

