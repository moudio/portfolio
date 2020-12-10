import React, { useEffect, useState } from 'react';

import './Header.scss';
import profile from '../../pictures/profile_picture.jpg';

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const handleNavigation = () => {
    const navElement = document.querySelector('.navigation_hamburger__icon');
    if (navElement.classList.contains('open')) {
      navElement.classList.remove('open');
    } else {
      navElement.classList.add('open');
    }
    setShowMobileNav(!showMobileNav);
  };

  return (
    <>
      <header>
        <nav className="navigation" role="navigation">
          <div id="logo" />
          <div className="navigation_hamburger" onClick={handleNavigation}>
            <button className="navigation_hamburger__icon" type="button" />
          </div>
          <ul className="nav-links desktop-nav">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about-me">About</a>
            </li>
          </ul>
          <ul className={`mobile-nav ${showMobileNav ? 'open' : ''}`}>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about-me">About</a>
            </li>
            <li>
              <a href="#about-me">Resume</a>
            </li>
          </ul>
        </nav>
        <div className="hero">
          <div className="profile">
            <img src={profile} alt="" />
          </div>
          <h1>
            Hello, I am
            <span
              className="txt-type"
              data-wait="3000"
              data-words='[" Mouhamadou", " a Developer", " a Creator"]'
            />
          </h1>
        </div>
      </header>
    </>
  );
}
