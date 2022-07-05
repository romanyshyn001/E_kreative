import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isLoading: false,
    isAuth: false,
    rememberMe: false
}

const registerInfo = createSlice({
    name: 'register',
    initialState,
    reducers:{
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

export const { registerLoading, registerFulfilled} = registerInfo.actions
export default registerInfo.reducer