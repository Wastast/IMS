import layout from '@/layout';
// 这是后台路由配置界面
export default [
  {
    path: '/system',
    name: 'system',
    component: layout,
    redirect: '/system/index',
    children: [
      {
        path: 'index',
        meta: { title: '主页', icon: 'home' },
        component: () => import('@/views/system')
      },
    ]
  },
  {
    path: '/router',
    name: 'router',
    component: layout,
    redirect: '/router/index',
    children: [
      {
        path: 'index',
        meta: { title: '路由维护', icon: 'route' },
        component: () => import('@/views/router')
      }
    ]
  },
  {
    path: '/system/user',
    name: 'user',
    component: layout,
    redirect: '/system/user/index',
    children: [
      {
        path: 'index',
        meta: { title: '用户', icon: 'user' },
        component: () => import('@/views/system/user')
      }
    ]
  },
  {
    path: '/system/role',
    name: 'role',
    component: layout,
    redirect: '/system/role/index',
    children: [
      {
        path: 'index',
        meta: { title: '角色维护', icon: 'user' },
        component: () => import('@/views/system/role')
      }
    ]
  },
]