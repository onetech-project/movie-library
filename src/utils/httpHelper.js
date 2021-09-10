import axios from 'axios';
import { refreshUrl } from '../api/constant';

const instance = axios.create();

let refreshToken = null;

const setToken = (auth) => {
  instance.defaults.headers.common.Authorization = auth?.token ? `Bearer ${auth.token}` : null;
  refreshToken = auth?.refresh_token;
};

const get = (url, config = {}) => instance.get(url, config);
const post = (url, data, config = {}) => instance.post(url, data, config);
const put = (url, data, config = {}) => instance.put(url, data, config);
const remove = (url, config = {}) => instance.delete(url, config);

instance.interceptors.response.use((response) => response, async (error) => {
  try {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest.isRetry) {
      originalRequest.isRetry = true;
      const { data } = await instance.post(refreshUrl, { refreshToken });
      instance.defaults.headers.common.Authorization = `Bearer ${data.data.access_token}`;
      return instance(originalRequest);
    }
    return Promise.reject(error);
  } catch (e) {
    return Promise.reject(e);
  }
});

export default {
  get,
  post,
  put,
  remove,
  setToken,
};
