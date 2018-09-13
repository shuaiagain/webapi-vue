<template>
  <div>
    <div class="app-head">
      <div class="head-about floatR">
        <a class="about-btn" @click="showAbout">关于</a>
      </div>
      <div class="head-login floatR">
        <a class="login-btn" @click="showLogin">登录</a>
      </div>
     
    </div>
    <!-- <router-view></router-view> -->
    <my-dialog :is-show="isShowDialog" @close-dialog="closeDialog('isShowDialog')">
      <log-form></log-form>
    </my-dialog>
    <!-- <my-dialog :is-show="isShowAboutDialog" @close-dialog="closeDialog('isShowAboutDialog')">
      <div>关于台风即将过境的问题....</div>
    </my-dialog> -->
  </div>
</template>
<script>
import Dialog from './base/dialog.vue'
import LoginForm from './loginform'
export default {
  components: {
    MyDialog: Dialog,
    LogForm: LoginForm
  },
  data () {
    return {
      data: 'test',
      isShowDialog: false,
      isShowAboutDialog: false
    }
  },
  methods: {
    showLogin: function() {
      this.isShowDialog = true
    },
    showAbout: function(){
  this.isShowAboutDialog = true
    },
    closeDialog: function(attr) {
      this[attr] = false
    }
  }
}
</script>
<style scoped>
.app-head{
  background: #000;
  height: 40px;
}
.app-head .head-login,.head-about{
  line-height: 40px;
  height: 40px;
  margin-right: 10px;
}
.app-head .login-btn,.about-btn{
  cursor: pointer;
  color: #fff;
}
</style>
