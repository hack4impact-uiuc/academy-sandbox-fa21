// @flow
import React from 'react';

import '../css/Eesha.css';
import appa from '../utils/images/eesha-img/appa-flying.gif';
import sun from '../utils/images/eesha-img/sun.svg';
import asc from '../utils/images/eesha-img/ascendent.svg';
import moon from '../utils/images/eesha-img/moon.svg';
import mer from '../utils/images/eesha-img/mercury.svg';
import ven from '../utils/images/eesha-img/venus.svg';
import mar from '../utils/images/eesha-img/mars.svg';
import jup from '../utils/images/eesha-img/jupiter.svg';
import sat from '../utils/images/eesha-img/saturn.svg';
import ur from '../utils/images/eesha-img/uranus.svg';
//import strength from '../utils/images/eesha-img/strength.jpg';
//import devil from '../utils/images/eesha-img/devil.jpg';
import eightwands from '../utils/images/eesha-img/8wands.jpg';
import chariot from '../utils/images/eesha-img/chariot.jpg';
import fourswords from '../utils/images/eesha-img/4swords.jpg';
import sixwands from '../utils/images/eesha-img/6wands.jpg';
import fourcups from '../utils/images/eesha-img/4cups.jpg';
import fiveswords from '../utils/images/eesha-img/5swords.jpg';
import blocked from '../utils/images/eesha-img/blocked.png';
import lovers from '../utils/images/eesha-img/lovers.jpg';
import tower from '../utils/images/eesha-img/tower.jpg';

function Eesha() {
  return (
    <>
      <div className="banner">
        <div>
          <h1 className="eesha-title"> eesha meets world.</h1>
          <h4 className="eesha-text"> eesha barua || academy member || fall 2021</h4>
          <h3 className="eesha-text"> <i> ~ blue skies in, gray skies out ~ </i> </h3>
        </div>  
      </div>
      
      <img src={appa} alt="appa flying" className="icon"></img>

      <div className="callout">
        <div className="callout-header">my star chart</div>
        <div className="callout-container">
          <p className="eesha-text-unpadded">i was born at 11.08 pm, december 15, 2002, which means: </p>
        </div>
      </div>

      <div className="flex-grid-container">
        <div className="grid-one">
          <img src={sun} alt="sun-sign" />
          <p className="eesha-sign-chart-h1">sun || sagittarius || 24°1'37"</p>
          <p className="eesha-sign-chart-h2">i have strong ideas about meaning and what's right or wrong.</p>
          <p className="eesha-sign-chart-h2">i live to be free, and to learn.</p>
        </div>

        <div className="grid-two">
          <img src={asc} alt="asc-sign" />
          <p className="eesha-sign-chart-h1">ascendent || virgo || 11°45'54"</p>
          <p className="eesha-sign-chart-h2">i am precise, diligent, peace-seeking, and organized.</p>
          <p className="eesha-sign-chart-h2">i may seem a bit too attached to work, details, and the pursuit of perfection.</p>
        </div>

        <div className="grid-three">
          <img src={moon} alt="moon-sign" />
          <p className="eesha-sign-chart-h1">moon || taurus || 13°6'26"</p>
          <p className="eesha-sign-chart-h2">i am deeply loyal to the people i care about.</p>
          <p className="eesha-sign-chart-h2">i often feel powerless to fix messy situations.</p>
        </div>

        <div className="grid-four">
          <img src={mer} alt="mer-sign" />
          <p className="eesha-sign-chart-h1">mercury || capricorn || 10°59'53"</p>
          <p className="eesha-sign-chart-h2">i tend to be a poor communicator (oops).</p>
          <p className="eesha-sign-chart-h2">i am curious about and inclined to analyze my love life, happiness, and creative projects.</p>
        </div>

        <div className="grid-five">
          <img src={ven} alt="ven-sign" />
          <p className="eesha-sign-chart-h1">venus || scorpio || 10°20'31"</p>
          <p className="eesha-sign-chart-h2">my romantic side is mysterious, passionate, and seductive..</p>
          <p className="eesha-sign-chart-h2">aaaand that's enough of that.</p>
        </div>

        <div className="grid-six">
          <img src={mar} alt="mar-sign" />
          <p className="eesha-sign-chart-h1">mars || scorpio || 9°22'46"</p>
          <p className="eesha-sign-chart-h2">i assert myself in a way that is serious and incisive.</p>
          <p className="eesha-sign-chart-h2">once i decide i want to do something, i don't hold back.</p>
        </div>

        <div className="grid-seven">
          <img src={jup} alt="jup-sign" />
          <p className="eesha-sign-chart-h1">jupiter || leo || 17°52'53"</p>
          <p className="eesha-sign-chart-h2">i grow and find understanding through magnanimity, inspiring confidence, thinking big, and feeling good about myself.</p>
        </div>

        <div className="grid-eight">
          <img src={sat} alt="sat-sign" />
          <p className="eesha-sign-chart-h1">saturn || gemini || 25°43'34"</p>
          <p className="eesha-sign-chart-h2">i struggle with a lack of focus, restless energy, and getting bored easily.</p>
          <p className="eesha-sign-chart-h2">no i don't.</p>
        </div>

        <div className="grid-nine">
          <img src={ur} alt="ur-sign" />
          <p className="eesha-sign-chart-h1">uranus || aquarius || 25°38'59"</p>
          <p className="eesha-sign-chart-h2">other generations are shocked by our generation's unconventionality, intellectuality, and detachedness.</p>
          <p className="eesha-sign-chart-h2">is this true, h4i?</p>
        </div>
      </div>

      <div className="callout">
        <div className="callout-header">my celtic spread</div>
        <div className="callout-container">
          <p className="eesha-text-unpadded">from my latest reading </p>
        </div>
      </div>

      <div className="flex-grid-container-cards">
        <div className="grid-4">
          <img src={eightwands} alt="8 of wands" />
        </div>

        <div className="grid-6">
          <img src={chariot} alt="the chariot" />
        </div>

        <div className="grid-8">
          <img src={fourswords} alt="4 of swords" />
        </div>

        <div className="grid-9">
          <img src={sixwands} alt="6 of wands" />
        </div>

        <div className="grid-10">
          <img src={blocked} alt="blocked" />
        </div>

        <div className="grid-11">
          <img src={fourcups} alt="4 of cups" />
        </div>

        <div className="grid-12">
          <img src={fiveswords} alt="5 of swords" />
        </div>

        <div className="grid-14">
          <img src={lovers} alt="lovers" />
        </div>

        <div className="grid-16">
          <img src={tower} alt="tower" />
        </div>
      </div>

      <div className="callout">
        <div className="callout-header">my MBTI</div>
        <div className="callout-container">
          <p className="eesha-text-unpadded">i am a protagonist (ENFJ) ! which means: </p>
        </div>
      </div>

      <div className="callout">
        <div className="callout-header">my hogwarts house</div>
        <div className="callout-container">
          <p className="eesha-text-unpadded">i am a: ravenclaw with a beagle patronus and a ___ wand: </p>
        </div>
      </div>

      <div className="callout">
        <div className="callout-header">my Pottermore</div>
        <div className="callout-container">
          <p className="eesha-text-unpadded">i am a: ravenclaw with a beagle patronus and a ___ wand: </p>
        </div>
      </div>

    </>
  );
}

export default Eesha;