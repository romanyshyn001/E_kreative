import axios from "axios";

const mainURL = axios.create({
    baseURL: process.env.REACT_APP_MAIN_URL,
    headers:{
      "Authorization": `Bearer ${localStorage.token}`,
      "Content-Type": "application/json",
    }
})
export default mainURL