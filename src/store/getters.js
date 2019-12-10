const getters = {
  token: state => state.user.token,
  permission_routes: state => state.user.addRoutes,
  isShink: state => state.app.isShink
};
export default getters;
