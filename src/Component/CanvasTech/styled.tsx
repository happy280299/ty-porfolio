import styled from "styled-components";

export const CanvasTechContainer = styled.div`
  text-align: center;
  .logo-root {
    position: relative;
    z-index: 1;
    margin-top: -100px;
    margin-bottom: -50px;
    &:before,
    &:after {
      position: absolute;
      content: "";
      pointer-events: none;
    }
    &:before {
      top: 50%;
      left: 50%;
      background: url("/assets/images/experience/bg_decord.png") center / cover
        no-repeat;
      width: 542px;
      height: 330px;
      margin-left: -271px;
      margin-top: -165px;
    }
    &:after {
      top: 0;
      left: 50%;
      background: url("/assets/images/experience/bg_decord_02.png") center /
        cover no-repeat;
      width: 306px;
      height: 275px;
      margin-left: -153px;
      margin-top: -165px;
    }
  }
  .tech {
    pointer-events: none;
  }
`;
