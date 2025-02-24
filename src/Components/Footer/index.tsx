import React from "react";
import { FooterContainer } from "./styled";
import { Link } from "react-router-dom";

interface SocialInterface {
  image: string;
  link: string;
}
const Footer = () => {
  const listSocial = [
    {
      image: "/assets/images/common/icn_social_01.svg",
      link: "#",
    },
    {
      image: "/assets/images/common/icn_social_02.svg",
      link: "#",
    },
    {
      image: "/assets/images/common/icn_social_03.svg",
      link: "#",
    },
  ];
  return (
    <FooterContainer className="pb-[200px]">
      <div className="wrapper max-w-[1167px] mx-auto">
        <div className="mb-[34px]">
          <h2 className="text-[25] font-normal mb-[73px]">Contact</h2>
          <p className="text-[15px] mb-[30px] max-w-[703px]">
            I'm currently looking to join a cross-functional team that values
            improving people's lives through accessible design. or have a
            project in mind? Let's connect
          </p>
          <Link to="mailto: ty@gmail.com">ty@gmail.com</Link>
        </div>
        <ul className="flex gap-10 mb-[0] pl-[0]">
          {listSocial.map((item: SocialInterface, index: number) => (
            <li key={index}>
              <Link to={item.link}>
                <img
                  src={item.image}
                  width={18}
                  height={18}
                  loading="lazy"
                  alt="Social"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </FooterContainer>
  );
};

export default Footer;
