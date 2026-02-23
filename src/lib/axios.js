import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatappfrontend-ph0b.onrender.com/api" : "/api",
  withCredentials: true,
});
