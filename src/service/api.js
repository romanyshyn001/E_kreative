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
    try{
      return await instance.get(`posts/?_expand=user&_page=${currentPage}&_imit=${perPage}`).then(resp => {
        return resp
      })  
    } catch(err) {
      console.log(err)
    }
  },
  
  delPost: async(id) => {
    try{
      return await instance.delete(`posts/${id}`)
    } catch(err) {
      console.log(err)
    }
      
  },

  addPost: async(newData) => {
    try{
      return await instance.post('posts/', newData)
    } catch(err) {
      console.log(err)
    }
  },

  editPost: async(newData) => {
    try{
      return await instance.patch(`posts/${newData.id}`, newData)
    } catch(err) {
      console.log(err)
    }
  },
}

export const commentApi = {
  getComments: async(id) => {
    try{
      return await instance.get(`comments?_expand=user`, id)
    } catch(err){
      console.log(err)
    }
  }, 

  addComment: async(newData) => {
    try{
      return await instance.post('comments/', newData)
    } catch(err) {
      console.log(err)
    }
  },

  editComment: async(newData) => {
    try{
      return await instance.patch(`comments/${newData.id}`, newData)
    } catch(err) {
      console.log(err)
    }
  },

  delComment: async(id) => {
    try{
      return await instance.delete(`comments/${id}`)
    } catch(err) {
      console.log(err)
    }
  }
}

export const authApi = {
  login: async(email, password, rememberMe) => {
    try{
      return await instance.post('login', {email, password})
      .then(resp => {
        let token = resp.data.accessToken
        let user = resp.data.user
          return [token, user, rememberMe]
      })
    } catch (err) {
      console.log(err)
    }
  },
  register: async(email, password, fistName, lastName, age, avatar) => {
    try{
      const payload = {email, password, fistName, lastName, age, avatar}
        return await instance.post('register', payload )
          .then(resp => {
            return resp
          })
    } catch(err){
      console.log(err)
    }
  }
}

export const newsApi = {
  announcements: async(news) =>{
    try{
      return await instance.get('announcements', news)
      .then(res => {
        return res.data
      })
    } catch(err) {
      console.log(err)
    }
  },

}


