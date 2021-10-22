// @flow
import React from 'react';

import AaronNavbar from '../components/AaronNavbar';
import AaronHeader from '../components/AaronHeader';
import AaronP from '../components/AaronP';
import '../css/Aaron.css';

function Aaron() {
  return (
    <>
      <div className="animated">
        <div className="main-header">
          <AaronHeader />
          <AaronNavbar />
        </div>
        <AaronP />
      </div>
    </>
  );
}

export default Aaron;
