import Http from "../../services/htpp"

export const loginUserAPI = (data:any)=>{
    return Http.post("user/signin",data)
}