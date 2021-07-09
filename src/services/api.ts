import axios from "axios";

const api = axios.create({
  headers: {
    Accept: "application/json",
  },
  baseURL: "https://sispenf-server.herokuapp.com/sispenf/v1",
});

export default api;
