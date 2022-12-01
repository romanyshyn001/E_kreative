import { AnnouncementsType } from "../types/types";
import mainURL, { ResponceTypeApi } from "./mainUrl";

const announcementsApi = {
  getAnnouncementsApi: async (pageNumber = 1, totalOnPage: string) => {
    let page = `&_page=${pageNumber}&_limit=${totalOnPage}`;
    const configSortData = `?_sort=createdAt&_order=desc`;

    return await mainURL
      .get<ResponceTypeApi<AnnouncementsType>>(
        `announcements${configSortData}${page}`
      )
      .then((responce) => {
        return responce.data;
      });
  },
  add: async (newData: AnnouncementsType) => {
    return await mainURL
      .post<ResponceTypeApi<AnnouncementsType>>("announcements/", newData)
      .then((res) => {
        return res;
      });
  },
  remove: async (id: number) => {
    return await mainURL
      .delete<ResponceTypeApi<AnnouncementsType>>(`announcements/${id}`)
      .then((res) => {
        return res;
      });
  },
  edit: async (newData: AnnouncementsType) => {
    return await mainURL
      .patch<ResponceTypeApi<AnnouncementsType>>(
        `announcements/${newData.id}`,
        newData
      )
      .then((res) => {
        return res;
      });
  },
};
export default announcementsApi;
