import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    announcements: [],
    currentPage: 1,
    perPage: 5,
    totalPostCount: 100,
    isLoading: false,
}

const announcements = createSlice({
    name: 'news',
    initialState,
    reducers:{
        newsLoading:(state) => {
            state.isLoading = true
        },
        getNews:(state, {payload}) => {
            state.announcements = payload
            state.isLoading = false
        }
    }
})

export const { newsLoading, getNews } = announcements.actions
export default announcements.reducer