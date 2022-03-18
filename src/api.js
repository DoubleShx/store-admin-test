import axios from 'axios';
import Cookies from "universal-cookie"
import {
  Notyf
} from 'notyf'

const httpClient = axios.create({
  baseURL: `https://toko.ox-sys.com/`,
  // withCredentials: true
});

httpClient.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
httpClient.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
httpClient.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
httpClient.defaults.headers.post['Accept'] = 'application/json';
httpClient.defaults.headers.get['Accept'] = 'application/json';
httpClient.defaults.headers.get['Content-Type'] = 'application/json';
httpClient.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';

const cookie = new Cookies();


httpClient.interceptors.request.use(
  config => {
    // if (!config.headers.Authorization) {
    //   const token = JSON.parse(localStorage.getItem("keyCloak")).token;

    let token = cookie.get("access_token");

    if (token) {
      config.headers = Object.assign(config.headers, { "Authorization": "Bearer " + token });
      return config;
    } else {
      return config
    }
  },
  error => Promise.reject(error)
);

httpClient.interceptors.response.use(response => {
  // Edit response config
  return response;
}, error => {
  const notyf = new Notyf()

  if (!error.response) {
    notyf.error("No internet connection!")
  }

  if (parseInt(error.response?.status) === 422) {
    notyf.error(error.response.data.message)
  }

  if (parseInt(error.response?.status) === 401) {
    notyf.error(error.response.data.message)
    cookie.remove("access_token")
    if (!window.location.href.includes("/login"))
    window.location.href = "/login"
  }

  if (parseInt(error.response?.status) === 403) {
    notyf.error(error.response.data.message)
    cookie.remove("access_token")
    window.location.href = "/login"
  }

  if (parseInt(error.response?.status) === 413) {
    notyf.error(error.response.data.message)
  }
  return Promise.reject(error);
});

export const httpGet = (params) => httpClient.request({
  method: 'get',
  ...params
});

export const httpPost = (params) => httpClient.request({
  method: 'post',
  ...params
})


export const httpDelete = (params) => httpClient({
  method: 'delete',
  ...params
});

export const httpPut = (params) => httpClient({
  method: 'put',
  ...params
});