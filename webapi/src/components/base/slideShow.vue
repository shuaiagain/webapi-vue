<template>
    <div class="slide-show" @mouseover="clearInter()" @mouseout="runInter()">
        <div class="show-img">
            <a class="img-wrap" :href="slides[nowIndex].href">
                <transition name="tran-now" >
                    <img class="img-now" :src="slides[nowIndex].src"  alt="" v-if="isShow"/>
                </transition>
                <transition name="tran-old">
                    <img class="img-old" :src="slides[nowIndex].src" alt="" v-if="!isShow"/>
                </transition>
            </a>
        </div>
        <div class="show-pages">
            <ul class="pages-tab">
                <li @click="goto(prevIndex)">&lt;</li>
                <li v-for="(item,index) in slides" @click="goto(index)">
                    {{index+1}}
                </li>
                <li @click="goto(nextIndex)">&gt;</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        slides:{
            type: Array,
            default: []
        },
        time:{
            type: Number,
            default: 2000
        }
    },
    data() {

       return { 
           nowIndex: 0,
           isShow: true
        }
    },
    mounted: function() {

        this.runInter();
    },
    computed: {
        prevIndex:function() {
            
            if ( this.nowIndex === 0 ) {
              return  this.slides.length - 1;
            }else {
              return  this.nowIndex - 1;
            }
        },
        nextIndex:function() {

            if( this.nowIndex === this.slides.length-1 ){
              return 0;
            }else{
              return this.nowIndex + 1;
            }
        }
    },
    methods: {
        goto:function(index) {

            this.isShow = false;
            setTimeout(() => {
                this.isShow = true;
                this.nowIndex = index;
            }, 10);
        },
        runInter:function() {

            this.InterId = setInterval(()=>{
                this.goto(this.nextIndex);
            },this.time);
        },
        clearInter:function() {

            clearInterval(this.InterId);
        }
    }
}
</script>
<style scoped>

.tran-now-enter-active{
    transition: all 0.5s ease;
}

.tran-now-enter{
    transform: translateX(900px);
}

/* .tran-old-leave{
    transition:all 0.5s; 
    transform: translateX(-900px);
} */

.tran-old-leave-active{
    transition:all 0.5s; 
    transform: translateX(-900px);
}

.slide-show{
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.show-pages{
    position: absolute;
    bottom:10px;
    right: 0px;
}
.pages-tab li{
    float: left;
    width: 20px;
    text-align: center;
    color:#fff;
    font-size: 15px;
}
.pages-tab li:hover{
    background: #bbb;
}
</style>