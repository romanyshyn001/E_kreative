import { CommentsType } from "../types/types";
import mainURL, { ResponceTypeApi } from "./mainUrl";

export const commentApi = {
  getComments: async () => {
    return await mainURL
      .get<ResponceTypeApi<CommentsType>>(`comments?_expand=user`)
      .then((res) => {
        return res;
      });
  },

  addComment: async (newData: CommentsType) => {
    return await mainURL
      .post<ResponceTypeApi<CommentsType>>("comments/", newData)
      .then((res) => {
        return res.data;
      });
  },

  editComment: async (newData: CommentsType) => {
    return await mainURL
      .patch<ResponceTypeApi<CommentsType>>(`comments/${newData.id}`, newData)
      .then((res) => {
        return res.data;
      });
  },

  deleteComment: async (id: number) => {
    return await mainURL
      .delete<ResponceTypeApi<CommentsType>>(`comments/${id}`)
      .then((res) => {
        return res;
      });
  },
};
export default commentApi;
