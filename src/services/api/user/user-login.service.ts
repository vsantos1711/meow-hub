import { api } from "../api";

type UserLoginPayload = {
  username: string;
  password: string;
};

export const userLogin = async (payload: UserLoginPayload) => {
  try {
    const { data } = await api.post("/auth/login", payload);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};