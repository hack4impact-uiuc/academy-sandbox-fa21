// @flow
import React from 'react';

import AaronNavbar from '../components/AaronNavbar';
import AaronHeader from '../components/AaronHeader';
import '../css/Aaron.css';

function Aaron() {
  return (
    <>
      <div className="animated">
        <div className="main-header">
          <AaronHeader />
          <AaronNavbar />
        </div>
        <hr className="cool-hr"></hr>
        <p className="cool-intro">
          Welcome to my personal website! I am Aaron Alexander, a freshman
          studying computer science at the University of Illinois at
          Urbana-Champaign and a proud Academy Member at Hack4Impact. So so so
          excited to start my journey in software development at such a great
          school!
        </p>
      </div>
    </>
  );
}

export default Aaron;
