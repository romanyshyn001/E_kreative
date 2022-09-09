import { createSelector } from "reselect";

const getAnnouncements = (state) => {
  return state.announcements;
};

export const announcementSelector = createSelector(getAnnouncements, (announcements) => {
  return announcements;
});
