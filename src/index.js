import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import VerificationPage from "./pages/VerificationPage";
import MarketPage from "./pages/MarketPage";
import CryptoChart from "./pages/CryptoChart";
import News from "./pages/NewsPage";
import SingleNews from "./pages/SingleNews";
import Settings from "./pages/settings";


// settings components
import Profile from "./components/settings/Profile";
import Faq from "./pages/Faq";
import MobileApp from "./pages/MobileApp";
import SubmitRequest from "./pages/SubmitRequest";
import Username from "./pages/Username";
import Password from "./pages/Password";
import Notification from "./pages/Notification";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="market/:coin" element={<CryptoChart />} />
          <Route path="/news" element={<News />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/submit-request" element={<SubmitRequest />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/settings" element={<Settings />}>
            <Route index element={<Profile />} />
          </Route>
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="register-username" element={<Username />} />
        <Route path="register-password" element={<Password />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verification" element={<VerificationPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
