import router from './router'
// import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // 获取用户是否登录
// import getPageTitle from '@/utils/pageTitle'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // 进度条开始
  NProgress.start()

  // 设置网页头部
  // document.title = getPageTitle(to.meta.title)

  // 判断用户是否登录
  const hasToken = getToken()
  // const hasToken = true
  if (hasToken) {
    /* 已登录 */
    if (to.path === '/login') {
      // 如果用户已经登录 重定向到主页
      next({ path: '/' })
      NProgress.done()
    } else {
      next()
      // const hasGetUserInfo = store.getters.name
      // if (hasGetUserInfo) {
      //   next()
      // } else {
      //   try {
      //     // get user info
      //     await store.dispatch('user/getInfo')
      //     next()
      //   } catch (error) {
      //     // remove token and go to login page to re-login
      //     await store.dispatch('user/resetToken')
      //     Message.error(error || 'Has Error')
      //     next(`/login?redirect=${to.path}`)
      //     NProgress.done()
      //   }
      // }
    }
  } else {
    /* 未登录*/
    // 判断用户访问的页面是否在白名单中
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // 不在则跳转到登录界面
      next(`/login`)
    }
    NProgress.done()
  }
})

router.afterEach(() => {
  // 进度条结束
  NProgress.done()
})