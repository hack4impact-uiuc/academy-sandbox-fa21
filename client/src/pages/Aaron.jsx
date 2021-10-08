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
        <hr></hr>
        <div className="navBar">
          <h2>
            <span className="links">bio</span> |{' '}
            <span className="links">resume</span> |{' '}
            <span className="links">projects</span>
          </h2>
        </div>
        <hr className="bottomBar"></hr>
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
        <hr className="bruh"></hr>
        <h2 className="categories">my goals</h2>
        <hr className="bruh"></hr>
        <p className="innardsTwo"> HUSTLE and GRIND my way to the top</p>
        <p className="innardsTwo">
          Own Microsoft, Sony, Nintendo, and Amazon by the time I'm 25
        </p>
        <p className="innardsTwo">Be 6'4" and RIPPED by the time I'm 25</p>
        <p className="innardsTwo">
          Relationship goals... I don't need one. The only lifelong partner I
          need is my TRILLION-DOLLAR NET WORTH
        </p>
      </div>
    </>
  );
}

export default Aaron;
