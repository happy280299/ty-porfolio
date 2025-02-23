import React from "react";
import Header from "../../Component/Header";
import { HomeContainer, HomeWrapper } from "./styled";
import Keyvisual from "./Keyvisual";
import Experience from "./experience";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeWrapper className="max-w-[1162px] mx-auto">
          <Keyvisual />
          <Experience />
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;
