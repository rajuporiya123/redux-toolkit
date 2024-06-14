import axios from "axios";

// const API_URL = "http://203.109.113.154:3000/api";
const API_URL = "http://192.168.1.176:8001";

const getHeader = () => {
  let user: any = localStorage.getItem("token");
  return user && { Authorization: user };
};

export default class Http {
  static get(url: string, params?: any) {
    return new Promise((resolve, reject) => {
      let token = getHeader();
      axios({
        method: "get",
        url: `${API_URL}/${url}`,
        headers: token,
        params: params,
      })
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          console.log(error, "error");
          reject(error);
        });
    });
  }

  static post(url: any, body: any) {
    return new Promise((resolve, reject) => {
      let token = getHeader();
      axios({
        method: "post",
        url: `${API_URL}/${url}`,
        headers: token,
        data: body,
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
