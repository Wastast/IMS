<template>
  <div class="Navbar">
    <div class="hamburger-container" @click="shinkSidebar()">
      <i :class="!isShink ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
    </div>
    <breadcrumb></breadcrumb>
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src="@/assets/img/user.png" class="user-avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item>
            <span style="display:block;" @click="userOut()">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Breadcrumb from './Breadcrumb'
import { removeToken } from '@/utils/auth.js'
export default {
  name: 'Navbar',
  computed: {
    isShink() {
      return this.$store.state.isShink
    }
  },
  methods: {
    // 修改收缩
    shinkSidebar() {
      this.$store.commit('setIsshink')
    },
    // 退出登录
    userOut() {
      removeToken()
    }
  },
  components: { Breadcrumb }
}
</script>

<style lang="scss" scoped>
.Navbar {
  height: 100%;
  > div {
    float: left;
  }
  .hamburger-container {
    padding: 0px 15px;
    line-height: 50px;
    font-size: 25px;
    cursor: pointer;
    &:hover {
      background: rgba(148, 137, 137, 0.025);
    }
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus {
      outline: none;
    }
    .avatar-container {
      margin-right: 30px;
      float: right;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
