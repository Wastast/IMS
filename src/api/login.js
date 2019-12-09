import { get, post } from './http'

// 用户登录，登录后返回用户所能访问的路由
export const userLogin = (data) => get('/system/login/login',data);