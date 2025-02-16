import React from "react";
import Header from "../../Component/Header";
import { HomeContainer, HomeWrapper } from "./styled";
import Keyvisual from "./Keyvisual";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeWrapper className="max-w-[1162px] mx-auto">
          <Keyvisual />
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;
