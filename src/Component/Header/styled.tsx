import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #1a0b2e;
`;
export const HeaderWrapper = styled.div`
  .link-navigation {
    position: relative;
    &:after {
      transition: all 0.26s ease;
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      height: 2px;
      width: 0;
      background-color: #fff;
    }
    &:hover {
      &:after {
        transform-origin: right;
        width: 100%;
      }
    }
    &:not(:hover) {
      &:after {
        transform-origin: right;
        left: unset;
        right: 0;
      }
    }
  }
`;
export const HeaderLogo = styled.div``;
