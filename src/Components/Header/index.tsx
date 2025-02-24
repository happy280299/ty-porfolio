import React, { useContext, useState } from "react";
import {
  ButtonMenu,
  HeaderContainer,
  HeaderLogo,
  HeaderMenu,
  HeaderWrapper,
} from "./styled";
import { Link } from "react-router-dom";
import { ContextProviderWrapper } from "../../Context";

const Header: React.FC = () => {
  const { isDesktop } = useContext(ContextProviderWrapper)!;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer className="p-4">
      <HeaderWrapper className="max-w-[1209px] mx-auto flex md:flex">
        <nav className="bg-[#1A0E2A] text-white md:py-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <HeaderLogo>
            <Link to={"/"}>
              <img
                src="/assets/images/common/header_logo.svg"
                width={35}
                height={39}
                loading="eager"
                alt="Logo"
              />
            </Link>
          </HeaderLogo>
          <HeaderMenu className={isOpen ? "is-show" : ""}>
            <div className="md:flex block sm:block md:space-x-8 md:gap-[164px]">
              <a
                href="#"
                className="sm:text-sm md:text-xl link-navigation block"
              >
                Home
              </a>
              <a
                href="#"
                className="sm:text-sm md:text-xl link-navigation block"
              >
                About
              </a>
              <a
                href="#"
                className="sm:text-sm md:text-xl link-navigation block"
              >
                Showcase
              </a>
            </div>
          </HeaderMenu>
        </nav>
        {!isDesktop && (
          <ButtonMenu
            onClick={handleOpenMenu}
            className={isOpen ? "is-active" : ""}
          >
            <span></span>
            <span></span>
            <span></span>
          </ButtonMenu>
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
