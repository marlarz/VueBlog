import http from '@/services/http/index';
import contentful from '@/services/http/endpoints/contentful';

export default {
  getPost(payload) {
    return http.get(contentful.get('post'), {
      params: {
        content_type: 'blogPost',
        'fields.slug': payload.slug,
        limit: 1,
      },
    });
  },
  getAll(payload) {
    return http.get(contentful.get('list'), {
      params: {
        content_type: 'blogPost',
        limit: payload.limit ? payload.limit : null,
        skip: payload.skip ? payload.skip : null,
        select: 'fields.title,metadata.tags,fields.shortDescription,fields.slug',
        query: payload.searchText ? payload.searchText : null,
      },
    });
  },
};
