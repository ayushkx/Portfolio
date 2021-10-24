import React from "react";
import { useState } from "react";
import "./project.css";
import projects from "./data/data.js";
import Cards from "./Cards.js";

// function createCard(project) {
//   return (
//     <Cards
//       name={project.name}
//       description={project.description}
//       repolink={project.repolink}
//       deploylink={project.deploylink}
//       img={project.id}
//     />
//   );
// }

export default function Project() {
  return (
    // <div id="project">
    //   <h2 style={{ textAlign: "center" }}>Projects</h2>
    //   <div className="fcontainer ">{projects.map(createCard)}</div>
    // </div>

    <React.Fragment>
      <div className="accordion">
        {projects.map(({ name, description, repolink, deploylink }) => (
          <Cards
            name={name}
            description={description}
            repolink={repolink}
            deploylink={deploylink}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
