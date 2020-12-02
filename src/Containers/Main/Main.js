import './Main.css';
import React from 'react';
import Project from './Project/Project';
import About from './About/About';
import Work from './CTA/Work';
import Links from './Links/Links';
import newsweek from '../../pictures/Newsweek.jpg';
import battleship from '../../pictures/Battleship.jpg';
import financeTracker from '../../pictures/Finance.jpg';
import covid from '../../pictures/covid_tracker.png';
import profile from '../../pictures/profile_picture.jpg';
import bookstore from '../../pictures/Bookstore.png';
import appointment from '../../pictures/appointment.jpg';
import hulu from '../../pictures/hulu_clone.jpg';
import * as Pictures from './responsive_pictures';

export default function Main() {
  return (
    <>
      <main>
        <Links />
        <h2>Recent Projects</h2>
        <div id="projects">
          <Project
            title="AppointCar"
            description="An appointment app built with React and Ruby on Rails"
            picture={appointment}
            technologies={[
              'HTML',
              'CSS',
              'JAVASCRIPT',
              'REACT',
              'RUBY ON RAILS',
            ]}
            demo="https://appointcar.netlify.app/"
            source="https://github.com/MouhaDiouf/appointment"
            srcSetOne={Pictures.appointcar588}
          />
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
            title="Hulu Clone"
            description="A Hulu Clone Built With React"
            picture={hulu}
            technologies={['HTML', 'CSS', 'JAVASCRIPT', 'REACT']}
            demo="https://hulu-mo.web.app"
            source="https://github.com/MouhaDiouf/hulu_clone"
          />
          <Project
            title="Covid Tracker"
            description="A Real-Time Covid Cases Tracker"
            picture={covid}
            technologies={['HTML', 'CSS', 'React']}
            demo="https://covid-tracker-mo.netlify.app/"
            source="https://github.com/MouhaDiouf/covid_tracker"
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
            title="Bookstore"
            description="The Bookstore Is The Place To Keep Track Of Read Books and Find Them By Category"
            picture={bookstore}
            technologies={['HTML', 'CSS', 'REACT', 'Redux']}
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
