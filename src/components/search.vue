<template>
    <div class="app-search">
        <!-- 顶部搜索栏 -->
        <searching></searching>
        <!-- 热门关键词 -->
        <div class="hot-text">
            <div class="hot-top">
                <div>热门搜索</div>
                <span>隐藏</span>
            </div>
            <div class="hot-list">
                <div class="hot-active">榨汁机</div>
                <div class="hot-active">拼装模型</div>
                <div class="hot-active">按摩器</div>
                <div>电压力锅</div>
                <div>风信子种球</div>
                <div>不锈钢汤锅</div>
                <div>仙人球防辐射</div>
                <div>脸部卸妆油</div>
                <div>浴霸</div>
                <div>玻璃白板</div>
                <div>空气净化器</div>
                <div>笔记本声卡</div>
            </div>
        </div>
    </div>    
</template>


<script>
import search from './search/searching.vue'
export default {
    data(){
        return{

        }
    },
    methods:{
        black(){
            history.go(-1);
        }
    },
    components:{
        "searching":search
    }
}
</script>


<style scoped>
.app-search .hot-text{
    width: 100%;
    padding: 10px;
    padding-bottom: 2px;
    background-color: #fff;
    margin-top: 2px;
}
.app-search .hot-text .hot-top{
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    font-size: 16px;
    margin-bottom: 8px;
}
.app-search .hot-text .hot-top span{
    color: #acacac;
}
.app-search .hot-text .hot-list{
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
}
.app-search .hot-text .hot-list div{
    display: inline-block;
    background: #eeeeee;
    padding: 3px 6px;
    font-size: 12px;
    color: #8c8c8c;
    margin-right: 10px;
    margin-bottom: 10px;
}
.app-search .hot-text .hot-list div.hot-active{
    color: #26a2ff;
}
</style>