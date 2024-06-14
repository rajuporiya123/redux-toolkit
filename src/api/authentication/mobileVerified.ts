import Http from "../../services/htpp"

export const mobileVerifiedAPI = (data:any)=>{
    return Http.post("user/verifiedOtp",data)
}