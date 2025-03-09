import { useEffect, useState } from "react";
import "./satellite.css";
import { Orbit1, Orbit2, Orbit3 } from "./AnimationStyle";
const Satellite = (props: any) => {
  const handleShowImg = (index: any) => {
    if (index === "1") {
      return (
        <>
          <Orbit1 style={{animationDelay:"-5s"}} >
            <div className="ball">
              <div className="layer clip">
                <div className="shade">
                  <img src="/assets/images/Orbit/AiLogo.svg" />
                </div>
              </div>
            </div>
          </Orbit1>
          <Orbit1>
            <div className="ball">
              <div className="layer clip">
                <div className="shade">
                  <img src="/assets/images/Orbit/codeLogo.svg" />
                </div>
              </div>
            </div>
          </Orbit1>
        </>
      );
    } else if (index === "2") {
      return (
        <>
          <Orbit2 style={{animationDelay:"-2.5s"}} >
            <div className="ball">
              <div className="layer clip">
                <div className="shade">
                  <img src="/assets/images/Orbit/Css.svg" />
                </div>
              </div>
            </div>
          </Orbit2>
          <Orbit2 style={{animationDelay:"-5s"}}>
            <div className="ball">
              <div className="layer clip">
                <div className="shade">
                  <img src="/assets/images/Orbit/figmaLogo.svg" />
                </div>
              </div>
            </div>
          </Orbit2>
          <Orbit2 style={{animationDelay:"-7.5s"}}>
            <div className="ball">
              <div className="layer clip">
                <div className="shade">
                  <img src="/assets/images/Orbit/GG.svg" />
                </div>
              </div>
            </div>
          </Orbit2>
          <Orbit2>
            <div className="ball">
              <div className="layer clip">
                <div className="shade">
                  <img src="/assets/images/Orbit/jsLogo.svg" />
                </div>
              </div>
            </div>
          </Orbit2>
        </>
      );
    }else{
      return (
        <>
          <Orbit3 style={{animationDelay:"-2s"}} >
            <div className="ball">
              <div className="layer clip">
                <div className="shade">
                  <img src="/assets/images/Orbit/JsLogo2.svg" />
                </div>
              </div>
            </div>
          </Orbit3>
          <Orbit3 style={{animationDelay:"-4s"}} >
            <div className="ball">
              <div className="layer clip">
                <div className="shade">
                  <img src="/assets/images/Orbit/Liked.svg" />
                </div>
              </div>
            </div>
          </Orbit3>
          <Orbit3 style={{animationDelay:"-6s"}} >
            <div className="ball">
              <div className="layer clip">
                <div className="shade">
                  <img src="/assets/images/Orbit/reactLogo.svg" />
                </div>
              </div>
            </div>
          </Orbit3>
          <Orbit3 style={{animationDelay:"-8s"}} >
            <div className="ball">
              <div className="layer clip">
                <div className="shade">
                  <img src="/assets/images/Orbit/tw.svg" />
                </div>
              </div>
            </div>
          </Orbit3>
          <Orbit3 style={{animationDelay:"-10s"}} >
            <div className="ball">
              <div className="layer clip">
                <div className="shade">
                  <img src="/assets/images/Orbit/xdLogo.svg" />
                </div>
              </div>
            </div>
          </Orbit3>
        </>
      );
    }
  };
  return <>{handleShowImg(props.index)}</>;
};
export default Satellite;
