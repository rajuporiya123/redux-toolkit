import { createSlice } from "@reduxjs/toolkit";
import { mobileVerifiedAPI } from "../../../api/authentication/mobileVerified";

const data = {
  loading: false,
  error: "",
  msg: null,
  data: null,
  sendingRequest: false,
};

const mobileVerifiedSlice = createSlice({
  name: "mobileVerified",
  initialState: data,
  reducers: {
    mobileVerifiedSlice(state) {
      state.loading = false;
      state.sendingRequest = true;
    },
    mobileVerifiedSliceSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.sendingRequest = true;
    },
    mobileVerifiedSliceFailure(state, action) {
      
      state.loading = false;
      state.data = action.payload;
      state.sendingRequest = true;
    },
    mobileVerifiedresetSlice(state) {
      state.loading = false;
      state.error = "";
      state.msg = null;
      state.sendingRequest = false;
      state.data = null;
    },
  },
});

export const mobileVerifiedHandle = (data: any) => async (dispatch: any) => {
  try {
    dispatch(mobileVerifiedAction.mobileVerifiedSlice());
    const response: any = await mobileVerifiedAPI(data);
    dispatch(mobileVerifiedAction.mobileVerifiedSliceSuccess(response));
  } catch (error: any) {
    dispatch(
      mobileVerifiedAction.mobileVerifiedSliceFailure(error?.response?.data)
    );
  }
};
export default mobileVerifiedSlice.reducer;
export const mobileVerifiedAction = mobileVerifiedSlice.actions;
