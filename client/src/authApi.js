import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; 

export const loginUser = async (email, password) => {
  return await axios.post(`${API_URL}/login`, { email, password });
};

export const registerUser = async (username, email, password) => {
  return await axios.post(`${API_URL}/register`, { username, email, password });
};
