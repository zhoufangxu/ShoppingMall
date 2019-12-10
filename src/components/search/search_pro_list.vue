
<template>
    <div class="app-search-list">
        <div class="search-box">
            <router-link to="#">
                <i class="black" @touchend="black"></i>
            </router-link>
            <div class="search">
                <span></span>
                <input type="text" placeholder="华为笔记本" v-model="key">
            </div>
            <span class="search-text" @click="search">搜索</span>
        </div>
        <!-- 商品列表 -->
        <div class="pro-list">
            <ul>
                <li v-for="(item,i) of list" :key="i">
                    <router-link :to="`/detalis?pid=${item.lid}`" class="list-item">
                        <img src="http://127.0.0.1:3000/img/iphonex.jpg">
                        <div class="item-detalis">
                            <p class="item-title">{{item.lname}}</p>
                            <span class="item-price">{{item.price.toFixed(2)}}</span>
                            <div class="item-pl">评价条数</div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            list:[],
            key:"",
            pno:0,
            pageSize:7
        }
    },
    created(){
        this.getList();
    },
    methods:{
        getKey(val){
            this.key = val;
        },
        search(){
            this.getList();
        },
        getList(){
            this.pno++;
            this.axios.get("http://127.0.0.1:3000/search?key="+this.key+"&&pno="+this.pno+"&&pageSize="+this.pageSize).then(res=>{
            this.list = res.data.data;
               this.pno = 0;
            })
        },
         black(){
            history.go(-1);
        }
    }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    list-style: none;
    color: black;
}
.pro-list{
    width: 100%;
    margin-top: 2px;
}
.pro-list li{
    margin-bottom: 1px;
    background-color: #fff;
}
.pro-list .list-item{
    display: flex;
    justify-content: left;
    padding: 10px;
}
.pro-list .list-item img{
    width: 30%;
    display: block;
}
.pro-list .list-item .item-detalis{
    margin-left: 10px;
    display: flex;
    flex-direction: column;
}
.pro-list .list-item .item-detalis .item-title{
    font-size: 18px;
    color: #000;
    margin-bottom: 4px;
}
.pro-list .list-item .item-detalis .item-price{
    font-size: 20px;
    font-weight: bold;
    color: red;
}
.pro-list .list-item .item-detalis .item-pl{
    font-size: 13px;
    color: rgb(172, 172, 172);
}

.search-box{
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top:0;
    height: 40px;
    z-index: 99;
}
.search-box .black{
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url("http://127.0.0.1:3000/img/index/arrow-left.png");
    background-repeat: no-repeat;
}
.search-box .search{
    width: 240px;
    height: 26px;
    background-color: #f7f7f7;
    display: flex;
    justify-content: left;
    align-items: center;
    border-radius: 50px;
}
.search-box .search span{
    background-image: url("../../img/search.png");
    background-repeat: no-repeat;
    background-size: 18px 18px;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-left: 16px;
    margin-top: 1px;
}
.search-box .search input{
    width: 140px;
    border: none;
    background-color: #f7f7f7;
    height: 24px;
    margin-top: 14px;
    font-size: 12px;
}
.search-box  .search-text{
    width: 40px;
    height: 26px;
    background: #26a2ff;
    line-height: 26px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    border-radius: 5px;
}
</style>