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
          <Orbit1>
            <Satellite index="1"></Satellite>
          </Orbit1>
          <Orbit2>
            <Satellite index="2"></Satellite>
          </Orbit2>
          <Orbit3>
            <Satellite index="3"></Satellite>
          </Orbit3>
        </ContainerFloor>
      </ContainerAnimation>
    </WapperAnimation>
  );
};
export default BoxAnimation;
