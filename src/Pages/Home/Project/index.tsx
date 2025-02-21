import React from "react";
import { ProjectContainer, ProjectList, ProjectWrapper } from "./styled";

const Project = () => {
  return (
    <ProjectContainer>
      <ProjectWrapper>
        <ProjectList>
          {listProject.map((items, index) => (
            <li key={index} className="item-list">
              <div className="content-left">
                <h2 className="project-title">
                  <span className="title-small">{items.titleSmall}</span>
                  <span className="title-bug">{items.titleBig}</span>
                </h2>
                <p className="content-description">{items.des}</p>
                <ul className="list-pointer">
                  {items.subList.map((item: any, index) => (
                    <li key={index}>
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
              </div>
              <div className="content-right">
                <img
                  src={items.image}
                  width={539}
                  height={311}
                  loading="lazy"
                  alt="Banner"
                />
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
    titleSmall: "Featured  Project",
    titleBig: "Example Project",
    des: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/assets/images/project/img_project.png",
    subList: [
      {
        icon: "/assets/images/project/icon_project.svg",
      },
      {
        icon: "/assets/images/project/icon_project.svg",
      },
    ],
  },
  {
    titleSmall: "Featured  Project",
    titleBig: "Example Project",
    des: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/assets/images/project/img_project.png",
    subList: [
      {
        icon: "/assets/images/project/icon_project.svg",
      },
      {
        icon: "/assets/images/project/icon_project.svg",
      },
    ],
  },
];

export default Project;
