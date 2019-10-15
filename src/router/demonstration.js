// 这是演示平台路由配置界面
export default [
  {
    path: '/demonstration',
    name: 'demonstration',
    hidden: true,
    component: () => import('../views/demonstration/index.vue'),
    meta: { title: '后台'}
  }
]