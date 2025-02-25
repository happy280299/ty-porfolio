import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding-top: 200px;
  .link-social {
    display: inline-block;
    transition: all 0.35s ease;
    &:hover {
      transform: rotate(180deg) scale(1.1);
    }
  }
  .link-email {
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 767.98px) {
    padding: 100px 20px;
  }
`;
