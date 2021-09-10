import axios from 'axios';

let authToken = null;

const setToken = (token) => { authToken = token; };

const get = (url, headers = {}, config = {}) => axios.get(url, {
  ...config,
  headers: {
    // Authorization: `Bearer ${authToken}`,
    'Content-type': 'application/json',
    ...headers,
  },
});

const post = (url, data, headers = {}, config = {}) => axios.post(url, data, {
  ...config,
  headers: {
    Authorization: `Bearer ${authToken}`,
    'Content-type': 'application/json',
    ...headers,
  },
});

const put = (url, data, headers = {}, config = {}) => axios.put(url, data, {
  ...config,
  headers: {
    Authorization: `Bearer ${authToken}`,
    'Content-type': 'application/json',
    ...headers,
  },
});

const remove = (url, headers = {}, config = {}) => axios.delete(url, {
  ...config,
  headers: {
    Authorization: `Bearer ${authToken}`,
    'Content-type': 'application/json',
    ...headers,
  },
});

export default {
  get,
  post,
  put,
  remove,
  setToken,
};
