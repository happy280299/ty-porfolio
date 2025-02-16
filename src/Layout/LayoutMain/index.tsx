import React from "react";
import Header from "../../Component/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Component/Footer";
import { MainContainer } from "./styled";

const LayoutMain = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <Outlet />
        <Footer />
      </MainContainer>
    </>
  );
};

export default LayoutMain;
