// @flow
import React from 'react';

import '../css/Grace.css';
import GraceVideo from '../pages/GraceVideo.jsx';
import GraceLink from '../pages/GraceLink.jsx';

function Grace() {
  return (
    <>
      <div className="banner">
        <img
          src="https://images8.alphacoders.com/685/685929.png"
          alt="Mushishi Wallpaper"
          id="mushishi_wallpaper"
        />
        <div className="header"> Grace Zhang </div>
        <div className="intro"> Hello! I'm Grace, a freshman in CS. </div>
        <div className="links">
          <GraceLink link={"mailto: gracewz2@illinois.edu"} description={"Email:gracewz2@illinois.edu"} />
          <GraceLink link={"tel:408-658-5025"} description={"Phone: 408-658-6025"} />
          <GraceLink link={"https://www.linkedin.com/in/grace-w-zhang/"} description={"LinkedIn"} />
          <GraceLink link={"https://www.facebook.com/drowsynights/"} description={"Facebook"} />
          <GraceLink link={"https://www.instagram.com/dreamsinparadise/"} description={"Instagram"}/>
        </div>
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
            <li>
              {' '}
              I wake up at 6:30 every morning (by choice, even during the
              weekend~){' '}
            </li>
            <li> 120+ games installed on my phone at the moment </li>
            <li> FAR's dining hall (rip) &gt; PAR &gt;&gt;&gt; ISR </li>
          </ul>
        </div>
        <div className="right">
          <h2> Pursuits </h2>
          <ul>
            <li> Badminton! I'm still a beginner though </li>
            <li>
              {' '}
              Learning{' '}
              <a
                href="https://www.youtube.com/watch?v=lg4i5xCMJpI"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Studio Ghibli songs
              </a>{' '}
              on the piano (my favorite is{' '}
              <a
                href="https://youtu.be/lg4i5xCMJpI?t=152"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Princess Mononke's theme song
              </a>
              ){' '}
            </li>
            <li>
              {' '}
              Determined to get back into reading. Just started{' '}
              <i>The Light Between Oceans</i> and it's super good so far~{' '}
            </li>
            <li>
              {' '}
              Goal: eat at every restaurant here by the end of the school year{' '}
            </li>
          </ul>
        </div>
      </div>
      <div></div>
      <div className="divider"></div>
      <div className="videos">
        <GraceVideo url={'https://www.youtube.com/embed/ThE2Ap9RPz8'} />
        <GraceVideo url={'https://www.youtube.com/embed/gLDSU36nNls'} />
        <GraceVideo url={'https://www.youtube.com/embed/ZWT9K5rRmv0'} />
        <GraceVideo
          url={'https://www.youtube.com/embed/8bR1glLPtaY?start=18'}
        />
      </div>
    </>
  );
}
export default Grace;
