import apiClient from "./index";
export const login = async(data)=>{
    return apiClient
    .post("/user/login",data)
    .then((response)=>{
        window.localStorage.setItem("access_token",response.data.token)
        window.localStorage.setItem("user_id",response.data.user._id)
        console.log("response ::::",response)
        return response.data
        
    })
    .catch((err)=>{
        return {"success":false,"message":"User not found"}
    })
    
}

export const register = async(data)=>{
    return apiClient
    .post("/user/register",data)
    .then((response)=>{
        window.localStorage.setItem("access_token",response.data.token)
        window.localStorage.setItem("user_id",response.data.user._id)
        console.log("response ::::",response)
        return response.data
    })
    .catch((err)=>{
        return {"success":false,"message":"User not found"}
    })
}