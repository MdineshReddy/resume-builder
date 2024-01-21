import React from "react";
import data from "../data";

const Interests = () => {
  return (
    <div className="skills">
      <div>
        <h3>Interests</h3>
        <div className="skillList">
          {data.interests.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interests;
