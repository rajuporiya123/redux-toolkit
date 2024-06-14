import Http from "../../services/htpp"

export const resendOtpAPI = (data:any)=>{
    return Http.post("user/resendOtp",data)
}