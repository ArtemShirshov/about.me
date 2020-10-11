import axios from 'axios';

import { getCookie } from '../utils/cookieHelpers';

const configuration = {
  crossdomain: true,
  headers: {
    Accept: 'application/json;charset=UTF-8',
    'Content-Type': 'application/json;charset=UTF-8',
    Pragma: 'no-cache',
  },
  mode: 'no-cors',
  timeout: 60000,
};

const instance = axios.create(configuration);

const instanceMulti = axios.create({
  ...configuration,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

const instanceZip = axios.create({
  ...configuration,
  headers: {
    Accept: 'application/zip',
  },
});

const onFulfilled = (config) => {
  const token = getCookie('Token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
};

const onRejected = (error) => Promise.reject(error);

instance.interceptors.request.use(onFulfilled, onRejected);
instanceMulti.interceptors.request.use(onFulfilled, onRejected);
instanceZip.interceptors.request.use(onFulfilled, onRejected);

export { instance, instanceMulti, instanceZip };
