import styled from "styled-components";

export const FormGroup = styled.div`
  font-family: Montserrat;
  margin-bottom: 30px;
  position: relative;

  &.mb-20 {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1600px) {
    margin-bottom: 25px;
  }

  @media screen and (max-width: 991px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    &.mob-mb-20 {
      margin-bottom: 20px !important;
    }
  }

  label {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #505887;
    margin-bottom: 10px;

    .text-danger {
      color: #ee3254 !important;
    }

    .count {
      float: right;
      font-weight: 400;
      text-transform: capitalize;
      color: #7987a5;
    }

    @media screen and (max-width: 1600px) {
      font-size: 15px;
      line-height: 22px;
    }

    @media screen and (max-width: 1440px) {
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 7px;
    }

    @media screen and (max-width: 767px) {
      font-size: 13px;
      line-height: 20px;
      margin-bottom: 5px;
    }
  }

  .form-control {
    padding: 17px 25px;
    margin: 0;
    display: block;
    width: 100%;
    appearance: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    outline: none;
    box-shadow: none;
    background-color: #f4f6fd;
    border: 1px solid #e8e6ee;
    border-radius: 10px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #505887;

    &:focus {
      border-color: #6c53e4;
      box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);
      background-color: #fff;
    }
    &::placeholder {
      transition: all 0.2s ease;
      color: #7987a5;
      opacity: 1;
    }
    &::-webkit-input-placeholder {
      transition: all 0.2s ease;
      color: #7987a5;
      opacity: 1;
    }
    &::-moz-placeholder {
      transition: all 0.2s ease;
      color: #7987a5;
      opacity: 1;
    }
    &:-ms-input-placeholder {
      transition: all 0.2s ease;
      color: #7987a5;
      opacity: 1;
    }
    &:-moz-placeholder {
      transition: all 0.2s ease;
      color: #7987a5;
      opacity: 1;
    }

    &:focus {
      &::placeholder {
        transform: translate(5px);
        transition: all 0.2s ease;
      }
      &::-webkit-input-placeholder {
        transform: translate(5px);
        transition: all 0.2s ease;
      }
      &::-moz-placeholder {
        transform: translate(5px);
        transition: all 0.2s ease;
      }
      &:-ms-input-placeholder {
        transform: translate(5px);
        transition: all 0.2s ease;
      }
      &:-moz-placeholder {
        transform: translate(5px);
        transition: all 0.2s ease;
      }
    }

    @media screen and (max-width: 1600px) {
      padding: 13px 17px;
    }

    @media screen and (max-width: 1440px) {
      padding: 11px 17px;
      font-size: 14px;
    }

    @media screen and (max-width: 767px) {
      padding: 10px 15px;
      border-radius: 8px;
    }
  }

  select {
    &.form-control {
      background-repeat: no-repeat;
      background-size: 14px 8px;
      background-position: right 30px center;
      padding-right: 55px;
      cursor: pointer;
      @media screen and (max-width: 1600px) {
        background-position: right 20px center;
        padding-right: 45px;
      }
      @media screen and (max-width: 1440px) {
        background-size: 12px 7px;
        background-position: right 20px center;
        padding-right: 40px;
      }
    }
  }
  .css-b62m3t-container{
    > div{
      padding: 11px 15px;
      margin: 0;
      appearance: none;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      outline: none;
      box-shadow: none;
      background-color: #f4f6fd;
      border: 1px solid #e8e6ee;
      border-radius: 10px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #505887;

      &:focus {
        border-color: #6c53e4;
        box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);
        background-color: #fff;
      }
      &::placeholder {
        transition: all 0.2s ease;
        color: #7987a5;
        opacity: 1;
      }
      &::-webkit-input-placeholder {
        transition: all 0.2s ease;
        color: #7987a5;
        opacity: 1;
      }
      &::-moz-placeholder {
        transition: all 0.2s ease;
        color: #7987a5;
        opacity: 1;
      }
      &:-ms-input-placeholder {
        transition: all 0.2s ease;
        color: #7987a5;
        opacity: 1;
      }
      &:-moz-placeholder {
        transition: all 0.2s ease;
        color: #7987a5;
        opacity: 1;
      }

      &:focus {
        &::placeholder {
          transform: translate(5px);
          transition: all 0.2s ease;
        }
        &::-webkit-input-placeholder {
          transform: translate(5px);
          transition: all 0.2s ease;
        }
        &::-moz-placeholder {
          transform: translate(5px);
          transition: all 0.2s ease;
        }
        &:-ms-input-placeholder {
          transform: translate(5px);
          transition: all 0.2s ease;
        }
        &:-moz-placeholder {
          transform: translate(5px);
          transition: all 0.2s ease;
        }
      }

      @media screen and (max-width: 1600px) {
        padding: 7px 7px;
      }

      @media screen and (max-width: 1440px) {
        padding: 5px 8px;
        font-size: 14px;
      }

      @media screen and (max-width: 767px) {
        padding: 4px 8px;
        border-radius: 8px;
      }
      .css-1okebmr-indicatorSeparator{
        display: none;
      }
      .css-tj5bde-Svg{
        height: 26px;
        width: 26px;
      }
      .css-tlfecz-indicatorContainer, .css-1gtu0rj-indicatorContainer{
        padding: 0;
      }
    }
  }

  &.timeField {
    .form-control {
      padding-right: 55px;
      cursor: pointer;
    }
    img {
      position: absolute;
      right: 15px;
      top: 49px;
      pointer-events: none;
    }
    @media screen and (max-width: 1600px) {
      .form-control {
        padding-right: 50px;
      }
      img {
        top: 45px;
        max-width: 28px;
        right: 13px;
      }
    }
    @media screen and (max-width: 1440px) {
      .form-control {
        padding-right: 45px;
      }
      img {
        top: 41px;
        right: 13px;
        max-width: 25px;
      }
    }
  }

  &.dateField {
    .form-control {
      padding-right: 55px;
      cursor: pointer;
    }
    img {
      position: absolute;
      right: 15px;
      top: 46px;
      pointer-events: none;
    }

    @media screen and (max-width: 1600px) {
      img {
        top: 42px;
        max-width: 34px;
        right: 13px;
      }
    }
    @media screen and (max-width: 1440px) {
      .form-control {
        padding-right: 45px;
      }
      img {
        top: 39px;
        right: 13px;
        max-width: 30px;
      }
    }
  }

  &.passwordField {
    .form-control {
      padding-right: 50px;
      &::placeholder {
        top: 4px;
        position: relative;
      }
      &::-webkit-input-placeholder {
        top: 4px;
        position: relative;
      }
      &::-moz-placeholder {
        top: 4px;
        position: relative;
      }
      &:-ms-input-placeholder {
        top: 4px;
        position: relative;
      }
      &:-moz-placeholder {
        top: 4px;
        position: relative;
      }

      @media screen and (max-width: 1440px) {
        &::placeholder {
          top: 3px;
        }
        &::-webkit-input-placeholder {
          top: 3px;
        }
        &::-moz-placeholder {
          top: 3px;
        }
        &:-ms-input-placeholder {
          top: 3px;
        }
        &:-moz-placeholder {
          top: 3px;
        }
      }
    }

    .eyeIcon {
      position: absolute;
      right: 20px;
      top: 52px;
      z-index: 1;
      width: 24px;
      height: 24px;
      font-size: 12px;
      line-height: 12px;
      align-items: center;
      justify-content: center;
      display: inline-flex;
      cursor: pointer;
      img {
        max-width: 100%;
        max-height: 100%;
        vertical-align: middle;
      }
    }

    @media screen and (max-width: 1600px) {
      .form-control {
        padding-right: 45px;
      }
      .eyeIcon {
        right: 15px;
        top: 47px;
      }
    }

    @media screen and (max-width: 1440px) {
      .eyeIcon {
        right: 14px;
        top: 43px;
        width: 22px;
        height: 22px;
      }
    }

    @media screen and (max-width: 767px) {
      .form-control {
        padding-right: 40px;
      }
      .eyeIcon {
        top: 40px;
        right: 12px;
      }
    }
  }

  .form-check {
    margin: 0;
    padding-left: 30px;
    position: relative;
    margin-bottom: 10px;
    .form-check-label {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #505887;
      margin-bottom: 0;
      cursor: pointer;
      @media screen and (max-width: 1600px) {
        font-size: 15px;
        line-height: 22px;
      }
      @media screen and (max-width: 1440px) {
        font-size: 14px;
        line-height: 22px;
      }
    }
    input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 2px;
      border-radius: 3px;
      background-color: #fff;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 20px;
      border: 2px solid #cbcbcb;
      width: 20px;
      height: 20px;
      margin: 0;
      vertical-align: top;
      box-shadow: none;
      transition: all 0.15s ease 0s;
      cursor: pointer;
      &:active {
        filter: brightness(90%);
      }
      &:focus {
        border-color: #6c53e4;
        box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4);
      }
      @media screen and (max-width: 1440px) {
        top: 2px;
      }
    }
    input[type="checkbox"] {
      &:checked {
        background-color: transparent;
        border-color: transparent;
        box-shadow: none;
        /* background-color: #6c53e4;
        border-color: #6c53e4;
        box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4); */
      }
    }

    input[type="radio"] {
      position: absolute;
      left: 0;
      top: 2px;
      border-radius: 20px;
      background-color: #fff;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 12px;
      border: 2px solid #cbcbcb;
      width: 20px;
      height: 20px;
      margin: 0;
      vertical-align: top;
      box-shadow: none;
      transition: all 0.15s ease 0s;
      cursor: pointer;
      &:active {
        filter: brightness(90%);
      }
      &:focus {
        border-color: #6c53e4;
        box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4);
      }
      @media screen and (max-width: 1440px) {
        top: 1px;
      }
    }
    input[type="radio"] {
      &:checked {
        background-color: #fff;
        border-color: #6c53e4;
        box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4);
      }
    }
  }

  .fieldError {
    margin: 5px 0 0;
    font-family: "Poppins";
    font-size: 13px;
    line-height: 18px;
    color: #ee3254;
    font-weight: 400;

    @media screen and (max-width: 767px) {
      font-size: 12px;
    }
  }

  .react-datepicker-popper {
    line-height: 10px;
    z-index: 9;
    &[data-placement^="bottom"] {
      padding-top: 5px;
    }
    &[data-placement^="top"] {
      padding-bottom: 5px;
    }
  }

  .react-datepicker {
    border-radius: 8px;
    box-shadow: 0 5px 25px rgba(34, 41, 47, 0.1);
    border: 1px solid #efdeff;
    padding: 17px 15px 15px;
    width: 281px;
    color: #505887;
    font-family: "Poppins";
    font-size: 13px;
    line-height: 20px;

    &.react-datepicker--time-only {
      width: auto;
      padding: 15px 10px;
      .react-datepicker__time-box {
        border-radius: 0;
      }
      ul {
        &.react-datepicker__time-list {
          overflow-y: auto;
          &::-webkit-scrollbar {
            width: 4px;
          }
          &::-webkit-scrollbar:horizontal {
            height: 4px;
          }
          &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: #cecece;
            transition: color 0.15s ease-in-out,
              background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
              box-shadow 0.15s ease-in-out;
            cursor: pointer;
          }
          &::-webkit-scrollbar-track {
            border-radius: 10px;
            background-color: #fff;
            border: 1px solid #e9e9e9;
          }

          li {
            &.react-datepicker__time-list-item {
              cursor: pointer;
              font-size: 13px;
              line-height: 20px;
              height: auto;
              font-weight: 500;
              color: #505887;
              margin-bottom: 1px;
              &:last-child {
                margin-bottom: 0;
              }
              &:hover,
              &.react-datepicker__time-list-item--selected {
                color: #6c53e4;
                background-color: rgba(108, 83, 228, 0.12) !important;
              }
            }
          }
        }
      }
      .react-datepicker__header {
        .react-datepicker-time__header {
          margin-bottom: 0;
          padding-bottom: 11px;
        }
      }
    }

    .react-datepicker__triangle {
      display: none;
    }

    .react-datepicker__navigation--previous {
      left: 7px;
      .react-datepicker__navigation-icon--previous {
        &:before {
          left: -4px;
          right: auto;
        }
      }
    }

    .react-datepicker__navigation--next {
      right: 8px;
      .react-datepicker__navigation-icon--next {
        &:before {
          right: -4px;
          left: auto;
        }
      }
    }

    .react-datepicker__navigation-icon {
      padding: 0;
      &:before {
        border-width: 2px 2px 0 0;
        border-color: #3b3b3b;
        height: 8px;
        width: 8px;
        top: 12px;
      }
    }

    .react-datepicker__month {
      margin: 0;
    }

    .react-datepicker__header {
      background-color: #ffffff;
      border-bottom: none;
      padding: 0 0 10px;
      .react-datepicker__current-month,
      .react-datepicker-year-header,
      .react-datepicker-time__header {
        color: #1c295d;
        font-family: "Poppins";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        border-bottom: 1px solid rgba(23, 3, 89, 0.1);
        padding-bottom: 13px;
        margin-bottom: 13px;
        margin-top: -2px;
      }
      .react-datepicker__day-name,
      .react-datepicker__day,
      .react-datepicker__time-name {
        color: #505887;
        font-family: "Poppins";
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
      }
    }

    .react-datepicker__header__dropdown {
      color: #505887;
      font-family: "Poppins";
      font-size: 14px;
      line-height: 17px;
      font-weight: 600;
      margin-bottom: 13px;
      margin-top: -2px;
      .react-datepicker__year-read-view--down-arrow,
      .react-datepicker__month-read-view--down-arrow,
      .react-datepicker__month-year-read-view--down-arrow,
      .react-datepicker__navigation-icon::before {
        right: -18px;
        top: 3px;
        border-width: 2px 2px 0 0;
        border-color: #3b3b3b;
        height: 8px;
        width: 8px;
      }
      .react-datepicker__year-dropdown,
      .react-datepicker__month-dropdown,
      .react-datepicker__month-year-dropdown {
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 5px 25px rgba(34, 41, 47, 0.1);
        border: 1px solid #efdeff;
        padding: 5px 0;
        width: 140px;
        left: 22.5%;
        .react-datepicker__year-option,
        .react-datepicker__month-option,
        .react-datepicker__month-year-option {
          font-size: 13px;
          line-height: 18px;
          font-weight: 500;
          padding: 4px 5px;
          transition: all 0.25s ease 0s;
          margin-bottom: 1px;
          &:hover {
            color: #6c53e4;
            background-color: rgba(108, 83, 228, 0.12);
          }
          &:last-child {
            margin-bottom: 0;
          }
          &:first-of-type {
            border-radius: 0;
          }
          &:last-of-type {
            border-radius: 0;
          }
          &.react-datepicker__month-option--selected_month {
            color: #6c53e4;
            background-color: rgba(108, 83, 228, 0.12);
            font-weight: 600;
          }
        }
      }
    }

    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
      margin: 3px 4px;
      height: 27px;
      width: 27px;
      font-family: "Poppins";
      font-size: 13px;
      line-height: 24px;
      font-weight: normal;
      color: #1c295d;
      border-radius: 5px;
      border: 2px solid transparent;
      transition: all 0.35s ease 0s;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--selected,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--selected,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--selected,
    .react-datepicker__year-text--in-selecting-range,
    .react-datepicker__year-text--in-range {
      border-radius: 5px;
      border: 2px solid #6c53e4 !important;
      background-color: #6c53e4 !important;
      color: #fff !important;
      font-weight: 500;
    }

    .react-datepicker__day--keyboard-selected,
    .react-datepicker__month-text--keyboard-selected,
    .react-datepicker__quarter-text--keyboard-selected,
    .react-datepicker__year-text--keyboard-selected,
    .react-datepicker__day:hover,
    .react-datepicker__month-text:hover,
    .react-datepicker__quarter-text:hover,
    .react-datepicker__year-text:hover {
      border-radius: 5px;
      border: 2px solid transparent;
      background: rgba(108, 83, 228, 0.12);
      color: #6c53e4;
      font-weight: 500;
    }

    .react-datepicker__day--outside-month {
      color: #8d8d8d;
    }

    .react-datepicker__day--disabled {
      color: #8d8d8d;
      pointer-events: none;
    }
  }
  .ant-select-multiple {
    .ant-select-selector{
      margin: 0;
      display: block;
      width: 100%;
      appearance: none;
      transition: border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
      outline: none;
      box-shadow: none;
      background-color: #f4f6fd;
      border: 1px solid #e8e6ee;
      border-radius: 10px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #505887;
      display: flex;
      align-items: center;
    }
    .ant-select-selection-overflow{
      padding: 8px 10px;
      min-height: 56px;
      @media screen and (max-width:1600px){
        padding: 4px 10px;
        min-height: 48px;
      }
      @media screen and (max-width:1440px){
        padding: 2px 10px;
        min-height: 44px;
      }
    }
    .ant-select-selection-item{
      background: #FFFFFF;
      border: 1px solid #E8E6EE;
      border-radius: 10px;
      padding: 9px 35px 9px 10px;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      text-transform: capitalize;
      color: #7987A5;
      height: 40px;
      @media screen and (max-width:1600px){
        padding: 7px 35px 7px 10px;
        height: 36px;
      }
    }
    .ant-select-selection-item-remove{
      position: absolute;
      right: 12px;
      top: 8px;
      font-size: 13px;
      svg{
        fill: #EE3254;
      }
      @media screen and (max-width:1600px){
        top: 5px;
      }
    }
  }
`;

export const ExeLink = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #505887;
  margin: 15px 0 0;
  cursor: default;
  strong {
    font-weight: 600;
  }

  @media screen and (max-width: 1440px) {
    font-size: 13px;
    line-height: 20px;
    margin: 10px 0 0;
  }
`;
