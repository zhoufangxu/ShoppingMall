<template>
    <div class="app-search">
        <!-- 顶部搜索栏 -->
        <div class="search-box">
            <router-link to="#">
                <i class="black" @touchend="black"></i>
            </router-link>
            <div class="search">
                <span></span>
                <input type="text" placeholder="华为笔记本" v-model="key" @click="goFenlei">
            </div>
            <span class="search-text" @click="search">搜索</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            key:"",
            pno:0,
            pageSize:7,
            list:[]
        }
    },
    methods:{
        black(){
            history.go(-1);
        },
        search(){
            this.pno++;
            this.axios.get("http://127.0.0.1:3000/search?key="+this.key+"&pno="+this.pno+"&pageSize="+this.pageSize).then(res=>{
                this.list = res.data.data;
                this.$router.push("/search_list");
               
            })
        },
        goFenlei(){
            this.$router.push("/search");
        }
    }
}
</script>

<style scoped>
.app-search .search-box{
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
.app-search .search-box .black{
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url("http://127.0.0.1:3000/img/index/arrow-left.png");
    background-repeat: no-repeat;
}
.app-search .search-box .search{
    width: 240px;
    height: 26px;
    background-color: #f7f7f7;
    display: flex;
    justify-content: left;
    align-items: center;
    border-radius: 50px;
}
.app-search .search-box .search span{
    background-image: url("../../img/search.png");
    background-repeat: no-repeat;
    background-size: 18px 18px;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-left: 16px;
    margin-top: 1px;
}
.app-search .search-box .search input{
    width: 140px;
    border: none;
    background-color: #f7f7f7;
    height: 24px;
    margin-top: 14px;
    font-size: 12px;
}
.app-search .search-box  .search-text{
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
