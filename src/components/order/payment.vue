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
        <div class="address">
            <div class="address-item">
                <span class="address-name">周方旭</span>
                <span class="address-phone">133****1145</span>
            </div>
            <div class="address-two">
                <span class="address-two-default">默认</span>
                <span class="address-two-info">北京市昌平区霍营街道北京市昌平区霍营街道北京市昌平区霍营街道北京市昌平区霍营街道北京市昌平区霍营街道</span>
            </div>
        </div>
        <div class="line"></div>
        <!-- 商品 -->
        <div class="bus-box">
            <h4>京东旗舰店</h4>
            <div class="bus-info-box">
                <img src="http://127.0.0.1:3000/img/iphone.jpg">
                <div class="bus-info">
                    <div class="bus-title">MUIXING木行 防辐射眼镜</div>
                    <span class="bus-spec">规格</span>
                    <div class="bus-price-box">
                        <span class="bus-price">¥69.9</span>
                        <div class="btn-box">
                            <span class="btn-red">-</span>
                            <span class="btn-count">1</span>
                            <span class="btn-add">+</span>
                        </div>
                    </div>
                    <div class="bus-bottm-info">
                        <span>支持7天无理由退货</span>
                        <span>价格说明</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 付款按钮 -->
        <div class="btn-pay1">货到付款</div>
        <div class="btn-pay2">在线支付</div>
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
.app-pay .address{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #fff;
}
.app-pay .address .address-item{
    display: flex;
    justify-content: left;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 6px;
} 
.app-pay .address .address-item .address-name{
    margin-right: 10px;
}
.address .address-two{
    display: flex;
    justify-content: left;
    width: 100%;
}
.address .address-two .address-two-default{
    color: red;
    font-size: 12px;
    border: 1px solid red;
    padding: 0 2px;
    margin-right: 5px;
    width: 20%;
    text-align: center;
    height: 20px;
    line-height: 20px;
}
.address .address-two .address-two-info{
    font-size: 14px;
    color: rgb(60, 60, 60);

}
.line{
    width: 100%;
    height: 6px;
}
.bus-box{
    width: 100%;
    background-color: #fff;
    padding: 10px;
}
.bus-box h4{
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-weight: normal;
    border-bottom: 1px solid rgb(227, 227, 227);
    padding-bottom: 10px;
    margin-bottom: 10px;
}
.bus-box .bus-info-box{
    width: 100%;
    display: flex;
    justify-content:space-around;
}
.bus-box .bus-info-box img{
    width: 100px;
    height: 100px;
}
.bus-box .bus-info-box .bus-info{
    display: flex;
    flex-direction: column;
}
.bus-box .bus-info-box .bus-info .bus-title{
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 2px;
}
.bus-box .bus-info-box .bus-info .bus-spec{
    font-size: 14px;
    color: rgb(177, 177, 177);
    margin-bottom: 2px;
}
.bus-box .bus-info-box .bus-info .bus-price-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.bus-box .bus-info-box .bus-info .bus-price-box .bus-price{
    color: red;
}
.bus-box .bus-info-box .bus-info .bus-price-box .btn-box{
    display: flex;
    justify-content: left;
    width: 40%;
}
.bus-box .bus-info-box .bus-info .bus-price-box .btn-box span{
    width: 33.333%;
    height: 28.4px;
    text-align: center;
    line-height: 28px;
    border: 1px solid rgb(227, 227, 227);
    border-radius: 5px;
}
.bus-box .bus-info-box .bus-info .bus-bottm-info{
    margin-top: 10px;
    font-size: 12px;
    color: rgb(187, 187, 187);
    display: flex;
    justify-content: space-between;
}
.btn-pay1{
    width: 96%;
    margin: 10px auto;
    background-color: rgb(187, 240, 148);
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: rgb(127, 193, 80);
    border-radius: 8px;
}
.btn-pay2{
    width: 96%;
    margin: 10px auto;
    background-color:#3884ff;
    height: 50px;
    border-radius: 8px;
    color: #fff;
    text-align: center;
    line-height: 50px;


}
</style>


