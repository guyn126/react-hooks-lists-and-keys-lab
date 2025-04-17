import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const renderProjects = projects.map((obj) => {
    return (
      <div key={obj.id}>
        <ProjectItem
          key={obj.id}
          name={obj.name}
          about={obj.about}
          technologies={obj.technologies}
        />
      </div>
    );
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{renderProjects}</div>
    </div>
  );
}

export default ProjectList;