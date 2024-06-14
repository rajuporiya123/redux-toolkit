import { useEffect, useState } from "react";
import { Tabs, Modal, Dropdown, Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useParams } from "react-router-dom";
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


const EmailVerification = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  

  return (
    <>
      <AuthWrap>
        <FromWrap>
          <FromContainer className="align-items-start">
            <FromInner>
              <>
                <EmailVerificationContent>
                  <p>{`We have sent a confirmation email to email`}</p>
                  <p>
                    Check your email and click on the confirmation link to
                    continue.
                  </p>
                  <EmailResendLink>
                    Did not receive any email?{" "}
                    <Link to="">
                      <strong >Resend</strong>
                    </Link>
                  </EmailResendLink>
                </EmailVerificationContent>
                <Row>
                  <Col lg={12}>
                    <FormAction className="mt-60">
                      <Button>
                          <div role="status"></div>
                          Next
                      </Button>
                    </FormAction>
                  </Col>
                </Row>
                <FormBottomText className="grayColor">
                  Confirmation link will be valid for 30 minutes only.
                </FormBottomText>
              </>
            </FromInner>
          </FromContainer>
        </FromWrap>
      </AuthWrap>
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default EmailVerification;
