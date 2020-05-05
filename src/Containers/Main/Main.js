import './Main.css';
import React from 'react';
import Project from './Project/Project';
import About from '../Main/About/About';
import Work from '../Main/CTA/Work';
import newsweek from '../../pictures/Newsweek.jpg';
import blackJack from '../../pictures/Blackjack.jpg';
import calculator from '../../pictures/Calculator.jpg';
import battleship from '../../pictures/Battleship.jpg';
import financeTracker from '../../pictures/Finance.jpg';
import restaurant from '../../pictures/Restaurant.png';
import profile from '../../pictures/profile.jpg';
import bookstore from '../../pictures/Bookstore.png';

export default function Main() {
  return (
    <>
      <main>
        <h2>Projects</h2>
        <div id="projects">
          <Project
            title="NewsWeek Replica"
            description="This is a Replica of the popular news blog NewsWeek. Made with HTML & CSS"
            picture={newsweek}
            technologies={['HTML', 'CSS']}
            demo="https://raw.githack.com/MouhaDiouf/newsweek_replica/development/index.html"
            source="https://github.com/MouhaDiouf/newsweek_replica"
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
            demo="https://mouhadiouf.github.io/react_calculator/"
            source="https://github.com/MouhaDiouf/react_calculator"
          />
          <Project
            title="Battleship Game"
            description="The User Plays Against the Computer in a Battleship Game. The first to find all the ships wins"
            picture={battleship}
            technologies={['HTML', 'CSS', 'Javascript']}
            demo="https://mouhadiouf.github.io/Battleship_JS/dist/"
            source="https://github.com/MouhaDiouf/Battleship_JS"
          />
          <Project
            title="Finance Tracker"
            description="A Simple App To Keep Track Of Daily Finance Stocks"
            picture={financeTracker}
            technologies={['HTML', 'CSS', 'Ruby On Rails']}
            demo="https://finance-app-mo.herokuapp.com/"
            source="https://github.com/MouhaDiouf/finance-tracker/"
          />
          <Project
            title="Restaurant Page"
            description="A One Page Restaurant Website With Multiple Tabs"
            picture={restaurant}
            technologies={['HTML', 'CSS', 'Javascript', 'Webpack']}
            demo="https://mouhadiouf.github.io/restaurant-page/"
            source="https://github.com/MouhaDiouf/restaurant-page"
          />
          <Project
            title="Bookstore"
            description="The Bookstore Is The Place To Keep Track Of Read Books and Find Them By Category"
            picture={bookstore}
            technologies={['HTML', 'CSS', 'Redux']}
            demo="https://mouhadiouf.github.io/redux-bookstore/"
            source="https://github.com/MouhaDiouf/redux-bookstore"
          />
        </div>
        <About picture={profile} />
        <Work />
      </main>
    </>
  );
}
