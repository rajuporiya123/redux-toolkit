import Http from "../../services/htpp"

export const singleproductdAPI = (id:any)=>{
    return Http.get(`product/${id}`)
}