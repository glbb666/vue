<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 在组件中，使用v-for循环的话，一定要使用 key --> 
            <!-- url是唯一的，只要是唯一的就可以当做key值 -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url"></mt-swipe-item>
                <!-- <img src="item.img" alt=""> -->
        </mt-swipe>
            <!-- 九宫格 到 六宫格 的改造过程 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            lunbotuList:[1,1,1]//保存轮播图的数组
        }
    },
    created(){
        this.getLunbotu()
    },
    methods:{
        getLunbotu(){//获取轮播图数据的方法
            this.$http.get('http://vue.studyit.io/api/getlunbo').then(res=>{
                console.log(res.body)
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color: red;
            }
            &:nth-child(2){
                background-color:blue;
            }
            &:nth-child(3){
                background-color: cyan;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
    }
    .mui-table-view-cell.mui-media{
        border: 0;
    }
</style>

