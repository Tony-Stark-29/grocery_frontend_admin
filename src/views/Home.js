import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../features/navigation/Navigation";

export const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-12 col-lg-2 p-0 h-auto">
          <Navigation />
        </div>
        <div className="col-12 col-lg-10 p-0 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
