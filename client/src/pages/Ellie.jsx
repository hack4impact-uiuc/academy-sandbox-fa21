// @flow
import React from 'react';

import squidGif from '../utils/images/estrella-images/Squid.gif';
import react1 from '../utils/images/estrella-images/meow_attention.png';
import react2 from '../utils/images/estrella-images/meow_code.gif';
import react3 from '../utils/images/estrella-images/surprised-pikachu.png';
import EllieSidebar from '../components/EllieSidebar';
import '../css/Ellie.css';
// import Img1 from '../utils/images/estrella-images/estrella2_popoca.jpg';
import Img2 from '../utils/images/estrella-images/estrella3.jpg';
import Img3 from '../utils/images/estrella-images/estrella4.jpg';
import atlas from '../utils/images/estrella-images/atlas.jpg';
import ayala from '../utils/images/estrella-images/ayala.jpg';
import em from '../utils/images/estrella-images/em.jpg';
import FBconcert from '../utils/images/estrella-images/FBconcert.JPG';
import ramen from '../utils/images/estrella-images/ramen.jpg';
import will from '../utils/images/estrella-images/will.jpg';
import ellie from '../utils/images/estrella_popoca.jpg';

let myVar;

function myFunction() {
  let timeout = 3000;
  myVar = setTimeout(showPage, timeout);
  return myVar
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function Ellie() {
  return (

<body onLoad={myFunction}>

  <div id="loader"></div>
  <div id="myDiv" className="animate-bottom">
    <div className="mainframe">
      <EllieSidebar firstName="Estrella" lastName="Popoca" homeImg={squidGif} react1={react1} react2={react2} react3={react3} city="Houston, TX" instalink="https://www.instagram.com/ehllieio/" cvlink="https://read.cv/ellie"/>

        <div className="about-me">
          <p className="abme-title">
            <strong>Hello!</strong>
          </p>

          <p className="abme-text">
            My name is Ellie! <br />
            <br/>
            I'm a freshman @ UIUC, <br/>
            and welcome aboard to my adventures here as a future engineer! <br />
            <br/>
            I like to hang out with friends, watch thriller shows, and percy
            jackson!
            <br/>
            <br/>
            My philosophy: Never turning down a friendhsip.
            <br/>
            <br/>I love rice. Any rice.
          </p>
<br/>
        <img className="web-picture" src={Img2} alt="" />
        <img className="web-picture" src={Img3} alt="" />
        <img className="web-picture" src={atlas} alt=""/>
    
        <img className="web-picture" src={ayala} alt=""/>
        <img className="web-picture" src={em} alt=""/> 
        <img className="web-picture" src={FBconcert} alt=""/>
        <br/>
        <img className="web-picture" src={ramen} alt=""/> 
        <img className="web-picture" src={will} alt=""/>
        <img className="web-picture" src={ellie} alt=""/>

      </div>
    </div>
  </div>
</body>
  );
}

export default Ellie;
