<template>
  <div class="index">
    <div class="head">
      <div class="text">
        IMS引导页
      </div>
    </div>
    <ul class="list">
      <router-link
        tag="li" 
        class="item"
        v-for="(item,index) of list" :key="index"
        :to="item.path"
        >
        <dl>
          <dt>
            <img :src="item.imgUrl">
          </dt>
          <dd>{{item.name}}</dd>
        </dl>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      list: [{
        name: '后台资源管理',
        imgUrl: require('@/assets/img/houtai.png'),
        path: '/backstage'
      },{
        name: 'BIM演示平台',
        imgUrl: require('@/assets/img/bim.png'),
        path: '/demonstration'
      }]
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.index {
  width: 100vw;
  height: 100vh;
  background: url('~@/assets/img/guide-bg.png');
  background-size: 100% 100%;
  position: relative;
  .head {
    position: absolute;
    top: 0;
    left: 0;
    .text {
      color: #fff;
      font-size: 36px;
      margin-left: 840px;
      box-sizing: border-box;
      letter-spacing: 15px;
      padding-top: 18px;
    }
  }
  .list {
    position: absolute;
    top: 200px;
    left: 480px;
    display: flow-root;
    .item {
      float: left;
      margin-left: 100px;
      cursor: pointer;
      dd {
        text-align: center;
        color: #fff;
        font-size: 20px;
      }
    }
  }
}
</style>
