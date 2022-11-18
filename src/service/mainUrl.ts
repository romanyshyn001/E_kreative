import axios from "axios";

const mainURL = axios.create({
  baseURL: process.env.REACT_APP_MAIN_URL,
  headers: {
    Authorization: `Bearer ${localStorage.token}`,
    "Content-Type": "application/json",
  },
});

export type UserDataType = {
  age: number;
  email: string;
  firstname: string;
  id: number;
  lastname: string;
  cpassword?: string;
  avatar?: string;
};

export enum ResultCodesEnum {
  Success = 200,
  Error = 400,
  Created = 201
}

export type ResponceTypeApi<D = {}, RC = ResultCodesEnum> = {
  data: D;
  status: RC;
  statusText: string;
};
export default mainURL;
