import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post: [],
    currentPage: 1,
    perPage: 8,
    totalPostCount: 100,
    isLoading: false,
    postEdit: true
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
        },
        //....ADD POST......//
        addPostLoading:(state) => {
            state.isLoading = true
        },
        addPost:(state, {payload}) => {
            state.post.push(payload)
            state.isLoading = false
        },
        //....DELETE......//
        delPostLoading:(state) => {
            state.isLoading = true
        },
        delPost:(state, {payload}) => {
            state.post = state.post.filter(p => p.id !== payload)
            state.isLoading = false
        },
        //....UPDATE......//
        updatePostLoading:(state) => {
            state.isLoading = true
        },
        updatePost:(state, {payload}) => {
            const { id, title, body } = payload
            const existingPost = state.post.find(p => p.id === id)
            if (existingPost) {
              existingPost.title = title
              existingPost.body = body
            }
            state.isLoading = false
        }
    }
})

export const { postLoading, getPost, addPostLoading, addPost,
    delPostLoading, delPost, updatePostLoading, updatePost } = postList.actions
export default postList.reducer