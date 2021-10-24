import React from "react";
import { useState } from "react";
import "./project.css";
import "./card.css";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const Cards = ({ name, description, repolink, deploylink }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="accordion-item projectCardDiv">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          {!isActive && (
            <div className="card-titleDiv">
              <h2 className="card-title h2">{name}</h2>
            </div>
          )}
          {isActive && (
            <div className="card-titleDiv">
              <h2 className="card-title active h2">{name}</h2>
            </div>
          )}
          <div className="card-sign">
            {isActive ? <p className="sign">-</p> : <p className="sign">+</p>}
          </div>
        </div>
        {isActive && (
          <div className="accordion-content">
            <p className="card-text">{description}</p>
            <span className="mt-auto">
              <a
                className="github-icon"
                href={repolink}
                target="_blank"
                title="Repository"
                style={{ margin: "10px 15px 10px 15px" }}
              >
                <AiOutlineGithub className="git-icon" />
              </a>
              <a
                className="github-icon"
                href={deploylink}
                target="_blank"
                title="Repository"
                style={{ margin: "10px 15px 10px 15px" }}
              >
                <FiExternalLink class="link-icon" />
              </a>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
