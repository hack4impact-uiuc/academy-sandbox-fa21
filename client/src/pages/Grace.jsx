// @flow
import React from 'react';

import '../css/Grace.css';
import GraceVideo from '../pages/GraceVideo.jsx';

import GraceProfileLink from './GraceProfileLink.jsx';

function Grace() {
  const profile_links = [
    {
      url: 'mailto: gracewz2@illinois.edu',
      description: 'Email:gracewz2@illinois.edu',
    },
    { url: 'tel:408-658-5025', description: 'Phone: 408-658-6025' },
    {
      url: 'https://www.linkedin.com/in/grace-w-zhang/',
      description: 'LinkedIn',
    },
    { url: 'https://www.facebook.com/drowsynights/', description: 'Facebook' },
    {
      url: 'https://www.instagram.com/dreamsinparadise/',
      description: 'Instagram',
    },
  ];

  const videos = [
    'https://www.youtube.com/embed/ThE2Ap9RPz8',
    'https://www.youtube.com/embed/gLDSU36nNls',
    'https://www.youtube.com/embed/ZWT9K5rRmv0',
    'https://www.youtube.com/embed/8bR1glLPtaY?start=18',
  ];

  return (
    <>
      <div className="gz-banner">
        <img
          src="https://images8.alphacoders.com/685/685929.png"
          alt="Mushishi Wallpaper"
          id="gz-wallpaper"
        />
        <div className="gz-title"> Grace Zhang </div>
        <div className="gz-intro"> Hello! I'm Grace, a freshman in CS. </div>
        <div className="gz-profile-links">
          {profile_links.map((link, i) => (
            <GraceProfileLink
              key={i}
              url={link.url}
              description={link.description}
            />
          ))}
        </div>
      </div>
      <div className="gz-divider" />
      <div className="gz-facts">
        <div className="gz-facts-left">
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
        <div className="gz-facts-right">
          <h2> Pursuits </h2>
          <ul>
            <li> Badminton! I'm still a beginner though </li>
            <li>
              {' '}
              Learning{' '}
              <a
                href="https://www.youtube.com/watch?v=lg4i5xCMJpI"
                className="gz-link"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Studio Ghibli songs
              </a>{' '}
              on the piano (my favorite is{' '}
              <a
                href="https://youtu.be/lg4i5xCMJpI?t=152"
                className="gz-link"
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
      <div className="gz-divider" />
      <div className="gz-videos">
        {videos.map((link, i) => (
          <GraceVideo key={i} url={link} />
        ))}
      </div>
    </>
  );
}
export default Grace;
