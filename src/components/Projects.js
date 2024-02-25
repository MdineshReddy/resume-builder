import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import data from "../data";

const Projects = () => {
  return (
    <div className="projects">
      <div>
        <h3>PERSONAL PROJECTS</h3>
        {data.projects.map((item, index) => (
          <div className="project" key={index}>
            <p className="title">
              {item.title}{" "}
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer">
                  <BiLinkExternal />
                </a>
              )}
            </p>
            <p className="description">{item.description}</p>
            <p>
              <b>Technologies Used: </b> {item.technologies}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
