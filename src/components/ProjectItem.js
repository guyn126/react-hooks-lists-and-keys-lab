import React from "react";

function ProjectItem({ name, about, technologies }) {
  const showTech = technologies.map((obj, index) => {
    return <span key={index}>{obj}</span>;
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{showTech}</div>
    </div>
  );
}

export default ProjectItem;