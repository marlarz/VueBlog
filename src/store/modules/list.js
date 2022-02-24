import post from '@/services/http/api/post';

export default {
  namespaced: true,
  state: {
    loader: null,
    list: null,
  },
  getters: {
    getList: (state) => state.list,
    getLoader: (state) => state.loader,
  },
  mutations: {
    setLoader(state, payload) {
      state.loader = payload;
    },
    setList(state, payload) {
      state.list = payload;
    },
  },
  actions: {
    getList({ commit }, payload) {
      commit('setLoader', true);
      return post.getAll(payload).then(({ data }) => {
        commit('setList', data);
      }).finally(() => {
        commit('setLoader', false);
      });
    },
  },
};
