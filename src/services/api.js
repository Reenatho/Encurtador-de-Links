import axios from "axios";  

export const key = 'f75e15c94a7e1fe2849c0ed0bafbc5c66470a060' ;

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;