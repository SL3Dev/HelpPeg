import axios from 'axios' ;

const api = axios.create ({
    baseURL: 'exp://10.0.0.198:3334',
}) 

export default api;