import post from '@/services/http/api/post';
import router from '@/router';

export default {
  namespaced: true,
  state: {
    loader: null,
    post: null,
  },
  getters: {
    getPost: (state) => state.post,
    getLoader: (state) => state.loader,
  },
  mutations: {
    setLoader(state, payload) {
      state.loader = payload;
    },
    setPost(state, payload) {
      state.post = payload;
    },
  },
  actions: {
    getPost({ commit }, payload) {
      commit('setLoader', true);
      return post.getPost(payload).then(({ data }) => {
        if (data && data.total === 0) {
          router.push({ name: 'NotFound' });
          return data;
        }

        const { items, total } = data;
        const item = items && items.length >= 1 ? items[0] : {};
        const { fields, metadata, sys } = item;
        let { tags } = metadata;
        tags = tags.map((tag) => tag.sys.id);
        const { createdAt } = sys;
        commit('setPost', {
          fields,
          tags,
          total,
          createdAt,
        });
        return data;
      }).finally(() => {
        commit('setLoader', false);
      });
    },
  },
};
