// @flow
import React from 'react';

import '../css/Ellie.css';
import Img1 from '../utils/images/estrella2_popoca.jpg';
import Img2 from '../utils/images/estrella3.jpg';
import Img3 from '../utils/images/estrella4.jpg';

function Ellie() {
  return (
    <div className="mainframe">
      <div className="welcome">
        <div className="picture">
          <img id="home-picture" src={Img1} alt="" />

          <div className="text">
            <h3>Estrella Popoca</h3>
            <h6>
              <a href="https://www.instagram.com/ehllieio/">
                &#9735; instagram
              </a>
              <br />
              <a href="https://read.cv/ellie"> &#9735; cv</a>
              <br />
            </h6>
          </div>
        </div>
      </div>

      <div className="about-me">
        <p className="abme-text">
          &#9733; Hello! My name is Estrella Popoca! &#9733; <br />
          <br />
          I'm a freshman @ UIUC pursuing Computer Engineering, <br />
          and welcome aboard to my adventures here as a future engineer! <br />
          <br />
          I like to hang out with friends, watch thriller shows, and percy
          jackson!
          <br />
          <br />
          My philosophy: Never turning down a friendhsip.
          <br />
          <br />I love rice. Any rice.{' '}
        </p>
        <br />
        <br />

        <img className="web-picture" src={Img2} alt="" />
        <img className="web-picture" src={Img3} alt="" />
      </div>
    </div>
  );
}

export default Ellie;
