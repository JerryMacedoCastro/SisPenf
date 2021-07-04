import axios from "axios";

const api = axios.create({
  baseURL: "https://sispenf-server.herokuapp.com/sispenf/v1",
});

export default api;
