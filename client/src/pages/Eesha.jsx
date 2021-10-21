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
import deviloverstrength from '../utils/images/eesha-img/devil over strength.png';
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
          <div className="tooltip">
            <img src={eightwands} alt="8 of wands" />
            <span className="tooltiptext">
              <div className="card-callout">
                <div className="card-callout-header">10 || outcome || the 8 of wands</div>
                <div className="card-callout-container">
                  <p className="eesha-card-text"><b>position</b> representative of where the situation is headed and if/how the issue will be resolved</p>
                  <p className="eesha-card-text"><b>meaning</b> rapid action, movement, quick decisions</p>
                  <p className="eesha-card-text">perhaps important news will be coming on 
                  your way, and you may experience a sudden, yet steady positive growth. </p>
                </div>
              </div>
            </span>
          </div>
        </div>
        
        <div className="grid-6">
          <div className="tooltip">
            <img src={chariot} alt="the chariot" />
            <span className="tooltiptext">
              <div className="card-callout">
                <div className="card-callout-header">5 || above || the chariot</div>
                <div className="card-callout-container">
                  <p className="eesha-card-text"><b>position</b> reflects the querent’s goal, aspiration or best outcome with regards to the situation</p>
                  <p className="eesha-card-text"><b>meaning</b> success, ambition, determination, willpower, control, self-discipline, focus</p>
                  <p className="eesha-card-text">you should pursue the plan with a structured and ordered approach. </p>
                </div>
              </div>
            </span>
          </div>
        </div>

        <div className="grid-8">
          <div className="tooltip">
            <img src={fourswords} alt="4 of swords" />
            <span className="tooltiptext">
              <div className="card-callout">
                <div className="card-callout-header">9 || hopes and/or fears || four of swords</div>
                <div className="card-callout-container">
                  <p className="eesha-card-text"><b>position</b> hopes and fears are closely intertwined, therefore that which we hope for may also be that which we fear</p>
                  <p className="eesha-card-text"><b>meaning</b> rest, relaxation, peace, sanctuary, recuperation, self-protection, rejuvenation</p>
                  <p className="eesha-card-text"> The Four of Swords is a moment of rest. Whether this is from a choice to withdraw, or whether it is from pure exhaustion, it is not clear.</p>
                </div>
              </div>
            </span>
          </div>
        </div>

        <div className="grid-9">
          <div className="tooltip">
            <img src={sixwands} alt="6 of wands" />
            <span className="tooltiptext">
              <div className="card-callout">
                <div className="card-callout-header">3 || the past || six of wands</div>
                <div className="card-callout-container">
                  <p className="eesha-card-text"><b>position</b> represents the events that have lead up to the present situation and may provide some indication of how the challenge came about.</p>
                  <p className="eesha-card-text"><b>meaning</b> success, victory, triumph, rewards, recognition, praise, acclaim, pride</p>
                  <p className="eesha-card-text"> the card is indicative that you have managed to harness the strengths and talents that you have within you in an attempt to bring a particularly successful outcome in your life.</p>
                </div>
              </div>
            </span>
          </div>
        </div>
        
        <div className="grid-10">
          <div className="tooltip">
            <img src={deviloverstrength} alt="d over s" width="264" height="264"/>
            <span className="tooltiptext">
              <div className="card-callout">
                <div className="card-callout-header">1 || the present || strength</div>
                <div className="card-callout-container">
                  <p className="eesha-card-text"><b>position</b> what is happening to the querent at the present time</p>
                  <p className="eesha-card-text"><b>meaning</b> inner strength, bravery, compassion, focus</p>
                  <p className="eesha-card-text"> Your resilience will greatly aid you, and your fearlessness means that you should have no issues speaking your mind. </p>
                </div>
                <div className="card-callout-header">2 || the challenge || the devil</div>
                <div className="card-callout-container">
                  <p className="eesha-card-text"><b>position</b> represents the immediate challenge or problem facing the querent </p>
                  <p className="eesha-card-text"><b>meaning</b> oppression, addiction, obsession, dependency, excess, powerlessness, limitations </p>
                  <p className="eesha-card-text"> addiction to substances or material pleasures can also be the reason for your feelings of powerlessness and entrapment.</p>
                </div>
              </div>
            </span>
          </div>
        </div>

        
        <div className="grid-11">
          <div className="tooltip">
            <img src={fourcups} alt="4 of cups" />
            <span className="tooltiptext">
              <div className="card-callout">
                <div className="card-callout-header">4 || the future || four of cups</div>
                <div className="card-callout-container">
                  <p className="eesha-card-text"><b>position</b> represents what is likely to occur within the next few weeks or even months.</p>
                  <p className="eesha-card-text"><b>meaning</b> apathy, contemplation, feeling disconnected, melancholy, boredom, indifference, discontent</p>
                  <p className="eesha-card-text"> you are feeling apathetic - regardless of what happens, whether the day is good or bad, none of it matters to you.</p>
                </div>
              </div>
            </span>
          </div>
        </div>

        
        <div className="grid-12">
          <div className="tooltip">
            <img src={fiveswords} alt="5 of swords" />
            <span className="tooltiptext">
              <div className="card-callout">
                <div className="card-callout-header">8 || external influences || five of swords</div>
                <div className="card-callout-container">
                  <p className="eesha-card-text"><b>position</b> highlights the people, energies or events which will affect the outcome of the question.</p>
                  <p className="eesha-card-text"><b>meaning</b> unbridled ambition, win at all costs, sneakiness</p>
                  <p className="eesha-card-text"> what is more important to you? mutual progress, or winning?</p>
                </div>
              </div>
            </span>
          </div>
        </div>

        <div className="grid-14">
          <div className="tooltip">
            <img src={lovers} alt="lovers" />
            <span className="tooltiptext">
              <div className="card-callout">
                <div className="card-callout-header">6 || below || the lovers</div>
                <div className="card-callout-container">
                  <p className="eesha-card-text"><b>position</b> that which is within the subconscious realm of the querent and delves much deeper into the core foundation of the situation.</p>
                  <p className="eesha-card-text"><b>meaning</b> love, unions, partnerships, relationships, choices, romance, balance, unity</p>
                  <p className="eesha-card-text"> he trust and the unity that the lovers have gives each of them confidence and strength, empowering the other.</p>
                </div>
              </div>
            </span>
          </div>
        </div>
        
        <div className="grid-16">
          <div className="tooltip">
            <img src={tower} alt="tower" />
            <span className="tooltiptext">
              <div className="card-callout">
                <div className="card-callout-header">7 || advice || the tower</div>
                <div className="card-callout-container">
                  <p className="eesha-card-text"><b>position</b> takes into account all that is happening within the querent’s life and presents a recommendation.</p>
                  <p className="eesha-card-text"><b>meaning</b> sudden upheaval, broken pride, disaster,</p>
                  <p className="eesha-card-text"> the old ways are no longer useful, and you must find another set of beliefs, values and processes to take their place.</p>
                </div>
              </div>
            </span>
          </div>
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
        <div className="callout-header">who are <b> <i> you</i></b>?</div>
        <div className="callout-container">
          <p className="eesha-text-unpadded">sites and resources</p>
        </div>
      </div>

      <div> 
        <p>
          <b className="eesha-text-purple">see more</b>
          <a href="https://www.costarastrology.com/natal-chart/" className="eesha-text-purple"> Co-Star: Hyper-Personalized, Real-Time Horoscopes</a>
          <a href="https://www.biddytarot.com/how-to-read-the-celtic-cross-tarot-spread/" className="eesha-text-purple">How to Read the Celtic Cross Tarot Spread</a>
          <a href="https://labyrinthos.co/blogs/tarot-card-meanings-list" className="eesha-text-purple">Tarot Cards Meanings List</a>
          <a href="https://labyrinthos.co/blogs/tarot-card-meanings-list" className="eesha-text-purple">Tarot Cards Meanings List</a>
        </p>
      </div>

    </>
  );
}

export default Eesha;