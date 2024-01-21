import React from "react";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import data from "../data";

const Header = () => {
  return (
    <div className="bio">
      <div className="name">
        <h2>{data.title}</h2>
        <h3>{data.role}</h3>
      </div>
      <ul className="details">
        <li>
          <AiOutlineMail /> <a href={`mailto:${data.email}`}>{data.email}</a>
        </li>
        <li>
          <BsPhone /> <p>{data.phone}</p>
        </li>
        <li>
          <AiOutlineGithub />{" "}
          <a href={`${data.github}`} target={"_blank"} rel="noreferrer">
            {data.github}
          </a>
        </li>
        <li>
          <GoLocation /> <p>{data.location}</p>
        </li>
      </ul>
    </div>
  );
};

export default Header;
