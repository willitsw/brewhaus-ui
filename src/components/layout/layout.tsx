import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./header";
import { Divider, Layout as AntDLayout } from "antd";
import Footer from "./footer";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location.pathname]);

  return (
    <AntDLayout>
      <Header />
      <div className="container mx-auto mb-5">
        <Outlet />
        <Divider />
        <Footer />
      </div>
    </AntDLayout>
  );
};

export default Layout;
