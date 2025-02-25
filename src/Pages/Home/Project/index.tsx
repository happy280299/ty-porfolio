import React, { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectContainer, ProjectList, ProjectWrapper } from "./styled";
import { ContextProviderWrapper } from "../../../Context";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const { isDesktop } = useContext(ContextProviderWrapper)!;
  const projectRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    projectRefs.current.forEach((el, index) => {
      if (el) {
        const contentLeft = el.querySelector(".content-left");
        const contentRight = el.querySelector(".content-right");
        gsap.fromTo(
          contentLeft,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
        gsap.fromTo(
          contentRight,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <ProjectContainer>
      <ProjectWrapper>
        <ProjectList>
          {listProject.map((items, index) => (
            <li
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="item-list"
            >
              <div className="content-left">
                <h2 className="project-title">
                  <span className="title-small">{items.titleSmall}</span>
                  <span className="title-bug">{items.titleBig}</span>
                </h2>
                <p className="content-description">{items.des}</p>
                {isDesktop && (
                  <ul className="list-pointer">
                    {items.subList.map((item, idx) => (
                      <li key={idx}>
                        <img
                          src={item.icon}
                          width={31}
                          height={31}
                          loading="lazy"
                          alt="Icon"
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="content-right">
                <img
                  src={items.image}
                  width={539}
                  height={311}
                  loading="lazy"
                  alt="Banner"
                />
                {!isDesktop && (
                  <ul className="list-pointer">
                    {items.subList.map((item, idx) => (
                      <li key={idx}>
                        <img
                          src={item.icon}
                          width={31}
                          height={31}
                          loading="lazy"
                          alt="Icon"
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ProjectList>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

const listProject = [
  {
    titleSmall: "Featured Project",
    titleBig: "Example Project",
    des: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
    image: "/assets/images/project/img_project.png",
    subList: [
      { icon: "/assets/images/project/icon_project.svg" },
      { icon: "/assets/images/project/icon_project.svg" },
    ],
  },
  {
    titleSmall: "Featured Project",
    titleBig: "Example Project 2",
    des: "A web app for managing and tracking fitness goals. Analyze your workouts, set personalized training plans, and monitor progress over time.",
    image: "/assets/images/project/img_project.png",
    subList: [
      { icon: "/assets/images/project/icon_project.svg" },
      { icon: "/assets/images/project/icon_project.svg" },
    ],
  },
];

export default Project;
