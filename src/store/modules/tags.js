import tags from '@/services/http/api/tags';

export default {
  namespaced: true,
  state: {
    loader: null,
    tags: null,
  },
  getters: {
    getTags: (state) => state.tags,
    getLoader: (state) => state.loader,
  },
  mutations: {
    setLoader(state, payload) {
      state.loader = payload;
    },
    setTags(state, payload) {
      state.tags = payload;
    },
  },
  actions: {
    getTags({ commit }) {
      commit('setLoader', true);
      return tags.getTags().then(({ data }) => {
        commit('setTags', data.items);
      }).finally(() => {
        commit('setLoader', false);
      });
    },
  },
};
