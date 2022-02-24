import Vue from 'vue';
import Vuex from 'vuex';

import post from '@/store/modules/post';
import list from '@/store/modules/list';
import tags from '@/store/modules/tags';
import search from '@/store/modules/search';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    post,
    list,
    tags,
    search,
  },
});
