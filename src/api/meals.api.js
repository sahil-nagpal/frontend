import apiClient from './index';


export const getMeals = ()=>{
    return apiClient
    .get("/meals")
    .then((response)=>{
        return response.data
    })
    .catch((err)=>{
        return Promise.reject(); 
    })
}