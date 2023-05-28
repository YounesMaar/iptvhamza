import React from "react";
// components

// routers
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="bg-slate-100 admin-interface">
      <Outlet />
    </div>
  );
};

export default Admin;
