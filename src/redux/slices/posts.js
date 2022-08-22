import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  currentPage: 1,
  perPage: 9,
  totalPostCount: 100,
  isLoading: false,

  postError: false,
  editPostError: '',
};
const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postLoading: (state) => {
      state.isLoading = true;
    },
    getAllPosts: (state, { payload }) => {
      state.posts = payload.data;
      state.currentPage = payload.activePage;
      state.isLoading = false;
    },
    getPostFailure: (state) => {
      state.postError = true
    },
    addPostLoading: (state) => {
      state.isLoading = true;
    },
    addPost: (state, { payload }) => {
      state.posts.push(payload);
      state.isLoading = false;
    }, 
    addPostFailure: (state) => {
      state.addPostError = true
    },
    //Use later with errors
    // editFailure: (state) => {
    //   state.editPostError = 'Post was not updated'
    // },

    removePostLoading: (state) => {
      state.isLoading = true;
    },
    removePost: (state, { payload }) => {
      state.posts = state.posts.filter((post) => post.id !== payload);
      state.isLoading = false;
    },
    updatePostLoading: (state) => {
      state.isLoading = true;
    },
    updatePost: (state, { payload }) => {
      const { id, title, body } = payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.body = body;
      }
      state.isLoading = false;
      state.removePostError = false
    },
  },
});

export const {
  postLoading,
  getAllPosts,
  addPostLoading,
  addPost,
  removePostLoading,
  removePost,
  updatePostLoading,
  updatePost,
  getPostFailure,
  removePostFailure,
  positiveFailure,
  // editFailure
} = posts.actions;
export default posts.reducer;
