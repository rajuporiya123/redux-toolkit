import { useEffect, useState } from "react";
import { Tabs, Modal, Dropdown, Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import {
  AuthWrap,
  FromWrap,
  FromContainer,
  FromInner,
  FormAction,
  FormBottomText,
} from "../auth/authStyle";
import { FormGroup } from "../../components/common/FormGroup/FormGroup";
import {
  resetPasswordAction,
  resetPasswordHandler,
} from "../../redux/slice/Auth/resetPassword-slice";

const ResetPassword = () => {
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();

  const resetpasswordData = useSelector((state: any) => state?.resetPassword);

  const { token } = useParams();

  const resetpasswordUserData = (newPassword: any) => {
    dispatch(
      resetPasswordHandler({
        resetToken: token,
        newPassword: newPassword,
      })
    );
  };

  useEffect(() => {
    if (resetpasswordData?.data?.success) {
      dispatch(resetPasswordAction.resetpasswordresetSlice());
      toast.success("Password reset successfully");
      setTimeout(() => {
        navigate('/login')
      }, 2000);
    } else if (
        resetpasswordData?.data?.success === false
      ) {
        toast.error('something went wrong')
      }
  }, [resetpasswordData]);

  return (
    <>
      <AuthWrap>
        <FromWrap>
          <FromContainer>
            <FromInner>
              <Formik
                initialValues={{
                  password: "",
                  confirmpassword: "",
                }}
                validate={(values: any) => {
                  // setErrorMessage('');
                  const errors: any = {};
                  if (!values.password) {
                    errors.password = "Please enter password";
                  } else if (!values.password.trim()) {
                    errors.password = "Please enter valid password";
                  } else if (
                    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{0,}$/.test(
                      values.password
                    )
                  ) {
                    errors.password =
                      "Password must be contain 1 spacial letter,1 number,1 capital and 1 lowercase letter ";
                  }
                  if (!values.confirmpassword) {
                    errors.confirmpassword = "Please enter confirm password";
                  } else if (!values.confirmpassword.trim()) {
                    errors.confirmpassword =
                      "Please enter valid confirm password";
                  } else if (values.password !== values.confirmpassword) {
                    errors.confirmpassword = "Confirm password dose not match";
                  } else if (
                    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{0,}$/.test(
                      values.confirmpassword
                    )
                  ) {
                    errors.confirmpassword =
                      "Password must be contain 1 spacial letter,1 number,1 capital and 1 lowercase letter ";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  resetpasswordUserData(values.password.trim());
                }}
              >
                {({
                  handleSubmit,
                  values,
                  handleChange,
                  touched,
                  errors,
                  handleBlur,
                  isSubmitting,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col lg={12} md={12} sm={6}>
                        <FormGroup className="passwordField mb-0 tab-mb-20">
                          <Form.Label>
                            New Password <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            name="password"
                            type="password"
                            placeholder="********"
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          {touched.password && errors.password && (
                            <label className="fieldError">
                              {errors.password}
                            </label>
                          )}
                        </FormGroup>
                      </Col>
                      <Col lg={12} md={12} sm={6}>
                        <FormGroup className="passwordField mb-0">
                          <Form.Label>
                            Confirm Password{" "}
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            name="confirmpassword"
                            type="password"
                            placeholder="********"
                            value={values.confirmpassword}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          {touched.confirmpassword &&
                            errors.confirmpassword && (
                              <label className="fieldError">
                                {errors.confirmpassword}
                              </label>
                            )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} md={12} sm={12}>
                        <FormAction className="mt-60">
                          <Button type="submit">Reset Password</Button>
                        </FormAction>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            </FromInner>
          </FromContainer>
        </FromWrap>
      </AuthWrap>
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default ResetPassword;
