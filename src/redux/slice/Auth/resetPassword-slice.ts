import { createSlice } from "@reduxjs/toolkit";
import { resetPasswordAPI } from "../../../api/authentication/resetpassword";

const data = {
  isLoading: false,
  error: "",
  message: null,
  data: null,
  sendingRequest : false,
};

const resetPasswordUserSlice = createSlice({
  name: "resetpassword",
  initialState: data,
  reducers: {
    resetpasswordSlice(state) {
      state.isLoading = false;
      state.sendingRequest = true;
    },
    resetpasswordSliceSuccess(state, action) {
      state.isLoading = true;
      state.data = action.payload;
      state.sendingRequest = true;
    },
    resetpasswordSliceFailure(state, action) {
      state.isLoading = false;
      state.message = action.payload;
      state.sendingRequest = true;
    },
    resetpasswordresetSlice(state) {
      state.isLoading = false;
      state.message = null;
      state.sendingRequest = false;
      state.error = "";
      state.data = null;
    },
  },
});

export const resetPasswordHandler = (data: any) => async (dispatch: any) => {
  try {
    dispatch(resetPasswordAction.resetpasswordSlice());
    const response: any = await resetPasswordAPI(data);
    dispatch(resetPasswordAction.resetpasswordSliceSuccess(response));
    dispatch(resetPasswordAction.resetpasswordresetSlice());
  } catch (e: any) {
    dispatch(resetPasswordAction.resetpasswordSliceFailure(e?.response?.data?.error));
    dispatch(resetPasswordAction.resetpasswordresetSlice());
  }
};
export default resetPasswordUserSlice.reducer;
export const resetPasswordAction = resetPasswordUserSlice.actions;
