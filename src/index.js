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


ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="market/:coin" element={<CryptoChart />} />
          <Route path="/news" element={<News />} />
          <Route path="news/:id" element={<SingleNews />} />


        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verification" element={<VerificationPage />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
