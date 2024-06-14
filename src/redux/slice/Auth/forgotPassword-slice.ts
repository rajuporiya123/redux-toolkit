import { createSlice } from "@reduxjs/toolkit";
import { forgetUserAPI } from "../../../api/authentication/forgetpassword";

const data = {
  loading: false,
  error: "",
  msg: null,
  data: null,
  sendingRequest: false,
};

const forgetUserSlice = createSlice({
  name: "forget",
  initialState: data,
  reducers: {
    forgetSlice(state) {
      state.loading = false;
      state.sendingRequest = true;
    },
    forgetSliceSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.sendingRequest = true;
    },
    forgetSliceFailure(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.sendingRequest = true;
    },
    forgetresetSlice(state) {
      state.loading = false;
      state.error = "";
      state.msg = null;
      state.sendingRequest = false;
      state.data = null;
    },
  },
});

export const forgotPasswordHandler = (data:any) => async(dispatch:any)=>{
    try {
        dispatch(forgetUserAction.forgetSlice())
        const response : any = await forgetUserAPI(data)
        dispatch(forgetUserAction.forgetSliceSuccess(response))
    } catch (error:any) {
        dispatch(forgetUserAction.forgetSliceFailure(error?.response?.data))
    }
} 

export default forgetUserSlice.reducer;

export const forgetUserAction = forgetUserSlice.actions