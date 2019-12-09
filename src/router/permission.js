import router from './index';

// 过滤路由
export const filterRouter = async (routers) => {
  await router.addRoutes(routers)
}