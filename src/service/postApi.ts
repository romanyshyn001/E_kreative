import { PostsType } from "../types/types";
import mainURL, { ResponceTypeApi } from "./mainUrl";

export const postApi = {
  getPost: async (currentPage: number = 1, perPage: number = 9) => {
    let page = `&_page=${currentPage}&_limit=${perPage}`;
    const configSortData = `?_sort=id&_order=desc`;

    return await mainURL
      .get<ResponceTypeApi<PostsType>>(
        `posts${configSortData}&_expand=user${page}`
      )
      .then((responce) => {
        return responce.data;
      });
  },

  deletePost: async (id: number) => {
    return await mainURL.delete<ResponceTypeApi<PostsType>>(`posts/${id}`);
  },

  addPost: async (newData: PostsType) => {
    return await mainURL.post<ResponceTypeApi<PostsType>>("posts/", newData);
  },

  editPost: async (newData: PostsType) => {
    return await mainURL.patch<ResponceTypeApi<PostsType>>(
      `posts/${newData.id}`,
      newData
    );
  },
};
export default postApi;
