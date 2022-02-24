const apiPrefix = process.env.VUE_APP_CONTENTFUL_URL;
const endpoints = {
  post: 'entries',
  list: 'entries',
  tags: 'tags',
};

export default {
  apiPrefix,
  endpoints,
  get(endpointLabel, params) {
    if (this.endpoints[endpointLabel] === undefined) {
      throw new Error('undefined api path');
    }

    let url = this.endpoints[endpointLabel];

    if (typeof (params) === 'object') {
      Object.keys(params).forEach((param) => {
        url = url.replace(`:${param}`, params[param]);
      });
    } else if (url.indexOf('/:') > 0) {
      url = url.substring(0, url.indexOf('/:'));
    }

    return this.apiPrefix.concat(url);
  },
};
