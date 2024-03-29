import axios from "axios";
import LocalStorageService from "../Services/LocalStorage";

const axiosConfig = axios.create({
  baseURL: 'https://dummyjson.com',
});

axiosConfig.interceptors.request.use(
  (req) => {
    const token = LocalStorageService.getToken();
    
    if (token)
      req.headers['Authorization'] = `Bearer ${token}`;

    return req;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosConfig;