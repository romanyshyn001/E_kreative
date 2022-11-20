import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostsType } from "../../../types/types";

const initialState: InitialStateType = {
  posts: [],
  currentPage: 1,
  perPage: 9,
  totalPostCount: 100,
  isLoading: false,

  errorStatus: "",
  getPostsError: false,
};
type InitialStateType = {
  posts: Array<PostsType>;
  currentPage: number;
  perPage?: number;
  totalPostCount?: number;
  isLoading?: boolean;
  errorStatus?: string;
  getPostsError?: boolean;
};
const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postLoading: (state: InitialStateType) => {
      state.isLoading = true;
    },
    getAllPosts: (
      state: InitialStateType,
      { payload }: PayloadAction<InitialStateType>
    ) => {
      state.posts = payload.posts;
      state.currentPage = payload.currentPage;
      state.isLoading = false;
    },
    addPostLoading: (state: InitialStateType) => {
      state.isLoading = true;
    },
    addPost: (
      state: InitialStateType,
      { payload }: PayloadAction<PostsType>
    ) => {
      state.errorStatus = "addSuccess";
      state.posts.push(payload);
      state.isLoading = false;
    },
    removePostLoading: (state: InitialStateType) => {
      state.isLoading = true;
    },
    removePost: (
      state: InitialStateType,
      { payload }: PayloadAction<number>
    ) => {
      state.posts = state.posts.filter((post) => post.id !== payload);
      state.isLoading = false;
    },
    updatePostLoading: (state: InitialStateType) => {
      state.isLoading = true;
    },
    updatePost: (
      state: InitialStateType,
      { payload }: PayloadAction<PostsType>
    ) => {
      state.errorStatus = "editSuccess";
      const { id, title, body } = payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.body = body;
      }
      state.isLoading = false;
    },
    //Errors
    getPostFailure: (state: InitialStateType) => {
      state.getPostsError = true;
    },
    addPostFailure: (state: InitialStateType) => {
      state.errorStatus = "addRejected";
    },
    defaultError: (state: InitialStateType) => {
      state.errorStatus = "";
    },
    editFailure: (state: InitialStateType) => {
      state.errorStatus = "editRejected";
    },
    removePostFailure: (state: InitialStateType) => {
      state.errorStatus = "removeRejected";
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
  editFailure,
  defaultError,
  addPostFailure,
} = posts.actions;
export default posts.reducer;
