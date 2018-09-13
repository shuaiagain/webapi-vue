<template>
    <div>
        <div class="login">
            <div class="login-name">
                <span class="name-text">用户名</span>
                <input type="text" name="username" class="user-name" v-model="userNameVM" autocomplete="off"/>
            </div>
            <div class="login-pwd">
                <span class="pwd-text">密&emsp;码</span>
                <input type="password" name="password" class="user-pwd" v-model="passwordVM"  autocomplete="off"/>
            </div>
            <div class="login-footer">
                <a class="login-submit btn-sm" @click="login">登录</a>
            </div>
            <div class="login-warning">
                <span class="warning-show warning">{{errorText}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
     data(){
         return {
             userNameVM:'',
             passwordVM:'',
             errorText:''
         }
     },
     methods:{
         login: function () {

            if(!this.userNameVM){
                this.errorText = '请输入用户名';
                return false;
            }
            
            if(!this.passwordVM){
                this.errorText = '请输入密码';
                return false;
            }

            this.errorText = '';

           axios.post('/api/login',
            {
                userName:this.userNameVM,
                password:this.passwordVM
            }).then(d=>{
                alert('ok')
                this.$emit('has-log',d.data);
            }).catch(error=>{

               console.log(error);
            });

         }
     }
 }
</script>
<style scoped>
.name-text,.pwd-text{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    margin-left: 30px;
}
.user-name,.user-pwd{
    height: 26px;
    width: 200px;
    padding: 0px 5px;
}
.login-pwd,.login-footer,.login-warning{
    margin-top:20px;
}
.login-footer{
    margin-bottom:20px;
}
.login-submit{
    margin-left:70px;
}
.warning-show{
    margin-left: 30px;
    height: 24px;
    line-height: 24px;
}
</style>
