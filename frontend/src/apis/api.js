import axios from 'axios';

// ✅ Automatically attach token if present
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: { "Content-Type": "application/json" },
  timeout: 10000, // 10s max wait — improves performance & stability
});

// ✅ Automatically attach token if present
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);


// ✅ Handle expired token or unauthorized access globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.dispatchEvent(new Event("storage"));
    }
    return Promise.reject(error);
  }
);


export default API;
