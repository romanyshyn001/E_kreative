import mainURL from "./mainUrl";

export const postApi = {
  getPost: async (currentPage = 1, perPage = 9) => {
    let page = `&_page=${currentPage}&_limit=${perPage}`
    const configSortData = `?_sort=id&_order=desc`

    return await mainURL.get(
      `posts${configSortData}&_expand=user${page}`
    ).then((responce) => { 
      return responce.data 
  });
  },

  deletePost: async (id) => {
    return await mainURL.delete(`posts/${id}`);
  },

  addPost: async (newData) => {
    return await mainURL.post("posts/", newData);
  },

  editPost: async (newData) => {
    return await mainURL.patch(`posts/${newData.id}`, newData);
  },
};
export default postApi;
