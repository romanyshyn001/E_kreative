import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    announcements: [],
    currentPage: 1,
    perPage: 5,
    totalPostCount: 100,
    isLoading: false,
}

const announcements = createSlice({
    name: 'announcements',
    initialState,
    reducers:{
        announcementsLoading:(state) => {
            state.isLoading = true
        },
        getAnnouncements:(state, {payload}) => {
            state.announcements = payload
            state.isLoading = false
        }
    }
})

export const { announcementsLoading, getAnnouncements } = announcements.actions
export default announcements.reducer