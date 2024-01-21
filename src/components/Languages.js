import React from "react";
import { BsCircleFill, BsCircle } from "react-icons/bs";
import data from "../data";

const RateGen = ({ rate }) => {
  const arr1 = [];
  for (let i = 0; i < rate; i++) {
    arr1.push(i);
  }
  const arr2 = [];
  for (let i = 0; i < 5; i++) {
    arr2.push(i);
  }

  return (
    <>
      {arr2.map((item, index) => {
        if (arr1.includes(item)) {
          return (
            <span className="rate" key={index}>
              <BsCircleFill />
            </span>
          );
        } else {
          return (
            <span className="rate" key={index}>
              <BsCircle />
            </span>
          );
        }
      })}
    </>
  );
};

const Languages = () => {
  return (
    <div className="languages">
      <div>
        <h3>LANGUAGES</h3>
        {data.languages.map((item, index) => {
          return (
            <div className="language" key={index}>
              <p>
                <b>{item.language}</b>
              </p>
              <div>
                <RateGen rate={item.rating} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Languages;
