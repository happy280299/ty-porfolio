import React from "react";
import Header from "../../Component/Header";
import { HomeContainer, HomeWrapper } from "./styled";
import Keyvisual from "./Keyvisual";
import Experience from "./experience";
import CanvasAnimation from "../../Component/CanvasTech";
import BoxAnimation from "../../Component/BoxAnimation/BoxAnimation";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeWrapper className="max-w-[1162px] mx-auto">
          {/* <Keyvisual />
          <Experience /> */}
          {/* <CanvasAnimation /> */}
          <BoxAnimation/>
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;
