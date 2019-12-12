import Axios from "axios";

const JwtToken = localStorage.getItem("token") || null;

let apiUrl;

const apiUrls = {
  production: "HEROKUAPPNAME",
  development: "http://localhost:3000/api"
};

window.location.hostname === "localhost" ? (apiUrl = apiUrls.development): (apiUrl = apiUrls.production);

export const api = Axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${JwtToken}`,
    "Access-Control-Allow-Origin": "*"
  }
});

export default api;
