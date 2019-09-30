import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 将页面中的路由都进行集成
export const constantRoutes = [
  // 采用路由懒加载方式
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('./views/login/index.vue'),
    meta: { title: '登录'}
  },
  {
    path: '/',
    name: 'guide',
    hidden: true,
    component: () => import('./views/guide/index.vue'),
    meta: { title: '引导'}
  },
  // 404页面需要放到最末尾,先行注册404界面,否则无法指向404界面会报错
  { 
    path: '/404',
    name: 'page404',
    hidden: true,
    component:()=> import('./views/404/404.vue'),
    meta: { title: '404'}
  },
  // 指向页面错误跳转到404
  { path: '*',redirect: '/404',hidden: true,}
]

export const asyncRouters = [{
  path: '/backstage',
  name: 'backstage',
  component: () => import('./views/backstage/index.vue'),
  meta: { title: '后台'}
},{
  path: '/demonstration',
  name: 'demonstration',
  component: () => import('./views/demonstration/index.vue'),
  meta: { title: '演示'}
}]

// 创建一个vue-router 并且每次切换页面都调整滚动条的高度,并且存入固定路由界面
const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});
const router = createRouter()
export default router