import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isLoading: false,
    isAuthMe: false,
    rememberMe: false
}

const loginInfo = createSlice({
    name: 'login',
    initialState,
    reducers:{
        loginLoading:(state) => {
            state.isLoading = true
        },
        loginFulfilled:(state, {payload}) => {
            state.user = payload[1]
            state.rememberMe = payload[2]
            state.isAuthMe = true
            state.isLoading = false
        },
        ///........LOG OUT........///
        logoutLoading:(state) => {
            state.isLoading = true
        },
        logoutFulfilled:(state) => {
            state.isAuth = false
            state.isLoading = false
        }
        
    }
})

export const { loginLoading, loginFulfilled, logoutLoading, logoutFulfilled } = loginInfo.actions
export default loginInfo.reducer