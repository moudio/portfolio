import React from 'react';
import './Project.css';
function Project({ title, picture, description, technologies, demo, source }) {
  let techs = [];
  techs = technologies.map((el, index) => {
    return <li>{el}</li>;
  });
  console.log(techs);
  return (
    <div className="project">
      <div className="project-description">
        <h3 className="project-title">{title}</h3>
        <div className="description-content">
          <p>{description}</p>
          <div className="technologies">
            <ul>{techs}</ul>
          </div>
          <div className="links">
            <div className="demo">
              <a href={demo} target="_blank" rel="noopener noreferrer">
                View Demo
              </a>
            </div>
            <div className="source">
              <a href={source} target="_blank" rel="noopener noreferrer">
                View Source
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="project-picture">
        <img src={picture} alt="" />
      </div>
    </div>
  );
}

export default Project;
