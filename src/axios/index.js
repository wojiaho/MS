import Axios from 'axios';
import { baseUrl } from './connection.js';
import { message } from 'antd';
import cookie from '../assets/js/utils';
import { Redirect } from 'react-router-dom';

const instance1 = Axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    'X-Requested-With': 'XMLHttpRequest'
  }
});
const instance2 = Axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    'X-Requested-With': 'XMLHttpRequest'
  }
});

instance1.interceptors.response.use(function (response) {
    if (response.data.status === 200) {
      return response.data;
    } else {
      message.error(response.data.errorMessage);
      return Promise.reject(response.data);
    }
  },
  error => {
    return Promise.reject(error.response.data)
  });

instance2.interceptors.request.use(config => {
    let user = JSON.parse(cookie.getCookie("user"));
    if (user) {
      if (config.params) {
        for (var key in config.params) {
          if (!config.params[key] && config.params[key] !== 0) {
            delete config.params[key];
          }
        }
        config.params.uid = user.uid;
      } else {
        config.params = {
          uid: user.uid
        };
      }
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });
instance2.interceptors.response.use(function (response) {
    if (response.data.status === 200) {
      return response.data;
    } else if (response.data.status === 403) { //用户身份过期
      message.error(response.data.errorMessage);
      
      // router.push({
      //   path: '/login'
      // }); //跳转到登录页面
      cookie.delCookie("user"); //清空用户信息   
      return Promise.reject(response);
    } else {
      message.error(response.data.errorMessage);
      return Promise.reject(response.data);
    }
  },
  error => {
    return Promise.reject(error.response.data)
});
export {
  instance1,
  instance2
}