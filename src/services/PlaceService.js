import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/rach7110/beautiful-places",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getPlaces() {
    return apiClient.get("/places");
  },
};
