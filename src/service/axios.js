import axios from "axios";
import { base_url, public_key } from '../MarvelApi';

const mainAxios = axios.create({
  baseURL: "http://localhost:3000/"
});

const marvelAxios = axios.create({
  baseURL: `${base_url}v1/public`
});

export {mainAxios, marvelAxios}