import axios from "axios";

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "kea-nine.vercel.app"
});