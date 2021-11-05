import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PasswordRecovery from "../pages/PasswordRecovery";
import Checkout from "../pages/Checkout";
import CreateAccount from "../pages/CreateAccount";
import MyAccount from "../pages/MyAccount";
import NewPassword from "../pages/NewPassword";
import Orders from "../pages/Orders";
import SendEmail from "../pages/SendEmail";
import NotFound from "../pages/NotFound";
import Layout from "../containers/Layout";
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<CreateAccount />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/new-password" element={<NewPassword />} />
          <Route exact path="/send-email" element={<SendEmail />} />
          <Route
            exact
            path="/password-recovery"
            element={<PasswordRecovery />}
          />
          <Route exact path="/my-account" element={<MyAccount />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
