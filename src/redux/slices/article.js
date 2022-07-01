import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post: [],
    currentPage: 1,
    perPage: 5,
    totalPostCount: 100,
    isLoading: false,
}

const postList = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postLoading:(state) => {
            state.isLoading = true
        },
        getPost:(state, {payload}) => {
            state.post = payload.data
            state.currentPage = payload.activePage
            state.isLoading = false
        }
    }
})

export const { postLoading, getPost } = postList.actions
export default postList.reducer