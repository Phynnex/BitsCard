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
import Dashboard from "./pages/Dashboard/index";


// settings components
import Profile from "./components/settings/Profile";
import Faq from "./pages/Faq";
import MobileApp from "./pages/MobileApp";
import SubmitRequest from "./pages/SubmitRequest";
import Username from "./pages/Username";
import Password from "./pages/Password";
import Notification from "./pages/Notification";

// Dashboard components
import DashboardHome from "./pages/Dashboard/DashboardHome";
import GiftCard from "./pages/Dashboard/GiftCard";
import Crypto from "./pages/Dashboard/Crypto";
import SendCrypto from "./pages/Dashboard/SendCrypto";
import RecieveCrypto from "./pages/Dashboard/RecieveCrypto";
import Withdraw from "./pages/Dashboard/Withdraw";
import Transfer from "./pages/Dashboard/Transfer";
import Portfolio from "./pages/Dashboard/Portfolio";
import MySettings from "./pages/Dashboard/MySettings";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(

    <React.StrictMode>
<QueryClientProvider client={queryClient}>
    <BrowserRouter>
    {/* <Sidebar /> */}
    
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="market/:coin" element={<CryptoChart />} />
          <Route path="/news" element={<News />} />
          <Route path="news/:id" element={<SingleNews />} />
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
        {/* <Route path="/dashboard" element={<DashboardHome />} /> */}
    
        <Route path="/dashboard" element={<Dashboard />} >
          <Route index element={<DashboardHome/>} />
          <Route path="giftcard" element={<GiftCard/>} />
          <Route path="crypto" element={<Crypto/>} />
          <Route path="send-crypto" element={<SendCrypto />} />
          <Route path="recieve-crypto" element={<RecieveCrypto />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="settings" element={<MySettings />} />
    
       </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </React.StrictMode>,

  
  document.getElementById("root")
);

reportWebVitals();
