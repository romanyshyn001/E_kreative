import axios from "axios";
export const instance = axios.create({
    baseURL:`https://ekreative-json-server.herokuapp.com/`,
    headers:{
      "Authorization": `Bearer ${localStorage.token}`,
      "Content-Type": "application/json",
    }
  })

export const api = {
  postAPI: async() => {
    return await instance.get(`posts/?_limit=7`)
  },
  commentAPI: async(id) => {
    return await instance.get(`comments`, id)
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

}

