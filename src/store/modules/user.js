// mock async api request
const delay = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 200);
  });
};

const state = {
  isSidebarCollapse: true,
  tagsList:[],
  permissions: [],
  fullRoutes: [],
};

const getters = {
  getTagList: state=>state.tagsList
};
const mutations = {
  SET_PERMISSION_LIST(state, list) {
    state.permissions = list || [];
  },
  // SET_ROUTES(state, routes) {
  //   state.fullRoutes = constRoutes.concat(routes || []);
  // },
  SET_TAGS(state, val){
    state.tagsList = val
  },
  TOGGLE_SIDEBAR_COLLAPSE(state) {
    state.isSidebarCollapse = !state.isSidebarCollapse;
  },
};

const actions = {
  async getUserInfo({ commit }) {
    const data = await delay(["project", "menu"]);
    commit("SET_PERMISSION_LIST", data);
    return data;
  },

  resetUserInfo({ commit }) {
    commit("SET_PERMISSION_LIST", []);
  },

};

export const user = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
