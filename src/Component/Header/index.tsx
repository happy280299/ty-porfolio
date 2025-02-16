import React from "react";
import { HeaderContainer, HeaderLogo, HeaderWrapper } from "./styled";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <HeaderContainer className="p-4">
      <HeaderWrapper className="max-w-[1209px] mx-auto">
        <nav className="bg-[#1A0E2A] text-white py-4 px-8 flex justify-between items-center">
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

          {/* Navigation Links */}
          <div className="flex space-x-8 gap-[164px]">
            <a
              href="#"
              className="hover:text-gray-400 transition duration-300 text-xl"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition duration-300 text-"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition duration-300 text-"
            >
              Showcase
            </a>
          </div>
        </nav>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
