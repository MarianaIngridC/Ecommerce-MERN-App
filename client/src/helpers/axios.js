import axios from 'axios';

const api = 'http://localhost:2000/api'

const axiosInstance = axios.create({
    baseURL: api,
})

export default axiosInstance;