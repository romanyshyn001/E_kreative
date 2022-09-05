import { createSelector } from "reselect";

const getComment = (state) => {
  return state.comment;
};

export const commentSelector = createSelector(getComment, (comment) => {
  return comment;
});
