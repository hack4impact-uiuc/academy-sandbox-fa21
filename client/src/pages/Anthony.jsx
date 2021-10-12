// @flow
import React from 'react';

import '../css/Home.css';
import '../css/Anthony.css';
import anthony from '../utils/images/anthony_cruzmacedo1.jpg';
import meme1 from '../utils/anthony-images/meme1.jpg';
import meme2 from '../utils/anthony-images/meme2.jpg';
import meme3 from '../utils/anthony-images/meme3.jpg';
import meme4 from '../utils/anthony-images/meme4.jpg';
import meme5 from '../utils/anthony-images/meme5.jpg';
import meme6 from '../utils/anthony-images/meme6.jpg';
import meme7 from '../utils/anthony-images/meme7.jpg';
import meme8 from '../utils/anthony-images/meme8.jpg';
import meme9 from '../utils/anthony-images/meme9.jpg';
import meme10 from '../utils/anthony-images/meme10.jpg';
import meme11 from '../utils/anthony-images/meme11.jpg';
import meme12 from '../utils/anthony-images/meme12.jpg';
import meme13 from '../utils/anthony-images/meme13.jpg';
import meme14 from '../utils/anthony-images/meme14.jpg';
import meme15 from '../utils/anthony-images/meme15.jpg';
import meme16 from '../utils/anthony-images/meme16.jpg';
import pic1 from '../utils/anthony-images/pic1.jpg';
import pic2 from '../utils/anthony-images/pic2.jpg';
import pic3 from '../utils/anthony-images/pic3.jpg';
import pic4 from '../utils/anthony-images/pic4.jpg';
import pic5 from '../utils/anthony-images/pic5.jpg';
import pic6 from '../utils/anthony-images/pic6.jpg';
import pic7 from '../utils/anthony-images/pic7.jpg';
import pic8 from '../utils/anthony-images/pic8.jpg';
import pic9 from '../utils/anthony-images/pic9.jpg';
import pic10 from '../utils/anthony-images/pic10.jpg';
import pic11 from '../utils/anthony-images/pic11.jpg';
import pic12 from '../utils/anthony-images/pic12.jpg';
import pic13 from '../utils/anthony-images/pic13.jpg';
import pic14 from '../utils/anthony-images/pic14.jpg';
import pic15 from '../utils/anthony-images/pic15.jpg';
import pic16 from '../utils/anthony-images/pic16.jpg';

function Anthony() {
  return (
    <>
      <body>
        <div className="header">
          <div>
            <img
              className="headshot"
              src={anthony}
              alt="anthony headshot"
              width="200"
              height="200"
            />
          </div>
          <div className="next-to-headshot">
            <div className="name-in-header">
              <h1 className="name-in-header">Anthony Cruz Macedo</h1>
            </div>
            <div>
              <p>
                <a
                  className="link"
                  href="https://www.facebook.com/profile.php?id=100072821919133"
                >
                  Facebook
                </a>{' '}
                <a className="link" href="https://www.instagram.com/saxytony/">
                  {' '}
                  Instagram
                </a>{' '}
                <a
                  className="link"
                  href="https://www.linkedin.com/in/acruzmacedo/"
                >
                  {' '}
                  LinkedIn
                </a>{' '}
                <a
                  className="link"
                  href="https://open.spotify.com/user/3p6e4kte4mf77mujwzlgs6trw?si=b137c414428a4f00"
                >
                  Spotify
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2>About Me</h2>
          <h3 className="about-me-p">
            My name is Anthony and I'm a sophomore at the University of Illinois
            studying Computer Engineering. I am an Academy Member in Hack4Impact
            and on the MemberSHPE Committee in the Society of Hispanic
            Professional Engineers. I am excited to build and develop my skills
            and knowledge during my time at UIUC!
          </h3>
        </div>
        <div className="pictures">
          <h2>Pictures</h2>
          <div className="pictures-content">
            <img className="memes" src={pic1} alt="pic1" />
            <img className="memes" src={pic2} alt="pic2" />
            <img className="memes" src={pic3} alt="pic3" />
            <img className="memes" src={pic4} alt="pic4" />
            <img className="memes" src={pic5} alt="pic5" />
            <img className="memes" src={pic6} alt="pic6" />
            <img className="memes" src={pic7} alt="pic7" />
            <img className="memes" src={pic8} alt="pic8" />
            <img className="memes" src={pic9} alt="pic9" />
            <img className="memes" src={pic10} alt="pic10" />
            <img className="memes" src={pic11} alt="pic11" />
            <img className="memes" src={pic12} alt="pic12" />
            <img className="memes" src={pic13} alt="pic13" />
            <img className="memes" src={pic14} alt="pic14" />
            <img className="memes" src={pic15} alt="pic15" />
            <img className="memes" src={pic16} alt="pic16" />
          </div>
        </div>
        <div className="pictures">
          <h2>Memes</h2>
          <div className="pictures-content">
            <img className="memes" src={meme1} alt="meme1" />
            <img className="memes" src={meme2} alt="meme2" />
            <img className="memes" src={meme3} alt="meme3" />
            <img className="memes" src={meme4} alt="meme4" />
            <img className="memes" src={meme5} alt="meme5" />
            <img className="memes" src={meme6} alt="meme6" />
            <img className="memes" src={meme7} alt="meme7" />
            <img className="memes" src={meme8} alt="meme8" />
            <img className="memes" src={meme9} alt="meme9" />
            <img className="memes" src={meme10} alt="meme10" />
            <img className="memes" src={meme11} alt="meme11" />
            <img className="memes" src={meme12} alt="meme12" />
            <img className="memes" src={meme13} alt="meme13" />
            <img className="memes" src={meme14} alt="meme14" />
            <img className="memes" src={meme15} alt="meme15" />
            <img className="memes" src={meme16} alt="meme16" />
          </div>
        </div>
        <div className="pictures">
          <h2>Videos</h2>
          <div className="videos">
            <iframe
              src="https://www.youtube.com/embed/lJwjvtnma8g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <iframe
              src="https://www.youtube.com/embed/I_bqOK56lu8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <iframe
              src="https://www.youtube.com/embed/nICH48NE6So"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/1H-mxHkBeT8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </body>
    </>
  );
}

export default Anthony;
