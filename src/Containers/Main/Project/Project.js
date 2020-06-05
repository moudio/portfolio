import React from 'react';
import PropTypes from 'prop-types';
import './Project.css';

function Project({
  title, picture, description, technologies, demo, source,
}) {
  let techs = [];
  techs = technologies.map(el => <li key={el}>{el}</li>);
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

Project.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.instanceOf(Array).isRequired,
  demo: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};
