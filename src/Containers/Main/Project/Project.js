import React from 'react';
import PropTypes from 'prop-types';
import './Project.css';

function Project({
  title,
  picture,
  description,
  technologies,
  demo,
  source,
  srcSetOne,
  srcSetTwo,
  srcSetThree,
  srcSetFour,
}) {
  let techs = [];
  techs = technologies.map((el) => <li key={el}>{el}</li>);
  return (
    <div className="project">
      <div className="project-description">
        <h3 className="project-title">{title}</h3>
        <div className="description-content">
          <p className="description">{description}</p>
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
        <picture>
          <source media="(max-width:200px)" srcSet={srcSetOne} />
          <source
            media="(min-width: 201px) and (max-width: 500px)"
            srcSet={srcSetTwo}
          />
          <source
            media="(min-width:501px) and(max-width: 695px)"
            srcSet={srcSetThree}
          />
          <source
            media="(min-width:696px) and(max-width: 1000px)"
            srcSet={srcSetFour}
          />

          <img src={picture} alt="" />
        </picture>
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
