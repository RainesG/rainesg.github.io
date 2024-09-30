import axios from "axios";
const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    config.headers.Authorization = "jv7HmuFxQ3oJ4W2nF2b6MsMsIpPTkHQu";
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
