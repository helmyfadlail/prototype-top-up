import axios from "axios";

const API = axios.create({
  baseURL: "https://top-up-prototype-nvkumkvaqq-uc.a.run.app/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
