<template>
  <div class="side-bar" v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children, item)">
      <el-menu-item :index="resolvePath(onlyOneChild.path)">
        <i class="iconfont" :class="'icon-' + onlyOneChild.meta.icon"></i>
        <span slot="title">{{ onlyOneChild.meta.title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['item', 'basePath'],
  data() {
    this.onlyOneChild = null;
    return {};
  },
  computed: {},
  methods: {
    hasOneShowingChild(children = [], parent) {
      // 过滤数据
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          // 只有一个子项时使用
          this.onlyOneChild = item;
          return true;
        }
      });
      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true;
      }
      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true };
        return true;
      }

      return false;
    },
    resolvePath(url) {
      if (this.basePath === '/') {
        return '/' + url;
      }
      return this.basePath + '/' + url;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.is-active {
  background-color: rgb(38, 52, 69) !important;
}
.is-active .iconfont {
  color: #409eff !important;
}
</style>
<style lang="scss" scoped>
.side-bar {
  width: 100%;
  .iconfont {
    margin-right: 16px;
    color: #bfcbd9;
    font-size: 14px;
  }
}
</style>
