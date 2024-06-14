import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FormGroup } from "../../components/common/FormGroup/FormGroup";
import { Formik } from "formik";
import { FormAction } from "./authStyle";
import {
  signUpUserAction,
  signupUserHandle,
} from "../../redux/slice/Auth/signUp-slice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const signupData = useSelector((state: any) => state.signup);

  const signupUserData = (email: any, password: any, name: any, age: any) => {
    const obj = {
      email: email,
      password: password,
      name: name,
      age: age,
    }
    dispatch(
      signupUserHandle(obj)
    );
  };

  useEffect(() => {
    if (signupData?.data?.success) {
      dispatch(signUpUserAction.signupresetSlice());
      localStorage.setItem("email", signupData?.data?.data?.email);
      toast.success(signupData?.data?.message);
      setTimeout(()=>{
        navigate("/mobileVerify");
      }, 1000)
    }
    if (signupData?.data?.success === false) {
      toast.error(signupData?.data?.message);
    }
  }, [signupData]);

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          age: "",
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
          if (!values.name) {
            errors.name = "Please enter last name";
          } else if (!values.name.trim()) {
            errors.name = "Please enter valid last name";
          } else if (!/^([^0-9]*)$/.test(values.name.trim())) {
            errors.name = "Number not allow";
          } else if (!/^[a-zA-Z]+$/.test(values.name)) {
            errors.name =
              "Last name cannot contain space or any special characters";
          } else if (values.name.length > 25) {
            errors.name =
              "You have reached your maximum limit of characters allowed";
          }
          if (!values.age) {
            errors.age = "Please Enter Age";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          signupUserData(
            values.email.trim().toLowerCase(),
            values.password.trim(),
            values.name.trim(),
            values.age.trim()
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
              <Col lg={6} md={12} sm={6}>
                <FormGroup>
                  <Form.Label>
                    Name<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="name"
                    type="name"
                    value={values.name}
                    placeholder="Enter Name"
                    onChange={handleChange}
                  />
                  {touched.name && errors.name && (
                    <label className="fieldError">{errors.name}</label>
                  )}
                </FormGroup>
              </Col>
              <Col lg={6} md={12} sm={6}>
                <FormGroup>
                  <Form.Label>
                    Age<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="age"
                    type="text"
                    value={values.age}
                    placeholder="Enter Age"
                    onChange={handleChange}
                  />
                  {touched.age && errors.age && (
                    <label className="fieldError">{errors.age}</label>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <FormAction className="mt-60">
                  <Button type="submit">SignUp</Button>
                </FormAction>
              </Col>
            </Row>
            <div>
            Already have an account?
              <Link to="/">
                <strong>Sign in</strong>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
      
    </div>
  );
};

export default Signup;
