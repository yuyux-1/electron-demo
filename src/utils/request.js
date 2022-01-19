import axios from "axios";
import router from './../router'
import { Message } from "element-ui";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 30000, 
  headers: {
      get: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      post: {
          'Content-Type': 'application/json;charset=utf-8'
      }
  }
})
instance.interceptors.request.use(
  (config) => {
    // config.headers.Authorization = ''
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      Promise.reject();
    }
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
          case 401:
            router.push("/login");
            break;
          case 400:
            Message({
              message: 'error',
              type: 'error',
            })
            break;
          case 500:
            break;
          default:
            break;
        }
  }
    return Promise.reject(error);
  }
);

export default instance;
