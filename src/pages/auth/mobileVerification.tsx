import { useEffect, useState } from "react";
import { Tabs, Modal, Dropdown, Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import {
  AuthWrap,
  FromWrap,
  FromContainer,
  FromInner,
  AuthHeader,
  AuthStep,
  FormAction,
  FormBottomText,
  EmailVerificationContent,
  EmailResendLink,
} from "./authStyle";
import OtpInput, { OTPInputProps } from "react-otp-input";
import {
  mobileVerifiedAction,
  mobileVerifiedHandle,
} from "../../redux/slice/Auth/mobileVerify-slice";
import { resendOtpHandle } from "../../redux/slice/Auth/resendOtp-slice";

const MobileVerification = () => {
  const dispatch: any = useDispatch();
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const navigate: any = useNavigate();

  const mobileVerifyData = useSelector((state: any) => state?.mobileVerified);
  const resendOtpData = useSelector((state: any) => state?.resendOtp);

  const email = localStorage.getItem("email");

  const handleOTP = () => {
    if (otp !== "" && otp.length > 3) {
      let userObj = {
        otp: Number(otp),
        email: email,
      };
      setErrorMessage(false);
      dispatch(mobileVerifiedHandle(userObj));
    } else {
      setErrorMessage(true);
    }
  };

  const resendOtp = () => {
    let obj = {
      email: email,
    };
    dispatch(resendOtpHandle(obj));
  };

  useEffect(() => {
    if (mobileVerifyData?.data?.success) {
      toast.success("Otp verified Successfully");
      dispatch(mobileVerifiedAction.mobileVerifiedresetSlice());
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      toast.error(mobileVerifyData?.data?.message);
    }
  }, [mobileVerifyData]);

  useEffect(() => {
    if (resendOtpData?.data?.success) {
      toast.success(resendOtpData?.data?.message)
    }
  }, [resendOtpData]);

  return (
    <>
      <AuthWrap>
        <FromWrap>
          <FromContainer className="align-items-start">
            <FromInner>
              <EmailVerificationContent>
                <p>
                  We have sent a text message with a 4 digit verification code.
                </p>
                <OtpInput
                  value={otp}
                  onChange={(otp: string) => setOtp(otp)}
                  numInputs={4}
                  inputStyle={{
                    width: "60px",
                    height: "60px",
                    margin: "0 20px 0 0",
                    fontSize: "16px",
                    borderRadius: "10px",
                    border: "1px solid #EDF2FA",
                    background: "#EDF2FA",
                  }}
                  containerStyle={{ display: "flex" }}
                  shouldAutoFocus={true}
                  inputType="text"
                  placeholder={"----"}
                  renderInput={(inputProps, index) => (
                    <input {...inputProps} key={index} />
                  )}
                />
                {errorMessage && (
                  <label className="error">Please Enter OTP</label>
                )}
                <EmailResendLink>
                  Did not receive any messege?{" "}
                  <Link to="">
                    <strong onClick={resendOtp}>Resend</strong>
                  </Link>
                </EmailResendLink>

                <FormAction className="mt-60">
                  <Button onClick={handleOTP}>Verify</Button>
                </FormAction>
              </EmailVerificationContent>
            </FromInner>

            <FormBottomText className="grayColor">
              4 digit code will be valid for 30 minutes only.
            </FormBottomText>
          </FromContainer>
        </FromWrap>
      </AuthWrap>
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default MobileVerification;
