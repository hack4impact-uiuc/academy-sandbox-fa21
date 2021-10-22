import React from 'react';
import '../css/Aaron.css';

function AaronNavbar() {
  return (
    <>
      <ul className="nav">
        <li className="navbar">
          <a
            href="https://www.linkedin.com/in/aaron-alexander-735328198/"
            className="cool-link"
          >
            linkedin
          </a>
        </li>{' '}
        <span className="button">•</span>
        <li className="navbar">
          <a
            href="https://github.com/AaronAlexander-debug"
            className="cool-link"
          >
            github
          </a>
        </li>{' '}
        <span className="button">•</span>
        <li className="navbar">
          <a
            href="https://docs.google.com/document/d/1lEKDekVVReZomR9c-3moQASVCpmsuOkb3UQ1ziedIDU/edit?usp=sharing"
            className="cool-link"
          >
            resume
          </a>
        </li>{' '}
        <span className="button">•</span>
        <li className="navbar">
          <a
            href="https://www.instagram.com/thereal.aaronalexander/"
            className="cool-link"
          >
            instagram
          </a>
        </li>
      </ul>
    </>
  );
}

export default AaronNavbar;
