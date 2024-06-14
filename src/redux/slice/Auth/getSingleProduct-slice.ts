import { createSlice } from "@reduxjs/toolkit";
import { getproductdAPI } from "../../../api/authentication/getproduct";
import { singleproductdAPI } from "../../../api/authentication/getSingleProduct";

const data = {
  loading: false,
  error: "",
  msg: null,
  data: null,
  sendingRequest: false,
};

const SingleProductSlice = createSlice({
  name: "forget",
  initialState: data,
  reducers: {
    SingleproductSlice(state) {
      state.loading = false;
      state.sendingRequest = true;
    },
    SingleproductSliceSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.sendingRequest = true;
    },
    SingleproductSliceFailure(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.sendingRequest = true;
    },
    SingleproductresetSlice(state) {
      state.loading = false;
      state.error = "";
      state.msg = null;
      state.sendingRequest = false;
      state.data = null;
    },
  },
});

export const SingleProductHandler = (id:any) => async(dispatch:any)=>{
    try {
        dispatch(forgetUserAction.SingleproductSlice())
        const response : any = await singleproductdAPI(id)
        dispatch(forgetUserAction.SingleproductSliceSuccess(response))
    } catch (error:any) {
        dispatch(forgetUserAction.SingleproductSliceFailure(error?.response?.data))
    }
} 

export default SingleProductSlice.reducer;

export const forgetUserAction = SingleProductSlice.actions