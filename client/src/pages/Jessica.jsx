// @flow
import React from 'react';

import '../css/Jessica.css';
import bg from '../utils/images/bg.jpg';

function Jessica() {
  return (
    <>
      <h1>Jessica's Page</h1>
        <h1>Freshman in CS</h1>
      
      <p>Hi! Some things about me: I like to sing, dance, sketch, and eat.</p>
      <p>I'm from Seattle, WA</p>
      <img src={bg} alt="Mount Rainier" height = "1000"></img>
      
    </>
  );
}

export default Jessica;
