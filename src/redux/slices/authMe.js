import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isLoading: false,
    isAuth: false,
    rememberMe: false,
}

const authMe = createSlice({
    name: 'authMe',
    initialState,
    reducers:{
        loginLoading:(state) => {
            state.isLoading = true
        },
        loginFulfilled:(state, {payload}) => {
            state.user = payload[1]
            state.rememberMe = payload[2]
            state.isAuth = true
            state.isLoading = false
        },
        logoutLoading:(state) => {
            state.isLoading = true
        },
        logoutFulfilled:(state) => {
            state.isAuth = false
            state.isLoading = false
        },
        registerLoading:(state) => {
            state.isLoading = true
        },
        registerFulfilled:(state, {payload}) => {
            state.user = payload
            state.isAuth = true
            state.isLoading = false
        },
    }
})

export const { loginLoading, loginFulfilled, registerFulfilled,
    logoutLoading, logoutFulfilled, registerLoading } = authMe.actions
export default authMe.reducer