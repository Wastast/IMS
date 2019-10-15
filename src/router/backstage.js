// 这是后台路由配置界面
export default [
  {
    path: '/backstage',
    name: 'backstage',
    hidden: true,
    component: () => import('../views/backstage/index.vue'),
    meta: { title: '登录'}
  }
]