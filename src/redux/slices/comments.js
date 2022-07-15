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
        },
        //.............DELETE COMMENT.........../
        delCommentLoading:(state) => {
            state.isLoading = true
        },
        delComment:(state, {payload}) => {
            state.comments = state.comments.filter(comment => comment.id !== payload)
            state.isLoading = false
        },
    }
})

export const { commentsLoading, getcomments, delCommentLoading, delComment} = commentsList.actions
export default commentsList.reducer