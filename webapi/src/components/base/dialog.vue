<template>
    <div>
        <div class="dialog-wrap">
            <div class="dialog-cover" v-if="isShow" @click="closeDialog"></div>
            <transition name="drop">
                <div class="dialog-content" v-if="isShow">
                    <div class="content-top clearfix">
                        <a class="dialog-close floatR" @click="closeDialog">×</a>
                    </div>
                    <slot>empty</slot>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  methods: {
    closeDialog: function () {
      this.$emit('close-dialog')
    }
  }
}
</script>
<style scoped>
.drop-enter-active {
  transition: all 0.5s ease;
}

.drop-leave-active {
  transition: all 0.3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}

.drop-leave-active {
  transform: translateY(-500px);
}

.dialog-wrap{
  position: fixed;
  width:100%;
  height: 100%;

}

.dialog-cover{
  position:fixed;
  height: 100%;
  width: 100%;
  background: #000;
  opacity: 0.3;
  z-index: 5;
  top:0;
  left:0;
}
.dialog-content{
  position: fixed;
  width: 40%;
  /* min-height: 40%; */
  left:30%;
  top:16%;
  background: #fff;
  z-index: 10;
}

.dialog-close{
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  width: 18px;
}
.dialog-close:hover{
  color: #e91e63;
}

</style>
