import Http from "../../services/htpp"

export const resetPasswordAPI = (data:any)=>{
    return Http.post("user/reset-password",data)
}