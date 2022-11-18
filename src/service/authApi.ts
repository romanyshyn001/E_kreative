import mainURL, { ResponceTypeApi, UserDataType } from "./mainUrl";

type ResponceType = {
  user: UserDataType;
  accessToken: string;
};

const authApi = {
  login: async (credentials: any) => {
    return await mainURL
      .post<ResponceTypeApi<ResponceType>>("login", credentials)
      .then((res) => {
        return res;
      });
  },
  register: async (credentials: any) => {
    console.log("credentials", credentials);
    return await mainURL
      .post<ResponceTypeApi<ResponceType>>("register", credentials)
      .then((res) => {
        return res;
      });
  },
};
export default authApi;
