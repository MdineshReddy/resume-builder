import React from "react";
import data from "../data";

const Skills = () => {
  return (
    <div className="skills">
      <div>
        <h3>SKILLS</h3>
        <div className="skillList">
          {data.skills.map((item, index) => {
            return (
              <>
                {item.items.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
