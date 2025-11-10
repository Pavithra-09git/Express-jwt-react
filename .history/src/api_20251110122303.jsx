import axios from "axios";

const api = axios.create({
  baseURL: "https://jwt2-c25h.onrender.com",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});



api.interceptors.response.use((res) => {
  console.log(res.data);
  return res;
});
export default api;
