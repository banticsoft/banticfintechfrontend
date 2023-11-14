import axios from 'axios'

// const API = 'http://localhost:3001/api/v1'
const API_SERVER = 'https://backendbf.banticapps.com/api/v1'
// const API = process.env.REACT_APP_API_SERVER || API_SERVER
const API = API_SERVER

const instance = axios.create({
    baseURL: API,
    withCredentials: true, // es para establecer las cookies en axios
});

export default instance