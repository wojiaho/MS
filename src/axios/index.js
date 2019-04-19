import Axios from 'axios';
import { baseUrl } from './connection.js';
import { message } from 'antd';

const instance = Axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
});

instance.interceptors.response.use(function (response) {
  const { data } = response;
  if (data.status ===  'ok') {
    return data;
  } else {
    message.error(data.msg);
    return Promise.reject(data);
  }
},
error => {
  return Promise.reject(error.msg);
});

export {
  instance
};