import Vue from 'vue';
import VueGtag from 'vue-gtag';
import router from '@/router';

Vue.use(VueGtag, {
  config: {
    id: 'G-Z678RMS8XM',
    params: {
      send_page_view: false,
    },
    pageTrackerScreenviewEnabled: true,
  },
}, router);
