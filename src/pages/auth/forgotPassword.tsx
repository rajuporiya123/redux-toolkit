import { useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
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
  FormAction,
  FormBottomText,
} from "../auth/authStyle";
import { FormGroup } from "../../components/common/FormGroup/FormGroup";
import {
  forgetUserAction,
  forgotPasswordHandler,
} from "../../redux/slice/Auth/forgotPassword-slice";

const ForgotPassword = () => {
  const forgotpasswordData = useSelector((state: any) => state?.forgetPassword);
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const forgotpasswordUserData = (email: any) => {
    dispatch(
      forgotPasswordHandler({
        email: email,
      })
    );
  };

  useEffect(() => {
    if (forgotpasswordData?.data?.success) {
      dispatch(forgetUserAction.forgetresetSlice());
      toast.success(forgotpasswordData?.data?.message);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else if (forgotpasswordData?.data?.success == false) {
      toast.error(forgotpasswordData?.data?.message);
    }
  }, [forgotpasswordData]);
  return (
    <>
      <AuthWrap>
        <FromContainer>
          <FromInner>
            <Formik
              initialValues={{
                email: "",
              }}
              validate={(values: any) => {
                // setErrorMessage('');
                const errors: any = {};
                if (!values.email) {
                  errors.email = "Please enter email address";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email.trim()
                  )
                ) {
                  errors.email = "Please enter valid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                forgotpasswordUserData(values.email.trim().toLowerCase());
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
                    <Col lg={12}>
                      <FormGroup className="mb-0">
                        <Form.Label>
                          Email Address <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          placeholder="Type Here"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.email && errors.email && (
                          <label className="fieldError">{errors.email}</label>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={12}>
                      <FormAction className="mt-60">
                        <Button type="submit">Submit</Button>
                      </FormAction>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </FromInner>

          <FormBottomText>
            Already have an account?{" "}
            <Link to="/login">
              <strong>Sign in</strong>
            </Link>
          </FormBottomText>
        </FromContainer>
      </AuthWrap>
    </>
  );
};

export default ForgotPassword;
