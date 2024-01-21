import React from "react";
import data from "../data";

const Experience = () => {
  return (
    <div className="experience">
      <div>
        <h3>WORK EXPERIENCE</h3>
        {data.experiences.map((item, index) => {
          return (
            <div key={index}>
              <p className="title">{item.title}</p>
              <p className="company">{item.company}</p>
              <div className="period">
                <i>{item.dates}</i>

                <i>{item.location}</i>
              </div>
              <ul>
                {item.details.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
