import React from 'react';

export default function Header() {
  return (
    <>
      <header>
        <nav class="navigation" role="navigation">
          <div id="logo">Logo</div>
          <ul>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div class="hero">
          <h1>
            Hello, I am
            <span
              class="txt-type"
              data-wait="3000"
              data-words='[" Mouhamadou", " a Developer", " a Passionate Learner"]'
            ></span>
          </h1>
          <h2>Welcome To My Website</h2>
        </div>
      </header>
    </>
  );
}
