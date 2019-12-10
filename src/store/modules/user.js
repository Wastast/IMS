import router from '@/router'
// import { routerList } from '@/api'
const state = {
  token: '',
  addRoutes: []
}

const mutations = {
  // 设置token
  SwitchToken(state, data) {
    state.token = data
  },
  // 设置路由
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    console.log(routes);
    router.addRoutes(routes)
  }
}

let routerArr = ['system', 'router', 'user', 'role']
function filterAsyncRoutes(routers) {
  let arr = []
  routers.forEach(item => {
    if (item.children.length > 1) {
      arr.push(filterAsyncRoutes(item.children))
    }
    let index = routerArr.indexOf(item.name)
    if (index != -1) {
      arr.push(item)
      routerArr.splice(index, 1)
    }
  })
  return arr
}

const actions = {
  // 设置token
  async setKey(context, data) {
    await context.commit('SwitchToken', data)
  },
  // 筛选路由
  generateRoutes({ commit }, router) {
    return new Promise((resolve, reject) => {
      let asyncRouters
      asyncRouters = filterAsyncRoutes(router)
      commit('SET_ROUTES', asyncRouters)
      resolve()
      // routerList().then(data => {
      //   routerArr = data
      //   asyncRouters = filterAsyncRoutes(router)
      //   commit('SET_ROUTES', asyncRouters)
      //   resolve()
      // })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
