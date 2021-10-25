import React from 'react';

import '../css/Ellie.css';

function EllieSidebar({
  homeImg,
  firstName,
  lastName,
  react1,
  react2,
  react3,
  city,
  instalink,
  cvlink,
}) {
  return (
    <div className="welcome">
      <div className="picture">
        <img id="home-picture" src={homeImg} alt="" />

        <div className="sidebar-text">
          <h1>
            {firstName} <br /> {lastName}
          </h1>

          <div className="sidebar-mediatext">
            <strong>current fave reacts</strong>
            <br />
            <img id="reacts-dash" src={react1} alt="" />
            <img id="reacts-dash" src={react2} alt="" />
            <img id="reacts-dash" src={react3} alt="" />
            <br />
            <br />
            <strong>location</strong>
            <br />
            {city}
          </div>

          <h5>
            <a href={instalink}>&#9735; instagram</a>
            <br />
            <a href={cvlink}> &#9735; cv</a>
            <br />
          </h5>
        </div>
      </div>
    </div>
  );
}

export default EllieSidebar;
