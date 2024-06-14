import { createSlice } from "@reduxjs/toolkit";
import { signupUserAPI } from "../../../api/authentication/signUp";

const data = {
  loading: false,
  error: "",
  msg: null,
  data: null,
  sendingRequest: false,
};
const signUserSlice = createSlice({
  name: "signup",
  initialState: data,
  reducers: {
    signupSlice(state) {
      state.loading = false; 
      state.sendingRequest = true;
    },
    signupSliceSuccess(state, action) {
      state.loading = false; 
      state.data = action.payload;
      state.sendingRequest = true;
    },
    signupSliceFailure(state, action) {
      state.loading = false; 
      state.data = action.payload;
      state.sendingRequest = true;
    },
    signupresetSlice(state) {
      state.loading = false; 
      state.error = "";
      state.msg = null;
      state.sendingRequest = false;
      state.data = null;
    },
  },
});

export const signupUserHandle = (data: any) => async (dispatch: any) => {
  try {
    dispatch(signUpUserAction.signupSlice());
    const response: any = await signupUserAPI(data);
    dispatch(signUpUserAction.signupSliceSuccess(response));
  } catch (error: any) {
    dispatch(
      signUpUserAction.signupSliceFailure(error?.response?.data)
    );
    // dispatch(signUpUserAction.signupresetSlice());
  }
};

export default signUserSlice.reducer;
export const signUpUserAction = signUserSlice.actions;
