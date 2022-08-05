import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isLoading: false,
    isAuth: false,
    rememberMe: false,
    userAva: '' 
}

const authMe = createSlice({
    name: 'authMe',
    initialState,
    reducers:{
        loginLoading:(state) => {
            state.isLoading = true
        },
        loginFulfilled:(state, {payload}) => {
            state.user = payload.user
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
        setUserAvatar: (state ) => {
            state.isLoading = true
        },
        getUserAvatar: (state, {payload}) => {
            state.userAva = payload
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
    logoutLoading, logoutFulfilled, registerLoading, getUserAvatar, setUserAvatar } = authMe.actions
export default authMe.reducer