import { createSlice } from "@reduxjs/toolkit";
import { getproductdAPI } from "../../../api/authentication/getproduct";

const data = {
  loading: false,
  error: "",
  msg: null,
  data: null,
  sendingRequest: false,
};

const getProductSlice = createSlice({
  name: "forget",
  initialState: data,
  reducers: {
    productSlice(state) {
      state.loading = false;
      state.sendingRequest = true;
    },
    productSliceSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.sendingRequest = true;
    },
    productSliceFailure(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.sendingRequest = true;
    },
    productresetSlice(state) {
      state.loading = false;
      state.error = "";
      state.msg = null;
      state.sendingRequest = false;
      state.data = null;
    },
  },
});

export const getProductHandler = () => async(dispatch:any)=>{
    try {
        dispatch(forgetUserAction.productSlice())
        const response : any = await getproductdAPI()
        dispatch(forgetUserAction.productSliceSuccess(response))
    } catch (error:any) {
        dispatch(forgetUserAction.productSliceFailure(error?.response?.data))
    }
} 

export default getProductSlice.reducer;

export const forgetUserAction = getProductSlice.actions