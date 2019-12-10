const state = {
  isShink: false
};

const mutations = {
  SET_SHINK(context, data) {
    context.isShink = !context.isShink;
    console.log(context.isShink);
  }
};

const actions = {};

export default {
  state,
  mutations,
  actions
};
