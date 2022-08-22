import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  isAuthorized: false,
  rememberMe: false,
  userAvatar: "",
  authorizeError: false
};

const authMe = createSlice({
  name: "authMe",
  initialState,
  reducers: {
    loginLoading: (state) => {
      state.isLoading = true;
    },
    loginFulfilled: (state, { payload }) => {
      state.user = payload.user;
      state.isAuthorized = true;
      state.isLoading = false;
      state.authorizeError = false
    },
    logoutLoading: (state) => {
      state.isLoading = true;
    },
    logoutFulfilled: (state) => {
      state.isAuthorized = false;
      state.isLoading = false;
      state.user = {}
    },
    authorizeFailure: (state,) => {
      state.authorizeError = true;
    },
    setUserAvatar: (state, { payload }) => {
      state.userAvatar = payload;
      state.isLoading = false;
    },
    registerLoading: (state) => {
      state.isLoading = true;
    },
    registerFulfilled: (state, { payload }) => {
      state.user = payload;
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
  authorizeFailure
} = authMe.actions;
export default authMe.reducer;
