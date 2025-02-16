import styled from "styled-components";

export const KeyvisualContainer = styled.div``;
export const KeyvisualWrapper = styled.div`
  .keyvisual-left {
    position: relative;
    z-index: 1;
    max-width: 385px;
    height: 431px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 431px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      #763cac 0%,
      rgba(50, 15, 133, 0) 100%
    );
    &::before,
    &:after {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &:after {
      background: url("/assets/images/keyvisual/keyvisual_decor_01.png") center /
        contain no-repeat;
      width: 258px;
      height: 259px;
    }
    img {
      position: relative;
      z-index: 1;
    }
  }
  .keyvisual-right {
    margin-left: -51px;
    padding-top: 32px;
  }
  .text-name {
    color: #fff;
    font-size: 19px;
    letter-spacing: -0.5px;
    position: relative;
    &:before {
      position: absolute;
      content: "";
      top: -15px;
      left: -104px;
      background: url("/assets/images/keyvisual/keyvisual_line_01.svg") center /
        contain no-repeat;
      width: 122px;
      height: 118px;
    }
    span {
      color: #7127ba;
      letter-spacing: -0.5px;
    }
  }
  .title-keyvisual {
    span {
      color: #7127ba;
      position: relative;
      &:before {
        position: absolute;
        content: "";
        top: 48%;
        left: 56%;
        background: url("/assets/images/keyvisual/keyvisual_decor_02.svg")
          center / contain no-repeat;
        width: 189px;
        height: 61px;
        transform: translate(-50%, -50%);
      }
    }
  }
  .position-small {
    span {
      color: #1877f2;
      position: relative;
      padding-left: 24px;
      &:before {
        position: absolute;
        content: "";
        top: 50%;
        margin-top: -10px;
        left: 0;
        background: url("/assets/images/keyvisual/icn_fb.png") center / contain
          no-repeat;
        width: 20px;
        height: 21px;
      }
    }
  }
`;
