import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/types";

const initialState: initialStateType = {
  user: [],
  isLoading: false,
  isAuthorized: false,
  rememberMe: false,
  userAvatar: "",
  authorizeError: false,
};
type initialStateType = {
  user: Array<UserType>;
  isLoading: boolean;
  isAuthorized: boolean;
  rememberMe: boolean;
  userAvatar: string;
  authorizeError: boolean;
};
const authMe = createSlice({
  name: "authMe",
  initialState,
  reducers: {
    loginLoading: (state: initialStateType) => {
      state.isLoading = true;
    },
    loginFulfilled: (
      state: initialStateType,
      { payload }: PayloadAction<initialStateType>
    ) => {
      state.user = payload.user;
      state.isAuthorized = true;
      state.isLoading = false;
      state.authorizeError = false;
    },
    logoutLoading: (state: initialStateType) => {
      state.isLoading = true;
    },
    logoutFulfilled: (state: initialStateType) => {
      state.isAuthorized = false;
      state.isLoading = false;
      state.user = [];
    },
    authorizeFailure: (state: initialStateType) => {
      state.authorizeError = true;
    },
    authorizeSuccess: (state: initialStateType) => {
      state.authorizeError = false;
    },
    setUserAvatar: (
      state: initialStateType,
      { payload }: PayloadAction<string>
    ) => {
      state.userAvatar = payload;
      state.isLoading = false;
    },
    registerLoading: (state: initialStateType) => {
      state.isLoading = true;
    },
    registerFulfilled: (
      state: initialStateType,
      { payload }: PayloadAction<initialStateType>
    ) => {
      state.user = payload.user;
      state.isAuthorized = true;
      state.isLoading = false;
    },
  },
});

export const {
  loginLoading,
  loginFulfilled,
  registerFulfilled,
  logoutLoading,
  logoutFulfilled,
  registerLoading,
  setUserAvatar,
  authorizeFailure,
  authorizeSuccess,
} = authMe.actions;

export default authMe.reducer;
