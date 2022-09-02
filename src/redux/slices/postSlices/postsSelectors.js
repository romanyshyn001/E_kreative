import { createSelector } from "reselect";

const getPosts = (state) => {
  return state.posts;
};

export const postsSelector = createSelector(getPosts, (posts) => {
  return posts;
});
