import React from 'react';
import PropTypes from 'prop-types';
import './About.css';
import { FaReact, FaJsSquare } from 'react-icons/fa';
import { DiRuby, DiRor, DiHtml5, DiCss3 } from 'react-icons/di';

function About({ picture }) {
  return (
    <>
      <h2>About Me</h2>

      <div id="about-me">
        <div className="picture">
          <img src={picture} alt="Profile" />
        </div>
        <div className="text">
          Hello! My name is Mouhamadou and I have a passion for building new
          things through technology. As a software developer, I enjoy learning
          new things everyday and helping people make their ideas concrete.
        </div>
        <div className="technologies">
          <span className="specialize-text">
            I specialize in the following technologies:
          </span>
          <div className="technologies-div">
            <DiHtml5 />
            <DiCss3 />
            <FaReact />
            <FaJsSquare />
            <DiRuby />
            <DiRor />
          </div>
        </div>
      </div>
    </>
  );
}
About.propTypes = {
  picture: PropTypes.string.isRequired,
};

export default About;
