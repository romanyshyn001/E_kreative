import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnnouncementsType } from "../../../types/types";

const initialState: InitialStateType = {
  announcements: [],
  pageNumber: 1,
  totalOnPage: 5,
  totalAnnouncementCount: 30,
  isLoading: false,
  //todo: add Enum status to errorStatus
  errorStatus: "",
  getAnnouncementError: false,
};

export type InitialStateType = {
  announcements?: Array<AnnouncementsType>;
  pageNumber: number;
  totalOnPage: number;
  totalAnnouncementCount?: number;
  isLoading?: boolean;
  errorStatus?: string;
  getAnnouncementError?: boolean;
};

export enum EnumStatus {
  AddSuccess = "addSuccess",
}
const announcements = createSlice({
  name: "announcements",
  initialState,
  reducers: {
    announcementsLoading: (
      state: InitialStateType,
      { payload }: PayloadAction<InitialStateType>
    ) => {
      state.isLoading = true;
    },
    getAnnouncements: (
      state: InitialStateType,
      { payload }: PayloadAction<InitialStateType>
    ) => {
      state.announcements = payload.announcements;
      state.pageNumber = payload.pageNumber;
      state.isLoading = false;
      state.totalOnPage = payload.totalOnPage;
    },
    addAnnouncementLoading: (
      state: InitialStateType,
      { payload }: PayloadAction<AnnouncementsType>
    ) => {
      state.isLoading = true;
    },
    addAnnouncement: (
      state: InitialStateType,
      { payload }: PayloadAction<AnnouncementsType>
    ) => {
      state.errorStatus = "addSuccess";
      state.announcements?.push(payload);
      state.isLoading = false;
    },

    removeAnnouncementLoading: (state: InitialStateType) => {
      state.isLoading = true;
    },
    removeAnnouncement: (
      state: InitialStateType,
      { payload }: PayloadAction<number>
    ) => {
      if (state.announcements)
        state.announcements = state.announcements?.filter(
          (announcement) => announcement.id !== payload
        );
      state.isLoading = false;
    },
    updateAnnouncementLoading: (state: InitialStateType) => {
      state.isLoading = true;
    },

    updateAnnouncement: (
      state: InitialStateType,
      { payload }: PayloadAction<AnnouncementsType>
    ) => {
      state.errorStatus = "editSuccess";
      const { id, title, body } = payload;
      const existingAnnouncement = state.announcements?.find(
        (announcement) => announcement.id === id
      );
      if (existingAnnouncement) {
        existingAnnouncement.title = title;
        existingAnnouncement.body = body;
      }
      state.isLoading = false;
    },

    getAnnouncementFailure: (state: InitialStateType) => {
      state.getAnnouncementError = true;
    },
    editAnnouncementFailure: (state: InitialStateType) => {
      state.errorStatus = "editRejected";
    },
    addAnnouncementFailure: (state: InitialStateType) => {
      state.errorStatus = "addRejected";
    },
    removeAnnouncementFailure: (state: InitialStateType) => {
      state.errorStatus = "removeRejected";
    },
    defaultError: (state: InitialStateType) => {
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
