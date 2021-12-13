import axios from "axios";

const api = axios.create({
  headers: {
    Accept: "application/json",
  },
  // baseURL: "http://localhost:3333/sispenf/v1",
  baseURL: "https://sispenf-server.herokuapp.com/sispenf/v1",
});

export default api;
