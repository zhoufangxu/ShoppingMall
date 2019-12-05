<template>
    <div class="app-details">
    	<!-- 顶部导航 -->
        <mt-header fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>   

        <!-- 详情页轮播图 -->
       
        <mt-swipe class="product-banner" :auto="0">
            <mt-swipe-item v-for="(item,i) of pics" :key="i">
                <img :src="'http://127.0.0.1:3000/' + item.md">
            </mt-swipe-item>
        </mt-swipe>
        
        
        <div class="mui-card">
				<div class="mui-card-header">
                    <div>
                        销售价:
                        <span class="price">¥{{product.price.toFixed(2)}}</span>
                    </div>
                </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						{{product.title}}
					</div>
				</div>
				<div class="mui-card-footer">{{product.subtitle}}</div>
		</div>

        <div class="addCart">
            <router-link to="#" class="Cart-icon">
                <i class="mui-icon mui-icon-chat"></i>
                <span>联系客服</span>
            </router-link>
            <router-link  to="#" class="Cart-icon">
                <i class="mui-icon mui-icon-home"></i>
                <span>进店</span>
            </router-link>
            <router-link  to="/cart" class="Cart-icon cart_box">
                <i class="mui-icon-extra mui-icon-extra-cart"></i>
                <span>购物车</span>
                <span class="cart_count">{{$store.getters.optCartCount}}</span>
            </router-link>
            <span class="addCart-btn" @click="addCart">加入购物车</span>
            <span class="buy">立即购买</span>
        </div>
    </div>    
</template>

<script>
import {Toast} from 'mint-ui';
export default {
    data(){
        return{
            lid:this.$route.query.pid,
            pics:[],
            product:{
                price:0,
                title:""
            },
            specs:[]
        }
    },
    created(){
        this.getDetalis();
    },
    methods:{
        getDetalis(){
            this.axios.get("http://127.0.0.1:3000/detalis?lid="+this.lid).then(res=>{
                console.log(res.data);
                this.pics = res.data.pics;
                this.product = res.data.product;
                this.specs = res.data.specs;
            })
        },
        addCart(){
            //1:参数 pid count uid price
            var pid = this.lid,
                price = this.product.price;
                this.axios.get(`http://127.0.0.1:3000/addcart?pid=${pid}&price=${price}`).then(res=>{
                    if(res.data.code==1){
                        Toast("添加成功");
                        this.$store.commit("increment");
                    }
                    if(res.data.code == 2){
                        Toast("添加成功");
                    }
                })
        }
    }
}
</script>

<style scoped>
.product-banner{
    height: 380px;
}
.product-banner img{
    width: 100%;
}
.mui-card{
    margin: 0;
}
.mui-card .price{
    font-size:22px;
    font-weight: bold;
    color: red;
}
.mui-card .mui-card-content-inner{
    padding: 10px;
    font-size: 18px;
}
.mui-card .mui-card-footer{
    padding: 5px;
}
.addCart{
    width: 100%;
    height: 51px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    z-index: 100;
    display: flex;
    justify-content: left;
    padding: 0 0 0 5px;
}
.addCart .Cart-icon{
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgb(160, 160, 160);
    font-size: 14px;
    text-align: center;
    margin-right: 21px;
}
.addCart span.addCart-btn{
    width: 90px;
    height: 51px;
    text-align: center;
    line-height: 51px;
    color: #fff;
    font-size: 16px;
    background-color: rgb(252, 99, 4);
}
.addCart span.buy{
    width: 91px;
    height: 51px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 51px;
    background-color: #26a2ff;
}
.cart_box{
    position: relative;
}
.cart_count{
    position: absolute;
    background-color: red;
    color: #fff;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    text-align: center;
    line-height: 24px;
    left: 20px;
    top: 2px;
}
</style>


