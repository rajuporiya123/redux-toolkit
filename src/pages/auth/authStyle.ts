import styled from "styled-components";

export const AuthWrap = styled.div`
  background: #fff;
`;
export const FromWrap = styled.div`
  flex: 1;
  padding-left: 35.417%;
  @media screen and (max-width: 1440px) {
    padding-left: 36%;
  }
  @media screen and (max-width: 1280px) {
    padding-left: 31%;
  }
  @media screen and (max-width: 991px) {
    padding-left: 38%;
    .tab-mb-20 {
      margin-bottom: 20px !important;
    }
  }
  @media screen and (max-width: 767px) {
    padding-left: 0;
    .tab-mb-20 {
      margin-bottom: 0 !important;
    }
  }
  @media screen and (max-width: 480px) {
    .tab-mb-20 {
      margin-bottom: 20px !important;
    }
  }
`;

export const FromContainer = styled.div`
  width: 840px;
  min-height: 100vh;
  max-width: 100%;
  padding: 40px 0 100px;
  margin: auto;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;

  @media screen and (max-width: 1600px) {
    padding: 40px 0 80px;
  }

  @media screen and (max-width: 1440px) {
    width: 740px;
    padding: 35px 0 60px;
  }

  @media screen and (max-width: 1100px) {
    padding: 30px 30px 60px;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 30px 25px 60px;
  }
  @media screen and (max-width: 767px) {
    padding: 20px 15px 60px;
  }
`;

export const FormAction = styled.div`
  &.mt-60 {
    margin-top: 60px;
    @media screen and (max-width: 1600px) {
      margin-top: 40px;
    }
    @media screen and (max-width: 1440px) {
      margin-top: 35px;
    }
    @media screen and (max-width: 767px) {
      margin-top: 30px;
    }
  }
  .btn {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    padding-top: 17px;
    padding-bottom: 17px;

    @media screen and (max-width: 1600px) {
      padding-top: 15px;
      padding-bottom: 15px;
    }
    @media screen and (max-width: 1440px) {
      font-size: 16px;
      line-height: 22px;
      padding-top: 13px;
      padding-bottom: 13px;
    }
    @media screen and (max-width: 991px) {
      font-size: 15px;
      line-height: 20px;
    }
    @media screen and (max-width: 767px) {
      line-height: 18px;
    }
    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }
`;

export const FromInner = styled.div`
  width: 100%;
  .row {
    margin-left: -15px;
    margin-right: -15px;
    [class*="col"] {
      padding-left: 15px;
      padding-right: 15px;
    }

    @media screen and (max-width: 1440px) {
      margin-left: -13px;
      margin-right: -13px;
      [class*="col"] {
        padding-left: 13px;
        padding-right: 13px;
      }
    }
    @media screen and (max-width: 991px) {
      margin-left: -10px;
      margin-right: -10px;
      [class*="col"] {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
  .fieldWithLink {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #505887;
    margin-bottom: 60px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    a {
      color: #505887;
      text-decoration: none;
      outline: none;
      transition: all 0.35s ease 0s;
      &:hover {
        color: #6c53e4;
      }
    }

    @media screen and (max-width: 1600px) {
      margin-bottom: 40px;
    }
    @media screen and (max-width: 1440px) {
      margin-bottom: 35px;
      font-size: 14px;
      line-height: 22px;
    }
    @media screen and (max-width: 991px) {
      font-size: 13px;
      line-height: 20px;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 30px;
    }
  }
  .countryCodeGroup {
    .form-control {
      height: auto;
      padding-left: 65px;
      @media screen and (max-width: 1440px) {
        padding-left: 55px;
      }
    }
    .flag-dropdown {
      top: 1px;
      bottom: 1px;
      border: none;
      border-radius: 10px 0 0 10px;
      border-right: 1px solid #e8e6ee;
      background: transparent;
      .selected-flag {
        background: transparent;
        padding: 0 0 0 13px;
        border-radius: 10px 0 0 10px;
        width: 50px;
      }
      .country-list {
        margin: 5px 0 5px -1px;
        overflow-y: auto;
        background: #ffffff;
        box-shadow: 0 5px 25px rgba(34, 41, 47, 0.1);
        padding: 7px 0;
        border: 1px solid #efdeff;
        border-radius: 8px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #505887;
        &::-webkit-scrollbar {
          width: 8px;
        }
        &::-webkit-scrollbar:horizontal {
          height: 8px;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-color: #6c53e4;
          transition: color 0.15s ease-in-out,
            background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
          cursor: pointer;
        }
        &::-webkit-scrollbar-track {
          border-radius: 10px;
          background-color: #e8e6ee;
        }
      }
      li {
        transition: all 0.15s ease 0s;
        padding: 10px 10px 10px 40px;
        position: relative;
        border-bottom: 1px solid #f4f6fd;
        &:last-child {
          border-bottom: none;
        }
        .dial-code {
          color: #1c295d;
          font-weight: 500;
        }
        &:hover {
          color: #6c53e4;
          background-color: rgba(108, 83, 228, 0.12);
          border-color: transparent;
          .dial-code {
            color: #6c53e4;
          }
        }
        &.highlight {
          color: #fff;
          background-color: #6c53e4;
          border-color: transparent;
          .dial-code {
            color: #fff;
          }
        }
        .flag {
          margin: 0;
          position: absolute;
          left: 12px;
          top: 15px;
        }
      }

      @media screen and (max-width: 1440px) {
        .selected-flag {
          padding: 0 0 0 10px;
          width: 44px;
        }
      }
    }
  }
  .introduction-form {
    .radio-with-box {
      background: #f4f6fd;
      border: 1px solid #e8e6ee;
      border-radius: 10px;
      padding: 18px 20px;
      @media (max-width: 1600px) {
        padding: 15px 20px;
      }
      @media (max-width: 1440px) {
        padding: 12px 20px;
      }
      .form-check {
        padding-left: 35px;
      }
      .form-check-label {
        font-weight: 600;
      }
    }
    ${FormAction} {
      margin-top: 30px;
      .btn-default {
        border: 1px solid #6c53e4;
        color: #6c53e4;
        background: transparent;
      }
      .btn {
        & + .btn {
          margin-left: 42px;
        }
      }
    }
  }
`;

export const FormHeaderButton = styled.div`
  margin-bottom: 60px;
  @media screen and (max-width: 1600px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 1440px) {
    margin-bottom: 35px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
  }

  .btn {
    &.btn-primary {
      background: #6c53e4;
      border-color: #6c53e4;
      color: #fff;
      box-shadow: none !important;
    }

    @media screen and (max-width: 991px) {
      min-width: inherit;
      font-size: 13px;
      line-height: 18px;
      padding: 9px 12px;
      + .btn {
        margin-left: 10px;
      }
    }
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 20px;
      padding: 9px 20px;
      + .btn {
        margin-left: 20px;
      }
    }
    @media screen and (max-width: 570px) {
      width: 100%;
      + .btn {
        margin-left: 0;
        margin-top: 17px;
      }
    }
  }
`;

export const Or = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #505887;
  position: relative;
  text-align: center;
  margin: 30px 0;
  &:before {
    content: "";
    border-top: 1px solid rgba(23, 3, 89, 0.1);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    margin: auto;
  }
  span {
    background: #fff;
    padding: 0 15px;
    display: inline-block;
    vertical-align: middle;
    position: relative;
  }

  @media screen and (max-width: 1440px) {
    font-size: 14px;
    line-height: 22px;
    margin: 25px 0;
  }
  @media screen and (max-width: 767px) {
    font-size: 13px;
    line-height: 20px;
    margin: 20px 0;
  }
`;

export const SocialButton = styled.div`
  & > span {
    display: inline-block;
    margin-right: 30px;
  }
  .btn {
    font-family: "Poppins" !important;
    font-style: normal;
    font-weight: 500 !important;
    font-size: 16px !important;
    line-height: 22px !important;
    text-align: center;
    text-transform: capitalize;
    border-radius: 10px !important;
    border: 1px solid transparent;
    padding: 12px 20px !important;
    min-width: 180px;
    background: #f4f6fd !important;
    color: #505887 !important;
    align-items: center;
    justify-content: center;
    display: inline-flex;
    opacity: 1 !important;
    min-height: 50px;

    &:disabled {
      opacity: 0.5 !important;
      pointer-events: none !important;
    }

    &:hover {
      background: #fff !important;
      border-color: #6c53e4 !important;
      color: #6c53e4 !important;
    }

    &.googleBtn {
      div {
        padding: 0 !important;
        margin: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
      }
      span {
        padding: 0 !important;
        font-weight: inherit !important;
      }
    }
    &.facebookBtn {
      div {
        padding: 0 !important;
        margin: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
      }
      span {
        padding: 0 !important;
        font-weight: inherit !important;
      }
    }

    svg {
      vertical-align: middle;
      margin-right: 15px;
    }

    @media screen and (max-width: 1440px) {
      padding: 9px 15px !important;
      font-size: 15px !important;
      line-height: 20px !important;
      min-width: 160px;
      min-height: 44px;
      svg {
        margin-right: 10px;
      }
    }
    @media screen and (max-width: 767px) {
      padding: 8px 20px !important;
      font-size: 14px !important;
      line-height: 20px !important;
      min-width: 150px;
      min-height: 42px;
    }
    @media screen and (max-width: 480px) {
      width: 100%;
      + .btn {
        margin-left: 0;
        margin-top: 17px;
      }
    }
  }
`;

export const FormBottomText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #505887;
  position: absolute;
  bottom: 30px;
  left: 0;
  a {
    text-decoration: none;
    outline: none;
    color: #1c295d;
    display: inline-block;
    transition: all 0.35s ease 0s;
    &:hover {
      color: #6c53e4;
    }
  }
  strong {
    font-weight: 600;
  }

  &.grayColor {
    color: #7987a5;
  }

  @media screen and (max-width: 1600px) {
    bottom: 25px;
  }
  @media screen and (max-width: 1440px) {
    font-size: 14px;
    line-height: 22px;
    bottom: 17px;
  }
  @media screen and (max-width: 1100px) {
    left: 30px;
    right: 30px;
  }
  @media screen and (max-width: 767px) {
    font-size: 13px;
    line-height: 20px;
    left: 15px;
    right: 15px;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

export const EmailVerificationContent = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1c295d;
  p {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  strong {
    font-weight: 600;
  }
  a {
    color: #6c53e4;
    &:hover {
      color: #1c295d;
    }
  }
  .error {
    color: #ee3254;
    padding-top: 5px;
  }

  .verifyPhoneNumber {
    display: flex;
    flex-wrap: wrap;
    margin: 30px 0;
    .form-control {
      width: 60px;
      height: 60px;
      padding: 5px;
      text-align: center;
      margin-left: 20px;
      &:first-child {
        margin-left: 0;
      }
    }
    .fieldError {
      width: 100%;
    }
  }

  @media screen and (max-width: 1600px) {
    p {
      margin-bottom: 15px;
    }
    .verifyPhoneNumber {
      margin: 20px 0;
    }
  }
  @media screen and (max-width: 1440px) {
    font-size: 14px;
    line-height: 22px;
    p {
      margin-bottom: 13px;
    }
    .verifyPhoneNumber {
      .form-control {
        width: 50px;
        height: 50px;
        margin-left: 17px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .verifyPhoneNumber {
      .form-control {
        width: 46px;
        height: 46px;
        margin-left: 17px;
      }
    }
  }
`;

export const EmailResendLink = styled.p`
  margin-top: 60px;
  @media screen and (max-width: 1600px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 1440px) {
    margin-top: 35px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 25px;
  }
`;

export const AuthHeader = styled.div`
  margin-bottom: 120px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
  &.mb-60 {
    margin-bottom: 60px;
  }

  @media screen and (max-width: 1600px) {
    margin-bottom: 90px;
    &.mb-60 {
      margin-bottom: 40px;
    }
  }

  @media screen and (max-width: 1440px) {
    margin-bottom: 70px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
    &.mb-60 {
      margin-bottom: 30px;
    }
  }
`;

export const AuthStep = styled.ul`
  width: 540px;
  max-width: 100%;
  margin: 0 -5px;
  position: relative;
  justify-content: space-between;
  display: flex;
  &::before {
    content: "";
    position: absolute;
    top: 20px;
    left: 55px;
    right: 60px;
    border-top: 1px solid #e8e6ee;
    @media screen and (max-width: 1440px) {
      top: 18px;
    }
  }
  &.introduction-step {
    width: 460px;
  }

  @media screen and (max-width: 1600px) {
    width: 460px;
  }
  @media screen and (max-width: 1100px) {
    width: 400px;
  }
  @media screen and (max-width: 991px) {
    width: 290px;
  }
  @media screen and (max-width: 767px) {
    width: 400px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 25px 0 0;
  }

  li {
    padding: 0 5px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #505887;
    cursor: default;
    position: relative;
    .stepIcon {
      font-style: normal;
      font-family: "Poppins";
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #1c295d;
      background: #f4f6fd;
      border: 1px solid #e8e6ee;
      width: 40px;
      height: 40px;
      border-radius: 40px;
      margin: 0 auto 10px;
      overflow: hidden;
      align-items: center;
      justify-content: center;
      display: flex;
    }
    &.stepComplete {
      color: #1c295d;
      font-weight: 600;
      .stepIcon {
        background-color: #6c53e4;
        font-size: 0;
        color: #fff;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 16px 12px;
        text-indent: -99px;
      }
    }
    &.stepActive {
      color: #1c295d;
      font-weight: 600;
      .stepIcon {
        background: #6c53e4;
        color: #fff;
      }
    }

    @media screen and (max-width: 1440px) {
      font-size: 13px;
      line-height: 20px;
      .stepIcon {
        width: 36px;
        height: 36px;
        font-size: 13px;
        margin-bottom: 8px;
      }
      &.stepComplete {
        .stepIcon {
          background-size: 14px 12px;
        }
      }
    }
    @media screen and (max-width: 1440px) {
      line-height: 18px;
    }
    @media screen and (max-width: 480px) {
      padding: 0;
    }
  }
`;

export const AuthStepWrap = styled.div`
  display: flex;
`;

export const AuthStepCount = styled.span`
  color: #1c295d;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  padding-top: 10px;
  margin-right: 30px;
`;
