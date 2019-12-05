<template>
   <div id="vertical-content" class="content" style="display: none;">
       <search></search>
    <div class="classify-list">
        <div class="category-wrapper clear">
          <div class="menu-category">
            <div class="swiper-container nav-list">
                <div class="swiper-wrapper">
                <div v-for = "(slide, index) in classifyLeft" :key = "slide.id"
                :class="['swiper-slide slide', {sidehigh: index === curIndex}]" @click="changeTab (index, $event)">
                    {{slide.title}}
                </div>
                </div>
            </div>
          </div>
          <div class="category-list">
            <ul class="food-list">
                <li v-for="item of classifyRight" :key="item.id">
                <router-link :to="{ query: {id: item.id, cid: curIndex}}">
                    <img :src="item.url">
                    <p>{{item.title}}</p>
                </router-link>
                </li>
            </ul>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import search from './search/searching.vue';
export default {
    data(){
        return{
            classifyLeft: [
                {id: 1, title: '中式快餐'},
                {id: 2, title: '饮品'},
                {id: 3, title: '小吃'},
                {id: 4, title: '甜品烘焙'},
                {id: 5, title: '西式快餐'},
                {id: 6, title: '海鲜'},
                {id: 7, title: '烤肉'},
                {id: 8, title: '韩餐'},
                {id: 9, title: '小吃'},
                {id: 10, title: '甜品烘焙'},
                {id: 11, title: '西式快餐'},
                {id: 12, title: '甜品烘焙'},
                {id: 13, title: '韩餐'},
                {id: 14, title: '中式快餐'},
                {id: 15, title: '面条'},
                {id: 16, title: '中式快餐'},
                {id: 17, title: '甜品烘焙'},
            ],
      classifyRight: [
                {id: 1, title: '奇异果', url: 'http://127.0.0.1:3000/img/products-s/p1.jpg'},
                {id: 2, title: '车厘子', url: 'http://127.0.0.1:3000/img/products-s/p2.jpg'},
                {id: 3, title: '苹果', url: 'http://127.0.0.1:3000/img/products-s/p3.jpg'},
                {id: 4, title: '梨', url: 'http://127.0.0.1:3000/img/products-s/p4.jpg'},
                {id: 5, title: '香蕉', url: 'http://127.0.0.1:3000/img/products-s/p5.jpg'},
                {id: 6, title: '西瓜', url: 'http://127.0.0.1:3000/img/products-s/p6.jpg'},
                {id: 7, title: '牛油果', url: 'http://127.0.0.1:3000/img/products-s/p7.jpg'},
                {id: 8, title: '凤梨', url: 'http://127.0.0.1:3000/img/products-s/p8.jpg'},
                {id: 9, title: '榴莲', url: 'http://127.0.0.1:3000/img/products-s/p9.jpg'},
      ],
      tmp: [
                {id: 1,
                list: [
                    {id: 1, title: '奇异果', url: 'http://127.0.0.1:3000/img/products-s/p9.jpg'},
                    {id: 2, title: '车厘子', url: 'http://127.0.0.1:3000/img/products-s/p8.jpg'},
                    {id: 3, title: '苹果', url: 'http://127.0.0.1:3000/img/products-s/p7.jpg'},
                    {id: 4, title: '梨', url: 'http://127.0.0.1:3000/img/products-s/p6.jpg'},
                    {id: 5, title: '香蕉', url: 'http://127.0.0.1:3000/img/products-s/p5.jpg'},
                    {id: 6, title: '西瓜', url: 'http://127.0.0.1:3000/img/products-s/p4.jpg'},
                    {id: 7, title: '牛油果', url: 'http://127.0.0.1:3000/img/products-s/p3.jpg'},
                    {id: 8, title: '凤梨', url: 'http://127.0.0.1:3000/img/products-s/p2.jpg'},
                    {id: 9, title: '榴莲', url: 'http://127.0.0.1:3000/img/products-s/p1.jpg'}
                ]
                },
                {id: 2,
                list: [
                    {id: 1, title: '米', url: 'http://127.0.0.1:3000/img/products-s/p1.jpg'},
                    {id: 2, title: '面', url: 'http://127.0.0.1:3000/img/products-s/p2.jpg'},
                    {id: 3, title: '杂粮', url: 'http://127.0.0.1:3000/img/products-s/p3.jpg'},
                    {id: 4, title: '油', url: 'http://127.0.0.1:3000/img/products-s/p4.jpg'},
                    {id: 5, title: '干货', url: 'http://127.0.0.1:3000/img/products-s/p5.jpg'},
                    {id: 6, title: '调味料', url: 'http://127.0.0.1:3000/img/products-s/p6.jpg'},
                    {id: 7, title: '果干/零食', url: 'http://127.0.0.1:3000/img/products-s/p7.jpg'},
                    {id: 8, title: '凤梨', url: 'http://127.0.0.1:3000/img/products-s/p8.jpg'},
                    {id: 9, title: '榴莲', url: 'http://127.0.0.1:3000/img/products-s/p9.jpg'}
                ]
                },
                {id: 3,
                list: [
                    {id: 1, title: '汉堡', url: 'http://127.0.0.1:3000/img/products-s/p4.jpg'},
                    {id: 2, title: '牛排', url: 'http://127.0.0.1:3000/img/products-s/p5.jpg'}
                ]
                }
        ], 
      curIndex: 0,
      mySwiper: false,
      swiperWidth: '',
      maxTranslate: '',
      maxWidth: '',
      position: ''
        }
    },
    mounted () {
        document.getElementById('vertical-content').style.display = 'block';
        var that = this;
        that.mySwiper = new Swiper('.nav-list', {
        direction: 'vertical',
        slidesPerView: 'auto',
        observeParents: true,
        observer: true
        });
        that.swiperHeight = that.mySwiper.$el[0].offsetHeight
        that.maxTranslate = that.mySwiper.maxTranslate();
        that.maxHeight = -that.maxTranslate + that.swiperHeight / 2
        that.mySwiper.on('click', function(swiper) {
        if(that.curIndex === this.clickedIndex){
            return;
        }
        that.curIndex = this.clickedIndex;
        var slide, slideTop, slideHeight, slideCenter, nowTlanslate;
        slideTop = that.position;
        slideHeight = swiper.target.offsetHeight;
        slideCenter = slideTop + slideHeight / 2;
        if (slideCenter <= that.swiperHeight / 2) {
            that.mySwiper.setTransition(300)
            that.mySwiper.setTranslate(0)
        } else if (slideCenter >= that.maxHeight) {
            that.mySwiper.setTransition(300)
            that.mySwiper.setTranslate(that.maxTranslate)
        } else {
            that.mySwiper.setTransition(300)
            nowTlanslate = slideCenter - that.swiperHeight / 2
            that.mySwiper.setTranslate(-nowTlanslate)                    
        }
        })
    },
    methods:{
         changeTab (index, $event) {
            this.position = $event.path[0].offsetTop;
            var id = index + 1
            for (var i=0;i < this.tmp.length;i++) {
            if (this.tmp[i].id === id) {
                this.classifyRight = this.tmp[i].list
                return false
            }else{
                this.classifyRight = []
          }
        }
      }
    },
    components:{
        search
    }
}
</script>


<style scoped>
    /* @rem: 50rem; */
/* reset css */
body,dd,dl,form,h1,h2,h3,h4,h5,h6,input,ol,p,select,textarea,ul{margin:0;padding:0}li{list-style:none}img{border:none;display:block;width:100%}article,aside,blockquote,body,button,code,dd,details,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,hr,input,legend,li,menu,nav,ol,p,pre,section,select,td,textarea,th,ul{outline:0;border:none;background-color:transparent}a,button,input{-webkit-tap-highlight-color:transparent}body *{-webkit-text-size-adjust:100%}button,input{-webkit-appearance:none}em,i{font-style:normal}textarea{resize:none}div{-webkit-highlight:none;-webkit-tap-highlight-color:transparent}a{text-decoration:none;-webkit-highlight:none;-webkit-tap-highlight-color:transparent;color:#000}a:hover{opacity:.9}.fl{float:left}.fr{float:right}.clear:after,.clear:before{content:"";display:table}.clear:after{content:"";display:block;height:0;clear:both;visibility:hidden}html{width:100%;height:100%}body{width:100%;height:100%;background-color:#fff;font-family: "PingFangSC", Arial, Helvetica, STHeiTi, sans-serif;}
b,strong,h1,h2,h3,h4,h5,h6{font-size: 14px;font-weight:normal;}
.hidden {
  display: none;
}
.hide {
    display: none!important;
}
body,
textarea,
input,
select {
  font-size: 14px;
  color: #222222;
  font-weight: normal;
  font-family: "PingFangSC","Helvetica Neue", Helvetica, STHeiTi, 'Microsoft Yahei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  outline: none;
}
.part-masker{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;right: 0;bottom: 0;
    left: 0;
    z-index: 9;
}
.masker {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;right: 0;bottom: 0;
  left: 0;
  z-index: 9;
}
* { touch-action: pan-y; } 
/* // 修改输入框placeholder文字默认颜色 */
  ::-webkit-input-placeholder { /* WebKit browsers */
    /* color: #b9b9b9;
    font-size: 30/@rem; */
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    /* color: #b9b9b9;
    font-size: 30/@rem; */
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    /* color: #b9b9b9;
    font-size: 30/@rem; */
  }
/* // @media (min-width: 1170px){
//     body{
//         max-width: 1170px;
//         margin: 0 auto;
//     }
// } */
#toast{
    position: fixed;
    top: 44%;left:50%;transform: translateX(-50%);
    min-width: 80px;
    max-width: 180px;
    min-height: 18px;
    padding: 10px;
    line-height: 18px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    display: none;
    z-index: 999;
}
.text-center{
    text-align: center;
}

</style>


