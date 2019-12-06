<template>
    <div class="app-pay">
        <!-- 页头 -->
        <mt-header fixed title="确认订单">
            <div slot="left" @click="goBack">
                <mt-button icon="back">返回</mt-button>
            </div>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <!-- 地址 -->
        <div class="dress">
            <div>
                <span>周方旭</span>
                <span>13329311145</span>
            </div>
            <div>
                <span>默认</span>
                <span>北京市昌平区霍营街道</span>
            </div>
        </div>
        <div class="line"></div>
        <!-- 商品 -->
        <div>
            <h4>京东旗舰店</h4>
            <div>
                <img src="" alt="">
                <div>
                    <div>MUIXING木行 防辐射眼镜</div>
                    <span></span>
                    <div>
                        <span>¥69.9</span>
                        <div>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                    <div>
                        <span>支持7天无理由退货</span>
                        <span>价格说明</span>
                    </div>
                </div>
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
        goBack(){
            history.go(-1);
        }
    },
    created(){
        console.log(this.$route.query.lid)
    }
}
</script>
<style scoped>

</style>


