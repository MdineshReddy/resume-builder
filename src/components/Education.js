import React from "react";
import data from "../data";

const Education = () => {
  return (
    <div className="education">
      <div>
        <h3>EDUCATION BACKGROUND</h3>
        {data.education.map((item, index) => {
          return (
            <div key={index}>
              <p className="title">{item.title}</p>
              <p className="organisation">{item.organization}</p>
              <div className="period">
                <i>{item.dates}</i>

                <i>{item.location}</i>
              </div>
              {item.gpa && (
                <p className="marks">
                  <span>gpa: {item.gpa}</span>
                  <span>{item.percentage} %</span>
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
