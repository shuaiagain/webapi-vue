<template>
  <div>
    <div class="app-head">
      <div class="head-about floatR">
        <a class="about-btn" @click="showAbout">关于</a>
      </div>
      <div class="head-login floatR" v-if="!isLogin">
        <a class="login-btn" @click="showLogin">登录</a>
      </div>
      <div class="head-haslogin floatR" v-if="isLogin" @mouseenter="showOther" @mouseleave="hideOther">
        <a class="login-username">{{userName}}</a>
        <ul class="login-other" v-if="isShowOther">
          <li><a class="logout" @click="logout">退出</a></li>
        </ul>
      </div>
    </div>

    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <!-- <router-view></router-view> -->
    <my-dialog :is-show="isShowDialog" @close-dialog="closeDialog('isShowDialog')">
      <log-form @has-log="login"></log-form>
    </my-dialog>
    <my-dialog :is-show="isShowAboutDialog" @close-dialog="closeDialog('isShowAboutDialog')">
      <div>关于台风即将过境的问题....</div>
    </my-dialog>
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
      isShowAboutDialog: false,
      isLogin: false,
      userName: '',
      userID: null,
      isShowOther: false
    }
  },
  methods: {
    showLogin: function() {
      this.isShowDialog = true
    },
    showAbout: function() {
      this.isShowAboutDialog = true
    },
    closeDialog: function(attr) {
      this[attr] = false
    },
    login: function(data) {
    
      if(data.Code<0) {

        alert(data.Msg);
        return;
      }

      this.userName = data.Data.UserName;
      this.userID = data.Data.UserID;
      this.isLogin = true;
      this.isShowDialog = false;
    },
    showOther: function() {
      this.isShowOther = true;
    },
    hideOther: function() {
      this.isShowOther = false;
    },
    logout: function() {
      this.isShowOther = false;
      this.isLogin = false;
      this.userName = '';
      this.userID = null;
    }
  }
}
</script>
<style scoped>
.app-head{
  background: #000;
  height: 40px;
}

.app-head .head-login,.head-about,.head-haslogin {
  line-height: 40px;
  height: 40px;
  width: 60px;
  text-align: center;
}

.app-head .login-btn,.about-btn,.login-username {
  cursor: pointer;
  color: #fff;
}

.head-haslogin {
  position: relative;
}

.login-username {
  display: inline-block;
  width: 60px;
  text-align: center;
}

.login-username:hover{
  background: #706a6a;
}

.login-other{
  position:absolute;
  z-index: 20;
}

.login-other li{
  text-align: center;
  width: 60px;
  cursor: pointer;
  background: #000;
}

.login-other li:hover{
  background:#706a6a; 
}

.login-other li .logout{
  color: #fff;
}
</style>
