import React from "react";
import Header from "../../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer";
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
