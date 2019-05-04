import baseApi from './index';

// 注册
const registerApi = (data, cb) => {
  baseApi.post('auth/register', data)
    .then((res) => {
      if (cb && typeof (cb) === 'function') {
        cb(res);
      }
    });
};
// 登录
const loginApi = (data, cb) => {
  baseApi.post('auth/login', data)
    .then((res) => {
      if (cb && typeof (cb) === 'function') {
        cb(res);
      }
    });
};
// 登出
const logoutApi = (cb) => {
  baseApi.get('auth/logout')
    .then((res) => {
      if (cb && typeof (cb) === 'function') {
        cb(res);
      }
    });
};

export {
  registerApi,
  loginApi,
  logoutApi,
};
