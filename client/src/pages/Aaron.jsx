// @flow
import React from 'react';

import '../css/Aaron.css';

function Aaron() {
  return (
    <>
      <div className="animated">
        <div className="main-header">
          <img
          src="https://i.imgur.com/GyqsEtg.jpg?1"
          alt="Me!"
          className="header-image"
          />
       <h1 className="name">Aaron Alexander</h1>
       <h2 className="subtext">h4i academy member | future software developer | uiuc student</h2>
       <hr className="cool-hr"></hr>
       <ul className="nav">
       <li className="navbar"><a href="https://www.linkedin.com/in/aaron-alexander-735328198/" className="cool-link">linkedin</a></li> <span className="button">•</span>
       <li className="navbar"><a href="https://github.com/AaronAlexander-debug" className="cool-link">github</a></li> <span className="button">•</span>
       <li className="navbar"><a href="https://docs.google.com/document/d/1lEKDekVVReZomR9c-3moQASVCpmsuOkb3UQ1ziedIDU/edit?usp=sharing" className="cool-link">resume</a></li> <span className="button">•</span>
       <li className="navbar"><a href="https://www.instagram.com/thereal.aaronalexander/" className="cool-link">instagram</a></li>
       </ul>
       </div>
       <hr className="cool-hr"></hr>
       <p className="cool-intro">Welcome to my personal website! I am Aaron Alexander, a freshman studying computer science at the University of Illinois at Urbana-Champaign and a proud Academy Member at Hack4Impact. So so so excited to start my journey in software development at such a great school!</p>
      </div>
    </>
  );
}

export default Aaron;
