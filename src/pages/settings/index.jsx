import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/settings/Sidebar";

const Settings = () => {
  return (
    <section className="container my-3">
      <div className="d-flex gap-4">
        <Sidebar />
        <Outlet />
      </div>
    </section>
  );
};

export default Settings;
