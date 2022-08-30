import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  isLoading: false,
  editCommentError: "",
  getCommentError: false,
  removeError: "",
  addCommentError: "",
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
      state.removeError = "success";
      state.comments = state.comments.filter(
        (comment) => comment.id !== payload
      );
      state.isLoading = false;
    },
    addCommentLoading: (state) => {
      state.isLoading = true;
    },
    addComment: (state, { payload }) => {
      state.addCommentError = "success";
      state.comments.push(payload);
      state.isLoading = false;
    },
    updateCommentLoading: (state) => {
      state.isLoading = true;
    },
    updateComment: (state, { payload }) => {
      state.editCommentError = "success";
      const { id, body } = payload;
      const existingPost = state.comments.find((comment) => comment.id === id);
      if (existingPost) {
        existingPost.body = body;
      }
      state.isLoading = false;
    },
    // Errors
    editCommentFailure: (state) => {
      state.editCommentError = "reject";
    },
    editErrorEmpty: (state) => {
      state.editCommentError = "";
    },
    getCommentFailure: (state) => {
      state.getCommentError = true;
    },
    removeCommentFailure: (state) => {
      state.removeError = "reject";
    },
    removeEmptyError: (state) => {
      state.removeError = "";
    },
    addCommentFailure: (state) => {
      state.addCommentError = "reject";
    },
    addEmptyError: (state) => {
      state.addCommentError = "";
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

  editCommentFailure,
  editErrorEmpty,
  getCommentFailure,
  removeCommentFailure,
  removeEmptyError,
  addCommentFailure,
  addEmptyError,
} = comments.actions;

export default comments.reducer;
