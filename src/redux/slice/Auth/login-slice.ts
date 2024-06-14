import { createSlice } from "@reduxjs/toolkit";
import { loginUserAPI } from "../../../api/authentication/login";

const data = {
  loading: false,
  error: "",
  msg: null,
  data: null,
  sendingRequest: false,
};

const loginUserSlice = createSlice({
  name: "login",
  initialState: data,
  reducers: {
    loginSlice(state) {
      state.loading = false;
      state.sendingRequest = true;
    },
    loginSliceSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.sendingRequest = true;
    },
    loginSliceFailure(state, action) {        
      state.loading = false;
      state.data = action.payload;
      state.sendingRequest = true;
    },
    loginresetSlice(state) {
      state.loading = false;
      state.error = "";
      state.msg = null;
      state.sendingRequest = false;
      state.data = null;
    },
  },
});

export const loginUserHandle = (data:any) =>async (dispatch:any)=>{
    try {
        dispatch(loginUserAction.loginSlice())
        const response  :any = await loginUserAPI(data)
        dispatch(loginUserAction.loginSliceSuccess(response))
    } catch (error:any) {
        dispatch(loginUserAction.loginSliceFailure(error?.response?.data))
    }
}
export default loginUserSlice.reducer;
export const loginUserAction = loginUserSlice.actions;