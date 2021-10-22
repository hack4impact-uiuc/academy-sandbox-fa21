// @flow
import React from 'react';


function JessicaSection(props) {
  const {title, imgs} = props
  const array = imgs.map((x, i) => <img src={x} alt="" height="400" key= {i} ></img>)
  return (<div className="section">
  <div className="hobbies">
    {title}
  </div>
    <figure className="gallery">
      {array}
    </figure>
  </div>);
}

export default JessicaSection;
