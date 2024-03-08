import axios from "axios";
import { REACT_APP_URL } from '../config/index';
/**
 * Add authorization headers to API calls
 * @param {*} request
 * @returns
 */
const requestInterceptor = (request) => {
  // post token
  const token = localStorage.getItem("token");
  if (token) {
    request.headers["Authorization"] = `Bearer  ${token}`;
  }
  return request;
};

/**
 * Axios response interceptor
 * @param {*} response
 * @returns
 */
const responseInterceptor = (response) => {
  
  return response;
};

/**
 * Axios error interceptor
 * @param {*} error
 * @returns
 */
const errorInterceptor = (error) => {
  if (error.response?.status === 401) {
    localStorage.removeItem("token");
  }

  return Promise.reject(error);
};

/**
 * Setup API instance
 */
export const api = axios.create({
  baseURL: REACT_APP_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const callApi = (url, method, params, body) => {

  return new Promise((resolve, reject) => {
    api.request({ url, method, params, data: body })
      .then(response => resolve(response))
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * Add interceptor
 */
api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(responseInterceptor, errorInterceptor);