// @flow
import React from 'react';

import '../css/Jessica.css';
import sushi from '../utils/images/jessica-pics/sushi.jpg';
import reindeer from '../utils/images/jessica-pics/reindeer.jpg';
import taekwondo from '../utils/images/jessica-pics/taekwondo.jpg';
import pasta from '../utils/images/jessica-pics/pasta.jpg';
import badminton from '../utils/images/jessica-pics/badminton.PNG';
import dancing from '../utils/images/jessica-pics/dancing.jpg';
import sketching from '../utils/images/jessica-pics/sketching.jpg';
import fencing from '../utils/images/jessica-pics/fencing.jpg';
import yellowstone from '../utils/images/jessica-pics/yellowstone.png';
import banff from '../utils/images/jessica-pics/banff.png';
import elephant from '../utils/images/jessica-pics/elephant.png';
import gyro from '../utils/images/jessica-pics/gyro.jpeg';
import tandoori from '../utils/images/jessica-pics/tandoori.jpg';

import JessicaSection from './JessicaSection';

function Jessica() {
  return (
    <div className="main">
      <div className="jessica-header">
        <div className="fullname">Jessica Singh</div>\
        <a
          href="https://www.linkedin.com/in/jessica-singh-5a2188216/"
          className="links"
        >
          LinkedIn
        </a>
        <a href="https://www.instagram.com/jessicasingh_7/" className="links">
          Instagram
        </a>
      </div>
      <div className="introduction">
        <h2>H4i Academy Member and Freshman in CS</h2>
      </div>
      <JessicaSection
        title="nature-esque"
        imgs={[banff, reindeer, yellowstone]}
      />
      <JessicaSection
        title="favorite cuisines"
        imgs={[pasta, gyro, sushi, tandoori]}
      />
      <JessicaSection title="hobbies" imgs={[dancing, sketching, elephant]} />
      <JessicaSection title="sports" imgs={[badminton, fencing, taekwondo]} />
    </div>
  );
}

export default Jessica;
