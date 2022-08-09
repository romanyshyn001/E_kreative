import mainURL from "./mainUrl";

export const commentApi = {
  getComments: async (id) => {
    return await mainURL.get(`comments?_expand=user`, id);
  },

  addComment: async (newData) => {
    return await mainURL.post("comments/", newData);
  },

  editComment: async (newData) => {
    return await mainURL.patch(`comments/${newData.id}`, newData);
  },

  delComment: async (id) => {
    return await mainURL.delete(`comments/${id}`);
  },
};
export default commentApi;
