import post from '@/services/http/api/post';

export default {
  namespaced: true,
  state: {
    loader: null,
    result: null,
  },
  getters: {
    getResult: (state) => state.result,
    getLoader: (state) => state.loader,
  },
  mutations: {
    setLoader(state, payload) {
      state.loader = payload;
    },
    setResult(state, payload) {
      state.result = payload;
    },
  },
  actions: {
    getResult({ commit }, payload) {
      commit('setLoader', true);
      return post.getAll({
        searchText: payload,
      }).then(({ data }) => {
        commit('setResult', data.items);
      }).finally(() => {
        commit('setLoader', false);
      });
    },
  },
};
