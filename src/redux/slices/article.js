import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post: [],
    isLoading: false
}

const postList = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postLoading:(state) => {
            state.isLoading = true
        },
        getPost:(state, {payload}) => {
            state.post = payload
            state.isLoading = false
        }
    }
})

export const { postLoading, getPost } = postList.actions
export default postList.reducer