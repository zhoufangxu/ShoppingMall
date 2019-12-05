<template>
    <div class="app-cart">
        <!-- 头部导航 -->
        <mt-header fixed title="购物车">
            <div slot="left" @click="goBack">
                <mt-button icon="back">返回</mt-button>
            </div>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        
        <!-- adress -->
        <div class="adress-box">
            <span class="mui-icon mui-icon-location"></span>
            <span class="adress-item">朝阳区酒仙桥</span>
        </div>
        
        <!-- 购物车列表 -->
        <div class="cart-box" v-for="(item,i) of cartList" :key="i">
            <div class="cart-item">
                <input type="checkbox" class="radio" :checked="item.cb" @click="changeItem" :data-i="i">
                <img src="http://127.0.0.1:3000/img/erji.jpg">
                <div class="cart-describe">
                    <p>{{item.lname}}</p>
                    <span class="describe">白色,耳机</span>
                    <div class="price-box">
                        <span class="price">{{parseInt(item.price).toFixed(2)}}</span>
                        <div class="btn-box">
                            <span class="minus size" @click="reduce" :data-pid="item.pid" :data-count="item.count" :data-i="i">-</span>
                            <input class="size cart-count" :value="item.count">
                            <span class="add size" @click="add" :data-pid="item.pid" :data-i="i">+</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-del">
                    <span>移入关注</span>
                    <span @click="removeItem" :data-id="item.id" :data-i="i">删除</span>
            </div>
        </div>
        <div>
            <button @click="delItem">删除选中商品</button>
        </div>
        
        <!-- <div>{{cartCount}}</div> -->
        <!-- 底部全选 结算 -->
        <div class="tabbar">
            <div class="tabbar-all">
                <input type="checkbox" @click="selectAll" :checked="checkedAll">
                <span>全选</span>
            </div>
            <div class="tabbar-all-price">
                总计:
                <span>¥{{notes.toFixed(2)}}</span>
            </div>
            <div class="Settlement">
                去结算
                <span>({{number}})</span>
            </div>
        </div>
    </div>    
</template>

<script>
import {Toast,MessageBox} from 'mint-ui';
export default {
    data(){
        return{
            checkedAll:false,
            listCount:0
        }
    },
    methods:{
        goBack(){ //返回上一步
            history.go(-1);
        },
        delItem(){ //删除多个商品
           var ids = "";
           for(var item of this.cartList){
               if(item.cb){
                   ids += item.id + ",";
               }
           }
           ids = ids.substring(0,ids.length-1);
           if(ids.length != 0){
               MessageBox.confirm('确定删除?').then(action => {
               this.axios.get(`http://127.0.0.1:3000/removeMItem?ids=${ids}`).then(res=>{
                if(res.data.code == 1){
                    Toast("删除成功");
                    this.loadMore();
                    }
                })
               });
           }
        },
        removeItem(e){ //删除一个产品
           var id = e.target.dataset.id; //获得商品在购物车中的id
           var i = e.target.dataset.i;   //获得当前商品在数组中的下标
           MessageBox.confirm('确定删除?').then(action => {
                this.axios.get(`http://127.0.0.1:3000/delCartItem?id=${id}`).then(res=>{
                if(res.data.code == 1){
                    Toast("删除成功");
                    this.cartList.splice(i,1); //删除指定下标元素
                    this.loadMore();
                }
                })
            });
             
           
        },
        add(e){  //购物车添加产品数量
            var count = 1;
            var pid = e.target.dataset.pid;
            var i = e.target.dataset.i;
            this.axios.get(`http://127.0.0.1:3000/upDatecart?pid=${pid}&count=${count}`).then(res=>{
                this.$store.commit("upCartListCountAdd",i);
            })
        },
        reduce(e){  //购物车删除产品数量
            var itemCount = e.target.dataset.count;
            var count = -1;
            var pid = e.target.dataset.pid;
            var i = e.target.dataset.i;
            if(itemCount > 1){
                this.axios.get(`http://127.0.0.1:3000/upDatecart?pid=${pid}&count=${count}`).then(res=>{
                   this.$store.commit("upCartListCountReduce",i);
                })
            }else{
                Toast("最少购买1件哦")
            }
           
        },
        selectAll(e){
            var cb = e.target.checked;
            this.checkedAll = cb;
            for(var item of this.cartList){
                item.cb = cb;
            } 
        },
        changeItem(e){
            var cb = e.target.checked;
            var i = e.target.dataset.i;
            this.cartList[i].cb = cb;
            //复选框点击时获得cb为true的个数
            var count = 0;
            for(var item of this.cartList){
                if(item.cb){
                    count++;
                }
            }
            if(count == this.cartList.length){
                this.checkedAll = true;
            }else{
                this.checkedAll = false;
            }
        },
        loadMore(){
            this.axios.get("http://127.0.0.1:3000/cartlist").then(res=>{
                if(res.data.code == -1){
                    Toast("您还没有登录,请登陆");
                    return;
                }
                var rows = res.data.data;
                for(var item of rows){
                    item.cb = false;
                }
                // this.cart_list = rows;
                this.$store.commit("updataCartList",rows);
                this.$store.commit("updateCount",rows.length);
            })
        }
    },
    computed:{
        cartList:function(){
            return this.$store.getters.getCartList;
        },
        notes:function(){
            //创建变量保存总计
            var sum = 0;
            //循环item中cb为true的产品的价格，累加到sum中
            for(var item of this.cartList){
                if(item.cb){
                    sum += item.price*item.count;
                }
            }
            //返回总计
            return sum;
        },
        number:function(){
            //创建变量保存要结算商品的个数
            var count = 0;
            //遍历数组中cb为true的 累加
            for(var item of this.cartList){
                if(item.cb){
                    count += item.count;
                }
            }
            return count;
        }
    },
    created(){
       this.loadMore();
    }
}
</script>

<style scoped>
.adress-box{
    width: 100%;
    padding: 0 5px;
    height: 40px;
    border-bottom: 1px solid rgb(213, 213, 213);
    background-color: #fff;
    line-height: 40px;
}
.adress-box .adress-item{
    font-size: 14px;
    color: rgb(169, 169, 169);
}
.cart-box{
    width: 100%;
    background-color: #fff;
    padding: 20px;
    border-bottom: 1px solid rgb(181, 181, 181);
}
.cart-box .cart-item{
    width: 100%;
    display: flex;
    justify-content: left;
}
.cart-box .cart-item .radio{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border:1px solid rgb(164, 164, 164);
    margin: 0 5px;
    position: relative;
    top: 36px;
    margin: 0 10px;
}
.cart-box .cart-item img{
    width: 100px;
    margin-right: 10px;
    display: block;
}
.cart-box .cart-item .cart-describe p{
    font-size: 14px;
    color: #000;
    margin-bottom: 5px;
}
.cart-box .cart-item .cart-describe .describe{
    display: inline-block;
    width: 120px;
    height: 20px;
    background-color: rgb(238, 238, 238);
    font-size: 12px;
    color: rgb(167, 167, 167);
    padding-left: 5px;
}
.cart-box .cart-item .price-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
     margin-top: 20px;
}
.cart-box .cart-item .price-box .price{
    color: red;
    font-weight: bold;
    margin-right: 40px;
}
.cart-box .cart-item .price-box .btn-box{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.cart-box .cart-item .price-box .btn-box .size{
    width: 24px;
    height: 24px;
    border: 1px solid rgb(205, 205, 205);
    text-align: center;
    line-height: 20px;
    border-radius: 5px;
}
.cart-del{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: rgb(196, 196, 196);
    margin-top: 5px;
}

.tabbar{
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    padding-left: 5px;
    align-items: center;
}
.tabbar .tabbar-all{
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 10px;
    align-items: center;
}
.tabbar .tabbar-all input{
    width: 15px;
    height: 15px;
    border: 1px solid rgb(177, 177, 177);
    border-radius: 50%;
    margin-left: 3px;
}
.tabbar .tabbar-all span{
    font-size: 16px;
    color: rgb(177, 177, 177);
    margin-left: 5px;
}
.tabbar .tabbar-all-price{
    font-size: 16px;
    display: flex;
    align-items: center;
}
.tabbar .tabbar-all-price span{
    font-size: 20px;
    color: red;
    font-weight: bold;
    margin-left: 5px;
}
.tabbar .Settlement{
    width: 120px;
    height: 50px;
    background-color: #26a2ff;
    color: #fff;
    text-align: center;
    line-height: 50px;
}
.tabbar .Settlement span{
    font-size: 12px;
}
</style>


