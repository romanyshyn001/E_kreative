import { CommentsType } from "./../../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InitialStatetype = {
  comments: [],
  isLoading: false,
  getCommentError: false,
  errorStatus: "",
};
type InitialStatetype = {
  comments: Array<CommentsType>;
  isLoading?: boolean;
  getCommentError?: boolean;
  errorStatus?: string;
};

const comments = createSlice({
  name: "comments",
  initialState,
  reducers: {
    commentsLoading: (state: InitialStatetype) => {
      state.isLoading = true;
    },
    getcomments: (
      state: InitialStatetype,
      { payload }: PayloadAction<InitialStatetype>
    ) => {
      state.comments = payload.comments;
      state.isLoading = false;
    },
    removeCommentLoading: (state: InitialStatetype) => {
      state.isLoading = true;
    },
    removeComment: (
      state: InitialStatetype,
      { payload }: PayloadAction<number>
    ) => {
      // state.removeError = "success";
      //remove later
      state.comments = state.comments.filter(
        (comment) => comment.id !== payload
      );
      state.isLoading = false;
    },
    addCommentLoading: (state: InitialStatetype) => {
      state.isLoading = true;
    },
    addComment: (
      state: InitialStatetype,
      { payload }: PayloadAction<CommentsType>
    ) => {
      state.errorStatus = "addSuccess";
      state.comments.push(payload);
      state.isLoading = false;
    },
    updateCommentLoading: (state: InitialStatetype) => {
      state.isLoading = true;
    },
    updateComment: (
      state: InitialStatetype,
      { payload }: PayloadAction<CommentsType>
    ) => {
      state.errorStatus = "editSuccess";
      const { id, body } = payload;
      const existingPost = state.comments.find((comment) => comment.id === id);
      if (existingPost) {
        existingPost.body = body;
      }
      state.isLoading = false;
    },
    // Errors
    editCommentFailure: (state: InitialStatetype) => {
      state.errorStatus = "editRejected";
    },
    defaultError: (state: InitialStatetype) => {
      state.errorStatus = "";
    },
    getCommentFailure: (state: InitialStatetype) => {
      state.getCommentError = true;
    },
    removeCommentFailure: (state: InitialStatetype) => {
      state.errorStatus = "removeRejected";
    },
    addCommentFailure: (state: InitialStatetype) => {
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
