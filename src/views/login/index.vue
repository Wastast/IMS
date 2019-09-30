<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">地图后台维护</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container el-icon-user-solid">
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="请输入用户名"
          name="username"
          type="text"
          tabindex="1"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container iconfont icon-suo">
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
          name="password"
          tabindex="2"
          :show-password="true"
          @keyup.enter.native="login"
        />
      </el-form-item>

      <el-button type="primary" 
        style="width:100%;margin-bottom:30px;height: 40px;" 
        @click="login()"
        :loading="loading"
        :disabled="!(loginForm.username!='' && loginForm.password!='')"
      >{{loading?'登陆中':'登录'}}</el-button>
    </el-form>
  </div>
</template>

<script>
// import {userLogin} from 'api/login'
import {TipsPop} from '@/utils/el_ui.js'
import {setToken} from '@/utils/auth.js'
import {asyncRouters} from '@/router.js';
export default {
  name: 'login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'))
      }else{
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur',validator: validateUsername }],
        password: [{ required: true, trigger: 'blur',validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  methods:{
    // 登陆确认
    login () {
      this.loading = true
      let {username,password} = this.loginForm
      setToken('1')
      this.$router.addRoutes(asyncRouters)
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
<style scoped>
.login >>> .el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}
.login >>>  .el-input input {
  background: transparent;
  border: 0px;
  -webkit-appearance: none;
  border-radius: 0px;
  padding: 12px 5px 12px 15px;
  color: #fff;
  height: 47px;
  caret-color: #fff;
}
.login .el-input {
  display: inline-block;
  height: 47px;
  width: 85%;
}
</style>

<style lang="scss" scoped>

.login {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #2d3a4b;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 450px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: #fff;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    width: 30px;
    display: inline;
    font-size: 18px;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 16px;
    font-size: 16px;
    color: #889aa4;
    cursor: pointer;
    user-select: none;
  }
}
</style>
