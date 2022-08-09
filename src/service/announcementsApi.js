import mainURL from "./mainUrl";

const announcementsApi = {
  getAnnouncementsApi: async () => {
    return await mainURL.get("announcements");
  },
};
export default announcementsApi;
