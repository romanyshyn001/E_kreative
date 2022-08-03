import axios from "axios";
export const instance = axios.create({
    baseURL:`https://ekreative-json-server.herokuapp.com/`,
    headers:{
      "Authorization": `Bearer ${localStorage.token}`,
      "Content-Type": "application/json",
    }
  })

export const postApi = {
  getPost: async(currentPage = 1, perPage = 5) => {
      return await instance.get(`posts/?_expand=user&_page=${currentPage}&_imit=${perPage}`)
  },
  
  delPost: async(id) => {
      return await instance.delete(`posts/${id}`)   
  },

  addPost: async(newData) => {
      return await instance.post('posts/', newData)
  },

  editPost: async(newData) => {
      return await instance.patch(`posts/${newData.id}`, newData)
  },
}

export const commentApi = {
  getComments: async(id) => {
      return await instance.get(`comments?_expand=user`, id)
  }, 

  addComment: async(newData) => {
      return await instance.post('comments/', newData)
  },

  editComment: async(newData) => {
      return await instance.patch(`comments/${newData.id}`, newData)
  },

  delComment: async(id) => {
      return await instance.delete(`comments/${id}`)
  }
}
//обробити .then в saga
export const authApi = {
  login: async(email, password, rememberMe) => {
      return await instance.post('login', {email, password})
      .then(resp => {
        let token = resp.data.accessToken
        let user = resp.data.user
          return [token, user, rememberMe]
      })
  },
  register: async(email, password, fistName, lastName, age, avatar) => {
      const payload = {email, password, fistName, lastName, age, avatar}
        return await instance.post('register', payload )
          .then(resp => {
            return resp
          })
  }
}

export const newsApi = {
  announcements: async(news) =>{
      return await instance.get('announcements', news)
      .then(res => {
        return res.data
      })
  },
}


