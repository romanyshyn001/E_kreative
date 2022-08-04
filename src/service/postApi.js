import mainURL from "./api";

export const postApi = {
    getPost: async(currentPage = 1, perPage = 5) => {
        return await mainURL.get(`posts/?_expand=user&_page=${currentPage}&_imit=${perPage}`)
    },
    
    delPost: async(id) => {
        return await mainURL.delete(`posts/${id}`)   
    },
  
    addPost: async(newData) => {
        console.log('newDat=>a', newData)
        return await mainURL.post('posts/', newData)
    },
  
    editPost: async(newData) => {
        return await mainURL.patch(`posts/${newData.id}`, newData)
    },
}
export default postApi 