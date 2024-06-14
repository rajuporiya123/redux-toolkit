import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/auth/Loign";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/auth/Home";
import EmailVerification from "./pages/auth/emailVerification";
import ForgotPassword from "./pages/auth/forgotPassword";
import ResetPassword from "./pages/auth/resetPassword";
import MobileVerification from "./pages/auth/mobileVerification";
import Cart from "./pages/auth/Cart";
import Details from "./pages/auth/Details";
import QuizApp from "./pages/auth/QuizApp";

const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={true}
      />
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mobileVerify" element={<MobileVerification />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/email-vefication" element={<EmailVerification />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
