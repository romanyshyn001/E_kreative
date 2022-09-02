import { createSelector } from "reselect"


const getPostsSelector = (state) => {
    return state.posts.posts
}

export const getPosts = createSelector(getPostsSelector, (posts) => {
    return posts
})

export const getTotalPostCount = (state) => {
    return state.posts.totalPostCount
}
export const getCurrentPage = (state) => {
    return state.posts.currentPage
}

export const perPage = (state) => {
    return state.posts.perPage
}

export const postsError = (state) => {
    return state.posts.getPostsError
}

export const getPerPage = (state) => {
    return state.posts.perPage
}