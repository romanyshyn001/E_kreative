import mainURL from "./mainUrl";

const authApi = {
  login: async (...credentials) => {
    return await mainURL.post("login", ...credentials);
  },
  register: async (...credentials) => {
    return await mainURL.post("register", ...credentials);
  },
};
export default authApi;