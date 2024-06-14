import { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FormGroup } from "../../components/common/FormGroup/FormGroup";
import { Formik } from "formik";
import { FormAction } from "./authStyle";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import {
  loginUserAction,
  loginUserHandle,
} from "../../redux/slice/Auth/login-slice";

const Login = () => {
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const loginData = useSelector((state: any) => state.login);

  const loginUserData = (email: any, password: any) => {
    const obj = {
      email: email,
      password: password,
    };
    dispatch(loginUserHandle(obj));
  };

  useEffect(() => {
    if (loginData?.data?.success) {
      localStorage.setItem("token", loginData?.data?.data?.token);
      dispatch(loginUserAction.loginresetSlice());
      toast.success(loginData?.data?.message);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
    if (loginData?.data?.success == false) {
      toast.error(loginData?.data?.message);
    }
  }, [loginData]);

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values: any) => {
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

          return errors;
        }}
        onSubmit={(values) => {
          loginUserData(
            values.email.trim().toLowerCase(),
            values.password.trim()
          );
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
              <Col lg={6} md={12} sm={6}>
                <FormGroup>
                  <Form.Label>
                    Email Address<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    value={values.email}
                    placeholder="Enter Email Address"
                    onChange={handleChange}
                  />
                  {touched.email && errors.email && (
                    <label className="fieldError">{errors.email}</label>
                  )}
                </FormGroup>
              </Col>
              <Col lg={6} md={12} sm={6}>
                <FormGroup>
                  <Form.Label>
                    Password<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    value={values.password}
                    placeholder="Enter Password"
                    onChange={handleChange}
                  />
                  {touched.password && errors.password && (
                    <label className="fieldError">{errors.password}</label>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <FormGroup className="fieldWithLink">
                  <Link to="/forgot-password">Forgot Password?</Link>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <FormAction className="mt-60">
                  <Button type="submit">Login</Button>
                </FormAction>
              </Col>
              <div>
                Don’t have an account?
                <Link to="/signup">
                  <strong>Sign up now</strong>
                </Link>
              </div>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
