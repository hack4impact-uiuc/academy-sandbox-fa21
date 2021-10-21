// @flow
import React from 'react';

import '../css/Jessica.css';
// import background from '../utils/images/bg.jpg';
import sushi from '../utils/images/sushi.jpg';
import mic from '../utils/images/mic.PNG';
import badminton from '../utils/images/badminton.PNG';

function Jessica() {
  return (
    <div className="main">
      <div className="header">
        {/* <img src={background} alt="Mount Rainier" width="100%" height="400"></img> */}
        <div className="fullname">
          <h1>Jessica Singh</h1>
        </div>
      </div>
      <div className="introduction">
        <h2>H4i Academy Member and Freshman in CS</h2>
      </div>
      <div className="jessica-content">
        <div className="sushi-image">
          <img src={sushi} alt="Sushi" height="400"></img>
        </div>
        <div className="badminton-image">
          <img src={badminton} alt="Badminton" height="400"></img>
        </div>
        <div className="border">
          <p>
            <b> Hi! Some things about me: </b>{' '}
          </p>
          <div className="hobbies">
            <ul>
              <li>
                {' '}
                I've been learning Hindustani Classical since 3rd grade and I
                was in choir{' '}
              </li>
              <li>
                {' '}
                My favorite cuisines are Japanese, Thai, Greek, Peruvian, etc.{' '}
              </li>
              <li>
                {' '}
                I've done Taekwondo, fencing, badminton, and tennis for a while{' '}
              </li>
              <li>
                {' '}
                I've lived in Michigan, North Carolina, India, and Washington{' '}
              </li>
            </ul>
          </div>
        </div>
        <div className="mic-image">
          <img src={mic} alt="Mic" height="400"></img>
        </div>
      </div>
    </div>
  );
}

export default Jessica;
