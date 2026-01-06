import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/users",
});

export const createUser = async (data) => {
  const response = await API.post("/create", data);
  return response.data;
};

export const fetchUsers = async () => {
  const response = await API.get("/list");
  return response.data;
};
