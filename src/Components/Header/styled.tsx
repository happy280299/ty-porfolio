import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #1a0b2e;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
`;
export const HeaderWrapper = styled.div`
  nav {
    width: 100%;
  }
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
export const HeaderLogo = styled.div`
  @media screen and (max-width: 767.98px) {
    a {
      width: 30px;
      display: inline-block;
      img {
        width: 100%;
      }
    }
  }
`;
export const HeaderMenu = styled.div`
  @media screen and (max-width: 767.98px) {
    position: absolute;
    right: 0;
    top: 0;
    background-color: #1a0b2e;
    height: 100vh;
    width: 80%;
    padding: 4rem 3rem 2rem;
    z-index: 2;
    transform: translateX(100%);
    transition: all 0.26s ease;
    opacity: 0;
    a {
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
    &.is-show {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
export const ButtonMenu = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  position: relative;
  z-index: 3;
  flex-shrink: 0;
  span {
    display: inline-block;
    background-color: #fff;
    height: 1px;
    width: 100%;
    transition: all 0.5s ease;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%); */
  }
  &.is-active {
    span {
      &:nth-child(1) {
        transform: rotateZ(-45deg) translateY(9px) translateX(-7px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotateZ(45deg) translateY(-11px) translateX(-8px);
      }
    }
  }
`;
