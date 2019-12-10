import Vue from 'vue';
import Router from 'vue-router';
import system from './system';
import demonstration from './demonstration';

Vue.use(Router);

// 将页面中的路由都进行集成
export const constantRoutes = [
  // 采用路由懒加载方式
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('../views/login'),
    meta: { title: '登录' }
  },
  {
    path: '/',
    name: 'guide',
    hidden: true,
    component: () => import('../views/guide'),
    meta: { title: '引导' }
  },
  // 404页面需要放到最末尾,先行注册404界面,否则无法指向404界面会报错
  {
    path: '/404',
    name: 'page404',
    hidden: true,
    component: () => import('../views/404'),
    meta: { title: '404' }
  },
  // 指向页面错误跳转到404
  { path: '*', redirect: '/404', hidden: true }
];

// 配置异步路由
export const asyncRouters = [...system, ...demonstration];

// 创建一个vue-router 并且每次切换页面都调整滚动条的高度,并且存入固定路由界面
const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

const router = createRouter();
export default router;
