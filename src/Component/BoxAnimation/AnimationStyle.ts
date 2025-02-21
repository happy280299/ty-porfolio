import styled from "styled-components";

export const WapperAnimation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;
export const ContainerAnimation = styled.div`
  width: 100%;
  max-width: 895px;
  aspect-ratio: 895/657;
  /* border: 1px solid #fff; */
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 300px;
  z-index: 20;
  position: relative;
`;

export const ContainerFloor = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateX(90deg);
  position: relative;
`;
export const ContainerMain = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transform: rotateX(-90deg) translateZ(-0px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;
export const Orbit1 = styled.div`
  width: 80%;
  aspect-ratio: 1;
  position: absolute;
  border-radius: 50%;
  transform-style: preserve-3d;
  transform: translateZ(-250px) translateY(-25%) translateX(12.5%) rotateX(20deg)
  rotateZ(-90deg);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #763CAC50;
  animation: RotateHome1 10s linear infinite ;
  @keyframes RotateHome1 {
    0% {
      transform: translateZ(-250px) translateY(-25%) translateX(12.5%) rotateX(20deg)
    rotateZ(-90deg);
    }
    100% {
      transform: translateZ(-250px) translateY(-25%) translateX(12.5%) rotateX(20deg)
    rotateZ(-450deg);
    }
  }
`;
export const Orbit2 = styled.div`
  width: 85%;
  aspect-ratio: 1;
  position: absolute;
  border-radius: 50%;
  transform-style: preserve-3d;
  transform: translateZ(-239px) translateY(-25%) translateX(8.5%) rotateX(22deg) rotateZ(-90deg);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1px solid #763CAC50;
  animation: RotateHome2 10s linear infinite ;
  animation-delay: -2s;
  @keyframes RotateHome2 {
    0% {
      transform: translateZ(-239px) translateY(-25%) translateX(8.5%) rotateX(22deg) rotateZ(-90deg);
    }
    100% {
      transform: translateZ(-239px) translateY(-25%) translateX(8.5%) rotateX(22deg) rotateZ(-450deg);
    }
  }
`;

export const Orbit3 = styled.div`
  width: 90%;
  aspect-ratio: 1;
  position: absolute;
  border-radius: 50%;
  transform-style: preserve-3d;
  transform: translateZ(-234px) translateY(-25%) translateX(5.5%) rotateX(24.4deg) rotateZ(-90deg);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1px solid #763CAC50;
  animation: RotateHome3 10s linear infinite ;
  animation-delay: -4s;
  @keyframes RotateHome3 {
    0% {
      transform: translateZ(-234px) translateY(-25%) translateX(5.5%) rotateX(24.4deg) rotateZ(-90deg);
    }
    100% {
      transform: translateZ(-234px) translateY(-25%) translateX(5.5%) rotateX(24.4deg) rotateZ(-450deg);
    }
  }
`;