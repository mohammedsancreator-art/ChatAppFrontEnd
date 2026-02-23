import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:3000/api"
    : "https://chatappbackend-2t91.onrender.com/api",
  withCredentials: true,
});
