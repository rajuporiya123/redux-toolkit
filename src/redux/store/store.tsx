import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "../slice/Auth/signUp-slice";
import loginSlice from "../slice/Auth/login-slice";
import forgotPasswordSlice from "../slice/Auth/forgotPassword-slice";
import resetPasswordSlice from "../slice/Auth/resetPassword-slice";
import mobileVerifiedSlice from '../slice/Auth/mobileVerify-slice'
import resendOtpSlice from "../slice/Auth/resendOtp-slice";
import getproductSlice from "../slice/Auth/getproduct-slice";
import getSingleProductSlice from "../slice/Auth/getSingleProduct-slice";

const store = configureStore({
  reducer: {
    signup: signUpSlice,
    login: loginSlice,
    forgetPassword: forgotPasswordSlice,
    resetPassword: resetPasswordSlice,
    mobileVerified:mobileVerifiedSlice,
    resendOtp:resendOtpSlice,
    getproduct:getproductSlice,
    singleProduct:getSingleProductSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
