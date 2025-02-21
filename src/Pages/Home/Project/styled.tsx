import styled from "styled-components";

export const ProjectContainer = styled.div`
  padding-top: 180px;
`;
export const ProjectWrapper = styled.div`
  max-width: 1167px;
  margin: 0 auto;
`;
export const ProjectList = styled.ul`
  padding-left: 0;
  list-style-type: none;
  .item-list {
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 180px;
    }
    &:nth-child(2n) {
      text-align: right;
      .content-left {
        order: 2;
        .content-description {
          margin-left: -90px;
          margin-right: 0;
          text-align: left;
        }
      }
      .list-pointer {
        justify-content: flex-end;
      }
    }
  }
  .content-left {
    position: relative;
    z-index: 2;
  }
  .content-right {
    flex-shrink: 0;
    max-width: 582px;
    width: 100%;
    height: 341px;
    background: #2b0b3a;
    border-radius: 5px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    position: relative;
    z-index: 1;
    &:before {
      z-index: -1;
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 851px;
      height: 729px;
      border-radius: 700px;
      background: url("/assets/images/Project/bg_decor.png") center / cover
        no-repeat;
    }
    /* &:after {
      z-index: -1;
      position: absolute;
      content: "";
      top: 50%;
      left: 45%;
      transform: translate(-50%, -50%);
      width: 642px;
      height: 720px;
      border-radius: 700px;
      background: radial-gradient(
        50% 50% at 50% 50%,
        #763cac 0%,
        rgba(50, 15, 133, 0) 100%
      );
    } */
  }
  .project-title {
    margin-bottom: 30px;
    span {
      display: block;
    }
    .title-small {
      color: #9857d3;
      font-family: Poppins;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.32px;
      line-height: 1;
    }
    .title-big {
      color: #ccd6f6;
      font-family: Poppins;
      font-size: 34px;
      font-weight: 600;
      letter-spacing: 0.68px;
      line-height: 1;
    }
  }
  .content-description {
    padding: 26px 34px;
    border-radius: 14px;
    background: #231845;
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(40px);
    margin-bottom: 36px;
    margin-right: -90px;
  }
  .list-pointer {
    display: flex;
    align-items: center;
    gap: 17px;
    margin-bottom: 0;
  }
`;
