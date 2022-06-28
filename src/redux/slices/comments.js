import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
    isLoading: false
}

const commentsList = createSlice({
    name: 'comments',
    initialState,
    reducers:{
        commentsLoading:(state) => {
            state.isLoading = true
        },
        getcomments:(state, {payload}) => {
            state.comments = payload
            state.isLoading = false
        }
    }
})

export const { commentsLoading, getcomments } = commentsList.actions
export default commentsList.reducer