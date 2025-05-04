import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const signupUser = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

export const checkAuthStatus = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token");
  const response = await axios.get(`${API_URL}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const logoutUser = async () => {
  localStorage.removeItem("token");
};
