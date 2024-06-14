import Http from "../../services/htpp"

export const forgetUserAPI = (data:any)=>{
    return Http.post("user/forget-password",data)
}