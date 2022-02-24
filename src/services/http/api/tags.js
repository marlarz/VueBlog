import http from '@/services/http/index';
import contentful from '@/services/http/endpoints/contentful';

export default {
  getTags() {
    return http.get(contentful.get('tags'));
  },
};
