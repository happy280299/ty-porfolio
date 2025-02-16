import styled from "styled-components";

export const ExperienceContainer = styled.div`
  position: relative;
  z-index: 1;
  &:before {
    position: absolute;
    content: "";
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 700px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      #763cac 0%,
      rgba(50, 15, 133, 0) 100%
    );
    width: 625px;
    height: 700px;
    z-index: -1;
    pointer-events: none;
  }
  .list-experience {
    font-family: "Poppins", serif;
    li {
      border-radius: 15px;
      background: #2c1250;
      box-shadow: 0px -4px 0px 0px #4f228d;
      &:nth-child(1) {
        background: linear-gradient(
          110deg,
          #130428 19.95%,
          #251043 67.64%,
          #38126d 107.08%,
          #261045 156.61%,
          #190634 183.21%
        );
      }
      &:nth-child(2) {
        background: linear-gradient(
          96deg,
          #130428 0.58%,
          #251043 16.32%,
          #38126d 29.33%,
          #261045 45.66%,
          #190634 54.44%
        );
      }
      &:nth-child(3) {
        background: linear-gradient(
          96deg,
          #130428 0.58%,
          #251043 16.32%,
          #38126d 29.33%,
          #261045 45.66%,
          #190634 54.44%
        );
      }
      &:nth-child(4) {
        background: linear-gradient(
          150deg,
          #130428 37.22%,
          #251043 70.43%,
          #38126d 97.89%,
          #261045 132.38%,
          #190634 150.9%
        );
      }
    }
    a {
      background-color: #2c1250;
      border: solid 1px #693b93;
      border-radius: 10px;
      font-size: 14px;
      font-family: Poppins;
      text-align: center;
      padding: 6px 17px;
    }
  }
`;
