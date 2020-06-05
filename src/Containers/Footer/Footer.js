import React from 'react';
import './Footer.css';
import { FaTwitter, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <a
          href="https://twitter.com/mouhamadiouf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/MouhaDiouf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mouha-diouf/"
          target="_blank"
          rel="noopener noreferrer"
        >
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
