import api from "@/lib/api";

export const credentials = {
  async register(data: object) {
    const { email, userName, password } = data as {
      email: string;
      userName: string;
      password: string;
    };
    const request = await api.post("/api/register", {
      email,
      userName,
      password,
    });
    return request.data;
  },
  async Login(data: object) {
    const { email, password } = data as {
      email: string;
      password: string;
    };
    const request = await api.post("/api/login", {
      email,
      password,
    });
    return request.data;
  },
};
