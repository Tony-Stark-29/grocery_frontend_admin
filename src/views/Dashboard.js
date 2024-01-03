import React from "react";

import { SideNav } from "../components/SideNav";
import { Outlet } from "react-router-dom";
import { MainNav } from "../components/MainNav";

export const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row vh-100 ">
        <SideNav />
        <div className="col col-lg-10 p-0 ">
          <MainNav />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
