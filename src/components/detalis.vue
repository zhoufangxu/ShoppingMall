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
            <span class="buy" @click="buy">立即购买</span>
        </div>



    <!-- 立即购买浮层 -->
    <div class="details_purchase" v-if="isShow">
        <div class="close_box">
             <span class="top_close" @click="close">x</span>
        </div>
        <div class="product_box">
            <img :src=" 'http://127.0.0.1:3000/' + pics[0].md ">
            <div class="product_price">
               <span>¥{{product.price.toFixed(2)}}</span> 
               <p>已选:{{model}}</p>
            </div>
        </div>
        <div class="product_model">
            <span>颜色</span>
            <div class="items">
                <router-link class="item" :data-spec="item.spec" v-for="(item,i) of specs" :key="i" :class="`${item.lid==lid?'active':''}`" :to="`/detalis?pid=${item.lid}`" @click.native="change">{{item.spec}}</router-link> 
            </div>
        </div>
        <div class="line"></div>
        <div class="sub_btn" @click="goPay">确定</div>
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
            specs:[],
            isShow:false,
            model:""
        }
    },
    created(){
        this.getDetalis();
    },
    methods:{
        goPay(){
            this.$router.push("/pay?lid="+this.lid);
        },
        getDetalis(){
            this.axios.get("http://127.0.0.1:3000/detalis?lid="+this.lid).then(res=>{
                this.pics = res.data.pics;
                this.product = res.data.product;
                this.specs = res.data.specs;
                //循环specs中lid等于 data中lia的规格信息，赋值给model 
                for(var item of res.data.specs){
                    if(item.lid == this.lid){
                        this.model =item.spec ;
                    }
                }
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
        },
        buy(){//立即购买
            this.isShow = true;
            console.log(this.pics);
            console.log(this.product);
            console.log(this.specs);
        },
        close(){//关闭
            this.isShow = false;
        },
        change(e){ //规格列表修改
            this.model = e.target.dataset.spec;
        }
    },
    watch:{
        $route(e){
            this.lid = e.query.pid;  //获取当前地址栏中pid值，修改data中lid
            this.getDetalis();  //在次更新详情页
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
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
    left: 20px;
    top: 2px;
}

/* 立即购买 */
.details_purchase{
    width: 100%;
    background-color: #fff;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    position: fixed;
    bottom: 0;
    z-index: 999;
    box-shadow: 0px -10px 30px #dadada;
}
.details_purchase .close_box{
    width: 100%;
    text-align: right;
    margin-bottom: 2px;
}
.details_purchase .top_close{
    display: inline-block;
    text-align: center;
    width: 20px;
    height: 20px;
    line-height: 18px;
    background-color: #26a2ff;
    border-radius: 10px;
    color: rgb(245, 245, 245);
}
.details_purchase .product_box{
    width: 100%;
    display: flex;
    justify-content: left;
}
.details_purchase .product_box img{
    width: 120px;
    margin-right: 16px;
}
.details_purchase .product_box .product_price{
    display: flex;
    justify-content:flex-end;
    flex-direction: column;
    align-items: flex-start; 
}
.details_purchase .product_box span{
    font-size: 20px;
    color: red;
}
.details_purchase .product_model{
    border-top: 1px solid rgb(244, 244, 244);
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding-top:10px;
}
.details_purchase .product_model span{
    color: balck;
    font-size: 16px;
    margin-bottom: 10px;
}
.details_purchase .product_model .items{
    display: flex;
    justify-content:left;
    flex-wrap: wrap;
}
.details_purchase .product_model .item{
    background-color: #f2f2f2;
    padding: 2px 10px;
    border-radius: 50px;
    color: #000;
    margin: 5px 0;
}
.details_purchase .product_model .active{
    background-color: red;
    color: #fff;
}
.details_purchase .line{
    width: 100%;
    height: 1px;
    background-color: rgb(244, 244, 244);
    margin-top: 10px;
    margin-bottom: 10px;
}
.details_purchase .sub_btn{
    width: 100%;
    height: 40px;
    background-color: #26a2ff;
    border-radius: 20px;
    color: #fff;
    text-align: center;
    line-height: 40px;
}
</style>


