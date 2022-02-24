import axios from 'axios';

export class Http {
  constructor() {
    this.axios = axios.create({
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        Authorization: 'Bearer ',
      },
    });
    // this.axios.interceptors.response.use((response) => {

    //   return response;
    // });
    this.cancelToken = axios.CancelToken;
    this.isCancel = axios.isCancel;
  }

  get(url, params) {
    return this.axios.get(url, params);
  }

  post(url, data) {
    return this.axios.post(url, data);
  }

  postWithHeaders(url, data, headers) {
    return this.axios.post(url, data, headers);
  }

  put(url, data) {
    return this.axios.put(url, data);
  }

  delete(url, params) {
    return this.axios.delete(url, params);
  }

  // eslint-disable-next-line class-methods-use-this
  all(iterable) {
    return axios.all(iterable);
  }

  // eslint-disable-next-line class-methods-use-this
  spread(callback) {
    return axios.spread(callback);
  }
}

export default new Http();
