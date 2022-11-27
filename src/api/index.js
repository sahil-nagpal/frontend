import axios from 'axios';

let apiClient = axios.create({
    baseURL:`https://cart-back.herokuapp.com/api`
})
apiClient.interceptors.request.use((request)=>{
    let access_token = localStorage.getItem("access_token")
    request.headers.Authorization = `Bearer ${access_token}`

    return request
})

export default apiClient;

