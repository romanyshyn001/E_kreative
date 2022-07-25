import axios from "axios";
export const instance = axios.create({
    baseURL:`https://ekreative-json-server.herokuapp.com/`,
    headers:{
      "Authorization": `Bearer ${localStorage.token}`,
      "Content-Type": "application/json",
    }
  })

export const api = {
  postAPI: async(currentPage = 1, perPage = 5) => {
    return await instance.get(`posts/?_expand=user&_page=${currentPage}&_imit=${perPage}`).then(resp => {
      return resp
    })  
  },
  delPost: async(id) => {
    console.log('id from api =>', id)
    return await instance.delete(`posts/${id}`)
      
  },
  addPost: async(newData) => {
    console.log('payload api =>', newData)
    return await instance.post('posts/', newData)
    // .then(res => console.log('res api =>', res))
  },
  editPost: async(newData) => {
    console.log('payload api =>', newData.id)
    return await instance.patch(`posts/${newData.id}`, newData)
  },
  commentAPI: async(id) => {
    return await instance.get(`comments?_expand=user`, id)
  }, 
  addCommentAPI: async(newData) => {
    // console.log('payload api =>', newData)   
      return await instance.post('comments/', newData)
    // .then(res => console.log('res api =>', res))
  },
  editCommentAPI: async(newData) => {
    console.log('payload api =>', newData)
    return await instance.patch(`comments/${newData.id}`, newData)
  },
  delCommentAPI: async(id) => {
    console.log('id from api =>', id)
    return await instance.delete(`comments/${id}`)
      
  },

  
  loginAPI: async(email, password, rememberMe) => {
    return await instance.post('login', {email, password})
    .then(resp => {
      if(resp.status === 200){
        let token = resp.data.accessToken
        let user = resp.data.user
        return [token, user, rememberMe]
      } else {
        console.log('Bad Request =>')
      }
    })
  },

  register: async(email, password, fistName, lastName, age, avatar) => {
    const payload = {email, password, fistName, lastName, age, avatar}
      return await instance.post('register', payload )
        .then(resp => {
          return resp
        })
      },
  announcements: async(news) =>{
    return await instance.get('announcements', news)
    .then(res => {
      return res.data
    })
  },

}

//Переробити коментарі, додати логіку в запиті api, а не в компоненті
// let arr = 1
// api.commentAPIqwerty(arr)
