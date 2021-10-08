// @flow
import React from 'react';

import '../css/Ellie.css';
import Img1 from '../utils/images/estrella2_popoca.jpg';


function Ellie() {
  return (
    <>
    <head> 
    <title>i'm ellie</title>
    
  </head>
    <body>
      <div className="container">

        <div className="picture">
          
        <img id="home-picture" src={Img1} alt="" />
        
        <div className="text">
          <h2>hello! My name is Estrella Popoca!</h2> 
          </div>
        </div>
      </div>
      </body>
</>
  );
}

export default Ellie;
