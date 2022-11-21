import React from "react";
import Header from "./Header";
import Menu from "./menu";

const MainLayout = ({ children }: any) => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
