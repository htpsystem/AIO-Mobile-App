import { api } from "./api";

export const registerUser = async (data)=>{
    const res = await api.post("/auth/register");
    return res.data;
};

export const loginUser = async (data) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};