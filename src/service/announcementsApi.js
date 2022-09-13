import mainURL from "./mainUrl";

const announcementsApi = {
  getAnnouncementsApi: async (pageNumber = 1, totalOnPage = 9) => {
    let page = `&_page=${pageNumber}&_limit=${totalOnPage}`;
    const configSortData = `?_sort=createdAt&_order=desc`;

    return await mainURL
      .get(`announcements${configSortData}${page}`)
      .then((responce) => {
        return responce.data;
      });
  },
  add: async (newData) => {
    return await mainURL.post("announcements/", newData);
  },
  remove: async (id) => {
    return await mainURL.delete(`announcements/${id}`);
  },
  edit: async (newData) => {
    return await mainURL.patch(`announcements/${newData.id}`, newData);
  },
};
export default announcementsApi;
