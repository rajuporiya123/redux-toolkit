import { createSlice } from "@reduxjs/toolkit";
import { resendOtpAPI } from "../../../api/authentication/resendotp";

const data = {
  loading: false,
  error: "",
  msg: null,
  data: null,
  sendingRequest: false,
};

const resendOtpSlice = createSlice({
    name: "mobileVerified",
    initialState: data,
    reducers: {
      resendOtpSlice(state) {
        state.loading = false;
        state.sendingRequest = true;
      },
      resendOtpSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.sendingRequest = true;
      },
      resendOtpFailure(state, action) {
        
        state.loading = false;
        state.data = action.payload;
        state.sendingRequest = true;
      },
      resendOtpresetSlice(state) {
        state.loading = false;
        state.error = "";
        state.msg = null;
        state.sendingRequest = false;
        state.data = null;
      },
    },
  });
  
  export const resendOtpHandle = (data: any) => async (dispatch: any) => {
    try {
      dispatch(resendOtpAction.resendOtpSlice());
      const response: any = await resendOtpAPI(data);
      dispatch(resendOtpAction.resendOtpSuccess(response));
    } catch (error: any) {
      dispatch(
        resendOtpAction.resendOtpFailure(error?.response?.data)
      );
    }
  };
  export default resendOtpSlice.reducer;
  export const resendOtpAction = resendOtpSlice.actions;
