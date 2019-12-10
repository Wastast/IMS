import router from '@/router';
import { filterRouter } from '@/router/permission';
import { findRouter } from '@/api/back-router';
const state = {
  token: '',
  addRoutes: []
};

const mutations = {
  // 设置token
  SwitchToken(context, data) {
    context.token = data;
  },
  // 设置路由
  SET_ROUTES: (context, routes) => {
    context.addRoutes = routes;
    router.addRoutes(routes);
  }
};

const actions = {
  // 设置token
  async setKey(context, data) {
    await context.commit('SwitchToken', data);
  },
  // 筛选路由
  async generateRoutes({ commit }) {
    let list = await filterRouter();
    await commit('SET_ROUTES', list);
  }
};

export default {
  state,
  mutations,
  actions
};
