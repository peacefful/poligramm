import axios from "axios";

const getAccessToken = () => {
  const accessToken = useCookie("accessToken");
  return accessToken.value;
};

export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

http.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
