import axiosConfig from "./ApiConfig"

const API = {
  get: (url) => {
    return axiosConfig.get(url);
  },

  post: (url, body) => {
    return axiosConfig.post(url, body);
  },

  put: (url, body) => {
    return axiosConfig.put(url, body);
  },

  delete: (url) => {
    return axiosConfig.delete(url);
  }
};

export default API;