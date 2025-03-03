import React, { useEffect, useRef } from "react";
import { ExperienceContainer } from "./styled";
import { ListExperienceProps } from "../../../types/experience";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const listExperience: ListExperienceProps[] = [
  {
    image: "/assets/images/experience/experience_img_01.png",
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    link: "LEARN MORE",
  },
  {
    image: "/assets/images/experience/experience_img_02.png",
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    link: "LEARN MORE",
  },
  {
    image: "/assets/images/experience/experience_img_03.png",
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    link: "LEARN MORE",
  },
  {
    image: "/assets/images/experience/experience_img_04.png",
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    link: "LEARN MORE",
  },
];
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      experienceRef.current,
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top center",
          end: "+=200",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <ExperienceContainer className="pt-[170px]" ref={experienceRef}>
      <div className="wrapper">
        <h2 className="text-[40px] mb-[44px] font-normal">Work Experience</h2>
        <ul className="list-experience grid grid-cols-1 md:grid-cols-2 gap-8 mb-[160px] pl-[0]">
          {listExperience.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="bg-gradient-to-br md:p-9 rounded-2xl shadow-lg flex items-center gap-5 item-link"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={122}
                  height={115}
                  loading="lazy"
                />
                <div>
                  <h3 className="title text-white text-[26px] font-[600] mb-[5px]">
                    {item.title}
                  </h3>
                  <p className="text-description text-gray-300 text-[12px] mb-[14px]">
                    {item.description}
                  </p>
                  <p className="button">LEARN MORE</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </ExperienceContainer>
  );
};

export default Experience;
