import axios from "axios";

const apiInstance = axios.create({
  baseURL: "",
  timeout: 5000,
});

apiInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error(`Request error : ${error.message}`);
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(`Response error : ${error.message}`);
    return Promise.reject(error);
  }
);

export { apiInstance };
