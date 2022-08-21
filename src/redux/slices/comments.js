import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  isLoading: false,
};

const comments = createSlice({
  name: "comments",
  initialState,
  reducers: {
    commentsLoading: (state) => {
      state.isLoading = true;
    },
    getcomments: (state, { payload }) => {
      state.comments = payload;
      state.isLoading = false;
    },
    removeCommentLoading: (state) => {
      state.isLoading = true;
    },
    removeComment: (state, { payload }) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== payload
      );
      state.isLoading = false;
    },
    addCommentLoading: (state) => {
      state.isLoading = true;
    },
    addComment: (state, { payload }) => {
      state.comments.push(payload);
      state.isLoading = false;
    },
    updateCommentLoading: (state) => {
      state.isLoading = true;
    },
    updateComment: (state, { payload }) => {
      const { id, body } = payload;
      const existingPost = state.comments.find((comment) => comment.id === id);
      if (existingPost) {
        existingPost.body = body;
      }
      state.isLoading = false;
    },
  },
});

export const {
  commentsLoading,
  getcomments,
  removeCommentLoading,
  removeComment,
  addComment,
  addCommentLoading,
  updateCommentLoading,
  updateComment,
} = comments.actions;

export default comments.reducer;
