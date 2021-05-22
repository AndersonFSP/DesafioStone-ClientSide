import axios from "axios";

const mainAxios = axios.create({
  baseURL: "http://localhost:3000/"
});

export {mainAxios}