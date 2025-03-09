import {
  ContainerAnimation,
  ContainerFloor,
  ContainerMain,
  Orbit1,
  Orbit2,
  Orbit3,
  WapperAnimation,
} from "./AnimationStyle";
import RootSvg from "./RootSvg";
import Satellite from "./Satellite";

const BoxAnimation = () => {
  return (
    <WapperAnimation>
      <ContainerAnimation>
        <ContainerFloor>
          <ContainerMain>
            <RootSvg />
          </ContainerMain>
            <Satellite index="1"></Satellite>
            <Satellite index="2"></Satellite>
            <Satellite index="3"></Satellite>
        </ContainerFloor>
      </ContainerAnimation>
    </WapperAnimation>
  );
};
export default BoxAnimation;
