// @flow
import React from 'react';

function JessicaSection(props) {
  const { title, imgs } = props;
  const array = imgs.map((x, i) => (
    <img src={x} alt="" height="325" key={i}></img>
  ));
  return (
    <div className="section">
      <hr className="jessica-hr"></hr>
      <div className="hobbies">{title}</div>
      <figure className="gallery">{array}</figure>
    </div>
  );
}

export default JessicaSection;
