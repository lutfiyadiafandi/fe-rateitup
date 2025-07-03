import API from "@/lib/axios";

export const login = async (email: string, password: string) => {
  const res = await API.post("/auth/login", { email, password });
  return res.data;
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  const res = await API.post("/auth/register", { name, email, password });
  return res.data;
};
