import layout from '@/layout';
// 这是后台路由配置界面
export default [
  {
    path: '/backstage',
    name: 'backstage',
    component: layout,
    redirect: '/backstage/index',
    children: [
      {
        path: 'index',
        meta: { title: '主页', icon: 'home' },
        component: () => import('@/views/backstage')
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
    path: '/user',
    name: 'user',
    component: layout,
    redirect: '/user/index',
    children: [
      {
        path: 'index',
        meta: { title: '用户', icon: 'user' },
        component: () => import('@/views/user')
      }
    ]
  },
  {
    path: '/role',
    name: 'role',
    component: layout,
    redirect: '/role/index',
    children: [
      {
        path: 'index',
        meta: { title: '角色维护', icon: 'user' },
        component: () => import('@/views/role')
      }
    ]
  },
]