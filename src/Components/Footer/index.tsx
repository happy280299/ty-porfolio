import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FooterContainer } from "./styled";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface SocialInterface {
  image: string;
  link: string;
}

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const socialIconsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        Array.from(socialIconsRef.current?.children || []),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

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
    <FooterContainer ref={footerRef} className="pb-[200px]">
      <div className="wrapper max-w-[1167px] mx-auto">
        <div className="mb-[34px]">
          <h2 ref={titleRef} className="text-[25px] font-normal mb-[73px]">
            Contact
          </h2>
          <p
            ref={descriptionRef}
            className="text-[15px] mb-[30px] max-w-[703px]"
          >
            I'm currently looking to join a cross-functional team that values
            improving people's lives through accessible design. or have a
            project in mind? Let's connect
          </p>
          <Link to="mailto: ty@gmail.com" className="link-email">
            ty@gmail.com
          </Link>
        </div>
        <ul ref={socialIconsRef} className="flex gap-10 mb-[0] pl-[0]">
          {listSocial.map((item: SocialInterface, index: number) => (
            <li key={index}>
              <Link to={item.link} className="link-social">
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
