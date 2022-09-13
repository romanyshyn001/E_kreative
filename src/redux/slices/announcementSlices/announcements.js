import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  announcements: [],
  pageNumber: 1,
  totalOnPage: 10,
  totalAnnouncementCount: 30,
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
      state.announcements = payload.data;
      state.pageNumber = payload.activePage;
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

    removeAnnouncementLoading: (state) => {
      state.isLoading = true;
    },
    removeAnnouncement: (state, { payload }) => {
      state.announcements = state.announcements.filter(
        (announcement) => announcement.id !== payload
      );
      state.isLoading = false;
    },
    updateAnnouncementLoading: (state) => {
      state.isLoading = true;
    },

    updateAnnouncement: (state, { payload }) => {
      state.errorStatus = "editSuccess";
      const { id, title, body } = payload;
      const existingAnnouncement = state.announcements.find(
        (announcement) => announcement.id === id
      );
      if (existingAnnouncement) {
        existingAnnouncement.title = title;
        existingAnnouncement.body = body;
      }
      state.isLoading = false;
    },

    getAnnouncementFailure: (state) => {
      state.getAnnouncementError = true;
    },
    editAnnouncementFailure: (state) => {
      state.errorStatus = "editRejected";
    },
    addAnnouncementFailure: (state) => {
      state.errorStatus = "addRejected";
    },
    removeAnnouncementFailure: (state) => {
      state.errorStatus = "removeRejected";
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
  updateAnnouncementLoading,
  updateAnnouncement,

  getAnnouncementFailure,
  editAnnouncementFailure,
  removeAnnouncementFailure,
  addAnnouncementFailure,
  defaultError,
} = announcements.actions;
export default announcements.reducer;
