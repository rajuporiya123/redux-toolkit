import Http from "../../services/htpp"

export const signupUserAPI = (data:any)=>{
    return Http.post("user/signup",data)
}