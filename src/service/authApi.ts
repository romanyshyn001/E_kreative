import { AuthorizeUserType, UserType } from "../types/types";
import mainURL, { ResponceTypeApi } from "./mainUrl";



const authApi = {
  login: async (credentials: any) => {
    return await mainURL
      .post<ResponceTypeApi<AuthorizeUserType>>("login", credentials)
      .then((res) => {
        return res.data;
      });
  },
  register: async (credentials: any) => {
    return await mainURL
      .post<ResponceTypeApi<AuthorizeUserType>>("register", credentials)
      .then((res) => {
        return res.data;
      });
  },
};
export default authApi;
