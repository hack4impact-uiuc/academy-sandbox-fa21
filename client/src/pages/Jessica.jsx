// @flow
import React from 'react';

import '../css/Jessica.css';
// import background from '../utils/images/bg.jpg';
import sushi from '../utils/images/sushi.jpg';
import mic from '../utils/images/mic.PNG';
import badminton from '../utils/images/badminton.PNG';
// import dancing from '../utils/images/dancing.png';
// import yellowstone from '../utils/images/yellowston.png';
// import banff from '../utils/images/banff.png';
// import elephant from '../utils/images/elephant.png';

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
      <div className="gallery">
        <figure className="gallery__item sushi-item">
          <img src={sushi} alt="Sushi" height="400"></img>
        </figure>
        <figure className="gallery__item badminton-item">
          <img src={badminton} alt="Badminton" height="400"></img>
        </figure>
        <figure className="gallery__item mic-item">
          <img src={mic} alt="Mic" height="400"></img>
        </figure>
        <figure className="gallery__item border-item">
          <p>
            <b> Hi! Some things about me: </b>{' '}
          </p>
          <div className="hobbies">
            <ul>
              <li>
                {' '}
                I like singing, dancing, sketching, and paiting{' '}
              </li>
              <li>
                {' '}
                I love sushi{' '}
              </li>
              <li>
                {' '}
                I've done Taekwondo, fencing, badminton, and tennis{' '}
              </li>
              <li>
                {' '}
                I love travelling{' '}
              </li>
            </ul>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default Jessica;
