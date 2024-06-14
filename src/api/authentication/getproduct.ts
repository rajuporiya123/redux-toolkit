import Http from "../../services/htpp"

export const getproductdAPI = ()=>{
    return Http.get("product")
}