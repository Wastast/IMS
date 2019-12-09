<template>
  <!-- shrink -->
  <div class="layout" :class="isShink ? 'shrink' : ''">
    <div class="main-container">
      <div class="aside">
        <vuescroll :ops="ops">
          <el-menu
            class="el-menu-vertical-demo"
            :collapse="isShink"
            background-color="#304156"
            text-color="#bfcbd9"
            :router="true"
            :default-active="path"
            :collapse-transition="false"
          >
            <sidebar
              v-for="route in permission_routes"
              :item="route"
              :key="route.path"
              :base-path="route.path"
            ></sidebar>
          </el-menu>
        </vuescroll>
      </div>
      <div class="main">
        <el-container>
          <el-header height="50">
            <div class="fixbar">
              <navbar></navbar>
            </div>
          </el-header>
          <el-main :style="{ height: windowHeight + 'px' }">
            <div class="body">
              <vuescroll :ops="ops">
                <appmain></appmain>
              </vuescroll>
            </div>
          </el-main>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script>
import vuescroll from 'vuescroll'
import Sidebar from './components/Sidebar'
import Appmain from './components/Appmain'
import Navbar from './components/Navbar'
import { mapGetters } from 'vuex'
export default {
  name: 'layout',
  data() {
    return {
      // 滚动条设置
      ops: {
        rail: {
          gutterOfEnds: '8px',
          gutterOfSide: '5px'
        },
        bar: {
          background: 'rgba(255,255,255,.3)'
        }
      },
      windowHeight: '0'
    }
  },
  components: {
    vuescroll,
    Sidebar,
    Appmain,
    Navbar
  },
  computed: {
    ...mapGetters(['permission_routes']),
    isShink() {
      return this.$store.state.isShink
    },
    path() {
      return this.$route.path
    }
    // // 获取全部路由
    // permission_routes() {
    //   console.log(this.$router.options.routes);
    //   return this.$router.options.routes
    // }
  },
  mounted() {
    console.log(this.permission_routes)
    this.windowHeight = window.innerHeight - 50
    window.onresize = () => {
      this.windowHeight = window.innerHeight - 50
    }
  }
}
</script>

<style scoped>
.el-header {
  padding: 0;
}
.el-main {
  padding: 20px 20px 0 20px;
}
</style>

<style lang="scss" scoped>
.layout {
  position: relative;
  .top {
    position: fixed;
    top: 0;
    left: 0;
    height: 100px;
    width: 100%;
    background: green;
  }
  .main-container {
    margin-left: 200px;
    transition: 0.2s;
    .aside {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 200px;
      background-color: #304156;
      color: #fff;
      transition: 0.2s;
      .el-menu-vertical-demo {
        width: 100%;
      }
    }
    .main {
      height: 100%;
      .fixbar {
        height: 50px;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      }
      .body {
        height: 100%;
      }
    }
  }
}
.shrink {
  .main-container {
    margin-left: 64px;
    .aside {
      width: 64px;
    }
  }
}
</style>
