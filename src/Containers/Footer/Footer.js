import React from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';
import { FaTwitter, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <a href="https://twitter.com/mouhamadiouf">
          <FaTwitter />
        </a>
        <a href="https://github.com/MouhaDiouf">
          <FaGithub />
        </a>
        <a href="http://https://www.linkedin.com/in/mouha-diouf">
          <FaLinkedin />
        </a>
      </div>
      <div className="footer-text">
        <p>
          Made with <FaHeart className="heart" /> using ReactJS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
