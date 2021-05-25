import axios from "axios";
import { base_url, public_key } from '../MarvelApi';
import store from '../store/modules/auth';

const mainAxios = axios.create({
  baseURL: "http://localhost:3000/"
});

mainAxios.interceptors.request.use(function (config){
  const token = store.state.token;
  if(token){
      config.headers.Authorization = token;
  }
  return config;
}, function (erro) {
  return Promise.reject(erro);
});

const marvelAxios = axios.create({
  baseURL: `${base_url}v1/public`
});

export {mainAxios, marvelAxios}