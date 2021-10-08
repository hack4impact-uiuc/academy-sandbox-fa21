// @flow
import React from 'react';

import danielle from '../utils/images/danielle_yang.PNG';
import '../css/Danielle.css';

function Danielle() {
  return (
    <>
      <h1>Danielle's Page</h1>
      <p>
        {' '}
        <img
          alt="danielle square"
          src={danielle}
          width={300}
          height={300}
        />{' '}
      </p>
      <p>Testing that this is a square</p>
    </>
  );
}

export default Danielle;
