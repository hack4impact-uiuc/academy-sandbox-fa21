// @flow
import React from 'react';

import '../css/Jessica.css';
import bg from '../utils/images/bg.jpg';
import sushi from '../utils/images/sushi.jpg';
import mic from '../utils/images/mic.PNG';
import bm from '../utils/images/badminton.PNG';

function Jessica() {
  return (
    <div className="main">
      <img src={bg} alt="Mount Rainier" width="100%" height="400"></img>

      <div className="name"> Jessica Singh </div>
      <h2>H4i Academy Member and Freshman in CS</h2>
      <div className="container">
        <div className="image">
          <img src={sushi} alt="Sushi" height="400"></img>
        </div>
        <div className="image3">
          <img src={bm} alt="Badminton" height="400"></img>
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
        <div className="image2">
          <img src={mic} alt="Mic" height="400"></img>
        </div>
      </div>
    </div>
  );
}

export default Jessica;
