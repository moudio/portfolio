import './Main.css';
import React from 'react';
import Project from './Project/Project';
import About from './About/About';
import Work from './CTA/Work';
import Links from './Links/Links';
import newsweek from '../../pictures/Newsweek.jpg';
import blackJack from '../../pictures/Blackjack.jpg';
import calculator from '../../pictures/Calculator.jpg';
import battleship from '../../pictures/Battleship.jpg';
import financeTracker from '../../pictures/Finance.jpg';
import restaurant from '../../pictures/Restaurant.jpg';
import profile from '../../pictures/profile_picture.jpg';
import bookstore from '../../pictures/Bookstore.png';
import * as Pictures from './responsive_pictures';

export default function Main() {
  return (
    <>
      <main>
        <Links />
        <h2>Projects</h2>
        <div id="projects">
          <Project
            title="NewsWeek Replica"
            description="This is a Replica of the popular news blog NewsWeek. Made with HTML & CSS"
            picture={newsweek}
            technologies={['HTML', 'CSS']}
            demo="https://raw.githack.com/MouhaDiouf/newsweek_replica/development/index.html"
            source="https://github.com/MouhaDiouf/newsweek_replica"
            srcSetOne={Pictures.newsweek716}
          />
          <Project
            title="Blackjack Game"
            description="A Simple Simulation of the Blackjack Game"
            picture={blackJack}
            technologies={['HTML', 'CSS', 'JAVASCRIPT']}
            demo="https://mouhadiouf.github.io/BlackJack/"
            source="https://github.com/MouhaDiouf/BlackJack"
          />{' '}
          <Project
            title="React Calculator"
            description="A Simple Calculator Built With React"
            picture={calculator}
            technologies={['HTML', 'CSS', 'JAVASCRIPT', 'REACT']}
            demo="https://mouhadiouf.github.io/react-calculator/"
            source="https://github.com/MouhaDiouf/react-calculator"
          />
          <Project
            title="Battleship Game"
            description="The User Plays Against the Computer in a Battleship Game. The first to find all the ships wins"
            picture={battleship}
            technologies={['HTML', 'CSS', 'Javascript']}
            demo="https://mouhadiouf.github.io/battleship/dist/"
            source="https://github.com/MouhaDiouf/Battleship_JS"
          />
          <Project
            title="Finance Tracker"
            description="A Simple App To Keep Track Of Daily Finance Stocks"
            picture={financeTracker}
            technologies={['HTML', 'CSS', 'Ruby On Rails']}
            demo="https://finance-app-mo.herokuapp.com/"
            source="https://github.com/MouhaDiouf/finance-tracker/"
            srcSetOne={Pictures.finance200}
            srcSetTwo={Pictures.finance574}
            srcSetThree={Pictures.finance836}
            srcSetFour={Pictures.finance1345}
          />
          <Project
            title="Restaurant Page"
            description="A One Page Restaurant Website With Multiple Tabs"
            picture={restaurant}
            technologies={['HTML', 'CSS', 'Javascript', 'Webpack']}
            demo="https://mouhadiouf.github.io/restaurant-page/"
            source="https://github.com/MouhaDiouf/restaurant-page"
            srcSetOne={Pictures.restaurant200}
            srcSetTwo={Pictures.restaurant500}
            srcSetThree={Pictures.restaurant862}
            srcSetFour={Pictures.restaurant1000}
          />
          <Project
            title="Bookstore"
            description="The Bookstore Is The Place To Keep Track Of Read Books and Find Them By Category"
            picture={bookstore}
            technologies={['HTML', 'CSS', 'Redux']}
            demo="https://mouhadiouf.github.io/redux-bookstore/"
            source="https://github.com/MouhaDiouf/redux-bookstore"
            srcSetOne={Pictures.bookstore200}
            srcSetTwo={Pictures.bookstore834}
            srcSetThre={Pictures.bookstore1117}
          />
        </div>
        <About picture={profile} />
        <Work />
      </main>
    </>
  );
}
