import React from "react";
import { ExperienceContainer } from "./styled";
import { ListExperienceProps } from "../../../types/experience";
import { Link } from "react-router-dom";
import CanvasAnimation from "../../../Component/CanvasTech";

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

const Experience = () => {
  return (
    <ExperienceContainer className="pt-[170px]">
      <div className="wrapper">
        <h2 className="text-[40px] mb-[44px] font-normal">Work Experience</h2>
        <ul className="list-experience grid grid-cols-1 md:grid-cols-2 gap-8 mb-[160px] pl-[0]">
          {listExperience.map((item, index) => (
            <li key={index}>
              <div className="bg-gradient-to-br p-9 rounded-2xl shadow-lg flex items-center gap-5">
                <img
                  src={item.image}
                  alt={item.title}
                  width={122}
                  height={115}
                  loading="lazy"
                />
                <div>
                  <h3 className="text-white text-[26px] font-[600] mb-[5px]">
                    {item.title}
                  </h3>
                  <p className="text-description text-gray-300 text-[12px] mb-[14px]">
                    {item.description}
                  </p>
                  <Link to={item.link}>LEARN MORE</Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <CanvasAnimation />
      </div>
    </ExperienceContainer>
  );
};

export default Experience;
