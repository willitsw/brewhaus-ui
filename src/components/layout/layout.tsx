import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import { Divider, Layout as AntDLayout } from "antd";
import Footer from "./footer";

const Layout = () => {
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
