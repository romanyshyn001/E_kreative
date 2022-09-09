import mainURL from "./mainUrl";

const announcementsApi = {
  getAnnouncementsApi: async () => {
    let urlSplit = "announcements?_sort=createdAt&_order=desc&_limit=10";
    return await mainURL.get(urlSplit);
  },
  add: async (newData) => {
    return await mainURL.post("announcements/", newData);
  },
  remove: async (id) => {
    return await mainURL.delete(`announcements/${id}`);
  },
  
};
export default announcementsApi;
