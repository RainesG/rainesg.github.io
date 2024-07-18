import axios, { AxiosRequestConfig } from "axios";

const baseURL = "/api";
const timeout = 10000;

const service = axios.create({ timeout, baseURL, withCredentials: true });

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers = {};
    return config;
  },
  (e) => {
    Promise.reject(e);
  }
);

interface axiosTypes<T> {
  data: T;
  id: string;
  jsonrpc: string;
}

const requestHandler = <T>(
  method: "get" | "post" | "delete" | "put",
  url: string,
  params: {} = {},
  config: AxiosRequestConfig = {}
): Promise<T> => {
  let response: Promise<axiosTypes<T>>;
  switch (method) {
    case "get":
      response = service.get(url, { params: { ...params }, ...config });
      break;
    case "post":
      response = service.post(url, { ...params }, { ...config });
      break;
    case "put":
      response = service.put(url, { ...params }, { ...config });
      break;
    case "delete":
      response = service.delete(url, { params: { ...params }, ...config });
      break;
    default:
      break;
  }

  return new Promise<T>((resolve, reject) => {
    response
      .then((res) => {
        return resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const request = {
  get: <T>(url: string, params?: {}, config?: AxiosRequestConfig) =>
    requestHandler<T>("get", url, params, config),
  post: <T>(url: string, params?: {}, config?: AxiosRequestConfig) =>
    requestHandler<T>("post", url, params, config),
  put: <T>(url: string, params?: {}, config?: AxiosRequestConfig) =>
    requestHandler<T>("put", url, params, config),
  delete: <T>(url: string, params?: {}, config?: AxiosRequestConfig) =>
    requestHandler<T>("delete", url, params, config),
};

export { request };
