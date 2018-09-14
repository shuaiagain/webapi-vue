<template>
    <div>
        <div class="home clearfix">

            <div class="home-left floatL">
                <div class="left-wrap">

                    <div class="wrap-item">
                        <div class="item-title">
                            <span class="title-show">全部产品</span>
                        </div>
                        <div class="item-con">
                            <div class="con-title">
                                <span class="title-desc">PC产品</span>
                            </div>
                            <div class="con-sub">
                                <ul class="sub-pro">
                                    <li><a class="flow-count">数据统计</a></li>
                                    <li><a class="flow-analyse">流量分析</a></li>
                                    <li><a class="ad-dev">广告分发</a></li>
                                </ul>
                            </div>

                             <div class="con-title">
                                <span class="title-desc">手机应用类</span>
                            </div>
                            <div class="con-sub">
                                <ul class="sub-pro">
                                    <li><a class="flow-count">91助手</a></li>
                                    <li><a class="flow-analyse">产品助手</a></li>
                                    <li><a class="ad-dev">智能地图</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                      <div class="wrap-item">
                        <div class="item-title">
                            <span class="title-show">最新消息</span>
                        </div>
                        <div class="item-con item-news">
                            <div class="con-title">
                                <span class="title-desc"></span>
                            </div>
                            <div class="con-sub">
                                <ul class="sub-pro">
                                    <li><a class="flow-count">最新消息--1</a></li>
                                    <li><a class="flow-analyse">最新消息--2</a></li>
                                    <li><a class="ad-dev">最新消息3</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="home-right floatR">
                <div class="right-pic">
                    <a class="pic-slide">
                        <img class="slide-show" src="../assets/image/slideShow/pic1.jpg" alt="课程"/>
                    </a>
                </div>
                <div class="right-tab">
                    <div class="tab-item">
                        <div class="item-pro item-pro-odd">
                            <a class="pro-img">
                                <!-- <img class="img-show" src="../assets/image/1.png" alt="课程"/> -->
                                <!-- <slide-show></slide-show> -->
                            </a>
                            <div class="pro-desc">
                                <div class="desc-name">开发产品</div>
                                <div class="desc-mark">开放产品是一款开放产品</div>
                            </div>
                        </div>
                         <div class="item-pro">
                            <a class="pro-img">
                                <img class="img-show" src="../assets/image/2.png" alt="课程"/>
                            </a>
                            <div class="pro-desc">
                                <div class="desc-name">智能产品</div>
                                <div class="desc-mark">智能产品智能产品智能产品智能产品</div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SlideShow from './base/slideShow'
export default {
    components:{
        SlideShow
    },
    mounted: {

    },
    data(){

        return {
            slides:[]
        }
    },
    methods:{

    }
}
</script>
<style scoped>
.home{
    width: 80%;
    margin: 0 auto;
}
.left-wrap{
    margin-top:15px;
}
.wrap-item{
    width: 260px;
    margin-bottom: 15px;
}
.item-title{
    height: 30px;
    line-height: 30px;
    background: #4fc08d;
    color: #fff;
    font-size: 15px;
    padding-left: 10px;
}
.item-con{
    background: #fff;
}
.con-title{
    height: 36px;
    line-height: 36px;
    font-weight: 700;
    padding-left: 10px;
    font-size: 14px;
    color: #000;
}
.sub-pro li{
    height: 28px;
    line-height: 28px;
    padding-left: 20px;
    font-size: 14px;
    cursor: pointer;
}
.sub-pro li:hover{
    background: #d2cfcf;
}
.home-right{
    margin-top: 15px;
    width: 800px;
    height: 500px;
}
.right-pic{
    width: 100%;
    cursor: pointer;
}
.slide-show{
    width: 100%;
}
.item-news{
    min-height: 500px;
}
.item-pro{
    display: inline-block;
    width: 380px;
    height: 100px;
    background: #fff;
    margin-top:20px;
    padding:10px 0px 10px 10px;
    cursor: pointer;
}

.item-pro-odd{
    margin-right: 16px;
}
.item-pro .pro-desc{
    display: inline-block;
    vertical-align: top;
}
.item-pro .pro-img{
    display: inline-block;
}

.item-pro .desc-name{
    height: 28px;
    line-height: 28px;
    font-weight: 700;
    font-size: 16px;
}
.item-pro .desc-mark{
    height: 26px;
    line-height: 26px;
    font-size: 14px;
}
</style>

