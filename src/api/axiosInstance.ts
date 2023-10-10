import axios from "axios";
import { User } from "../interfaces/users";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export async function getUsers() {
  const { data } = await axiosInstance.get<User[]>("/users");

  return data;
}

export async function createUsers() {
  const { data } = await axiosInstance.post("/users");

  return data;
}
