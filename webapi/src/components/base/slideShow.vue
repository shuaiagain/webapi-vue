<template>
    <div class="slide-show">
        <div class="show-img">
            <a class="img-wrap">
                <transition name="tran-now" >
                    <img class="img-now" src=""  alt="" v-if="isShow"/>
                </transition>
                <transition name="tran-old">
                    <img class="img-old" src="" alt="" v-if="!isShow"/>
                </transition>
            </a>
        </div>
        <div class="show-pages">
            <ul>
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
    mounted:function() {

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
    methods:{
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

</style>