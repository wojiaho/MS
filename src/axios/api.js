import { instance as baseApi} from './index';

const registerApi = (data, cb) => {
  baseApi.post('auth/register', data)
  .then((res) => {
    if(cb &&  typeof(cb) === 'function') {
      cb(res)
    }
  })
}

const loginApi = (data, cb) => {
  baseApi.post('auth/login', data)
  .then((res) => {
    if(cb &&  typeof(cb) === 'function') {
      cb(res)
    }
  })
}

export {
  registerApi,
  loginApi
}