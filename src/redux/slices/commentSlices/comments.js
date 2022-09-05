import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  isLoading: false,
  getCommentError: false,
  errorStatus: "",
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
      state.errorStatus = "addSuccess";
      state.comments.push(payload);
      state.isLoading = false;
    },
    updateCommentLoading: (state) => {
      state.isLoading = true;
    },
    updateComment: (state, { payload }) => {
      state.errorStatus = "editSuccess";
      const { id, body } = payload;
      const existingPost = state.comments.find((comment) => comment.id === id);
      if (existingPost) {
        existingPost.body = body;
      }
      state.isLoading = false;
    },
    // Errors
    editCommentFailure: (state) => {
      state.errorStatus = "editRejected";
    },
    defaultError: (state) => {
      state.errorStatus = "";
    },
    getCommentFailure: (state) => {
      state.getCommentError = true;
    },
    removeCommentFailure: (state) => {
      state.errorStatus = "removeRejected";
    },
    addCommentFailure: (state) => {
      state.errorStatus = "addRejected";
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
  defaultError,
  getCommentFailure,
  removeCommentFailure,
  addCommentFailure,
} = comments.actions;

export default comments.reducer;
