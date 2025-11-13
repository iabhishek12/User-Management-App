import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// GET all users
export const getUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// GET user by ID
export const getUser = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// CREATE new user
export const createUser = async (userData) => {
  try {
    const response = await axios.post(BASE_URL, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// UPDATE user
export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// DELETE user
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    return true;
  } catch (error) {
    throw error;
  }
};