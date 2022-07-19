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
        //.........ADD COMMENT..............///
        addCommentLoading:(state) => {
            state.isLoading = true
        },
        addComment:(state, {payload}) => {
            state.comments.push(payload)
            state.isLoading = false
        },
        //....UPDATE......//
        updateCommentLoading:(state) => {
            state.isLoading = true
        },
        updateComment:(state, {payload}) => {
            const { id, body } = payload
            const existingPost = state.comments.find(c => c.id === id)
            if (existingPost) {
              existingPost.body = body
            }
            state.isLoading = false
        }
    }
})

export const { commentsLoading, getcomments, delCommentLoading, delComment, 
    addComment, addCommentLoading, updateCommentLoading,
    updateComment} = commentsList.actions
export default commentsList.reducer