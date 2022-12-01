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
export enum EnumStatusComments {
  addSuccess = "ADD_SUCCESS",
  editSuccess = "EDIT_SUCCESS",
  editRejected = "EDIT_REJECTED",
  addRejected = "ADD_REJECED", //
  removeRejected = "REMOVE_REJECTED",
}
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
    removeCommentLoading: (
      state: InitialStatetype,
      { payload }: PayloadAction<number>
    ) => {
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
    addCommentLoading: (
      state: InitialStatetype,
      { payload }: PayloadAction<CommentsType>
    ) => {
      state.isLoading = true;
    },
    addComment: (
      state: InitialStatetype,
      { payload }: PayloadAction<CommentsType>
    ) => {
      state.errorStatus = EnumStatusComments.addSuccess;
      state.comments.push(payload);
      state.isLoading = false;
    },
    updateCommentLoading: (
      state: InitialStatetype,
      { payload }: PayloadAction<CommentsType>
    ) => {
      state.isLoading = true;
    },
    updateComment: (
      state: InitialStatetype,
      { payload }: PayloadAction<CommentsType>
    ) => {
      state.errorStatus = EnumStatusComments.editSuccess;
      const { id, body } = payload;
      const existingPost = state.comments.find((comment) => comment.id === id);
      if (existingPost) {
        existingPost.body = body;
      }
      state.isLoading = false;
    },
    // Errors
    editCommentFailure: (state: InitialStatetype) => {
      state.errorStatus = EnumStatusComments.editRejected;
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
      state.errorStatus = EnumStatusComments.addRejected;
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
