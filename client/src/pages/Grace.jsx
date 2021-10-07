// @flow
import React from 'react';

import '../css/Grace.css';

function Grace() {
  return (
    <>
      <div className="banner">
        <img
          src="https://images8.alphacoders.com/685/685929.png"
          alt="Mushishi Wallpaper"
          id="mushishi_wallpaper"
        />
        <div className="header"> ~ Grace Zhang ~ </div>
        <div className="intro"> Hello! I'm Grace, a freshman in CS. </div>
      </div>
      <div className="divider"></div>
      <div className="facts">
        <div className="left">
          <h2> Random Facts </h2>
          <ul>
            <li>
              {' '}
              Currently maintaining 8 boxes of cheerios in my dorm at all times{' '}
            </li>
            <li> I wake up at 6:30 every morning (by choice~) </li>
            <li> 120+ games installed on my phone at the moment T_T </li>
            <li> FAR's dining hall &gt; PAR &gt;&gt;&gt; ISR </li>
          </ul>
        </div>
        <div className="right">
          <h2> Pursuits </h2>
          <ul>
            <li> Badminton! I'm still a beginner though </li>
            <li>
              {' '}
              Learning Studio Ghibli songs on the piano (my favorite is Princess
              Mononke's theme song){' '}
            </li>
            <li>
              {' '}
              Determined to get back into reading. Just waiting for Grainger to
              process my book requests T_T{' '}
            </li>
            <li>
              {' '}
              Goal: eat at every restaurant here by the end of the school year~{' '}
            </li>
          </ul>
        </div>
      </div>
      <div className="subheading">
        <h2> ??? </h2>
      </div>
      <div className="videos">
        <iframe
          width="450"
          height="250"
          src="https://www.youtube.com/embed/ThE2Ap9RPz8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="450"
          height="250"
          src="https://www.youtube.com/embed/gLDSU36nNls"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="450"
          height="250"
          src="https://www.youtube.com/embed/ZWT9K5rRmv0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="450"
          height="250"
          src="https://www.youtube.com/embed/8bR1glLPtaY?start=18"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
export default Grace;
