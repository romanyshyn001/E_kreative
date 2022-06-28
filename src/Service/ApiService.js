import axios from 'axios'

export const instance = axios.create({
  baseURL:`https://swapi.dev/api/`,
  headers:{
    "Content-Type": "application/json"
  }
})

export const getMovieAPI = (id) => {
  return instance.get(`films/`, +id)
}

export const arrayOfLinks = (end) => {
  return axios.all(end.map((endpoint) => axios.get(endpoint))).then(
    axios.spread((...data) => {
      return data;
    })
  )
}

export const personageDetailAPI = (uId) => {
  return axios.get(uId)
}




