import { AuthenticationOptions } from "@adminjs/express";

const DEFAULT_ADMIN = {
  email: "admin@example.com",
  password: "password",
};
export const authenticationOption: AuthenticationOptions = {
  authenticate: async (email, password) => {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
      return Promise.resolve(DEFAULT_ADMIN);
    }
    return null;
  },
  cookiePassword: "senha-de-cookie",
};
