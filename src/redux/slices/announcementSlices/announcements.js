import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  announcements: [],
  currentPage: 1,
  perPage: 10,
  totalPostCount: 30,
  isLoading: false,

  errorStatus: "",
  getAnnouncementError: false,
};

const announcements = createSlice({
  name: "announcements",
  initialState,
  reducers: {
    announcementsLoading: (state) => {
      state.isLoading = true;
    },
    getAnnouncements: (state, { payload }) => {
      state.announcements = payload;
      state.isLoading = false;
    },
    addAnnouncementLoading: (state) => {
      state.isLoading = true;
    },
    addAnnouncement: (state, { payload }) => {
      state.errorStatus = "addSuccess";
      state.announcements.push(payload);
      state.isLoading = false;
    },

    //
    removeAnnouncementLoading: (state) => {
      state.isLoading = true;
    },
    removeAnnouncement: (state, { payload }) => {
      state.announcements = state.announcements.filter(
        (announcement) => announcement.id !== payload
      );
      state.isLoading = false;
    },

    addAnnouncementFailure: (state) => {
      state.errorStatus = "addRejected";
    },
    defaultError: (state) => {
      state.errorStatus = "";
    },
  },
});

export const {
  announcementsLoading,
  getAnnouncements,
  addAnnouncement,
  addAnnouncementLoading,
  removeAnnouncementLoading,
  removeAnnouncement,

  addAnnouncementFailure,
  defaultError,
} = announcements.actions;
export default announcements.reducer;
