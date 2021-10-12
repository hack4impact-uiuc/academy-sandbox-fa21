// @flow
import React from 'react';

import '../css/Aaron.css';

function Aaron() {
  return (
    <>
      <div className="animated">
        <h1 className="main-heading">Aaron Alexander</h1>
        <h2 className="sub-heading">
          hack4impact academy member and future software developer
        </h2>
        <div className="navBar">
          <h2>
            <span className="links">bio</span> |{' '}
            <span className="links">resume</span> |{' '}
            <span className="links">projects</span>
          </h2>
        </div>
        <img
          src="https://i.ibb.co/XS1m7Fc/aaron-thinking.png"
          alt="aaron-thinking"
          className="intenseThought"
        />
        <p className="innards">
          Hello world! My name is Aaron Alexander, and this is my website.
          There'll be more content in the future, but for now this is the best
          that I can do. Hooray!
        </p>
        <p className="innards">Favorite song right now: "Under the Bridge" by Red Hot Chili Peppers</p>
        <p className="innards">Favorite food right now: Chicken dumpling soup at the Ike. Best-tasting food thus far</p>
        <p className="innards">Favorite album: Axis Bold as Love by Jimi Hendrix, the only album I have on vinyl thus far</p>
      </div>
    </>
  );
}

export default Aaron;
