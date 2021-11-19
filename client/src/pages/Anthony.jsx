// @flow
import React from 'react';
import '../css/Anthony.css';

import anthony from '../utils/images/anthony_cruzmacedo1.jpg';
import meme1 from '../utils/anthony-utils/meme1.jpg';
import meme2 from '../utils/anthony-utils/meme2.jpg';
import meme3 from '../utils/anthony-utils/meme3.jpg';
import meme4 from '../utils/anthony-utils/meme4.jpg';
import meme5 from '../utils/anthony-utils/meme5.jpg';
import meme6 from '../utils/anthony-utils/meme6.jpg';
import meme7 from '../utils/anthony-utils/meme7.jpg';
import meme8 from '../utils/anthony-utils/meme8.jpg';
import meme9 from '../utils/anthony-utils/meme9.jpg';
import meme10 from '../utils/anthony-utils/meme10.jpg';
import meme11 from '../utils/anthony-utils/meme11.jpg';
import meme12 from '../utils/anthony-utils/meme12.jpg';
import meme13 from '../utils/anthony-utils/meme13.jpg';
import meme14 from '../utils/anthony-utils/meme14.jpg';
import meme15 from '../utils/anthony-utils/meme15.jpg';
import meme16 from '../utils/anthony-utils/meme16.jpg';
import pic1 from '../utils/anthony-utils/pic1.jpg';
import pic2 from '../utils/anthony-utils/pic2.jpg';
import pic3 from '../utils/anthony-utils/pic3.jpg';
import pic4 from '../utils/anthony-utils/pic4.jpg';
import pic5 from '../utils/anthony-utils/pic5.jpg';
import pic6 from '../utils/anthony-utils/pic6.jpg';
import pic7 from '../utils/anthony-utils/pic7.jpg';
import pic8 from '../utils/anthony-utils/pic8.jpg';
import pic9 from '../utils/anthony-utils/pic9.jpg';
import pic10 from '../utils/anthony-utils/pic10.jpg';
import pic11 from '../utils/anthony-utils/pic11.jpg';
import pic12 from '../utils/anthony-utils/pic12.jpg';
import pic13 from '../utils/anthony-utils/pic13.jpg';
import pic14 from '../utils/anthony-utils/pic14.jpg';
import pic15 from '../utils/anthony-utils/pic15.jpg';
import pic16 from '../utils/anthony-utils/pic16.jpg';
import AnthonyGrid from '../utils/anthony-utils/AnthonyGrid';

function Anthony() {
  const images = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
    pic12,
    pic13,
    pic14,
    pic15,
    pic16,
  ];
  const memes = [
    meme1,
    meme2,
    meme3,
    meme4,
    meme5,
    meme6,
    meme7,
    meme8,
    meme9,
    meme10,
    meme11,
    meme12,
    meme13,
    meme14,
    meme15,
    meme16,
  ];

  return (
    <div>
      <div className="anthony-header">
        <div>
          <img
            className="anthony-headshot"
            src={anthony}
            alt="anthony headshot"
            width="175"
            height="175"
          />
        </div>
        <div className="anthony-header-content">
          <div className="name-in-header">
            <h1 className="name-in-header">Anthony Cruz Macedo</h1>
          </div>
          <div>
            <p>
              <a
                className="anthony-link"
                href="https://www.facebook.com/profile.php?id=100072821919133"
              >
                Facebook
              </a>{' '}
              <a
                className="anthony-link"
                href="https://www.instagram.com/saxytony/"
              >
                {' '}
                Instagram
              </a>{' '}
              <a
                className="anthony-link"
                href="https://www.linkedin.com/in/acruzmacedo/"
              >
                {' '}
                LinkedIn
              </a>{' '}
              <a
                className="anthony-link"
                href="https://open.spotify.com/user/3p6e4kte4mf77mujwzlgs6trw?si=b137c414428a4f00"
              >
                Spotify
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="under-header">
        <div>
          <h2 className="anthony-h2">About Me</h2>
          <h3 className="about-me-p">
            My name is Anthony and I'm a sophomore at the University of Illinois
            studying Computer Engineering. I am an Academy Member in Hack4Impact
            and on the MemberSHPE Committee in the Society of Hispanic
            Professional Engineers. I am excited to build and develop my skills
            and knowledge during my time at UIUC!
          </h3>
        </div>
        <div className="pictures">
          <h2 className="anthony-h2">Pictures</h2>
          <div className="pictures-content">
            <AnthonyGrid ImagesArray={images} />
          </div>
        </div>
        <div className="pictures">
          <h2 className="anthony-h2">Memes</h2>
          <div className="pictures-content">
            <AnthonyGrid ImagesArray={memes} />
          </div>
        </div>
        <div>
          <h2 className="anthony-h2">Videos</h2>
          <div className="anthony-videos-container">
            <iframe
              className="anthony-videos"
              src="https://www.youtube.com/embed/lJwjvtnma8g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <iframe
              className="anthony-videos"
              src="https://www.youtube.com/embed/I_bqOK56lu8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <iframe
              className="anthony-videos"
              src="https://www.youtube.com/embed/nICH48NE6So"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="anthony-videos"
              src="https://www.youtube.com/embed/1H-mxHkBeT8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anthony;
